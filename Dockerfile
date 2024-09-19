FROM node:20 as build
WORKDIR /app
COPY package*.json ./
COPY env ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
EXPOSE 80

CMD ["nginx" , "-g" , "daemon off"]