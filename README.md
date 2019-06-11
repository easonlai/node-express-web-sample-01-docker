# Sample NodeJS + ExpressJS with Containerization
Readme update 1.0

## Install necessary packge which defined in package.json
```shell
npm install
```

## Run locally
```shell
node app.js
```

## Test web app locally
```shell
http://localhost:3000
```

## Containerize
1. Build a docker image using `Dockerfile`:
   ```
   docker build -t node-express-web-sample-01-docker .
   ```
2. Run docker image locally
   ```
   docker run --rm -p 3000:3000 node-express-web-sample-01-docker
   ```
3. Then you can access the web app at http://localhost:3000 in browser.

Or you can pull this sample from my Docker Hub.
https://cloud.docker.com/u/easonlai/repository/docker/easonlai/node-express-web-sample-01-docker

## Deploy to K8S
```shell
kubectl apply -f node-express-web-sample-01-docker-kube.yaml
```
