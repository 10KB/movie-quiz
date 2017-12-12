FROM node:8.7-alpine

EXPOSE 3000

ENV HOST 0.0.0.0

RUN apk add --update git

ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run build

CMD ["npm", "run", "start"]
