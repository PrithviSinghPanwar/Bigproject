let allQuestion=document.querySelectorAll("#heading h2")
allQuestion.forEach((Element,index)=>{

    Element.addEventListener("click",()=>{
        Element.nextElementSibling.classList.add("scale-1","h-auto")
        Element.nextElementSibling.classList.remove("scale-0","h-o")

        // const answer=Element.nextElementSibling;
        // answer.classList.toggle("scal-1")
        // answer.classList.toggle("h-auto")
        // answer.classList.toggle("scal-0")
        // answer.classList.toggle("h-0")

        if(Element.children[0].innerHTML=="+"){
            Element.children[0].innerHTML="-"
            
        }
        else{
            Element.children[0].innerHTML="+"
            
        }
        
        allQuestion.forEach((el,i)=>{
            if(index!=i){
                el.nextElementSibling.classList.remove("scale-1","h-auto")

                el.nextElementSibling.classList.add("scale-0","h-0")

            el.children[0].innerHTML="+"
            


            }
        })
    })
})