
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var globalDate = new Date();
var dayIndex = globalDate.getDay();
var monthIndex = globalDate.getMonth();

var day = days[dayIndex];
var date = globalDate.getDate();
var month = months[monthIndex]

document.querySelector('#setDay').innerHTML = `${day} ${date} ${month}`;


function mainFunc(){
  var d = new Date(); // for now
  var hr = d.getHours() // => 9
  var min = d.getMinutes(); // =>  30
  if(min<10){
    document.querySelector('#setTime').innerHTML  = hr + ':0' + min;
  }
  else{
    document.querySelector('#setTime').innerHTML  = hr + ':' + min;
  }
  
  // console.log(hr + ':' + min)
}


window.load = setInterval(mainFunc,999);
