const sliderURl = "https://6369e3cdc07d8f936d8db99f.mockapi.io/career"
const filled_heart = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>`
const empty_heart = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>`




const mainSection = document.querySelector("#bestSellCards");
const just_main_section = document.querySelector("#just_bestSellCards");
const buy_main_section = document.querySelector("#buy_bestSellCards");
const gift_main_section = document.querySelector("#gift_bestSellCards");
const super_main_section = document.querySelector("#super_bestSellCards");
const skin_main_section = document.querySelector("#skin_bestSellCards");
const merch_main_section = document.querySelector("#merch_bestSellCards");

const left_arrow = document.querySelector("#arrow-left");
const just_left_arrow = document.querySelector("#just-arrow-left");
const buy_left_arrow = document.querySelector("#buy-arrow-left");
const gift_left_arrow = document.querySelector("#gift-arrow-left");
const super_left_arrow = document.querySelector("#super-arrow-left");
const skin_left_arrow = document.querySelector("#skin-arrow-left");
const merch_left_arrow = document.querySelector("#merch-arrow-left");

const right_arrow = document.querySelector("#arrow-right");
const just_right_arrow = document.querySelector("#just-arrow-right");
const buy_right_arrow = document.querySelector("#buy-arrow-right");
const gift_right_arrow = document.querySelector("#gift-arrow-right");
const super_right_arrow = document.querySelector("#super-arrow-right");
const skin_right_arrow = document.querySelector("#skin-arrow-right");
const merch_right_arrow = document.querySelector("#merch-arrow-right");


const search_button = document.querySelector("#searchbtn");
const search_input = document.querySelector("#searchBar");



let countSlider = {a:0};
let justCountSlider = {a:0};
let buyCountSlider  = {a:0};
let giftCountSlider = {a:0};
let superCountSlider = {a:0};
let skinCountSlider = {a:0};
let merchCountSlider = {a:0};

let newdata;
window.addEventListener("load", ()=>{
    fetchdata();
})

async function fetchdata(){
    try {
        let data = await fetch(sliderURl);
        data = await data.json();
        newdata = data;
        //console.log(data)
        forCardData(mainSection, countSlider);
        forCardData(just_main_section, justCountSlider);
        forCardData(buy_main_section, buyCountSlider);
        forCardData(gift_main_section, giftCountSlider);
        forCardData(super_main_section, superCountSlider);
        forCardData(skin_main_section, skinCountSlider);
        forCardData(merch_main_section, merchCountSlider);
    } catch (error) {
        alert("unable to fetch the data")
    }
}

function forCardData(mainSection, countSlider){
    let arr = [];
    let i = 0;
    while(i<4){
        countSlider.a = (countSlider.a+i)>=newdata.length?0:countSlider.a
        arr.push(renderCard(countSlider.a+i++))
    }
    // console.log(arr)
    mainSection.innerHTML = arr.join(" ");
    like_button()

}

function renderCard(i){
    return `
    <div class="bestSellCardsItem">
    <div>
        <path d="M65 18H0V0h52.456L65 18Z" fill="#47AB3B" fill-opacity="0.7"></path>
        <img src="${newdata[i].img}" alt="">

    </div>
    <p>${newdata[i].description.substring(0, 30)}</p>
    <div>
        <h3>16 shades</h3>
        <h2>$${newdata[i].price}</h2>
    </div>
    <div class="heart-icon">
        <div data-id="0">
            ${empty_heart}
        </div>

        <button>CHOOSE PRODUCT</button>
    </div>
</div>
    `
}

left_arrow.addEventListener("click", ()=>{
    countSlider.a--;
    console.log(countSlider.a)
    if(countSlider.a<0)countSlider.a = newdata.length-4;
    forCardData(mainSection, countSlider);
})

right_arrow.addEventListener("click", ()=>{
    countSlider.a++;
   // console.log(countSlider)
   countSlider.a = countSlider.a%newdata.length;
    forCardData(mainSection, countSlider);
})

// for the just slider
just_left_arrow.addEventListener("click", ()=>{
    justCountSlider.a--;
    console.log(justCountSlider.a)
    if(justCountSlider.a<0)justCountSlider.a = newdata.length-4;
    forCardData(just_main_section, justCountSlider);
})

