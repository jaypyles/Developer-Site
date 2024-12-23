# Stage 1: Build Stage
FROM jpyles0524/doppler-node:latest AS builder

# Set working directory
WORKDIR /app

# Set build time environment variables
ARG MONGO_URI
ENV MONGO_URI=${MONGO_URI}

# Copy config files
COPY public /app/public
COPY src /app/src
COPY package*.json ./
COPY tsconfig.json /app/tsconfig.json
COPY tailwind.config.js /app/tailwind.config.js
COPY babel.config.js /app/babel.config.js
COPY next.config.mjs /app/next.config.mjs
COPY postcss.config.js /app/postcss.config.js

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Stage 2: Final Stage
FROM jpyles0524/doppler-node:latest AS runner

WORKDIR /app

# Copy only the built application and necessary files from the builder stage
COPY --from=builder /app/src /app/src
COPY --from=builder /app/public /app/public
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules

COPY --from=builder /app/package-lock.json /app/package-lock.json
COPY --from=builder /app/tsconfig.json /app/tsconfig.json
COPY --from=builder /app/tailwind.config.js /app/tailwind.config.js
COPY --from=builder /app/babel.config.js /app/babel.config.js
COPY --from=builder /app/next.config.mjs /app/next.config.mjs
COPY --from=builder /app/postcss.config.js /app/postcss.config.js

# Expose the default Next.js port
EXPOSE 3000