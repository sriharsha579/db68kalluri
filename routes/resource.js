var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var CricketBats_controller = require('../controllers/CricketBats'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// CricketBats ROUTES /// 
 
// POST request for creating a CricketBats.  
router.post('/CricketBats', CricketBats_controller.CricketBats_create_post); 
 
// DELETE request to delete CricketBats. 
router.delete('/CricketBats/:id', CricketBats_controller.CricketBats_delete); 
 
// PUT request to update CricketBats. 
router.put('/CricketBats/:id', 
CricketBats_controller.CricketBats_update_put); 
 
// GET request for one CricketBats. 
router.get('/CricketBats/:id', CricketBats_controller.CricketBats_detail); 
 
// GET request for list of all CricketBats items. 
router.get('/CricketBats', CricketBats_controller.CricketBats_list); 
 
module.exports = router; 