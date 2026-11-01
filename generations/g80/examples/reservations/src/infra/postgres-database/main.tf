# The production database for reservations.
# The provider is deliberately neutral: terraform_data stands in for the real resource
# (a managed instance at the chosen provider). The variables are the parameters the graph passes; the address of the
# database is written from the pattern the graph decides.

variable "name" {
  type = string
}

variable "size" {
  type = object({ cpu = number, memory_gb = number })
}

variable "backup_retention_days" {
  type = number
}

variable "address" {
  type = string
}

resource "terraform_data" "database" {
  input = {
    name                  = var.name
    size                  = var.size
    backup_retention_days = var.backup_retention_days
  }
}

output "url" {
  value = format(var.address, var.name, var.name)
}
