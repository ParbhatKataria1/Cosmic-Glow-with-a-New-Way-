let imgTopSlideShow = [ "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff8a41835-0598-46e8-ba2c-72e885291eb0.jpg&w=1920&q=75"
  ,"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1e69c5f7-2df9-4c42-bf08-22b6b68779e0.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa7bfdf05-ad0e-4c24-ab48-7ff64e9115b8.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F34d52684-19de-435e-bbde-86d09bf08c19.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F61085ebd-495f-470b-a54c-02c2569df51b.jpg&w=1920&q=75" 
 , "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbcd1e4c1-fbaa-486c-86ed-07048ad3a3f9.jpg&w=1920&q=75" 
] ;
let countTOP = 1 ;
let imageTop = document.getElementById("showImg") ;
let slide_show_Top = ()=>{
   imageTop.src = imgTopSlideShow[countTOP] ;
   countTOP++ ;
   if(countTOP==5){
      countTOP = 0 ;
   }
   
} 
setInterval( slide_show_Top , 4500 ) ;
// mid Interval 

let imgmidSlideShow = [  
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9e2d8597-51d5-41be-95b0-aac4cc0e9794.gif&w=1920&q=75" ,
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F37471559-27d1-4509-9e31-29d889be7036.jpg&w=1920&q=75" ,
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff190c764-84cf-4eea-a381-8b701be65852.gif&w=1920&q=75" ,
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg&w=1920&q=75" ,
                     
  ] ;
  let countMID = 1 ;
let imageMID = document.getElementById("showImgmid") ;
let slide_show_mid = ()=>{
   imageMID.src = imgmidSlideShow[countMID] ;
   countMID++ ;
   if(countMID==5){
      countMID = 0 ;
   }
   
} 
setInterval( slide_show_mid , 4500 ) ;
