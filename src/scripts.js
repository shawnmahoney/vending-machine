

// Handle candy removals
var candy = document.getElementsByClassName("candy");

var snickerGone = function() {candy[0].innerHTML = ""; decrementValue()};
var babyruthGone = function() {candy[1].innerHTML = ""; decrementValue()};
var twixGone = function() {candy[2].innerHTML = ""; decrementValue()};


candy[0].addEventListener('click', snickerGone, false);
candy[1].addEventListener('click', babyruthGone, false);
candy[2].addEventListener('click', twixGone, false);


// Handle credit value
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 0);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}



// Test decrement value
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 0);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}




// Trying a self-invoking function
// How can I Prevent a negative value ????? Currently the user must press ENTER key to activate this function
var numberChecker = document.getElementById("number");

var checkForZero = (function() {
	if (numberChecker.value < 1) {
	numberChecker.value = 0;
	}
})();

numberChecker.addEventListener('onblur', checkForZero, false);


// Trying to prevent page from refreshing
document.getElementById('vendingForm').addEventListener('submit', function(e) {
    search(document.getElementById('number'));
    e.preventDefault();
}, false);


