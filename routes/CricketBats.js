var express = require('express'); 
const CricketBats_controlers= require('../controllers/CricketBats'); 
var router = express.Router(); 
 
/* GET CricketBats */ 
router.get('/', CricketBats_controlers.CricketBats_view_all_Page ); 
module.exports = router;