var Costume = require('../models/car'); 
 
// List of all Costumes 
exports.car_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car list'); 
}; 
 
// for a specific Costume. 
exports.car_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.car_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.car_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.car_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.car_list = async function(req, res) { 
    try{ 
        theCar = await car.find(); 
        res.send(theCar); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// // VIEWS 
// // Handle a show all view 
// exports.car_view_all_Page = async function(req, res) { 
//     try{ 
//         theCar = await car.find(); 
//         res.render('car', { title: 'Car Search Results', results: theCar }); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 