'use strict';

// btw, don't worry about that first line. It just tells the browser about how to run the script
// we put it everywhere, so if you don't care - don't - if you do, google it!


var shirt = true;
var tie = false;

// test #1
if(pants){
    showResult('passed test #1 1/4', true);
}

if(!rainingOutside){
    showResult('passed test #1 2/4');
}

if(bagsPacked && hasTickets){
    showResult('passed test #1 3/4');
}

if(tie || (!needsTie)){
    showResult('passed test #1 4/4');
}


// test #2

var isFormal = needsShirt && needsTie;

isFormal? showResult('passed test #2 1/3'): showResult('failed test #2 1/3');

var dressed = shirt && tie && pants && hat;

var gettingReady = (hasTickets || bagsPacked) && !(hasTickets && bagsPacked);

if(gettingReady){
    showResult('failed test #2 2/3');
}else{
    showResult('passed test #2 2/3');
}

if(dressed){
    showResult('failed test #2 3/3');
}else if(shirt && tie && pants){
    showResult('passed test #2 3/3');
}else{
    showResult('failed test #2 3/3');
}


// test #3

var first, second, third;

if((first && third) ^ (second ^ third)){
    showResult('passed test #3 1/3');
}else{
    showResult('failed test #3 1/3');
}

(first ^ second)?
    showResult('failed test #3 2/3'):
    showResult('passed test #3 2/3');

var successMessage = !second? 'great success!' : 'blame America!';

(successMessage[0] === 'g')?
    showResult('passed test #3 3/3'):
    showResult('failed test #3 3/3');






function showResult(msg){
    console.dir(msg);
    document.getElementById('results-container').innerHTML +=
    '<p class="'+((msg.indexOf('pass')>-1)?'passed-msg':'failed-msg')+'">'+msg+'</p>';
}
