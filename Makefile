export DOPPLER_TOKEN := $(shell doppler configs tokens create dev --plain --max-age=900s)
.PHONY: build build-force pull up down deploy deps test
.DEFAULT_GOAL := dev

# -----
deps:
	npm run build

build:
	doppler run -- docker compose build

build-force:
	doppler run -- docker compose build --no-cache

pull:
	docker compose pull

up:
	doppler run -- docker compose --env-file .env up -d

up-dev:
	doppler run -- docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file .env up -d 

dev: build up-dev

down:
	docker compose down

logs:
	docker compose logs

deploy:
	ansible-playbook -i ./ansible/inventory.yaml ./ansible/deploy_site.yaml

deploy-k8s:
	./k8s/substitute.sh && kubectl apply -f k8s/manifests

test:
	npm run test

helm-dry-run:
	helm template charts/dev-site --dry-run --values charts/dev-site/values.yaml