just_right_arrow.addEventListener("click", ()=>{
    justCountSlider.a++;
   // console.log(countSlider)
   justCountSlider.a = justCountSlider.a%newdata.length;
    forCardData(just_main_section, justCountSlider);
})


// for the buy slider
buy_left_arrow.addEventListener("click", ()=>{
    buyCountSlider.a--;
    console.log(buyCountSlider.a)
    if(buyCountSlider.a<0)buyCountSlider.a = newdata.length-4;
    forCardData(buy_main_section, buyCountSlider);
})

buy_right_arrow.addEventListener("click", ()=>{
    buyCountSlider.a++;
   // console.log(countSlider)
   buyCountSlider.a = buyCountSlider.a%newdata.length;
    forCardData(buy_main_section, buyCountSlider);
})


// for the gifting slider


gift_left_arrow.addEventListener("click", ()=>{
    giftCountSlider.a--;
    console.log(giftCountSlider.a)
    if(giftCountSlider.a<0)giftCountSlider.a = newdata.length-4;
    forCardData(gift_main_section, giftCountSlider);
})

gift_right_arrow.addEventListener("click", ()=>{
    giftCountSlider.a++;
   // console.log(countSlider)
   giftCountSlider.a = giftCountSlider.a%newdata.length;
    forCardData(gift_main_section, giftCountSlider);
})

// this is for the super slider

gift_left_arrow.addEventListener("click", ()=>{
    giftCountSlider.a--;
    console.log(giftCountSlider.a)
    if(giftCountSlider.a<0)giftCountSlider.a = newdata.length-4;
    forCardData(super_main_section, superCountSlider);
})

super_right_arrow.addEventListener("click", ()=>{
    superCountSlider.a++;
   // console.log(countSlider)
   superCountSlider.a = superCountSlider.a%newdata.length;
    forCardData(super_main_section, superCountSlider);
})


// this is for skin slider

skin_left_arrow.addEventListener("click", ()=>{
    skinCountSlider.a--;
    console.log(skinCountSlider.a)
    if(skinCountSlider.a<0)skinCountSlider.a = newdata.length-4;
    forCardData(skin_main_section, skinCountSlider);
})

skin_right_arrow.addEventListener("click", ()=>{
    skinCountSlider.a++;
   // console.log(countSlider)
   skinCountSlider.a = skinCountSlider.a%newdata.length;
    forCardData(skin_main_section, skinCountSlider);
})


// merch section

merch_left_arrow.addEventListener("click", ()=>{
    merchCountSlider.a--;
    console.log(merchCountSlider.a)
    if(merchCountSlider.a<0)merchCountSlider.a = newdata.length-4;
    forCardData(merch_main_section, merchCountSlider);
})

merch_right_arrow.addEventListener("click", ()=>{
    merchCountSlider.a++;
   // console.log(countSlider)
   merchCountSlider.a = merchCountSlider.a%newdata.length;
    forCardData(merch_main_section, merchCountSlider);
})







// console.log(heart_icon)
function like_button(){
    let likeButton_htmls = document.querySelectorAll(".heart-icon>div");
    for(let likeButton_html of likeButton_htmls){
        likeButton_html.addEventListener("click", (e)=>{
            let temp = likeButton_html.dataset.id;
            if(temp == 0){
                likeButton_html.innerHTML = `${filled_heart}`;
                likeButton_html.setAttribute('data-id' , '1');
                console.log(temp)

            }
            else if(temp==1){
                likeButton_html.innerHTML = `${empty_heart}`
                likeButton_html.setAttribute('data-id' , '0');
            }
            // console.log(e.target)
            forCardData()
        })
    }
}

// search_button.addEventListener("click", ()=>{

// })

const cart = document.querySelector("#cart");
cart.addEventListener("click", ()=>{
    window.location.href = "./cart.html"
})














// aditya's 

