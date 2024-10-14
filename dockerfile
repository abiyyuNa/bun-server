# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
COPY ./package.json .
RUN bun install
COPY . .

# distibution file tsc
RUN bun run clean
RUN bun run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.8.0/wait /wait
RUN chmod +x /wait

# EXPOSE 201

# Runs the dev bun script to build & start the server
CMD /wait && bun run start
# CMD npm run start