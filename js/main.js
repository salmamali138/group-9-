
// Set the date we're counting down to
var countDownDate = new Date("Jun 9, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the number of days from now until the date
  var timeInbetween = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeInbetween / (1000 * 60 * 60 * 24)); // get number of seconds in the days left
  var hours = Math.floor((timeInbetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // get number of hours in the days left
  var minutes = Math.floor((timeInbetween % (1000 * 60 * 60)) / (1000 * 60)); // get number of minutes in the days left
  var seconds = Math.floor((timeInbetween % (1000 * 60)) / 1000); // get number of seconds in the days left

  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerText = "T minus " + days + " days " + hours + " hours "
  + minutes + " minutes and " + seconds + " seconds till we get to Inazuma ";

  // If the count down is over, write some text
  if (timeInbetween < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerText = "The gates of Inazuma are open!";
  }
}, 1000);


var username = prompt("Hello there! Please enter your name: ");

if (username === "") {
  console.log("The user entered nothing");
  alert("You didn't enter you name ");
  document.getElementById("printName").innerText = "Traveler";
}
else {
  console.log("The user entered: " + username);
  document.getElementById("printName").innerText = username;
}

var today = new Date();
var day = String(today.getDate()).padStart(2, '0'); // add .padStart(2, '0') to add a 0 if the day num is 1 number - first value is a 0 thhen if there is a second value, make that a 0
var month = String(today.getMonth() + 1).padStart(2, '0'); // +1 because January is 0!
var year = today.getFullYear();

today = day + '/' + month + '/' + year;

console.log(`Today's date: ${today}` );
// document.getElementById("currentYear").innerText = year;

// function GetTime(){
//   var currentTime = new Date();
//   var hour = String(currentTime.getHours()).padStart(2, '0');
//   var minute = String(currentTime.getMinutes()).padStart(2, '0');
//   var second =String(currentTime.getSeconds()).padStart(2, '0');
//
//   // if(minute < 10){
//   //   minute += minute.).padStart(2, '0');
//   // }
//   //
//   // if(second < 10){
//   //   second = "0" + second
//   // }
//
//   var getCurrentTime = hour + ":" + minute + ":" + second + " ";
//
//   if(hour > 11) {
//     getCurrentTime += "p.m."
//   } else {
//     getCurrentTime += "a.m."
//   }
//
//   document.getElementById("now").innerHTML =  today + getCurrentTime;
//   setTimeout(GetTime, 1000) // keep updating every 1000 ms i.e every 1 sec
// }
//
// GetTime();


