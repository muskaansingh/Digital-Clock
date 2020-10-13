function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var am_pm = "AM";

    if(hour > 12)
    {
        hour = hour - 12;
        am_pm = "PM";
    }

    if(hour == 0)
    {
        hour = 12;
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    

    var timeDisplay = hour + ":" + minutes + ":" + seconds + " " + am_pm;
    document.getElementById("myClock").innerHTML = timeDisplay;

    setTimeout(showTime, 1000);
}

showTime();