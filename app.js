let btn=document.querySelector("button");
let div=document.querySelector(".weather");
let input=document.querySelector("#input")
let body=document.querySelector("body");




let msg=document.createElement("h1");

body.append(msg);
msg.innerHTML="";
msg.style.color="black";













async function data (){



    let citycode=`https://nominatim.openstreetmap.org/search?q=${input.value}&format=json`;

     

    let response=await fetch(citycode);
    let data= await response.json();

     let latitude=data[0].lat;
   let longitude= data[0].lon;

  

   

    let URL=`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto`;

    let response2=await fetch(URL);



    let tdata= await response2.json();

   
   
    let temp=tdata.current.temperature_2m;

      msg.innerHTML=`Tempreture of ${input.value} is ${temp} C `;






}







 

 

btn.addEventListener("click",()=>{





  try{

    if(input.value===""){


        alert("Plese Enter city ");
    }
else{

    data();

}
   
   
  }
  catch{


     
 

    alert("please Etner Valid city");

  }



});