

// Handle candy removals
var candy = document.getElementsByClassName("candy");

var snickerGone1 = function() {candy[0].innerHTML = "Snicker 1 Gone!";};
var snickerGone2 = function() {candy[1].innerHTML = "Snicker 2 Gone!";};
var snickerGone3 = function() {candy[2].innerHTML = "Snicker 3 Gone!";};


candy[0].addEventListener('click', snickerGone1, false);
candy[1].addEventListener('click', snickerGone2, false);
candy[2].addEventListener('click', snickerGone3, false);




// Handle credit value
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 5);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
