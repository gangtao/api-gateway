# ---- Base Node ----
FROM node:10.15.2-alpine as dependencies
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
ADD . ./
RUN npm run dist
 
#
# ---- Release ----
FROM node:10.15.2-alpine
# copy production node_modules
COPY --from=dependencies /usr/src/app/dist ./
# expose port and define CMD
EXPOSE 8080
CMD node index.js
