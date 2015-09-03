'use strict';

var distance1 = require('./meanDistance.js').distance1;
var distance2 = require('./meanDistance.js').distance2;
var rmse = require('./meanDistance.js').rmse;


var o1 = [ 1, 3, 3, 5, 2, 1];
var o2 = [ 101, 3, 9, 3, 23, 2];
var o3 = [ 11, 31, 29, 1, 3, 20];

var p1 = [ 2, 3, 4, 5, 3, 3];
var p2 = [ 98, 2, 9, 3, 20, 1];
var p3 = [ 11, 30, 20, 1, 4, 18];


var obs = [o1, o2, o3];
var pred = [p1, p2, p3];

console.log('distance1', distance1(obs, pred));
console.log('distance2', distance2(obs, pred));
console.log('rmse', rmse(obs, pred));