$(function(){
    // return an array of phantom event calls

    window.__phantomCommands = [];

    window.scope = {age:window.age};

    //expected results
    window.__exp = {
	age:{val:36, success:'altered string', failure:'didnt alter string'}
    };

    window.__testversion = 1;

});
