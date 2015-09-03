'use strict';

var ubique = require('ubique');

/*

The input are Xi, Yi where Xi is the vector of observation i and Yi is the vector of corresponding prediction i.
We have p observations => 0 <= i < p

Each Xi or Yi is composed of n features which represent the coordinates in the reduced vector space, each of them called xij or yij

*/


function meanDistance1(observations, predictions){

	var transposedObs = ubique.transpose(observations);
	var transposedPreds = ubique.transpose(predictions);

	var distances = [];

	transposedPreds.forEach(function(predVector, index){
		var obsVector = transposedObs[index];

		distances.push(ubique.pdist(obsVector, predVector, 'euclidean'));

	})

	return ubique.mean(distances);

};

function meanDistance2(observations, predictions){

	var distances = [];

	predictions.forEach(function(predVector, index){

		var obsVector = observations[index];

		distances.push(ubique.pdist(obsVector, predVector, 'euclidean'));

	});

	return ubique.mean(distances);
	
};

function rmse(observations, predictions){

	var sqErrors = [];

	predictions.forEach(function(predVector, index){

		var obsVector = observations[index];

		var error = ubique.pdist(obsVector, predVector, 'euclidean');
		var sqError = error * error;

		sqErrors.push(sqError);

	});

	return Math.sqrt(ubique.mean(sqErrors));
	
};

module.exports = {
	distance1: meanDistance1,
	distance2: meanDistance2,
	rmse: rmse
};
