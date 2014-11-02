'use strict';

// btw, don't worry about that first line. It just tells the browser about how to run the script
// we put it everywhere, so if you don't care - don't - if you do, google it!


// bugkill is init
// first test is concat, escape, dereference, toUpperCase, toLowerCase, basic string replace
// second test is indexOf, substr, split, charCodeAt, casting numbers


// this lesson needs something about escape chars

var name = 'Jerry', neighbour, actress, postman, greeting, child;

if(name === 'Jerry Seinfeld'){
    console.log('test #1 passed');
}

if(neighbour + ' Kramer' === 'Cosmo Kramer'){
    console.log('test #2 passed');
}

if(greeting.substr(0,5) === 'Hello'){
    console.log('test #3 passed');
}

if(greeting.indexOf(postman) !== -1){
    console.log('test #4 passed');
}

if((actress[0] === 'J') && (actress[6] === 'L')){
    console.log('test #5 passed');
}

if(actress.split(' ')[1].split('-')[1] === 'Dreyfus'){
    console.log('test #6 passed');
}

if('' + 7 + ' Costanza' === child){
    console.log('test #7 passed');
}

