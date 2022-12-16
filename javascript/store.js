// https://wild-red-mackerel-tux.cyclic.app/posts

const posts_data = "https://wild-red-mackerel-tux.cyclic.app/posts?_limit=10";

let main = document.querySelector("#page-content-data-scroll");
let search_box = document.querySelector("#page-content-data-search input")


window.addEventListener('load', (event) => {
    map_data_info()
});


async function map_data_info(){
    try {
        let data = await fetch(posts_data);

        if(data.ok){
            data = await data.json();
            render_map_info(data)
        }
        // console.log(data)
    } catch (error) {
        console.log("error in fetching")
    }
}

function render_map_info(data){
    let newdata = data.map((item)=>{
        return `
        <div class="page-content-item">
                    <div>
                        <img src="${item.image}" alt="">
                    </div>
                    <div>
                        <h3>${item.title}</h3>
                        <h3>${item.body.substring(0, 75)+"..."}</h3>
                        <div>
                            <p>View on Google Map</p>
                            <p>share</p>
                        </div>
                    </div>
                </div>
        `
    }).join(" ");
    main.innerHTML = newdata;
}

search_box.addEventListener("oninput", async ()=>{
    try {
        console.log(search_box)
        let data = await fetch(posts_data);
        if(data.ok){
            data = await data.json();
            let value = search_box.value;
            // console.log(value)
            let newdata = data.filter((item)=>{
                return item.title.toLowerCase().includes(value.toLowerCase())
            })
            console.log(newdata)
            render_map_info(newdata)
        }
    } catch (error) {
        
    }
})

