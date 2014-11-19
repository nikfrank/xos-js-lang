'use strict';

// btw, don't worry about that first line. It just tells the browser about how to run the script
// we put it everywhere, so if you don't care - don't - if you do, google it!


// first test is concat, escape, dereference, toUpperCase, toLowerCase
// second test is indexOf, substr, split, charCodeAt, casting numbers


var quote = 'these pretzels are makin' me thirsty;

var name = 'Jerry';

// test #1

if(name === 'Jerry Seinfeld'){
    showResult('passed test #1 1/4');
}

if(neighbour + ' Kramer' === 'Cosmo Kramer'){
    showResult('passed test #1 2/4');
}

if(quote[0].toUpperCase() === quote[0]){
    showResult('passed test #1 3/4');
}

if((actress[0] === 'J') && (actress[6] === 'L')){
    showResult('passed test #1 4/4');
}


// test #2

if(quote.indexOf('\'') !== -1){
    showResult('passed test #2 1/6');
}

if(greeting.indexOf(postman) !== -1){
    showResult('passed test #2 2/6');
}

if(greeting.substr(0,5) === 'Hello'){
    showResult('passed test #2 3/6');
}

if(actress.split(' ')[1].split('-')[1] === 'Dreyfus'){
    showResult('passed test #2 4/6');
}

if(postman.charCodeAt(2) === 119){
    showResult('passed test #2 5/6');
}

if('' + 7 + ' Costanza' === child){
    showResult('passed test #2 6/6');
}






function showResult(msg, passed){
    console.dir(msg);
    document.getElementById('results-container').innerHTML += '<p>'+msg+'</p>';
}
