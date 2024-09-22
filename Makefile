BRANCH_NAME := $(shell git rev-parse --abbrev-ref HEAD)
.PHONY: build build-force pull up down deploy deps test

# -----
deps:
	npm run build

build:
	docker compose build

build-force:
	docker compose build --no-cache

pull:
	BRANCH_NAME=$(BRANCH_NAME) docker compose pull

up:
	BRANCH_NAME=$(BRANCH_NAME) docker compose --env-file .env up -d

up-dev:
	BRANCH_NAME=$(BRANCH_NAME) docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file .env.dev up -d 

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