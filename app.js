const express = require('express');

const homeRoutes = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(homeRoutes);

app.listen(3000);