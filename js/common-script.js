$(window).load(function() {
    $(".site-loder").delay(100).fadeOut('slow');
});


function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 500,
            header = document.querySelector("header .navbar");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();


$(function() {
    // drow down menu
    $('header .navbar .dropdown').hover(function() {
        $(this).children('ul').fadeToggle('fast');
    });

    $('header .dropdown > a').click(function(e) {
        e.preventDefault();
    })

    var link = $('header .nav li > a:not(".dropdown > a")');

    link.click(function() {
         $('header .navbar-collapse').removeClass('in');
    });

    var clock;

clock = $('#countdown').FlipClock({
    clockFace: 'DailyCounter',
    autoStart: false,
    minimumDigits: 9,
    callbacks: {
        stop: function() {
            $('.message').html('The clock has stopped!')
        }
    }
});
 var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

// ISTTime now represents the time in IST coordinates

var hoursIST = ISTTime.getHours()
var minutesIST = ISTTime.getMinutes()
   
//var ts = new Date("Apr 16, 2018 "+hoursIST+":"+minutesIST);

var ts = moment.tz("2020-01-19 00:00", "Asia/Kolkata");
var date_now = moment().tz("Asia/Kolkata")
var seconds = Math.floor((ts - (date_now))/1000);

if(seconds<0)
{
  seconds = 0;
}

clock.setTime(seconds);
clock.setCountdown(true);
clock.start();

});