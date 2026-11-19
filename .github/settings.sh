#!/usr/bin/env bash
# Written by trame ship from the graph: the settings of the repository, for the branch main
# Run by an administrator: bash <this script> owner/name
# Do not edit: edit the graph, then ship.
set -euo pipefail
repo="${1:?give the repository, as owner/name}"
gh api --method PATCH "repos/$repo" --input - > /dev/null <<'JSON'
{
  "allow_merge_commit": true,
  "allow_squash_merge": false,
  "allow_rebase_merge": false,
  "allow_auto_merge": true,
  "delete_branch_on_merge": true
}
JSON
id="$(gh api "repos/$repo/rulesets" --jq '.[] | select(.name == "main") | .id')"
if [ -n "$id" ]; then gh api --method PUT "repos/$repo/rulesets/$id" --input - > /dev/null ; else gh api --method POST "repos/$repo/rulesets" --input - > /dev/null ; fi <<'JSON'
{
  "name": "main",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": [
        "refs/heads/main"
      ],
      "exclude": []
    }
  },
  "rules": [
    {
      "type": "deletion"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 0,
        "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false,
        "allowed_merge_methods": [
          "merge"
        ]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": false,
        "required_status_checks": [
          {
            "context": "trame"
          },
          {
            "context": "std"
          },
          {
            "context": "ci"
          },
          {
            "context": "data"
          },
          {
            "context": "reservations"
          },
          {
            "context": "poselia"
          }
        ]
      }
    }
  ]
}
JSON
