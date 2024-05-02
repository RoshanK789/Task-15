//* getting the tag 
const main=document.querySelector(".main");
const btn=document.querySelector(".btn");
const quote=document.querySelector(".quote");

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