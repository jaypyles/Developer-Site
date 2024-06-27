# Install doppler
FROM debian:bookworm-slim AS getdoppler
RUN apt-get update
RUN apt-get install git curl wget gnupg busybox-static -y
RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

# Build python dependencies
FROM python:3.10-slim AS pybuilder

RUN apt update && apt install -y uvicorn
RUN python -m pip --no-cache-dir install pdm
RUN pdm config python.use_venv false

COPY pyproject.toml pdm.lock /project/app/
COPY ./api /project/app/api

WORKDIR /project/app

RUN pdm install

FROM node:latest as jsbuilder
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY public /app/public
COPY src /app/src
COPY tsconfig.json /app/tsconfig.json
COPY tailwind.config.js /app/tailwind.config.js
COPY babel.config.js /app/babel.config.js
COPY next.config.mjs /app/next.config.mjs
COPY postcss.config.js /app/postcss.config.js

ARG DOPPLER_PROJECT
ARG DOPPLER_CONFIG
ARG DOPPLER_TOKEN
ENV DOPPLER_TOKEN=${DOPPLER_TOKEN}

COPY --from=getdoppler /usr/bin/doppler /usr/bin/

RUN doppler run --token=$DOPPLER_TOKEN  -- npm run build

# Create final image
FROM python:3.10-slim

ENV PYTHONPATH=/project/pkgs
COPY --from=getdoppler /usr/bin/doppler /usr/bin/
COPY --from=pybuilder /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=pybuilder /usr/local/bin /usr/local/bin
COPY --from=pybuilder /project/app /project/app
COPY --from=jsbuilder /app/dist /project/app/dist

EXPOSE 8000

WORKDIR /project/app

CMD ["doppler", "run", "--" ,"pdm", "run", "python", "-m", "uvicorn", "api.backend.app:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
