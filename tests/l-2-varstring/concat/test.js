$(function(){
    // return an array of phantom event calls

    window.__phantomCommands = [];

    window.scope = {name:window.name};

    //expected results
    window.__exp = {
	'name':{val:'Jerry Seinfeld', success:'altered string', failure:'didnt alter string'}
    };

    window.__testversion = 1;

});
