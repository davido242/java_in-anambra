// alert('Welcome Brov!!');
// alert('Wadup Brow??');

// var x = 10;
// var y = 2;
// var z = x + y;
// document.getElementById('boy').innerHTML = z;


function myLolz() {
  document.getElementById("demo").innerHTML = "Davido";
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("myImg").className = "slideUp";
  }
}

function mylove() {
   var x = document.getElementById("myInput");
   document.getElementById("demo2").innerHTML = "You are searching for: " + x.value;
}
function myFunt() {
  alert("Submitted  Successfully!");
}
var myVar = setInterval(myTimer, 1000);

// time
function myTimer() {
  var d = new Date();
  document.getElementById("demon").innerHTML = d.toLocaleTimeString();
}


// Count Down Shiit


// Set the date we're counting down to
var countDownDate = new Date("Jan 22, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo3").innerHTML = "EXPIRED";
  }
}, 1000);

