let my_cart_data = JSON.parse(localStorage.getItem("cartProducts"))||[];
if(my_cart_data.length==0){
   window.location.href="empty_cart.html"
}

let bag;  //variable for storing total price of all items in cart.


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

// -----------------



function render_cart_data(){
   let cart1 = document.querySelector(".cart_detail");
   cart1.innerHTML="";
let new_array = my_cart_data.map((item)=>{
   return `<div>
   <img src="${item.link}" alt="">
   <div>
       <p>${item.title}</p>
       <p><span>$${Math.floor(Number(item.price))+500}</span>  $${Math.floor(item.price)}</p>
   </div>
   <i class="material-icons">&#xe872;</i>
     <div>
         <span  class="minus_icon">_</span>
         <span> &nbsp; 01  &nbsp</span>
         <span class="plus_icon">+</span>
      </div>
</div>`


})
cart1.innerHTML=new_array.join("");

// let plus_sign = document.querySelectorAll(".plus_icon");
// for(let i=0;i<plus_sign.length;i++){
//    plus_sign[i].addEventListener("click",function(){
// console.log("uhg")
//    })
// }


// let minus_sign = document.querySelectorAll(".minus_icon");
// for(let i=0;i<minus_sign.length;i++){
//    minus_sign[i].addEventListener("click",function(){
// console.log("uhg")
//    })
// }




// function del(item){
   let delete_carts = document.querySelectorAll(".material-icons");
   // console.log(delete_cart)
   for(let delete_cart of delete_carts){
      delete_cart.addEventListener("click",function(e){
         let title1 = e.target.parentNode.childNodes[3].childNodes[1].innerText;
         // console.log(title1)
         my_cart_data = my_cart_data.filter((ele)=>{
            return (title1!=ele.title);
         })
         localStorage.setItem("cartProducts",JSON.stringify(my_cart_data));
         location.reload();
      })
   }
   





let total_price = my_cart_data.reduce((acc,item)=>{
 return acc+Number(Math.floor(item.price));
},0)
bag=total_price;



// }

}


render_cart_data();

function render_price(){
   let x=document.querySelector("#amount_count");
   x.innerText=`$${bag}`;
   let y=document.querySelector("#amount_total");
   y.innerHTML=`$${bag+121}`;
   let z=document.querySelector(".bottomnavbar >div >button");
   z.innerHTML=`$${bag+121} PLACE ORDER`
}
render_price();






