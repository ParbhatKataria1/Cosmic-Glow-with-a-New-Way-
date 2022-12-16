let bonus=document.querySelector(".dropdown");
bonus.addEventListener("click",function(){
   let see_more = document.querySelector(".dropdown > div:last-child").innerText;
   if(see_more==="-see more"){
    document.querySelector(".dropdown > div:last-child").innerText="-see less"
    // render();
   }else{
    document.querySelector(".dropdown > div:last-child").innerText="-see more";
    // empty_render();
   }
})




// -----------way to payment page---------

let payment=document.querySelector(".bottomnavbar button");
payment.addEventListener("click",function(){
   window.location.href="pay.html";
})



