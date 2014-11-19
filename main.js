'use strict';

var students = [
    {
	firstName:'Nox',
	lastName:'Freebird',
	classes:[],
	from:'England',
	age:21,
	languages:['en']
    },
    {firstName:'Svetlana', lastName:'Kirilenka', classes:[], from:'Russia', age:27, languages:['ru','iw']},
    {firstName:'Moishe', lastName:'Mishu', classes:[], from:'Israel', age:25, languages:['iw','en']},
    {firstName:'Mendel', lastName:'Mishu', classes:[], from:'Israel', age:24, languages:['iw','en']},
    {firstName:'Menachem', lastName:'Mishu', classes:[], from:'Israel', age:26, languages:['iw','en']}
];

// note to the confused:: iw == hebrew (ע ~= i ו ~= w) it's part of ISO 639, so you'll see it sometimes. 'he' is also valid
// google still uses it in translate.google.com urls (+ some DBs etc), so you may as well know what it is.
// your complaints are legitimate. The guy who made it up in nineteen sixty whatever apologizes.

var classes = [
    {name:'Political Science', limit:4, students:[], languages:['en','ru']},
    {name:'Math', limit:3, students:[], languages:['iw']},
    {name:'Computer Science', limit:5, students:[], languages:['en']},
    {name:'Physics', limit:10, students:[], languages:['iw', 'en']}
];


classes[0].students.push(students[0]);
students[0].classes.push(classes[0]);

// test #1

// student should alter a few fields, calculate whether courses are full

// test #2

// student should write some functions which add / check / remove students, alter courses

// test #3

// student should do all of that using member functions on the objects






function showResult(msg, passed){
    console.dir(msg);
    document.getElementById('results-container').innerHTML += '<p>'+msg+'</p>';
}
