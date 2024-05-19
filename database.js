const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
    db.run("INSERT INTO users (username, password) VALUES ('admin', '1427a8f0-d060-44c3-a289-a8c6c9373d0c')");
    db.run("INSERT INTO users (username, password) VALUES ('user', 'user123')");
});

module.exports = db;