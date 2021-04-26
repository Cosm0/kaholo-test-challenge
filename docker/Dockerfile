FROM node:10-alpine as build-step
RUN mkdir -p /kaholo-app
WORKDIR /kaholo-app
COPY package.json /kaholo-app
COPY . /kaholo-app
RUN npm install
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-step /kaholo-app/dist /usr/share/nginx/html/static
COPY --from=build-step /kaholo-app/static /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d


#FROM node:13.12.0-alpine
#WORKDIR /app
#
## add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
#
#COPY package.json ./
#COPY package-lock.json ./
#RUN npm install --silent
#RUN npm install react-scripts@3.4.1 -g --silent
#
## TODO: should exclude cypress catalogue as tests are not needed in app container
#COPY . ./
#
#CMD ["npm", "start"]
