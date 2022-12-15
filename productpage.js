let url = "https://636b29f3c07d8f936daf511e.mockapi.io/newroduct";

let productData = null;
let data = [];

let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || []

async function fetchData(){

    try {
        productData = await fetch(url).then((res)=>res.json());
        // console.log(productData)
        data = [...productData]
        displayData(productData)
    } catch (error) {
        console.log("bad request")
    }
}
fetchData()



function displayData(allData){
      
    document.querySelector("#products_grid").innerHTML = null;
    
    allData.forEach((element,index) => {
    
    let div1 = document.createElement("div");
    

    let image_tag = document.createElement("img");
    image_tag.src = element.link;

    let brand_tag  = document.createElement("p");
    brand_tag.innerText = element.title;

    let price_tag = document.createElement("h3");
    price_tag.innerText = "$" + element.price;

    let des = document.createElement("h5");
    des.innerText = element.offer;
    

    let cat = document.createElement("h6");
    cat.innerText = element.category;

    let btn = document.createElement("button");
    btn.innerText ="Add To Cart";
    btn.addEventListener("click",function(){
      cartItems.push(element)
      localStorage.setItem("cartProducts",JSON.stringify(cartItems))

      alert("Product Added To Cart")
    })
    

    div1.append(image_tag,brand_tag,price_tag,des,btn)

    document.querySelector("#products_grid").append(div1);

    });
    
  }

  // sorting function---------

  function sorting(productData){

    let td1 = document.getElementById("rel");
    let td2 = document.getElementById("LTH");
    let td3 = document.getElementById("HTL");

    if(td1.checked==true){
      fetchData()
      
    } 
    if(td2.checked==true){
      data.sort((a,b)=> a.price-b.price)
      displayData(data)
      

    } 
     if (td3.checked==true){
      data.sort((a,b)=> b.price-a.price)
      displayData(data)

    }

  }

// sidebar JS

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

   
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}