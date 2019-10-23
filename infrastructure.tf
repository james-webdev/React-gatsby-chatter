terraform {
  backend "gcs" {}
}

variable "project" {}
variable "env" {}
variable "output" {}

# providers #

provider "digitalocean" {
  version = "~> 1.6"
}

provider "cloudflare" {
  version = "~> 1.17"
}

provider "acme" {
  version = "~> 1.4"
  server_url = "https://acme-v02.api.letsencrypt.org/directory"
}

provider "random" {
  version = "~> 2.2"
}

provider "tls" {
  version = "~> 2.1"
}

provider "local" {
  version = "~> 1.3"
}

# servers #

module "manager" {
  source  = "/etc/terraform/modules/digitalocean_droplet"
  name    = "chatter-web-manager"
  env     = var.env
  group   = "chatter"
  size    = "s-1vcpu-1gb"
}

# accounts #

module "deploy" {
  source  = "/etc/terraform/modules/google_service_account"
  roles   = [
    "roles/storage.objectAdmin"
  ]
}

# network #

module "dns" {
  source  = "/etc/terraform/modules/cloudflare_acme_record"
  zone    = "gendall.io"
  env     = var.env
  records = {
    "chatter-web" = module.manager.ip
  }
}

# output #

module "inventory" {
  source  = "/etc/terraform/modules/local_file_inventory"
  groups  = {     
    manager  = module.manager.ip
  }
  tls_key  = module.dns.tls_key
  tls_cert = module.dns.tls_cert
  deploy_token = module.deploy.token
  target   = var.output
}
