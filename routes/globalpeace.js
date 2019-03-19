var express = require('express');
var router = express.Router();

// Require controller module.
var globalpeace_controller = require('../controllers/globalpeaceController');


// GET request for creating GlobalPeace. NOTE This must come before route for id (i.e. display globalpeace).
router.get('/globalpeace/create', globalpeace_controller.globalpeace_create_get);

// POST request for creating GlobalPeace.
router.post('/globalpeace/create', globalpeace_controller.globalpeace_create_post);

// GET request to delete GlobalPeace.
router.get('/globalpeace/:id/delete', globalpeace_controller.globalpeace_delete_get);

// POST request to delete GlobalPeace.
router.post('/globalpeace/:id/delete', globalpeace_controller.globalpeace_delete_post);

// GET request to update GlobalPeace.
router.get('/globalpeace/:id/update', globalpeace_controller.globalpeace_update_get);

// POST request to update GlobalPeace.
router.post('/globalpeace/:id/update', globalpeace_controller.globalpeace_update_post);

// GET request for one GlobalPeace.
router.get('/globalpeace/:id', globalpeace_controller.globalpeace_detail);

// GET request for list of all GlobalPeaces.
router.get('/globalpeace', globalpeace_controller.globalpeace_list);


module.exports = router;
