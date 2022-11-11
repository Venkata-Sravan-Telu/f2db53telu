var car = require('../models/car'); 
 
// List of all Costumes 
exports.car_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: car list'); 
}; 
 
// for a specific Costume. 
exports.car_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: car detail: ' + req.params.id); 
}; 
 
// Handle Pizza create on POST. 
exports.car_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new car(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {car_name:"Toyoto Camry",  car_price:26000, car_model:2022} 
    document.car_name = req.body.car_name; 
    document.car_price = req.body.car_price; 
    document.car_model = req.body.car_model; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle car delete form on DELETE. 
exports.car_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id); 
}; 
 
 

// List of all car 
exports.car_list = async function(req, res) { 
    try{ 
        thecar = await car.find(); 
        res.send(thecar); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.car_view_all_Page = async function(req, res) { 
    try{ 
        thecar = await car.find(); 
        res.render('car', { title: 'car Search Results', results: thecar }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Costume. 
exports.car_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await car.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle car update form on PUT.
// Handle Application update form on PUT.

exports.car_update_put = async function(req, res) {

    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)

    try {

        let toUpdate = await car.findById( req.params.id)

        // Do updates of properties

        if(req.body.car_name) toUpdate.car_name = req.body.car_name;

        if(req.body.car_price) toUpdate.car_price = req.body.car_price;

        if(req.body.car_model) toUpdate.car_model = req.body.car_model;
        
        let result = await toUpdate.save();

        console.log("Success " + result)

        res.send(result)

    } catch (err) {

        res.status(500)

        res.send(`{"error": ${err}: Update for id ${req.params.id}

failed`);

    }

}; 