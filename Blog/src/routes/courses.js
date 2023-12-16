const express = require('express');
const router = express.Router();

const couresController = require('../app/controllers/CourseController');
router.get('/create', couresController.createShow);
router.post('/store', couresController.store);
router.get('/:id/edit', couresController.updateShow);
router.put('/:id', couresController.update);
router.delete('/:id', couresController.delete);
router.get('/:slug', couresController.show);
module.exports = router;
