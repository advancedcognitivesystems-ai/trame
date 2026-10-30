# Retouches à la main, après le portage automatique (outils/porter.ts) : la plateforme passe par des accès,
# les constantes viennent du graphe, et le moteur n'écrit plus lui-même (seules les commandes écrivent).
import re, sys
if "--ecraser-le-graphe" not in sys.argv:
    sys.exit("retouches.py : portage déjà fait, le moteur se modifie dans src/code. Relancer écraserait le graphe (--ecraser-le-graphe pour forcer).")
B = "src/code/moteur/"
def edit(f, old, new, count=1):
    p = B + f
    s = open(p).read()
    if old not in s:
        sys.exit(f"retouche introuvable dans {f} : {old[:70]!r}")
    s = s.replace(old, new, count)
    open(p, "w").write(s)
def add_dep(f, line, types=None):
    edit(f, "export interface Deps {\n", "export interface Deps {\n  " + line + "\n")
    if types:
        p = B + f; s = open(p).read()
        m = re.search(r'import type \{ ([^}]*) \} from "\.\./\.\./architecture"', s)
        if m:
            names = sorted(set(m.group(1).split(", ")) | set(types))
            s = s.replace(m.group(0), 'import type { ' + ", ".join(names) + ' } from "../../architecture"')
        else:
            s = s.replace("\nexport interface Deps", '\nimport type { ' + ", ".join(types) + ' } from "../../architecture"\n\nexport interface Deps', 1)
        open(p, "w").write(s)
def drop_dep(f, param, line_destr):
    edit(f, f"  {param}: " , "  __drop__: ")
    p = B + f; s = open(p).read()
    s = re.sub(r"  __drop__: [A-Za-z]+\n", "", s)
    s = s.replace(line_destr + "\n", "")
    open(p, "w").write(s)

# analyse : la racine est toujours donnée
edit("analyse.ts", "root = process.cwd()", 'root = "."')

# compilateur, vues, driver TypeScript : charger un module passe par le chargeur
edit("compilateur.ts", "await import(pathToFileURL(f).href)", "await chargeur.importer(f)")
edit("compilateur.ts", "await import(pathToFileURL(file).href)", "await chargeur.importer(file)")
add_dep("compilateur.ts", "chargeur: Chargeur", ["Chargeur"])
edit("compilateur.ts", "const corps = (deps: Deps) => {\n", "const corps = (deps: Deps) => {\n  const { chargeur } = deps\n")
drop_dep("compilateur.ts", "urls", "  const { pathToFileURL } = deps.urls")

edit("vues.ts", "await import(pathToFileURL(join(dir, f)).href)", "await chargeur.importer(join(dir, f))")
add_dep("vues.ts", "chargeur: Chargeur", ["Chargeur"])
edit("vues.ts", "const corps = (deps: Deps) => {\n", "const corps = (deps: Deps) => {\n  const { chargeur } = deps\n")
drop_dep("vues.ts", "urls", "  const { pathToFileURL } = deps.urls")

edit("driver-typescript.ts", "const mod = await import(pathToFileURL(file).href)", "const mod = await chargeur.importer(file)")
add_dep("driver-typescript.ts", "chargeur: Chargeur", ["Chargeur"])
edit("driver-typescript.ts", "const corps = (deps: Deps) => {\n", "const corps = (deps: Deps) => {\n  const { chargeur } = deps\n")
drop_dep("driver-typescript.ts", "urls", "  const { pathToFileURL } = deps.urls")

# paquet : le moteur se relance par l'accès au processus ; l'heure vient de l'horloge
edit("paquet.ts", "  const { spawn } = deps.processus\n", "  const { relancer } = deps.processus\n  const { horloge } = deps\n")
edit("paquet.ts", "    const generatedAt = new Date().toISOString()", "    const generatedAt = horloge.maintenant().toISOString()")
edit("paquet.ts", '''      const cli = fileURLToPath(new URL("./cli.ts", import.meta.url))
      const child = spawn(process.execPath, ["--import", "tsx", cli, "payload", "--all", "--at", today], { cwd: root, env: process.env })''',
     '''      const child = relancer(["payload", "--all", "--at", today], root)''')
edit("paquet.ts", "child.stdout.setEncoding", "child.stdout!.setEncoding")
edit("paquet.ts", "child.stderr.setEncoding", "child.stderr!.setEncoding")
edit("paquet.ts", 'child.stdout.on("data", (d) =>', 'child.stdout!.on("data", (d: string) =>')
edit("paquet.ts", 'child.stderr.on("data", (d) =>', 'child.stderr!.on("data", (d: string) =>')
edit("paquet.ts", 'child.on("close", (code) =>', 'child.on("close", (code: number | null) =>')
add_dep("paquet.ts", "horloge: Horloge", ["Horloge"])
drop_dep("paquet.ts", "urls", "  const { fileURLToPath } = deps.urls")

# charge : l'heure de génération vient de l'horloge
edit("charge.ts", "generatedAt: new Date().toISOString(),", "generatedAt: deps.horloge.maintenant().toISOString(),")
add_dep("charge.ts", "horloge: Horloge", ["Horloge"])

