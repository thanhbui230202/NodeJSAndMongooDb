const express = require('express');
router = express.Router();

const newController = require('../app/controllers/NewsController');
router.get('/:slug',newController.index)
module.exports = router;
