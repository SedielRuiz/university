module.exports =
{
   "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "homestead",
    "password": "secret",
    "database": "cashib",
    "synchronize": false,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        `./resources/migrations/**/*.ts`,
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}
