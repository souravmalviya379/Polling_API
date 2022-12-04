const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question_controller.js');

router.get('/', questionController.fetchAllQuestions);
router.get('/:id', questionController.fetchQuestion);
router.post('/create', questionController.create);
router.post('/:id/options/create', questionController.addOption);
router.delete('/:id/delete', questionController.destroy);

module.exports = router;