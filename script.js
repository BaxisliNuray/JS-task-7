let increaseBtn=document.querySelector(".increase")
let decreaseBtn=document.querySelector(".decrease")
let count=document.querySelector(".count")
console.log(count);

// decrease button
decreaseBtn.addEventListener("click",()=>{
    localStorage.setItem("count",--count.textContent)
count.textContent=localStorage.getItem("count")    
})

// increase button
increaseBtn.addEventListener("click",()=>{
    console.log( ++count.textContent)
    localStorage.setItem("count",count.textContent)
})

document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("count")){
count.textContent=localStorage.getItem("count")
    }
    else{
        count.textContent=0;
    }
})

// removebtn
let removeBtn=document.querySelector(".remove")
removeBtn.addEventListener("click",()=>{
    if (localStorage.getItem("count")) {
        localStorage.removeItem("count")
        count.textContent=0
        
    }
})