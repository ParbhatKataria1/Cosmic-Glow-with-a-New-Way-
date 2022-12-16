// ----------fething data for payment cards-------------

let cod = document.querySelector(".payment_type_7");
cod.addEventListener("click",function(){
    cod.style.backgroundColor="white";
    cod.style.borderRadius="10px";
    cod.style.paddingLeft="15px";
let cod_data = document.querySelector(".payment_render_data");
//  cod_data.innerHTML="";
let render_cod = `<div class="payment_checkout">
<img width="20%" src="https://cdn-icons-png.flaticon.com/512/2182/2182526.png" alt="">
<p>Cash On Delivery</p>
<p>We recommend using a digital payment method for completing the payment</p>
<button>PAY (₹799.00) BY CASH</button>
</div>`
// console.log(render_cod)
cod_data.innerHTML=render_cod;

})



let upi = document.querySelector(".payment_type_1");
upi.addEventListener("click",function(){
    upi.style.backgroundColor="white";
    upi.style.borderRadius="10px";
    upi.style.paddingLeft="15px";
let upi_data = document.querySelector(".payment_render_data");
//  cod_data.innerHTML="";
let render_upi = `<div class="upi_payment">
<p>Transfer Money From Your Bank Account Using UPI With Your Registered VPA</p>
<div>
    <img src="https://miro.medium.com/max/1000/0*BIy_CblCTVoOl5Zg" alt="">
</div>

<input type="text" placeholder="Enter UPI ID*" required>
<button>PROCEED TO PAYMENT</button>
</div>`
// console.log(render_cod)
upi_data.innerHTML=render_upi;

})


let zest = document.querySelector(".payment_type_4");
   zest.addEventListener("click",function(){
    zest.style.backgroundColor="white";
    zest.style.borderRadius="10px";
    zest.style.paddingLeft="15px";
    let zest_money =document.querySelector(".payment_render_data");
    let zest_data = `<div class="cardless_emi">
    <div>
       <img width="30%" src="https://media.glassdoor.com/sqll/1148490/zest-money-squarelogo-1451471971613.png" alt="">
       <div>ZestMoney</div>
       <div>
           <input id="zest_checkbox" type="radio" name="radio">
       </div>
   </div>
   <button id="zest_button">PROCEED TO PAYMENT</button> 
  </div>`
console.log(zest_data)
zest_money.innerHTML=zest_data;

})

let cards=document.querySelector(".payment_type_2");
cards.addEventListener("click",function(){
    cards.style.backgroundColor="white";
    cards.style.borderRadius="10px";
    cards.style.paddingLeft="15px";
    let cards_data = document.querySelector(".payment_render_data");
    let render_cards = `<div class="debit_card">
    <div>
        <img src="https://cerditcards.files.wordpress.com/2014/06/cer.jpg" alt="">
        <p>Credit/Debit Card</p>
    </div>
    <div>
        <span>We accept</span>
        <img width="10%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq27fUcyHhIp3iqgHoM3Vkt2dvmcs-Fu7QbQ&usqp=CAU"
            alt="">
        <img width="6%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72lFiqQfoPvqLHKHwj2SCTHYh52Rgr3eWJw&usqp=CAU"
            alt="">
        <img width="5%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbagnT43huu18rmXi4yV53YtbAUYJEAe7cA&usqp=CAU"
            alt="">
        <span>& more</span>
    </div>
    <input type="text" placeholder="Card Number" required>
    <input type="text" placeholder="Card Holder Name" required>
    <div class="debit_inputs">
        <input type="text" placeholder="Expiry(MM/YY)*" required>
        <input type="text" placeholder="CVV*" required>
    </div>
    <button>PROCEED TO PAYMENT</button>
</div>`

cards_data.innerHTML = render_cards;


let checkout_button = document.querySelector(".debit_card >button");
checkout_button.addEventListener("click",function(){
    alert("Your Order has been placed");
    window.location.href="index.html"
})


})






