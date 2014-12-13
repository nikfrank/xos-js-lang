'use strict';

// btw, don't worry about that first line. It just tells the browser about how to run the script
// we put it everywhere, so if you don't care - don't - if you do, google it!


// test 1 is +-*/%,++,--, +=, -=, *=, /= comparisons
// test 2 is Math.pow,floor,ceil,max,min,random,sqrt

a--;
--a;
b++;
++b;

c += 5;
d -= 4;

c *= 3;
d /= 8;

if(a !== 36){
    showResult('passed test #1 1/6');
}

if(b*3704.6 >= 100000){
    showResult('passed test #1 2/6');
}

if((c > 3) && (c < 4)){
    showResult('passed test #1 3/6');
}

if(a*d === 48){
    showResult('passed test #1 4/6');
}

if(d % 5 === 2){
    showResult('passed test #1 5/6');
}

if((a%1 === 0) && (b%1 === 0) && ((b/a)%1 === 0.75)){
    showResult('passed test #1 6/6');
}


// test #2

if(Math.pow(x, y) === 64){
    showResult('passed test #2 1/5');
}

if(Math.floor(Math.sqrt(x)) === 1){
    showResult('passed test #2 2/5');
}

if(Math.max(q, z) === y){
    showResult('passed test #2 3/5');
}

if(Math.ceil(Math.sqrt(-q)) !== Math.floor(Math.sqrt(-q))){
    showResult('passed test #2 4/5');
}

if(!(x+y+z+q)){
    showResult('passed test #2 5/5');
}

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log('woooooooooo!');




function showResult(msg){
    console.dir(msg);
    document.getElementById('results-container').innerHTML +=
    '<p class="'+((msg.indexOf('pass')>-1)?'passed-msg':'failed-msg')+'">'+msg+'</p>';
}
