FROM mhart/alpine-node:16 as builder
# build_target: prod|dev
ARG build_target
ENV BUILD_TARGET=$build_target
ENV ENV_FILE=.env.$BUILD_TARGET

WORKDIR /app
COPY [".npmrc", "package*.json", "./"]
ENV NEXT_TELEMETRY_DISABLED=1
#WORKAROUND https://github.com/typicode/husky/issues/991
RUN npm i -g husky && npm i
COPY . ./
COPY $ENV_FILE .env.local
ENV NODE_ENV=production
RUN npm run build && npm ci

CMD ["npm", "start"]