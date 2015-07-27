var Applicant = require('./applicant.js')
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Connect to the DB
mongoose.connect('mongodb://localhost/omega3');


// Render Home 
app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
// app.get('/applicants', function(req, res){
// 	res.render('applicants')
// });

// creates and applicant
app.post('/applicant', function(req, res){

	// Here is where you need to get the data
	// from the post body and store it in the database
	var applicant = {

		name : req.body.name,
		bio : req.body.bio,
		skills : req.body.skills,
		years : req.body.years,
		why : req.body.why


	}

	var newApplicant = new Applicant(applicant);

	var data = Applicant.find({})

	res.render('applicants', data);

	// newApplicant.save(function(err, doc){
	// 	res.render('successful');
	// });

});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
