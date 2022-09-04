FROM nginx:stable-alpine
WORKDIR /WCC-Dev
VOLUME dist WCC-Dev
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]