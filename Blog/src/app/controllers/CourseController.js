const mongoose = require('mongoose'); 
const coures = require('../models/Courses');
const {MongooseToObject} = require('../../util/mongoose');
class CourseController {
    //GET /courses/:slug
    show(req, res,next) {
        coures.findOne({slug: req.params.slug})
            .then(coures => {
                res.render('courses/show',{coures : MongooseToObject(coures)});
            })
            .catch(next);
    }
    //[GET] /courses/create
    createShow(req, res,next){
        res.render('courses/create');
    }
    //[POST] do create
    store(req, res,next){
        // res.json(req.body);
        const formData = req.body;
        const courses = new coures(formData);
        courses.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    //[GET] /courses/edit
    updateShow(req, res,next){
        coures.findById(req.params.id)
            .then(courses => res.render('courses/edit',{
                coures : MongooseToObject(courses)
            }))
            .catch(next);
    }
    //GET ,POST ,PUT ,PATCH, DELETE ,OPTIONS, HEAD
    //[PUT] //courses/:id
    update(req, res,next){
        coures.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    delete(req,res,next){
        coures.deleteOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
    }
}
module.exports = new CourseController();

// const newController = require('./NewsController');
