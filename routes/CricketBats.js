var express = require('express'); 
const CricketBats_controlers= require('../controllers/CricketBats'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET CricketBats */ 
router.get('/', CricketBats_controlers.CricketBats_view_all_Page ); 
module.exports = router;


/* GET detail costume page */ 
router.get('/detail', CricketBats_controlers.CricketBats_view_one_Page); 

/* GET create costume page */ 
router.get('/create',secured, CricketBats_controlers.CricketBats_create_Page); 

/* GET create update page */ 
router.get('/update',secured,  CricketBats_controlers.CricketBats_update_Page);

/* GET create costume page */ 
router.get('/delete',secured, CricketBats_controlers.CricketBats_delete_Page); 
 
 