// let imgTopSlideShow = [ "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff8a41835-0598-46e8-ba2c-72e885291eb0.jpg&w=1920&q=75"
//   ,"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1e69c5f7-2df9-4c42-bf08-22b6b68779e0.jpg&w=1920&q=75" 
//  , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa7bfdf05-ad0e-4c24-ab48-7ff64e9115b8.jpg&w=1920&q=75" 
//  , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F34d52684-19de-435e-bbde-86d09bf08c19.jpg&w=1920&q=75" 
//  , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F61085ebd-495f-470b-a54c-02c2569df51b.jpg&w=1920&q=75" 
//  , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbcd1e4c1-fbaa-486c-86ed-07048ad3a3f9.jpg&w=1920&q=75" 
// ] ;
// let countTOP = 1 ;
// let imageTop = document.getElementById("showImg") ;
// let slide_show_Top = ()=>{
//    imageTop.src = imgTopSlideShow[countTOP] ;
//    countTOP++ ;
//    if(countTOP==5){
//       countTOP = 0 ;
//    }
   
// } 
// setInterval( slide_show_Top , 4500 ) ;
// // mid Interval 

// let imgmidSlideShow = [  
//    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9e2d8597-51d5-41be-95b0-aac4cc0e9794.gif&w=1920&q=75" ,
//    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F37471559-27d1-4509-9e31-29d889be7036.jpg&w=1920&q=75" ,
//    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff190c764-84cf-4eea-a381-8b701be65852.gif&w=1920&q=75" ,
//    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg&w=1920&q=75" ,
                     
//   ] ;
//   let countMID = 1 ;
// let imageMID = document.getElementById("showImgmid") ;
// let slide_show_mid = ()=>{
//    imageMID.src = imgmidSlideShow[countMID] ;
//    countMID++ ;
//    if(countMID==4){
//       countMID = 0 ;
//    }
   
// } 
// setInterval( slide_show_mid , 4500 ) ;

let storePath = document.getElementById("store") ;
 storePath.addEventListener("click" , ()=>{
   window.location.href = "store.html" ;
 })
 
let cartPath = document.getElementById("cart") ;
 cartPath.addEventListener("click" , ()=>{
   window.location.href = "./cart/empty_cart.html"   ;
 })

 let loginPath = document.getElementById("Login") ;
 loginPath.addEventListener("click" , ()=>{
   window.location.href = "log.html"   ;
 })


 let searchbtn = document.getElementById("searchbtn") ;
 searchbtn.addEventListener("click" , ()=>{
    let inputValue = document.getElementById("searchBar").value ;
//    sessionStorage.setItem("searched-history" , JSON.stringify(inputValue)) ;
//     let test = JSON.parse(sessionStorage.getItem("searched-history")) ;
    if( inputValue ){
        sessionStorage.setItem("searched-history" , inputValue ) ;
        window.location.href = "productpage.html"   ;
    }else{
       //alert("please write Something") ;
    //    searchBar
    let searchinput = document.getElementById("searchBar") ;
    searchinput.style.borderColor = "red" ;
    searchinput.placeholder = "Try 'Lipstick'..." ;
    }   
 });



    // let navbarFliter1 = document.querySelector(`#navFilters ul li:nth-child(1)`) ;
    // navbarFliter1.addEventListener("click" , ()=>{
    //   window.location.href = "productpage.html" ;
    // }) ;

//only working for first UL
    let navbarFliter2 = document.querySelectorAll(".subManu-make>ul>li") ;
    for( let i=0 ; i<navbarFliter2.length ; i++){
        navbarFliter2[i].addEventListener("click" , ()=>{
        
            window.location.href = "productpage.html" ;
          }) ;
    }
    // console.log( navbarFliter2)
    // navbarFliter2.addEventListener("click" , ()=>{
        
    //   window.location.href = "productpage.html" ;
    // }) ;


    // let navbarFliter3 = document.querySelector(`#navFilters ul>li:nth-child(3)`) ;
    // navbarFliter3.addEventListener("click" , ()=>{
    //   window.location.href = "productpage.html" ;
    // })


    // let navbarFliter4 = document.querySelector(`#navFilters ul>li:nth-child(4)`) ;
    // navbarFliter4.addEventListener("click" , ()=>{
    //   window.location.href = "productpage.html" ;
    // })


