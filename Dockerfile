FROM node:11.1.0-alpine

LABEL maintainer="Geraldo Andrade <gerakdo@geraldoandrade.com>"
LABEL project_group="streamer-tools"
LABEL project_name="youtube-manager"

WORKDIR /app

RUN npm install -g nodemon

COPY . /app

RUN npm install

#HEALTHCHECK --interval=60s --timeout=3s \
#  CMD curl -f -k "http://localhost:${APP_PORT}/healthcheck" || exit 1;

EXPOSE ${APP_PORT:-3000}

# Run main application
CMD ["npm", "start"]
