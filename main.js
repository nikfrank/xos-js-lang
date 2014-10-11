'use strict';

// btw, don't worry about that first line. It just tells the browser about how to run the script
// we put it everywhere, so if you don't care - don't - if you do, google it!


var shirt = true;
var tie = false;

var needsShirt;
var needsTie;

var pants, hat, hasTickets, bagsPacked, rainingOutside;


// test #1

if(pants){
  console.log('passed test #1 1/4');  
}

if(!rainingOutside){
    console.log('passed test #1 2/4');
}

if(bagsPacked && hasTickets){
    console.log('passed test #1 3/4');
}

if(tie || (!needsTie)){
    console.log('passed test #1 4/4');
}


// test #2

var isFormal = needsShirt && needsTie;

isFormal? console.log('passed test #2 1/3'): console.log('failed test #2 1/3');

var dressed = shirt && tie && pants && hat;

var gettingReady = hasTickets ^ bagsPacked;

if(gettingReady){
    console.log('failed test #2 2/3');
}else{
    console.log('passed test #2 2/3');
}

if(dressed){
    console.log('failed test #2 3/3');
}else if(shirt && tie && pants){
    console.log('passed test #2 3/3');
}else{
    console.log('failed test #2 3/3');
}

// test #3
