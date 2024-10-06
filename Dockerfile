# setup
FROM jpyles0524/doppler-node:latest

WORKDIR /app

# copy over env vars as build args
ARG NEXT_PUBLIC_DISCORD_USER_ID
ARG NEXT_PUBLIC_SPOTIFY_CLIENT_ID
ARG NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
ARG NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN
ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_DISCORD_USER_ID=${NEXT_PUBLIC_DISCORD_USER_ID}
ENV NEXT_PUBLIC_SPOTIFY_CLIENT_ID=${NEXT_PUBLIC_SPOTIFY_CLIENT_ID}
ENV NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=${NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}
ENV NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=${NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# copy over config files
COPY tsconfig.json /app/tsconfig.json
COPY tailwind.config.js /app/tailwind.config.js
COPY babel.config.js /app/babel.config.js
COPY next.config.mjs /app/next.config.mjs
COPY postcss.config.js /app/postcss.config.js

# install required node modules
COPY package*.json ./

RUN npm install

# copy over project
COPY public /app/public
COPY src /app/src

# build app
RUN npm run build

ARG DOPPLER_TOKEN