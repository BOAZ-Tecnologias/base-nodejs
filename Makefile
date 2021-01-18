install:
		docker-compose up -d
start:
		docker-compose start
stop:
		docker-compose stop
prod:
		./dce yarn build
prod-graphql:
		./dce yarn build
		yarn build-schema