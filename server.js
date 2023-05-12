const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const exsess = require('express-session');

const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

const sess = {
    secret: 'Psssst..issa secret',
    rolling: true,
    cookie: { maxAge: 300000 },
    resave: false,
    saveUninitialized: true,
    store: new exsess.MemoryStore(),
  };

// this is for the handlebars setup
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({ helpers: helpers }));

app.use(routes);
app.use(exsess(sess));

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log('Listening!'));
  });