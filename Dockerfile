FROM klakegg/hugo:0.92.1-ext
COPY .  /src
WORKDIR /src
EXPOSE 1313:1313
CMD [ "server" ]