const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
	() => {console.log('Database is connected') },
	err => {console.log('Can not connect to datbase ' + err)}
);

trainingSessionRoutes = require('./routes/trainingsession.route')

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/trainingsessions', trainingSessionRoutes);

const server = app.listen(function (){
	console.log("Listening on port " + port);
});