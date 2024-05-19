const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    //console.log("Executing SQL: ", sql); // For debugging
    
    db.get(sql, (err, row) => {
        if (err) {
            return res.status(500).send('Internal Server Error');
        }
        if (row) {
            return res.render('dashboard', { username: row.username, flag: process.env.FLAG_SQL || 'FLAG{sql_injection_success}' });
        }
        res.status(401).send('Invalid credentials');
    });
});

app.get('/comments', (req, res) => {
    if (!req.session.comments) {
        req.session.comments = [];
    }
    res.render('comments', { comments: req.session.comments, flag: process.env.FLAG_XSS || 'FLAG{x-S-s_s--UuU--c-CesS}' });
});

app.post('/comments', (req, res) => {
    if (!req.session.comments) {
        req.session.comments = [];
    }
    req.session.comments.push(req.body.comment);
    res.redirect('/comments');
});

let server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', shutdown);

function shutdown() {
    console.log('Shutdown server');
    server.close(function () {
        console.log('Closed');
    });
}
