// import packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// import routes
const routes = require('./controllers');

// import ocnnection
const sequelize = require('./config/connection');

// sequelize store 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// express instance
const app = express();

// port var
const PORT = process.env.PORT || 3001;

// use helpers w hbrs
const hbs = exphbs.create();

// session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// session middleware
app.use(session(sess));

// handle bars 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// response middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes middlewear
app.use(routes);

// sync sequelize and db and listen on server 
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});