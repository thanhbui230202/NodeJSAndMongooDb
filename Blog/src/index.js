const express = require('express');
// import { engine } from 'express-handlebars';
const methodOverride = require('method-override');
const path = require('path');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const routes = require('./routes/');
const db = require('./config/db/index');
const app = express();
const port = 3000;


// db.connect();
app.use(
    express.urlencoded({
        //body-parser
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));
//Submit lên server html,
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers:{
            sum: (a,b) => a+b,
        }            
    }),
);
//
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//routes init
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
