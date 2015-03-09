
$(document).ready(function(){

  function timeCounter(){
    // set the date we're counting down to
    var target_date = new Date("Mar 27, 2015").getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = document.getElementById("countdown");
    var daysField = document.getElementById("countdown-days");
    var hoursField  = document.getElementById("countdown-hours");
    var minutesField  = document.getElementById("countdown-minutes");;
    var secondsField  = document.getElementById("countdown-seconds");;


    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // format countdown string + set tag value
        daysField.innerHTML = days;
        hoursField.innerHTML = hours;
        minutesField.innerHTML = minutes;
        secondsField.innerHTML = seconds;


    }, 1000);

  }

  timeCounter();


});

var hi = new Vivus('hi', {type: 'delayed', duration: 200, start: 'autostart', forceRender: false, dashGap: 20}, function () {
  if (window.console) {
    console.log('Animation finished. [log triggered from callback]');
  }
})

$(".content").delay(3000).fadeIn("slow");


WebFontConfig = {
  google: { families: [ 'Open+Sans:300'] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
