const development = {
    name: 'development',
    db: 'Polling_API',
    host: 'localhost'
}

const production = {
    name: 'production',
    db: process.env.POLLING_API_DB,
    host: process.env.POLLING_API_HOST
}

module.exports = production;