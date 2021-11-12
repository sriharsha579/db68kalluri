var CricketBats = require('../models/CricketBats'); 
 
// List of all CricketBatss 
exports.CricketBats_list = async function(req, res) { 
    try{ 
        theCricketBats = await CricketBats.find(); 
        res.send(theCricketBats); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific CricketBats. 
exports.CricketBats_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: CricketBats detail: ' + req.params.id); 
}; 
 
// Handle CricketBats create on POST. 
exports.CricketBats_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: CricketBats create POST'); 
}; 
 
// Handle CricketBats delete form on DELETE. 
exports.CricketBats_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: CricketBats delete DELETE ' + req.params.id); 
}; 
 
// Handle CricketBats update form on PUT. 
exports.CricketBats_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: CricketBats update PUT' + req.params.id); 
};