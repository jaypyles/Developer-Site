.PHONY: build build-force pull up down deploy deps test

# -----
deps:
	npm run build

build:
	docker compose  build

build-force:
	docker compose  build --no-cache

pull:
	docker compose  pull

up:
	docker compose up -d

up-dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

down:
	docker compose down

logs:
	docker compose logs

deploy:
	ansible-playbook -i ./ansible/inventory.yaml ./ansible/deploy_site.yaml

test:
	npm run test