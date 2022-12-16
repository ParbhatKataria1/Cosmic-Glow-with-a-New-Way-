const sliderURl = "https://6369e3cdc07d8f936d8db99f.mockapi.io/career"
const mainSection = document.querySelector("#bestSellCards");
const left_arrow = document.querySelector("#arrow-left");
const right_arrow = document.querySelector("#arrow-right")

let countSlider = 0;
let newdata;
window.addEventListener("load", ()=>{
    fetchdata();
})

async function fetchdata(){
    try {
        let data = await fetch(sliderURl);
        data = await data.json();
        newdata = data;
        console.log(data)
        forCardData()
    } catch (error) {
        alert("unable to fetch the data")
    }
}


function forCardData(){
    let arr = [];
    let i = 0;
    while(i<4){
        arr.push(renderCard(countSlider+i++))
    }
    // console.log(arr)
    mainSection.innerHTML = arr.join(" ")
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
    <div id="heart-icon">
        <div>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
        </div>

        <button>CHOOSE PRODUCT</button>
    </div>
</div>
    `
}

left_arrow.addEventListener("click", ()=>{
    countSlider--;
    if(countSlider<0)countSlider = newdata.length-1;
    forCardData();
})

right_arrow.addEventListener("click", ()=>{
    countSlider++;
    console.log(countSlider)
    countSlider = countSlider%newdata.length;
    forCardData();
})





