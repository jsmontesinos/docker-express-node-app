# Dockerized example of a Node Express app

This is an example of docker node express API. 
All POSTs to test endpoint will be replay to the console.

Build the image and run the server

```
docker build --tag docker-node-example-image . 
docker run --rm --name docker-node-example-container --publish 9000:9000 docker-node-example-image --network='<network-name>'
```
Call the POST endpoint with curl and ab

```
curl -X POST -d '{"message": "test"}' localhost:9000/test
ab -n 2000 -c 40 -T application/json -p test.json localhost:9000/test
```
