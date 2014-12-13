'use strict';

var students = [
    {
	name:{
	    first:'Nox',
	    middle:'Disco',
	    last:'Freebird'
	},
	classes:[],
	from:'England',
	age:21,
	languages:['en']
    },
    {
	name:{first:'Svetlana', last:'Kirilenka'},
	classes:[], from:'Russia', age:27, languages:['ru','iw']
    },
    {name:{first:'Moishe', last:'Mishu'}, classes:[], from:'Israel', age:25, languages:['iw','en']},
    {name:{first:'Mendel', last:'Mishu'}, classes:[], from:'Israel', age:24, languages:['iw','en']},
    {name:{first:'Menachem', last:'Mishu'}, classes:[], from:'Israel', age:26, languages:['iw','en']}
];

// NB: iw == hebrew (ע ~= i ו ~= w) it's part of ISO 639, so you'll see it sometimes. 'he' is also valid
// google still uses it in translate.google.com urls (+ some DBs etc), so you may as well know what it is.
// your complaints are legitimate. The guy who made it up in nineteen sixty whatever apologizes.

var classes = [
    {name:'Political Science', limit:4, students:[], languages:['en','ru']},
    {name:'Math', limit:3, students:[], languages:['iw']},
    {name:'Computer Science', limit:4, students:[], languages:['en']},
    {name:'Physics', limit:5, students:[], languages:['iw', 'en']}
];


// test #1

// if you've changed the course limits or languages, I'll fail you. TRY ME!

var anyClass = Math.floor(Math.random()*(classes.length-(1/1024)));

if(classes[anyClass].students.length < classes[anyClass].limit){
    showResult('passed test #1 1/4');
}else{
    showResult('failed test #1 1/4');
}

if((students[1].classes.length === 3)&&(students[2].classes.length === 3)&&
   (students[3].classes.length === 3)&&(students[4].classes.length === 3)){
    showResult('passed test #1 2/4');
}else{
    showResult('failed test #1 2/4');
}

var anyCsci = Math.floor(Math.random()*(classes[2].students.length-(1/1024)));

if(classes[2].students[anyCsci].name.last === 'Mishu'){
    showResult('passed test #1 3/4');
}else{
    showResult('failed test #1 3/4');
}

var anyMath = Math.floor(Math.random()*(classes[1].students.length-(1/1024)));

if(classes[1].students[anyMath].from !== 'Russia'){
    showResult('passed test #1 4/4');
}else{
    showResult('failed test #1 4/4');
}

// student should alter a few fields, calculate whether courses are full
// calculate average age, have the right number of students in each class


// test #2

// cover typeof, in, .constructor

if('middle' in students[1].name){
    showResult('passed test #2 1/4');
}

if(typeof students[1].name.middle === 'string'){
    showResult('passed test #2 2/4');
}

if(('prereqs' in classes[3]) && (typeof classes[3]['prereqs'] === 'object') &&
   (classes[3].prereqs.length)){
    showResult('passed test #2 3/4');
}

if(classes[2].prereqs.constructor == Array){
    showResult('passed test #2 4/4');
}



// test #3

var stringified;

if(stringified === JSON.stringify(students[0])){
    showResult('passed test #3 1/4');
    console.log(stringified);
}

var serverResponseString;

var parsed = JSON.parse(serverResponseString);

if(Object.keys(parsed).reduce(function(prev, key){
    return prev && (parsed[key].toString() == classes[0][key].toString());
}, true)){
    showResult('passed test #3 2/4');
}


var checkClass = true;

for(var key in classes[0])
    checkClass &= (parsed[key].toString() == classes[0][key].toString());

if(checkClass){
    showResult('passed test #3 3/4');
}

var NOTJSON = '{"blah":"hmm..."}';

try{
    JSON.parse(NOTJSON);
    showResult('failed test #3 4/4');
}catch(e){
    showResult('passed test #3 4/4');
}

// do some stuff with stringify





function showResult(msg){
    console.dir(msg);
    document.getElementById('results-container').innerHTML +=
    '<p class="'+((msg.indexOf('pass')>-1)?'passed-msg':'failed-msg')+'">'+msg+'</p>';
}
