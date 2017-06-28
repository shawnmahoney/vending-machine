
// Initialize value of 'number' input aka Credit Value
document.getElementById('number').value = 0;


// Handle candy removals
var candy = document.getElementsByClassName("candy");

var snickerGone = function() {candy[0].innerHTML = ""};
var babyruthGone = function() {candy[1].innerHTML = ""};
var twixGone = function() {candy[2].innerHTML = ""};


candy[0].addEventListener('click', decrementValueSnickers, false);
candy[1].addEventListener('click', decrementValueBabyRuth, false);
candy[2].addEventListener('click', decrementValueTwix, false);


// Increment Credit Value
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 0);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}


// Evaluate Credit Value and decrement value - handle Snickers
function decrementValueSnickers() {

    if (document.getElementById('number').value < 1)
    {alert('Add Money!')}

    else

    {
        var value = parseInt(document.getElementById('number').value, 0);
        value = isNaN(value) ? 0 : value;
        value--;
        document.getElementById('number').value = value;
        snickerGone();
    }
}


// Evaluate Credit Value and decrement value - handle Baby Ruth
function decrementValueBabyRuth() {

    if (document.getElementById('number').value < 1)
    {alert('Add Money!')}

    else

    {
        var value = parseInt(document.getElementById('number').value, 0);
        value = isNaN(value) ? 0 : value;
        value--;
        document.getElementById('number').value = value;
        babyruthGone();
    }
}


// Evaluate Credit Value and decrement value - handle Twix
function decrementValueTwix() {

    if (document.getElementById('number').value < 1)
    {alert('Add Money!')}

    else

    {
        var value = parseInt(document.getElementById('number').value, 0);
        value = isNaN(value) ? 0 : value;
        value--;
        document.getElementById('number').value = value;
        twixGone();
    }
}


