# Test Node/Express Typescript 2

RESTful API based on ExpressTs.

![NodeJs](https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white) ![ExpressJs](https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white)

This app is hosted on Heroku at this address: https://api-node-mario.herokuapp.com/
The Database is hosted at MongoDB atlas

## Prerequisite

- node js version >= 14.xx.x
- npm version >= 7.xx.x
- express version >= 4.xx.x
- typescript (tsc) version >= 4.xx.x
- mongod (mongoDB server) version = 4.4.8

## Run Locally

> I Assume that you installed all the prerequisite globally

- Create 2 databases inside mongo (for development & for testing)
- Create a .env file, copy inside it all the variables inside .env.example and add the right value for the all .env variables

Clone the project

```bash

git clone git@github.com:MaxR522/test-node-2-api.git

```

Go to the project directory

```bash

cd test-node-2-api

```

Install dependencies

```bash

npm install

```

Start dev server

```bash

npm run dev

```

For test, We use Jest & Supertest. To run test use the following command:

```bash

npm run test

```

You can build and run the prod server if you want by following these commands:

```bash

npm run build

```

```bash

npm run start

```

## Features

- Authentication using JWT (access-token & refresh-token) & bcrypt for hashing
- Register
- Login
- Logout
- Update User's info
- Update User's password
- Get one user
- Get All users

## Testing the API

Make sure to add `Authorization` inside headers when making request to a protected routes:
**List of protected routes**:

- Get all users `GET /users`
- Get one user `GET /users/:id`
- Update user `PUT /users/:id`
- Update user password `PUT /users/:id/password`
- Logout `POST /auth/logout`

Example Authorization headers:

```
{
	Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY2YTc3MjY5NDg5MDM4MjkwMDJjYzUiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MTIzNDg2LCJleHAiOjE2MzQxMjcwODZ9.G7ikGcNSZhc_S3DwyCjQ4qdYELpAoq-SO-wsri4a0Ik
}
```
