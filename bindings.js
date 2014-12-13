var currentCustomer = -1;
var currentMenuItem = -1;
var currentMenuOption = -1;
var currentOrderItem = -1;

var currentOrder = [];

setTimeout(function(){
   
    // shit html into the customers container
    var cc = document.getElementById('customer-container');

    for(var i=customers.length; i-->0;){
	cc.innerHTML += '<p onclick="changeCustomer('+i+')" id="customer-'+i+'">'+
	    customers[i].firstName + ' ' + customers[i].lastName + '</p>';
    }

    // shit html into the menu container

    var mc = document.getElementById('menu-container');

    var numenu = '';

    numenu += '<ul>';

    for(var i=menu.length; i-->0;){
	numenu += '<li onclick="setMenuItem('+i+')" id="menu-item-'+i+'">' +
	    menu[i].name + ': ₪' + menu[i].price;

	if(menu[i].options.length){
	    numenu += '<ul>';
	    for(var j=menu[i].options.length; j-->0;){
		numenu += '<li onclick="setMenuOption('+j+')" id="menu-item-'+i+'-option'+j+'">' +
		    menu[i].options[j].name + ': ₪' + menu[i].options[j].price + '</li>';
	    }
	    numenu += '</ul>';
	}
	
	numenu += '</li>';
    }

    numenu += '</ul>';

    mc.innerHTML = numenu;

}, 0);

// DRY this code. ugly.
function changeCustomer(index){
    if(currentCustomer !== -1)
	document.getElementById('customer-'+currentCustomer).style.border = 'none';
    currentCustomer = index;
    if(index !== -1)
	document.getElementById('customer-'+index).style.border = '1px solid red';

    bindOrder();
}

function setMenuItem(index){
    if(currentMenuItem !== index) setMenuOption(-1);
    if(currentMenuItem !== -1)
	document.getElementById('menu-item-'+currentMenuItem).style.border = 'none';
    currentMenuItem = index;
    if(index !== -1)
	document.getElementById('menu-item-'+index).style.border = '1px solid red';
}

function setMenuOption(index){
    if((currentMenuOption !== -1) && (currentMenuItem !== -1))
	document.getElementById('menu-item-'+currentMenuItem+'-option'+currentMenuOption).style.border = 'none';
    if(currentMenuItem !== -1)
	currentMenuOption = index;
    if((currentMenuOption !== -1) && (index !== -1) && (currentMenuItem !== -1))
	document.getElementById('menu-item-'+currentMenuItem+'-option'+index).style.border = '1px solid red';
}

function setOrderItem(index){
    if(currentOrderItem !== -1)
	document.getElementById('order-item-'+currentOrderItem).style.border = 'none';
    currentOrderItem = index;
    if((currentOrderItem !== -1) && (index !== -1))
	document.getElementById('order-item-'+currentOrderItem).style.border = '1px solid red';
}

function addItem(){
    // add the current Item and option(s) to the currentOrder

    if((currentCustomer === -1) || (currentMenuItem === -1)) return; //alert error
    // maybe ask that the customer doesn't want an option

    var nuitem = JSON.parse(JSON.stringify(menu[currentMenuItem]));

    if(currentMenuOption !== -1)
	nuitem.options =
	[JSON.parse(JSON.stringify(menu[currentMenuItem])).options[currentMenuOption]];
    else
	nuitem.options = [];

    nuitem.customer = currentCustomer;

    currentOrder.push(nuitem);

    setMenuItem(-1);
    setMenuOption(-1);

    bindOrder();
}

function removeItem(){
    // remove currentOrderItem from the order
    if(currentOrderItem === -1) return;

    currentOrder.splice(currentOrderItem, 1);

    setOrderItem(-1);

    bindOrder();
}

function bindOrder(){
    var oc = document.getElementById('order-container');

    oc.innerHTML = '';
    for(var i=currentOrder.length; i-->0;){
	if(currentOrder[i].customer !== currentCustomer) continue;

	oc.innerHTML += '<p onclick="setOrderItem('+i+')" id="order-item-'+i+'">'+
	    currentOrder[i].name + ': ₪' + currentOrder[i].price +
	    currentOrder[i].options.reduce(function(p,c){
		return p + '<br/>' + c.name + ': ₪' + c.price
	    }, '') +
	    '</p>';
    }
}


function placeOrder(){
    // order(currentCustomer, currentOrder.filter(currentCustomer))
    document.getElementById('invoice-container').innerHTML = '';
    if(currentCustomer === -1) return;

    var price = order(currentCustomer, currentOrder.filter(function(m){
	return m.customer === currentCustomer
    }));

    // alert with the total price

    document.getElementById('invoice-container').innerHTML = 'Total: ₪'+price;

    // clear the items, bindOrder

    currentOrder = currentOrder.filter(function(m){
	return m.customer !== currentCustomer;
    });

    bindOrder();

}
