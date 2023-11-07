up:
	docker-compose build
	docker-compose up -d

reup:
	docker stop portfolio
	docker rm portfolio
	docker-compose build
	docker-compose up -d

.PHONY: reup, up
