/** Continuous integration · Shell */

import { standard } from "../../../../kinds/standard"
import { syntax } from "../../../../kinds/syntax"
import type { RunPlan } from "../../../../trame/kernel"
import { OneWriterPerPlace } from "./product"
import { Npm } from "./npm"

// A shipment run on another machine by a script of Bash: the person who ships gives their name; the script goes to the
// repository's root from where it is, installs the packages of each directory of the plan, installs the generation's own
// packages when it has its own, runs what the packages ask once installed, then ships from the project. It stops at the
// first command that fails.

/**
 * Bash scripts
 * The marks of a script of Bash: the line that names its interpreter, the options that stop it at the first failure (an
 * unset variable, a failing command, a failing pipe), quoting, a subshell, the parameter that refuses to be missing,
 * the directory of the script.
 */
export const BashScripts = standard({
  owner: "trame",
  serves: [OneWriterPerPlace],
  source: "GNU Bash Reference Manual (5.2): § 3.1.2 Quoting, § 3.2.5 Compound Commands (subshell), § 3.5.3 Shell Parameter Expansion (${parameter:?word}), § 4.3.1 The Set Builtin; env(1) for the #! line",
  url: "https://www.gnu.org/software/bash/manual/bash.html",
  constants: {
    interpreter: { value: "#!/usr/bin/env bash", meaning: "The first line: the script is run by Bash, wherever it is installed" },
    strict: { value: "set -euo pipefail", meaning: "Stops at an unset variable, a command that fails, a pipe whose part fails" },
    comment: { value: "#", meaning: "Opens a comment, to the end of the line" },
    space: { value: " ", meaning: "Separates the words of a command" },
    quote: { value: "\"", meaning: "Around a word that must stay one word" },
    and: { value: "&&", meaning: "Runs the next command only when the one before succeeded" },
    open: { value: "(", meaning: "Opens a subshell: a change of directory in it stays in it" },
    close: { value: ")", meaning: "Closes the subshell" },
    cd: { value: "cd", meaning: "Changes the directory" },
    assign: { value: "=", meaning: "Gives a variable its value" },
    dollar: { value: "$", meaning: "Reads a variable" },
    required: { value: "${1:?", meaning: "Opens the expansion of the first argument that stops the script, saying the rest, when it is missing" },
    closeBrace: { value: "}", meaning: "Closes an expansion" },
    here: { value: "$(dirname \"$0\")", meaning: "The directory of the script, wherever it is run from" },
    separator: { value: "/", meaning: "Between the steps of a path" },
    endOfLine: { value: "\n", meaning: "Ends a line" },
  },
})

/**
 * A script of Bash
 * The script that runs a shipment on another machine: the person who ships is its first argument, and it stops without
 * one; it goes from its own directory to the repository's root, installs the packages of each directory of the plan,
 * installs the generation's own packages when it has its own, runs what the packages ask once installed, each in its
 * directory, then ships from the project with the person's name.
 */
export const ShellScript = syntax({
  owner: "trame",
  standard: BashScripts,
  section: "§ 3.2.5 Compound Commands; § 3.5.3 Shell Parameter Expansion; § 4.3.1 The Set Builtin",
  url: "https://www.gnu.org/software/bash/manual/bash.html#Shell-Parameter-Expansion",
  constants: {
    person: { value: "by", meaning: "The variable that holds the name of the person who ships" },
    usage: { value: "give the name of the person who ships", meaning: "What the script says when it is run without a name" },
    written: { value: "Written by trame ship from the graph, for the shipment", meaning: "What the script's first comment says" },
    of: { value: "of", meaning: "Between the shipment and its project, in that comment" },
    edit: { value: "Do not edit: edit the graph, then ship.", meaning: "The comment that says where to change it" },
  },
  deps: { npm: Npm },
  write: ({ standard: sh, person, usage, written, of, edit, npm }) => (plan: RunPlan): string => {
    const quoted = (w: string) => sh.quote + w + sh.quote
    const words = (ws: readonly string[]) => ws.join(sh.space)
    const inside = (dir: string, command: string) => sh.open + words([sh.cd, quoted(dir), sh.and, command]) + sh.close
    return [
      sh.interpreter,
      words([sh.comment, written, JSON.stringify(plan.title), of, plan.project]),
      words([sh.comment, edit]),
      sh.strict,
      person + sh.assign + quoted(sh.required + usage + sh.closeBrace),
      words([sh.cd, quoted(sh.here + sh.separator + plan.toRoot)]),
      ...plan.installs.map((dir) => inside(dir, npm.install)),
      ...(plan.restore ? [inside(plan.project, words(plan.restore))] : []),
      ...plan.prepares.map((p) => inside(p.dir, p.run)),
      words([sh.cd, quoted(plan.project)]),
      words([...plan.command, quoted(sh.dollar + person)]),
    ].join(sh.endOfLine) + sh.endOfLine
  },
  examples: [
    {
      input: [
        {
          shipment: "Preview", title: "A preview", project: "apps/poselia", command: ["../../trame.sh", "ship", "Preview", "--by"],
          file: "apps/poselia/scripts/ship-preview.sh", toRoot: "../../..", installs: [".", "std", "apps/poselia"],
          prepares: [{ dir: "std", run: "npx playwright install --with-deps chromium" }], keeps: ["apps/poselia/evidence"],
        },
      ],
      output: [
        "#!/usr/bin/env bash",
        "# Written by trame ship from the graph, for the shipment \"A preview\" of apps/poselia",
        "# Do not edit: edit the graph, then ship.",
        "set -euo pipefail",
        "by=\"${1:?give the name of the person who ships}\"",
        "cd \"$(dirname \"$0\")/../../..\"",
        "(cd \".\" && npm ci)",
        "(cd \"std\" && npm ci)",
        "(cd \"apps/poselia\" && npm ci)",
        "(cd \"std\" && npx playwright install --with-deps chromium)",
        "cd \"apps/poselia\"",
        "../../trame.sh ship Preview --by \"$by\"",
        "",
      ].join("\n"),
    },
  ],
})
