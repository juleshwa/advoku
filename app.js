'use strict'

const express = require('express');
const app = express();
const path = require('path')
const { router } = require('./router/router');
const PORT = process.env.PORT || 3000;
const session = require('express-session')


// Setting Template Engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Session

app.use(session({
    secret: 'fat kitten lady',
    resave: false,
    saveUninitialized: true
}))

// Routing
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server connected on ${PORT}`)
})

