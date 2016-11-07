FROM node
MAINTAINER anand.anand84@gmail.com
COPY ./package.json src/
RUN cd src && npm install
COPY . src/
WORKDIR src/
CMD ["node","index.js"]
