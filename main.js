'use strict';


// just do a couple loops, then direct the student to the functions lesson

var squares = [];
// squares should be an array of the square of its index of length > 10


console.log(squares); // check it yourself! or test it officially

if((squares.reduce(function(p,c,i){p&=(Math.sqrt(c)===i);},true))&&(squares.length>10)) 
    showResult('Passed test #1 1/4');



var fizzbuzz = [];
// fizzbuzz should be length 10
// indices multiples of 3 should contain 'fizz'
// indices multiples of 5 should contain 'buzz'





console.log(fizzbuzz); // check it yourself! or test it officially


if((fizzbuzz.reduce(function(p,c,i){p&=(i%3?true:(c.indexOf('fizz')>-1))&&(i%5?true:(c.indexOf('buzz')>-1));},true))&&(fizzbuzz.length>10))
    showResult('Passed test #1 2/4');


// once you've passed this test, go ahead and learn about functions
// they will be necessary for all further tests (and a few you've already gone by











function showResult(msg, passed){
    console.dir(msg);
    document.getElementById('results-container').innerHTML += '<p>'+msg+'</p>';
}
