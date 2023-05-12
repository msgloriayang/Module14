const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const exsess = require('express-session');
const sequel = require('connect-session-sequelize')(exsess.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// this is where the handlebars are
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({ helpers: helpers }));

const sess = 
{
    secret: 'Super secret secret',
    rolling: true,
    cookie: {maxAge:300000},
    resave: false,
    saveUninitialized: true,
    store: new sequel({db: sequelize})
};

app.use(routes);
app.use(exsess(sess));

sequelize.sync(
    { 
        force: false
    })
    .then(() => 
    {
        app.listen(PORT, () => console.log('Listening!'));
    });