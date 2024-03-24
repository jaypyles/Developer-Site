export DOPPLER_TOKEN=$(shell doppler configs tokens create dev --plain --max-age=900s)
export COMPOSE_YMLS=$(shell doppler secrets get COMPOSE_YMLS --plain)

reup: destroy build up pull build-force

build:
	doppler run -- docker compose ${COMPOSE_YMLS} build

build-force:
	doppler run -- docker compose ${COMPOSE_YMLS} build --no-cache

pull:
	docker compose ${COMPOSE_YMLS} pull

up:
	doppler run -- docker compose ${COMPOSE_YMLS} up -d

destroy:
	doppler run -- docker stop portfolio
	doppler run -- docker rm portfolio

.PHONY: reup build up destroy
