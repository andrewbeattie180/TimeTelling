
function tellTime() {
    let date = new Date(); //date objects are created with new Date();
    let hour = date.getHours(); //returns the hour (0-23)
    let minute =date.getMinutes(); //returns the minutes (0-59)
    let second = date.getSeconds(); //returns the seconds (0-59)
    let amPM =hour >=12?'PM':'AM';
    hour = hour%12;
    hour = hour?hour:12;
    
    if (hour<10){
        hour = '0'+hour; //2 digit time at all times
    }
    if (minute<10){
        minute = '0'+minute;//2 digit minutes at all times
    }
    if (second<10){
        second = '0'+second;//2 digit seconds at all times
    }
    let time = hour+":"+minute+":"+second+" "+amPM;

    document.querySelector('.digitalClock').textContent=time;
    setTimeout(tellTime,1000); //tellTime is called every 1000 milliseconds
}

tellTime();

function clockHands(){
    const hourHand = document.querySelector('.hour-hand'); //pulls the hour hand from html
    const minHand = document.querySelector('.min-hand'); //pulls the min hand from html
    const secHand = document.querySelector('.second-hand') //pulls the second hand from html

    let date = new Date(); 
    let hour = date.getHours(); 
    let minute = date.getMinutes(); 
    let second = date.getSeconds(); 

    let hourPosition = hour*360/12+((minute*360/60)/12); //divide clock into 12 segments, plus a little more dependent on the position of the second hand
    let minPosition = (minute*360/60)+(second*360/60)/60; //divide clock into 60 segments, plus a little more dependent on second hand position
    let secPosition = second*360/60; //divide clock into 60 segments

    hourHand.style.transform = "rotate("+hourPosition+"deg)";
    minHand.style.transform = "rotate("+minPosition+"deg)";
    secHand.style.transform = "rotate("+secPosition+"deg)";

    setTimeout(clockHands,1000);


}
clockHands();