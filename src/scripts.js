

// Throw and alert when user clicks the ADD A CREDIT button
document.getElementById("credit-button").addEventListener("click", function(){
    alert("You added 1 credit. Now go click some candy!");
});


// Throw and alert when user clicks a Snickers bar
/*document.getElementsByClassName("candy").addEventListener("click", function(){
    alert("Delicious choice!");
});*/


function myFunction() {
    var x = document.getElementsByClassName("candy");
    x[0].innerHTML = "Hello World!";
}
