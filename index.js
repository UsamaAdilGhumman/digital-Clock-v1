function timeInPakistan(){
    const date = new Date();
    var h = 0;
    var str = "AM";
    if(date.getHours()>12){
        h = date.getHours()-12;
        str = "PM";
    }
    else{
        h = date.getHours();
    }
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<10){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if(s<10){
        s = "0"+s;
    }
    document.getElementById("PakClock").innerText = h + " : " + m + " : " + s +" " + str;
}
function InternationalTime(){
    const date = new Date();
    var h = 0;
    var str = "AM";
    h = date.getHours();
    if(h>12){
        str = "PM";
    }
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<10){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if(s<10){
        s = "0"+s;
    }
    document.getElementById("InterClock").innerText = h + " : " + m + " : " + s +" " + str;
}

document.getElementsByTagName("div")[0].style.margin = "50px 0px 0px 140px";
document.getElementsByTagName("h1")[0].style.fontSize = "100px";
document.getElementsByTagName("h1")[1].style.fontSize = "100px";

setInterval(timeInPakistan, 1000);
setInterval(InternationalTime, 1000);