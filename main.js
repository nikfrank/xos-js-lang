'use strict';


var tastyFoods = ['one oreo', 'package of oreos', 'package of doublestuf oreos',
		  'dirty burger', 'mini dirty burger'];

var healthyFoods = ['potato', 'celery', 'carrot', 'banana', 'tofurkey'];

var allFoods = [tastyFoods, healthyFoods];

var tastyFoodCalories = [120, 4320, 6500, 3000, 1548.236];
var healthyFoodCalories = [46, 5, 4, 120, 300];


// test #1

if(foods[0] === 'potato'){
  showResult('passed test #1 1/6');
}

if(foods.length === tastyFoods.length + healthyFoods.length){
    showResult('passed test #1 2/6');
}

if(foods[6] === tastyFoods[1]){
    showResult('passed test #1 3/6');
}

if(allFoods[0][0][0] === 'O'){
    showResult('passed test #1 4/6');
}

if(tastyFoodFat[0] + tastyFoodFat[1] + tastyFoodFat[2] + tastyFoodFat[3] + tastyFoodFat[4] > 200){
    showResult('passed test #1 5/6');
}

if(healthyFoodFat[0] + healthyFoodFat[1] + healthyFoodFat[2] + healthyFoodFat[3] + healthyFoodFat[4] < 10){
    showResult('passed test #1 6/6');
}

// test #2

/*
if(typeof tastyFoodFat[ tastyFood.indexOf[diet[0]] ] === 'undefined'){
    if(typeof healthyFoodFat[ healthyFood.indexOf[diet[0]] ] > 3){
	showResult('passed test #2 1/6');
    }
}
*/

// test #2 & 3

// push & slice

// max min, easy sorting, map
// shift, unshift, splice, slice, filter
// join, pop, push, reduce, concat

// every, filter, forEach


// the user will fill in the functions under the given conditions

// #2 (builtins) the user will write the functions without loops
// #3 (looping) the user will write the functions without prototype methods

// find the total of an array of numbers
function total(array){}

// find the max or min number in the array
// maxOrMin is either 'max' or 'min'
function maxOrMin(array, maxOrMin){}

// return a sorted array ascending ('asc') or descending ('desc')
function ascOrDesc(array, ascOrDesc){}

// take an array of arrays, return just an array
// bonus points for recursive array flattener
function flatten(array){}

// I haven't written solutions to these with just builtins yet,
// so consider them bonus questions for the builtin test

// find the contiguous chunk of size chunkSize which has the largest sum
// return the sum
function maxChunk(array, chunkSize){}

// return the contiguous chunk of size chunkSize withe smallest sum
// having been removed from the array (a la splice)
function elimMinChunk(array, chunkSize){}





function showResult(msg, passed){
    console.dir(msg);
    document.getElementById('results-container').innerHTML += '<p>'+msg+'</p>';
}
