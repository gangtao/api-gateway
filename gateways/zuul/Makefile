BIN_NAME ?= zuulgateway
VERSION ?= 0.1
IMAGE_NAME ?= $(BIN_NAME):$(VERSION)
DOCKER_ID_USER ?= naughtytao

FULLNAME=$(DOCKER_ID_USER)/${BIN_NAME}:${VERSION}

PWD=$(shell pwd)

docker: Dockerfile
	docker build -t $(IMAGE_NAME) .

push:
	docker tag $(IMAGE_NAME) ${FULLNAME}
	docker push ${FULLNAME}

run:
	docker run \
	-v $(PWD)/config/application.properties:/usr/src/app/config/application.properties:ro \
	-p 8080:8080 $(IMAGE_NAME)