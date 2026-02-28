    const arrows = document.querySelectorAll(".arrow");
    const movielists = document.querySelectorAll(".movies-list");
 
    arrows.forEach((arrow,i)=>{
        const itemNumber = movielists[i].querySelectorAll("img").length;
        let clickCounter = 0;
        arrow.addEventListener("click",()=>{
             const ration = Math.floor(window.innerWidth / 270);
            clickCounter++;
            if(itemNumber - (4+clickCounter) + (5-ration) >= 0) {
                 movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        
            }else{
                 movielists[i].style.transform = "translateX(0)";
                 clickCounter =0;
            }
        });   
        
        console.log(Math.floor(window.innerWidth/270));
    });

 7 -(4+1) + (4-1)


//TOGGLE

    const ball = document.querySelector(".toggle-boll");
    const items = document.querySelectorAll(".container,.movies-list-tittle,.navbar-container,.sidebar,.left-num-icon,.toggle");

    ball.addEventListener("click",()=>{
        items.forEach(item=>{
         item.classList.toggle("active")
        })
        ball.classList.toggle("active")
        })