function date_system(){
// date system
let dt= new Date();
console.log("la date de systéme est " +dt);
//current day
// adjust 0 before single digit date
let date = ("0" + dt.getDate()).slice(-2);
// current month
let month = ("0" + (dt.getMonth() + 1)).slice(-2);
// current year
let year = dt.getFullYear();
// current hours
let hours = dt.getHours();
// current minutes
let minutes = dt.getMinutes();
// current seconds
let seconds = dt.getSeconds();
//current name of the day 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
days.forEach((day,date)=>{
    if(date == new Date().getDay()){
        console.log("Today is "+day)}
    })
// date (YYYY-MM-DD) format
console.log(year + "-" + month + "-" + date);
// time (YYYY-MM-DD HH:MM:SS)
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
if((hours<=9)||(hours>=17)){
  console.log("Désolé l'application hors service. Il faut respecter le temps SVP ");
}
if(days=="Saturday"){
  console.log("Désolé l'application hors service. Il faut respecter les jours SVP ");}
if(days=="Sunday"){
    console.log("Désolé l'application hors service. Il faut respecter les jours SVP ");}
  }  