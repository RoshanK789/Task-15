//* getting the tag 
const main=document.getElementById("main");
const btn=document.getElementById("btn");
const quote=document.getElementById("quote");

//* api fetch:

const response=fetch("https://api.kanye.rest/");
response.then((data)=>data.json())
.then((ele)=>{
    quote.innerHTML=`${ele.quote} `
    main.append(quote,btn);
})
.catch((error)=>alert("There is no api data"));

//* Button for new quote
btn.addEventListener("click",()=>
{
    location.reload();
})  