FROM node:20-alpine

WORKDIR /app

COPY ./package.json /package.json

COPY ./package-lock.json /package-lock.json

COPY ./turbo.json ./turbo.json

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://neondb_owner:npg_n8KXPoc9DIME@ep-late-cake-a5xy1gon-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"

RUN npm run generate:db

RUN npm run build

EXPOSE 8080

CMD ["npm","start:ws"]
