#!/usr/bin/make -f

.PHONY: up
up: # Run nginx container
	docker-compose up -d

.PHONY: down
down: # Halt nginx container
	docker-compose down -v

.PHONY: server
server: # Run Node.js server
	node ./server/index.js
