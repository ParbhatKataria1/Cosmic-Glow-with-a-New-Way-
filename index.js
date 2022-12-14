let imgTopSlideShow = [ "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff8a41835-0598-46e8-ba2c-72e885291eb0.jpg&w=1920&q=75"
  ,"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1e69c5f7-2df9-4c42-bf08-22b6b68779e0.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa7bfdf05-ad0e-4c24-ab48-7ff64e9115b8.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F34d52684-19de-435e-bbde-86d09bf08c19.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F61085ebd-495f-470b-a54c-02c2569df51b.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbcd1e4c1-fbaa-486c-86ed-07048ad3a3f9.jpg&w=1920&q=75" 
] ;
let count = 1 ;
let imageTop = document.getElementById("showImg") ;
let slide_show_Top = ()=>{
   imageTop.src = imgTopSlideShow[count] ;
   count++ ;
   if(count==5){
    count = 0 ;
   }
   
} 
setInterval( slide_show_Top , 4500 ) ;
