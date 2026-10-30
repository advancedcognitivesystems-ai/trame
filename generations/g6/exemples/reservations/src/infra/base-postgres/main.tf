# La base de production des réservations.
# Le fournisseur est volontairement neutre : terraform_data tient la place de la ressource réelle
# (une instance gérée chez le fournisseur choisi). Les variables sont les paramètres que le graphe passe.

variable "nom" {
  type = string
}

variable "taille" {
  type = object({ cpu = number, memoire_go = number })
}

variable "sauvegardes_jours" {
  type = number
}

resource "terraform_data" "base" {
  input = {
    nom               = var.nom
    taille            = var.taille
    sauvegardes_jours = var.sauvegardes_jours
  }
}

output "url" {
  value = "postgres://${var.nom}.interne:5432/${var.nom}"
}
