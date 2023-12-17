// Create web server using express
// Create a new router object using express
const express = require('express');
const router = express.Router();

// Import comments controller
const commentsCtrl = require('../controllers/comments');

// Create new comment
router.post('/', commentsCtrl.createComment);

// Get all comments
router.get('/', commentsCtrl.getAllComments);

// Get one comment
router.get('/:id', commentsCtrl.getOneComment);

// Update one comment
router.put('/:id', commentsCtrl.updateOneComment);

// Delete one comment
router.delete('/:id', commentsCtrl.deleteOneComment);

// Export router
module.exports = router;