# page : le script et la feuille de style sont des ressources
edit("page.ts", "  const here = dirname(fileURLToPath(import.meta.url))\n", "  const { ressources } = deps\n")
edit("page.ts", 'entryPoints: [join(here, "main.ts")]', "entryPoints: [ressources.script]")
edit("page.ts", 'readFileSync(join(here, "page.css"), "utf8")', 'readFileSync(ressources.style, "utf8")')
add_dep("page.ts", "ressources: Ressources", ["Ressources"])
drop_dep("page.ts", "urls", "  const { fileURLToPath } = deps.urls")
drop_dep("page.ts", "chemins", "  const { dirname, join } = deps.chemins")

# serveur de dev : terminal, horloge, minuteur ; le regroupement est une décision du graphe
edit("serveur-dev.ts", '  const clock = () => new Date().toLocaleTimeString("fr-CH")', '  const clock = () => horloge.maintenant().toLocaleTimeString("fr-CH")')
edit("serveur-dev.ts", "const t0 = Date.now()", "const t0 = horloge.maintenant().getTime()")
edit("serveur-dev.ts", "const ms = Date.now() - t0", "const ms = horloge.maintenant().getTime() - t0")
p = B + "serveur-dev.ts"; s = open(p).read(); s = s.replace("console.log(", "terminal.ecrire("); open(p, "w").write(s)
edit("serveur-dev.ts", "let timer: NodeJS.Timeout | undefined", "let timer: ReturnType<Minuteur[\"setTimeout\"]> | undefined")
edit("serveur-dev.ts", "      clearTimeout(timer)", "      minuteur.clearTimeout(timer)")
edit("serveur-dev.ts", "      timer = setTimeout(() => {", "      timer = minuteur.setTimeout(() => {")
edit("serveur-dev.ts", "      }, 150)", "      }, regroupement)")
edit("serveur-dev.ts", "const corps = (deps: Deps) => {\n", "const corps = (deps: Deps) => {\n  const { terminal, horloge, minuteur, regroupement } = deps\n")
add_dep("serveur-dev.ts", "regroupement: number", None)
add_dep("serveur-dev.ts", "minuteur: Minuteur", ["Minuteur"])
add_dep("serveur-dev.ts", "horloge: Horloge", ["Horloge"])
add_dep("serveur-dev.ts", "terminal: Terminal", ["Terminal"])

# assemblage : le prélude dit où il est ; l'assemblage rend les fichiers, la commande les écrit
edit("assemblage.ts", 'prelude: fileURLToPath(new URL("./internal", import.meta.url)),', "prelude: deps.prelude.chemin,")
edit("assemblage.ts", "  function writeAssembly(a: Assembly): { written: string[]; errors: string[] } {", "  function emitAssembly(a: Assembly): { files: Emitted[]; errors: string[] } {")
edit("assemblage.ts", "    if (!program?.emitProgram) return { written: [], errors: [", "    if (!program?.emitProgram) return { files: [], errors: [")
edit("assemblage.ts", '''    for (const f of files) {
      mkdirSync(dirname(f.path), { recursive: true })
      writeFileSync(f.path, f.content)
    }
    return { written: files.map((f) => f.path), errors }''', "    return { files, errors }")
edit("assemblage.ts", "return { findNode, prepareAssembly, writeAssembly }", "return { findNode, prepareAssembly, emitAssembly }")
drop_dep("assemblage.ts", "ecriture", "  const { mkdirSync, writeFileSync } = deps.ecriture")
drop_dep("assemblage.ts", "urls", "  const { fileURLToPath } = deps.urls")

# verrou : publier rend le nouveau trame.lock ; la commande l'écrit
edit("verrou.ts", "  function publish(c: Compiled, root: string): { added: string[]; refused: Diag[] } {", "  function publish(c: Compiled, root: string): { added: string[]; refused: Diag[]; file?: string; text?: string } {")
edit("verrou.ts", '''    writeFileSync(file(root), JSON.stringify(lock, null, 2) + "\\n")
    return { added, refused: [] }''', '''    return { added, refused: [], file: file(root), text: JSON.stringify(lock, null, 2) + "\\n" }''')
drop_dep("verrou.ts", "ecriture", "  const { writeFileSync } = deps.ecriture")

# lois : combien de tirages, c'est le graphe qui le dit
edit("lois.ts", "  const SAMPLES = 50\n  const RESOLVE_ROUNDS = 30\n", "  const SAMPLES = deps.echantillons\n  const RESOLVE_ROUNDS = deps.jeux\n")
add_dep("lois.ts", "jeux: number", None)
add_dep("lois.ts", "echantillons: number", None)
print("retouches appliquées")

# Enfin : retirer des imports de contrats les noms qui ne servent plus.
import glob
for p in glob.glob(B + "*.ts"):
    s = open(p).read()
    m = re.search(r'import type \{ ([^}]*) \} from "\.\./\.\./architecture"\n', s)
    if not m: continue
    rest = s.replace(m.group(0), "")
    names = [n for n in m.group(1).split(", ") if re.search(r"\b" + re.escape(n) + r"\b", rest)]
    s = s.replace(m.group(0), ('import type { ' + ", ".join(names) + ' } from "../../architecture"\n') if names else "")
    open(p, "w").write(s)
print("imports de contrats nettoyés")
