var express = require('express'); 
const CricketBats_controlers= require('../controllers/CricketBats'); 
var router = express.Router(); 
 
/* GET CricketBats */ 
router.get('/', CricketBats_controlers.CricketBats_view_all_Page ); 
module.exports = router;


/* GET detail costume page */ 
router.get('/detail', CricketBats_controlers.CricketBats_view_one_Page); 

/* GET create costume page */ 
router.get('/create', CricketBats_controlers.CricketBats_create_Page); 

/* GET create update page */ 
router.get('/update', CricketBats_controlers.CricketBats_update_Page);

/* GET create costume page */ 
router.get('/delete', CricketBats_controlers.CricketBats_delete_Page); 
 
 