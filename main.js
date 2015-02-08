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

if(greeting.length === 12){
    showResult('passed test #1 3/4');
}

if((actress[0] === 'J') && (actress[6] === 'L')){
    showResult('passed test #1 4/4');
}


// test #2

if(greeting.indexOf('Hello') !== -1){
    showResult('passed test #2 1/7');
}

if(greeting.indexOf(postman) !== -1){
    showResult('passed test #2 2/7');
}

if(quote[0].toUpperCase() === quote[0]){
    showResult('passed test #2 3/7');
}

if(greeting.substr(6,3) === 'New'){
    showResult('passed test #2 4/7');
}

if(actress.charAt(3) === 'i'){
    showResult('passed test #2 5/7');
}

if(actress.substr(-3) === 'fus'){
    showResult('passed test #2 6/7');
}

if(postman.charCodeAt(2) === 119){
    showResult('passed test #2 7/7');
}


// test #3
// be familiar with arrays before doing test #3
// be familiar with regexps, or be prepared to learn a bit

if(quote.indexOf('\'') !== -1){
    showResult('passed test #3 1/5');
}

if(quote.indexOf('\n') !== -1){
    showResult('passed test #3 2/5');
}

if(quote.indexOf('"') > quote.indexOf('\n')){
    showResult('passed test #3 3/5');
}

if('' + 7 + ' Costanza' === child){
    showResult('passed test #3 4/5');
}

try{
    if(actress.split(' ')[1].split('-')[1] === 'Dreyfus'){
	showResult('passed test #3 5/5');
    }
catch(e){
    showResult('failed test #3 5/5');
}

// test #4
// read up on REGEXP in JAVASCRIPT


if(quote.replace(/g/g,'') === quote){
    showResult('passed test #4 1/2');
}

if(quote.match(/close-?talker/g) !== null){
    showResult('passed test #4 2/2');
}





function showResult(msg){
    console.dir(msg);
    document.getElementById('results-container').innerHTML +=
    '<p class="'+((msg.indexOf('pass')>-1)?'passed-msg':'failed-msg')+'">'+msg+'</p>';
}
