let my_cart_data = JSON.parse(localStorage.getItem("cartProducts"))||[];


if(my_cart_data.length>=1){
    window.location.href="item_cart.html";
}


