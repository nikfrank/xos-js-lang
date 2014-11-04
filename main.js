'use strict';

// btw, don't worry about that first line. It just tells the browser about how to run the script
// we put it everywhere, so if you don't care - don't - if you do, google it!


// bugkill is init
// test 1 is +-*/%,++,--, +=, -=, *=, /= comparisons
// test 2 is Math.pow,floor,ceil,max,min,random,sqrt
// test 3 is string conversions

var age = 18, population, something, a,b,c,d;

if(age !== 36){
    console.log('test #1 passed');
}

if(population > 1000000){
    console.log('test #2 passed');
}

if((something > 3) && (something < 4)){
    console.log('test #3 passed');
}

if(a*b === 48){
    console.log('test #4 passed');
}

if((a%1 === 0) && (b%1 === 0) && ((b/a)%1 === 0.75)){
    console.log('test #5 passed');
}

if((c+d === 32) && (c-d === 8)){
    console.log('test #6 passed');
}

