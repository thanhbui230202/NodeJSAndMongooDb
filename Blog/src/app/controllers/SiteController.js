const mongoose = require('mongoose'); 
const coures = require('../models/Courses');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
    home(req, res,next) {
        //promise
        coures.find({}) 
            .then(coures => {
                res.render('home',{
                    coures: mutipleMongooseToObject(coures)
                });
            })
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();

// const newController = require('./NewsController');
