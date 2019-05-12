const express = require('express');
const router = express.Router();
const cors = require('cors');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const produit_controller = require('../controllers/produit.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', produit_controller.test);
router.get('/getthemissions', cors(), produit_controller.get_the_missions);
router.post('/create', cors(), produit_controller.produit_create);
router.delete('/:id/delete', cors(), produit_controller.produit_delete);
router.put('/:id/update', cors(), produit_controller.produit_update);
router.get('/:id', cors(), produit_controller.produit_read);
module.exports = router;