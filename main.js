'use strict';

// test #1
// fill the arrays as indicated

var squares = [];
// squares should be an array of the square of its index of length > 100


console.log(squares); // check it yourself! or test it officially


var fizzbuzz = [];
// fizzbuzz should be length 1000
// indices multiples of 3 should contain 'fizz'
// indices multiples of 5 should contain 'buzz'



console.log(fizzbuzz); // check it yourself! or test it officially




// once you've passed this test, go ahead and learn about functions
// they will be necessary for all further tests (and a few you've already gone by)




// test #2
// here we'll take an array of objects
// we will turn one of the fields of each object into an index


var orders = {nik:'chow mein',
	      nox:'pasta',
	      kate:'bbq',
	      shmuel:'fries',
	      bill:'poutine'
	     };

// it's bad practice to use the keys as part of the data
// (here they're being used for the name of some ordering patron)

// it'd be better if we had the data as an array like

var ordersArray = [{name:'nik', order:'chow mein'},
		   {name:'nox', order:'pasta'},
		   {name:'kate', order:'bbq'},
		   {name:'shmuel', order:'fries'},
		   {name:'bill', order:'poutine'}
		  ];

// that way every value is listed under a descriptive key,
// plus arrays are deterministic to iterate, and have nice convenience functions.

// to pass, write a function which converts the object to an array and return it
// keyKey is the key to assign keys from the object to (here "name")
// valKey is the key to assign vals from the object to (here "order")

function objToArray(obj, keyKey, valKey){
    
}





// we've seen why we'd want to make an array out of an object
// so let's see why we'd want to make an object out of an array

// let's say we have data like

var placedOrders = [{table:3, items:['fries','poutine','chicken'], time:'18:37'},
		    {table:7, items:['fries','burger'], time:'18:43'},
		    {table:1, items:['chicken','fried pickles','chicken'], '18:49'},
		    {table:12, items:['five dollar shake','vanilla coke'], '18:59'},
		    {table:5, items:['steak - bloody','burger - bloody'], '19:01'}
		   ];


// searching can be expensive if there's a lot of data (making the app slow)
// it would be nice if we could just say

var orderByTable = {/* ... */};

var tableNumber = 12;
var myOrder = orderByTable[tableNumber];

// we can do this by looping over the items and inserting them at their index.

// to pass the test
// write a function which takes an array of objects and a key, and returns an index object

function indexer(array, key){
    
}





function showResult(msg, passed){
    console.dir(msg);
    document.getElementById('results-container').innerHTML += '<p>'+msg+'</p>';
}
