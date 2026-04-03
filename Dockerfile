FROM node:24-alpine AS deps
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# Install production deps only, separately
RUN pnpm install --frozen-lockfile --prod

FROM node:24-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

ARG COMMIT_HASH="unknown"
ENV APP_REVISION=${COMMIT_HASH}
RUN echo "Build App Revision: $APP_REVISION"
RUN pnpm run build

FROM node:24-alpine
WORKDIR /app
# Pull prod deps from deps stage, build output from builder stage
COPY --from=deps /app/node_modules node_modules/
COPY --from=builder /app/build build/
COPY package.json .

EXPOSE 3000

ENV NODE_ENV=production
ENV HOST=0.0.0.0
CMD ["node", "build"]
