
let temp = [-7, -0.4, 5.6, 13.4, 17.7, 21.3, 26.1];
let maxTemp = [0, 15, 20, 25,60];
let actionProducts = ["Forró csoki", "Meleg tea", "Süti", "Fagyi", "Limonádé"];
let days = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
let currentDate = new Date();
let currentDay = currentDate.getDay();
let selectedDay;

var showOffer = "A mai nap ajánlata a csúcshőmérséklet alapján: <br>"+ calcProducts(temp[currentDay]);

showTime();
calcMin();
calcMax();
calcAvg();
function showTime() {

    currentDate = new Date;
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    hours = (hours < 10 ? '0' + hours : hours);
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    seconds = (seconds < 10 ? '0' + seconds : seconds);

    let showDay = document.querySelector("span.show-Day");

    showDay.innerHTML = "<br>" + days[currentDay] + "<br>" + currentDate.getFullYear() +
        "/" + currentDate.getMonth() + "/" + currentDate.getDate() + "<br>" + hours + ":" + minutes + ":" + seconds;

    setTimeout(showTime, 1000);
}


let todayTemp = document.querySelector("h3.today-temp");
todayTemp.innerHTML = temp[currentDay] + " &degC";


let dailyOffer = document.querySelector("span#daily-offer");
dailyOffer.innerHTML= showOffer;

 
function showDailyOffer() {
   selectedDay= document.querySelector("#weather-day").value;
 let selectedTemp = temp[selectedDay];
alert( "A kiválasztott nap ajánlata a csúcshőmérséklet alapján:"+ calcProducts(selectedTemp));
}

function calcProducts(value){
    console.log(value);
    for (let i = 0; i < maxTemp.length; i++){
    if(value < maxTemp[i]){
        return actionProducts[i];
        break;
    } 
}
}

function calcMin(){
    let minTemp = temp[0];
    console.log(minTemp);
    for(let i=0; i < temp.length;i++){
        if(temp[i] < minTemp){
            console.log(temp[i]);
            minTemp = temp[i];
            console.log(minTemp);
        }
    } 
    document.querySelector("span#tempMin").innerHTML = "<br>"+ minTemp+ " &degC";
}

function calcMax(){
    let maxTemp = temp[0];
    console.log(maxTemp);
    for(let i=0; i < temp.length;i++){
        if(temp[i] > maxTemp){
            console.log(temp[i]);
            maxTemp = temp[i];
            console.log(maxTemp);
        }
    } 
    document.querySelector("span#tempMax").innerHTML = "<br>"+ maxTemp+ " &degC";
}

function calcAvg(){
    let avgTemp = 0;
    console.log(avgTemp);
    for(let i=0; i < temp.length;i++){
            console.log(temp[i]);
            avgTemp += temp[i];
            console.log(avgTemp);
    } 
    avgTemp = avgTemp/7;
    document.querySelector("span#tempAvg").innerHTML = "<br>"+ avgTemp.toFixed(2)+ " &degC" ;
} 