'use strict';

// define some objects, and an array of objects

// note to misnagim:
// all food is served on disposable cutlery and plates
// all orders are handled separately on a to-go basis from separate kitchens
// not mixing fish and meat is left up to the customer
// not mingling with customers not observing kashrut is left up to the observers
// calm down. we're not teaching the computer to observe Jewish law. it's just an example

var customers = [];

var currentCustomer = {
    firstName:'Nik',
    lastName:'Frank',
    age:23,
    regularOrder:['nana tea'],
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
    options:[{
	name:'sugar',
	price:0,
	calories:100,
	type:'condiment',
	kashrutType:'pareve'
    },{
	name:'aspartame',
	price:0,
	calories:0,
	type:'condiment',
	kashrutType:'pareve'
    },{
	name:'creamer',
	price:0,
	calories:40,
	type:'condiment',
	kashrutType:'dairy'
    }]
},
{
    name:'toast',
    price:30,
    calories:400,
    type:'food',
    kashrutType:'pareve',
    options:[{
	name:'cheese',
	price:8,
	calories:115,
	type:'food',
	kashrutType:'dairy'
    },{
	name:'salmon',
	price:16,
	calories:130,
	type:'food',
	kashrutType:'pareve'
    },{
	name:'tofu',
	price:20,
	calories:99,
	kashrutType:'pareve'
    },{
	name:'chicken',
	price:20,
	calories:135,
	type:'food',
	kashrutType:'meat'
    }]
}];


// look at that readable data. niice.

// first test is item lookups, indexing

// second test is generating menus per diet

// third test is checking diet reqs on orders and billing


// the goal here is to fill in the following functions

// check that the food is to the customer's kashrut & vegan standard
// return the total price
function order(customer, items, options){}

function isKosher(item){}
function isVegan(item){}

function areKosher(items){}
function areVegan(items){}

function totalPrice(items){}


// also, these functions should be linked to the dom

// that will require many works.
