var isim=prompt("Lütfen isminizi giriniz:")
let myName=document.querySelector("#myName")
myName.innerHTML=`${isim}`

const days=["pazar","pazartesi","salı","carsamba","perşembe","cuma","cumartesi"];

function showTime(){
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    document.querySelector("#myClock").innerHTML=`${hour} :${minute} : ${second} ${day}`
}

setInterval(showTime,1000);
showTime();