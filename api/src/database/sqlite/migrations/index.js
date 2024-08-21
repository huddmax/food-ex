const sqliteConnection = require('../../sqlite');

const createUsers = require('./createUsers')

async function migrationsRun() {
    const Schema = [
        createUsers,
    ].join('');

    sqliteConnection()
        .then(db => db.exec(Schema))
        .catch(error => console.error(error));
}

module.exports = migrationsRun;