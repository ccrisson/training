const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sets = new Schema({
	exersise: String,
	weight: Number,
	reps: Number,
	numSets: Number
});

let TrainingSession = new Schema({
	date: Date,
	squats: [Sets],
	presses: [Sets],
	benches: [Sets],
	deadlifts: [Sets],
    powercleans: [Sets]
},{
	collection: 'traingsessions'
});