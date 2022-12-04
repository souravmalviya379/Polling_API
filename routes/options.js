const express = require('express');
const router = express.Router();
const optionController = require('../controllers/option_controller');

router.delete('/:id/delete', optionController.destroy);
router.put('/:id/add_vote', optionController.incrementVote);

module.exports = router;