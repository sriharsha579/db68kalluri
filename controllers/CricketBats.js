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
    // {"CricketBats_type":"goat", "cost":12, "size":"large"} 
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
 
// Handle Costume delete on DELETE. 
exports.CricketBats_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await CricketBats.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle CricketBats update form on PUT. 
exports.CricketBats_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await CricketBats.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.CricketBats_type) toUpdate.Name = req.body.Name; 
        if(req.body.Manufacture) toUpdate.Manufacture = req.body.Manufacture; 
        if(req.body.Cost) toUpdate.Cost = req.body.Cost;
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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


// for a specific CricketBats. 
exports.CricketBats_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await CricketBats.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

 
 // Handle a show one view with id specified by query 
 exports.CricketBats_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await CricketBats.findById( req.query.id) 
        res.render('CricketBatsdetail',  
{ title: 'CricketBats Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.CricketBats_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('CricketBatscreate', { title: 'CricketBats Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 


// Handle building the view for updating a costume. 
// query provides the id 
exports.CricketBats_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await CricketBats.findById(req.query.id) 
        res.render('CricketBatsupdate', { title: 'CricketBat Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.CricketBats_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await CricketBats.findById(req.query.id) 
        res.render('CricketBatsdelete', { title: 'CricketBats Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 