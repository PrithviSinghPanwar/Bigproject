
// owlCarousel JAVASCRIPT START

$('#whyslide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  // owlCarousel JAVASCRIPT END
//   LIGHTBOSX JAVA SCRIPT START
let button=document.querySelector(".light")
let lightboxdiv=document.querySelector(".lighbox")
    let closebtn=document.querySelector(".lightbox-img span")
    button.addEventListener("click",()=>{
        lightboxdiv.classList.add('showmodal')
    })
    closebtn.addEventListener("click",()=>{
        lightboxdiv.classList.remove('showmodal')
    })


 //   LIGHTBOSX JAVA SCRIPT END 
//   ACCORDIAAN /FAQ JAVA SCRIPT START  
let allQuestion=document.querySelectorAll(".heading h3")
allQuestion.forEach((Element,index)=>{

    Element.addEventListener("click",()=>{
        Element.nextElementSibling.classList.toggle("showans")
        if(Element.children[0].innerHTML=="+"){
            Element.children[0].innerHTML="-"
        }
        else{
            Element.children[0].innerHTML="+"
        }
        
        allQuestion.forEach((el,i)=>{
            if(index!=i){
                el.nextElementSibling.classList.remove("showans")

            }
        })
    })
})

//   ACCORDIAAN /FAQ JAVA SCRIPT END  