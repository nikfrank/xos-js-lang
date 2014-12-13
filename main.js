'use strict';

var customers = [{
    firstName:'Nik',
    lastName:'Frank',
    tipAvg:0.18,
    kosher:true,
    vegan:true
},{
    firstName:'Nox',
    lastName:'Freebird',
    tipAvg:0.04,
    kosher:true,
    vegan:false
}];

var menu = [{
    name:'coffee',
    price:10,
    calories:86,
    type:'drink',
    kashrutType:'pareve',
    options:[
	{name:'sugar', price:0, calories:100, type:'condiment', kashrutType:'pareve'},
	{name:'aspartame', price:0, calories:0, type:'condiment', kashrutType:'pareve'},
	{name:'creamer', price:0, calories:40, type:'condiment', kashrutType:'dairy'}
    ]
},{
    name:'toast',
    price:30,
    calories:400,
    type:'food',
    kashrutType:'pareve',
    options:[
	{name:'cheese', price:8, calories:115, type:'food', kashrutType:'dairy'},
	{name:'salmon', price:16, calories:130, type:'food', kashrutType:'pareve'},
	{name:'tofu', price:20, calories:99, type:'food', kashrutType:'pareve'},
	{name:'chicken', price:20, calories:135, type:'food', kashrutType:'meat'}
    ]
}];



// the goal here is to fill in the following functions

// items is an array of items with their options listed

function order(customer, items){
    // check that the food is to the customer's kashrut & vegan standard
    // return the total price
}

function kashrutType(item){
    // return either null, pareve, dairy, meat
}

function isVegan(item){
    // return true or false
}

function checkKosher(items){
    // loop through items into kashrutType
    // check that their combination is kosher
}

function checkVegan(items){
    // &= loop through items
}

function totalPrice(items){
    // loop through items and options, sum
}



// test 1
// student to implement preceding five functions, which are prebound to the DOM

// test 2
// have the user call a function which takes a callback as a param

  // implement a check kosher as a "remote service"
  // student calls checkKosher(array, callback(err, type))

// test 3
// have the user implement a function which takes a callback as a param

  // student implement "remote service" from previous test

// test 4
// have the user implement a closure properly

  // implement an async version of the "remote service"
  // student must loop check array of orders and mark original order via enclosed calls

// test 5
// have the user implement a timeout properly

  // student must implement async notification with loading gif

// test 6
// have the user implement a timeout with a closure

  // have student implement async "remote service" from before

// test 7
// have the student use an actual remote service with an ajax call




