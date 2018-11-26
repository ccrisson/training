const express = require('express');
const app = express();
const trainingSessionRoutes = express.Router();

let TrainingSession = require('../models/TrainingSession');

trainingSessionRoutes.route('/add').post(function (req, res) {
	let trainingSession = new TrainingSession(req.body);
	trainingSession.save()
	  .then(game => {
	  	res.status(200).json({'trainingSession': 'TrainingSession added succesfully'});
	  })
	  .catch(err => {
	  	res.status(400).send("unable to save to database");
	  });
});

trainingSessionRoutes.route('/').get(function (req, res) {
	TrainingSession.find(function (err, trainingSession) {
		if(err){
			console.log(err);
		}
		else {
			res.json(trainingSession);
		}
	});
});

trainingSessionRoutes.route('/update/:id').post(function (req, res) {
	TrainingSession.findById(req.params.id, function (err, trainingSession) {
	  if(!trainingSession)
	  	return next(new Error('Could not load Document'));
	  else {
	  	trainingSession.date = req.body.date;
	  	trainingSession.squats = req.body.squats;
	  	trainingSession.presses = req.body.presses;

	  	trainingSession.save().then(trainingSession => {
	  		res.json('Update Complete');
	  	})
	  	.catch(err => {
	  		res.status(400).send("unable to update the database");
	  	});
	  }
	});
});

trainingSessionRoutes.route('/delete/:id').get(function (req, res) {
	TrainingSession.findByIdAndRemove({_id: req.params.id} , function(err, trainingSession){
		if(err) res.json(err);
		else res.json('Succesfully Removed');
	});
});

module.exports = trainingSessionRoutes;