'use strict';

var foods = [];

var tastyFoods = ['one oreo', 'package of oreos', 'package of doublestuf oreos',
		  'dirty burger', 'mini dirty burger'];

var healthyFoods = ['potato', 'celery', 'carrot', 'banana', 'tofurkey'];

var allFoods = [tastyFoods, healthyFoods];

var tastyFoodCalories = [120, 4320, 6500, 3000, 1548.236];
var healthyFoodCalories = [46, 5, 4, 120, 300];

var tastyFoodFat = [];
var healthyFoodFat = [];

var diet = [];

// test #1

if(foods[0] === 'potato'){
  console.log('passed test #1 1/4');
}

if(foods.length === tastyFoods.length + healthyFoods.length){
    console.log('passed test #1 2/4');
}

if(foods[6] === tastyFoods[1]){
    console.log('passed test #1 3/4');
}

if(allFoods[0][0][0] === 'O'){
    console.log('passed test #1 4/4');
}



// test #2 & 3

// the user will fill in the functions under the given conditions

// #2 (builtins) the user will write the functions without loops
// #3 (looping) the user will write the functions without prototype methods

function total(array){}
function maxOrMin(array, maxOrMin){}
function ascOrDesc(array, ascOrDesc){}
function bounce(array){}
function flatten(array){}
function maxChunk(array, chunkSize){}
function elimMinChunk(array, chunkSize){}

// push & slice

// max min, easy sorting, map
// shift, unshift, splice, slice, filter
// join, pop, push, reduce, concat

// every, filter, forEach
