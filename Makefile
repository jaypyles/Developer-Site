export DOPPLER_TOKEN=$(shell doppler configs tokens create dev --plain --max-age=900s)

reup: destroy build up

build:
	doppler run -- docker-compose build --no-cache

up:
	doppler run -- docker-compose up -d

destroy:
	doppler run -- docker stop portfolio
	doppler run -- docker rm portfolio

.PHONY: reup build up destroy
