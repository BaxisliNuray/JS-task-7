let modeBtn = document.querySelector(".mode")

document.addEventListener("DOMContentLoader", () => {
    if (localStorage.getItem("mode") == "dark") {
        localStorage.setItem("mode", "dark")
        document.body.classList.add("dark")    
        modeBtn.classList.replace("btn-dark", "btn-light")
        modeBtn.innerHTML = `Light mode <i class="fa-solid fa-sun">`
        document.body.style.transition = ".3s linear"
    }
})





// switch mode
modeBtn.addEventListener("click", () => {
    SwitchMode()
})



function SwitchMode() {
if(!localStorage.getItem("mode")){
    localStorage.setItem("mode","light")
}

    if (localStorage.getItem("mode") == "light") {
        document.body.classList.add("dark")    // document.body.className="dark"
        modeBtn.classList.replace("btn-dark", "btn-light")
        modeBtn.innerHTML = `Light mode <i class="fa-solid fa-sun">`
        document.body.style.transition = ".3s linear"
        localStorage.setItem("mode", "dark")
    }
    else {
        document.body.classList.remove("dark")
        modeBtn.classList.replace("btn-light", "btn-dark")
        modeBtn.innerHTML = `Dark mode <i class="fa-solid fa-moon">`
        document.body.style.transition = ".3s linear"
        localStorage.setItem("mode", "light")
    }
}

