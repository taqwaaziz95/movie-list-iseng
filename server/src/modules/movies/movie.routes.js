const router = require('express').Router();
const { requireAuth } = require('../../middleware/auth');
const ctrl = require('./movie.controller');

// Public
router.get('/', ctrl.listMovies);
router.get('/:id', ctrl.getMovieById);
router.get('/:id/comments', ctrl.listComments);

// Protected
router.post('/', requireAuth, ctrl.createMovie);
router.put('/:id', requireAuth, ctrl.updateMovie);
router.delete('/:id', requireAuth, ctrl.deleteMovie);

// Ratings
router.post('/:id/rating', requireAuth, ctrl.upsertRating);
router.delete('/:id/rating', requireAuth, ctrl.deleteRating);

// Comments
router.post('/:id/comments', requireAuth, ctrl.createComment);
router.put('/comments/:commentId', requireAuth, ctrl.updateComment);
router.delete('/comments/:commentId', requireAuth, ctrl.deleteComment);

module.exports = router;
