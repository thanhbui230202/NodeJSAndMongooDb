const mongoose = require('mongoose'); 
const Coures = require('../models/Courses');
const {mutipleMongooseToObject} = require('../../util/mongoose');
// const courses = require('../models/Courses');
class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res,next){
        Coures.find({})
            .then(coures => {
                res.render('me/stored-courses',
                {coures : mutipleMongooseToObject(coures)});
            })
            .catch(next);
    }

}
module.exports = new MeController();

// const newController = require('./NewsController');
