
//This file connects to the remote prisma DB, and grants ability to query the DB with JS
const { Prisma } = require(`prisma-binding`);

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA,
    debug: false
});

module.exports = db;