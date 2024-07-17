export DOPPLER_TOKEN=$(shell doppler configs tokens create dev --plain --max-age=900s)
export COMPOSE_YMLS=$(shell doppler secrets get COMPOSE_YMLS --plain)

.PHONY: build build-force pull up down deploy deps

# -----
deps:
	npm run build

build:
	doppler run -- docker compose ${COMPOSE_YMLS} build

build-force:
	doppler run -- docker compose ${COMPOSE_YMLS} build --no-cache

pull:
	docker compose ${COMPOSE_YMLS} pull

up:
	doppler run -- docker compose ${COMPOSE_YMLS} up -d

down:
	docker compose down

deploy:
	ansible-playbook -i ./ansible/inventory.yaml ./ansible/deploy_site.yaml

