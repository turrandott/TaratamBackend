var express = require('express');
var router = express.Router();

// Require controller module.
var wish_controller = require('../controllers/wishController');


// GET request for creating Wish. NOTE This must come before route for id (i.e. display wish).
router.get('/create', wish_controller.wish_create_get);

// POST request for creating Wish.
router.post('/create', wish_controller.wish_create_post);

// GET request to delete Wish.
router.get('/:id/delete', wish_controller.wish_delete_get);

// POST request to delete Wish.
router.post('/:id/delete', wish_controller.wish_delete_post);

// GET request to update Wish.
router.get('/:id/update', wish_controller.wish_update_get);

// POST request to update Wish.
router.post('/:id/update', wish_controller.wish_update_post);

// GET request for one Wish.
router.get('/:id', wish_controller.wish_detail);

// GET request for list of all Wishs.
router.get('/', wish_controller.wish_list);

/* POST wishes. */
/*
router.post('/', function(req, res, next) {
  res.status(201).end();
});*/

module.exports = router;
