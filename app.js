'use strict'

const express = require('express');
const app = express();
const path = require('path')
const { router } = require('./router/router');
const PORT = process.env.PORT || 3000;


// Setting Template Engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server connected on ${PORT}`)
})

