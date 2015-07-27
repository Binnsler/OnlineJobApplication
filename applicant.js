var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({

	name: String,
	bio: String,
	skills: String,
	years: Number,
	why: String

});

var Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;