'use strict';

var customers = [];

var currentCustomer = {
    firstName:'Nik',
    lastName:'Frank',
    age:23,
    regularOrder:['nana tea'], // make this an actual order array
    tipAvg:0.18,
    kosher:true,
    vegan:false
};


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
},
{
    name:'toast',
    price:30,
    calories:400,
    type:'food',
    kashrutType:'pareve',
    options:[
	{name:'cheese', price:8, calories:115, type:'food', kashrutType:'dairy'},
	{name:'salmon', price:16, calories:130, type:'food', kashrutType:'pareve'},
	{name:'tofu', price:20, calories:99, kashrutType:'pareve'},
	{name:'chicken', price:20, calories:135, type:'food', kashrutType:'meat'}
    ]
}];



// the goal here is to fill in the following functions

// items is an array of items with their options listed

function order(customer, items){

    // check that the food is to the customer's kashrut & vegan standard
    if(customer.kosher) checkKosher(items);
    if(customer.vegan) checkVegan(items);

    // return the total price
    return totalPrice(items);
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
    // loop through, sum
}


// also, these functions should be linked to the dom in the next lesson





// test 1
// define five functions, without implementing them - have the user implement them.

// test 2
// have the user implement a function which takes a callback as a param

// test 3
// have the user implement a closure properly

// test 4
// have the user implement a timeout properly

// test 5
// have the user implement a timeout with a closure




