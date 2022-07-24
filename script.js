///question 1 

let accessId=document.getElementById("text").innerHTML="ID name text";
console.log(accessId);

///question 2

let accessH1=document.getElementsByTagName("h1")[1].innerHTML="tag name h1";


///question 3

let accessClass=document.getElementsByClassName("box")[0].innerHTML="class name box"


///question 4

let accessClass1=document.getElementsByClassName("hello")[0].innerHTML="hello world"


///question 5
let accessCard=document.getElementById("threecards");
let dirchang=()=>{
    accessCard.style.flexDirection="column"




}

///question 6 
 let accessId2=document.getElementById("heading").style.color="red";



 ///question 7


 let accessId3 =document.getElementById("hellow1");
 let changtext=()=>{
    accessId3.innerText="Welcome to Elevation academy";
    accessId3.style.marginLeft="30%"



 }


 ///question 8

 let digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    let hours1= hours % 12 || 12;
  
    hours1=(hours1<10)?"0"+ hours1 :hours1;
    minutes=(minutes<10)?"0"+ minutes :minutes;
    seconds=(seconds<10)?"0"+ seconds :seconds;
    
    let amOrpm = hours >= 12 ? "PM" : "AM";
  
    document.getElementById("hours").innerHTML = hours1;
    document.getElementById("munites").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amOrpm;
  
    setTimeout(digitalClock, 1000);
  };
  digitalClock();

  ///question 9


  let year = document.getElementById("allyear");
  
  
  let chang=()=>{
      document.getElementById('selectedyear').innerText =year.options[year.selectedIndex].text;

  }