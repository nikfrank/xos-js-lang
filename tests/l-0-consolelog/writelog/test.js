$(function(){
    // return an array of phantom event calls

    window.__phantomCommands = [];

    window.scope = {numlogs:0};


    var script = $('#userscript')[0].innerHTML;

    // regexp out the console.log statements, check that they eval to strings

    window.scope.logs = script.match(/console\.log(.*)/g);

    for(var i=0; i<window.scope.logs.length; ++i){
	try{
	    if(typeof eval(window.scope.logs[i].slice(12, -2).replace('\\','\\\\\\')) === 'string') ++window.scope.numlogs;
	}catch(e){}
    }

    //expected results
    window.__exp = {
	'numlogs':{val:4, success:'added correctly', failure:'added poorly'}
    };

    window.__testversion = 1;

});
