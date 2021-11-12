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
exports.CricketBats_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new CricketBats(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.Name = req.body.Name; 
    document.Manufacture = req.body.Manufacture; 
    document.Cost = req.body.Cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle CricketBats delete form on DELETE. 
exports.CricketBats_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: CricketBats delete DELETE ' + req.params.id); 
}; 
 
// Handle CricketBats update form on PUT. 
exports.CricketBats_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: CricketBats update PUT' + req.params.id); 
};
// VIEWS 
// Handle a show all view 
exports.CricketBats_view_all_Page = async function(req, res) { 
    try{ 
        theCricketBats = await CricketBats.find(); 
        res.render('CricketBats', { title: 'CricketBats Search Results', results: theCricketBats }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 