$(function(){
    // return an array of phantom event calls

    window.__phantomCommands = [];

    window.scope = {
	t11:window.pants,
	t12:!window.rainingOutside,
	t13:window.bagsPacked && window.hasTickets,
	t14:window.tie || (!window.needsTie),

	t21:window.needsShirt && window.needsTie,
	t22:!window.gettingReady,
	t23:(window.shirt && window.tie && window.pants) && (!window.hat)
    }



    //expected results
    window.__exp = {
	t11:{val:true, success:'success', failure:'failure'},
	t12:{val:true, success:'success', failure:'failure'},
	t13:{val:true, success:'success', failure:'failure'},
	t14:{val:true, success:'success', failure:'failure'}
    };

    window.__testversion = 1;

});
