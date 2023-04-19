let cards = document.querySelectorAll(".card")
let addCard = []
let count = document.querySelector(".count")
let totalSpan=document.querySelector(".total")

cards.forEach((card) => {
    addCard.push(card.children[1].children[3])

})


document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("product")) {
        let basket = []
        localStorage.setItem("product", JSON.string(basket))

    }
})

addCard.forEach((add) => {
    add.addEventListener("click", (e) => {
        let name = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        let price = e.target.previousElementSibling.children[0].textContent
        let desc = e.target.previousElementSibling.previousElementSibling.textContent
        let id = e.target.parentElement.parentElement.getAttribute("data-id")


        let product = {
            id: id,
            name: name,
            price: price,
            desc: desc,
            count: 0
        }
        let basket = JSON.parse(localStorage.getItem("product")) || []
        let existed = basket.find((basketItem) => basket.id == id)
        if (existed) {
            product.count++
        }
        else {

            basket.push(product)
        }
        count.textContent = basket.length
        let total = basket.reduce((total, value) => {
        let t=Number(value.price)*Number(value.count)
        return total+t;    
        }, 0)
        totalSpan.textContent=total;
        localStorage.setItem("product", JSON.stringify(basket))
        
        Swal.fire({
            position:'bottom-end',
            icon:'success',
            title:`${product.name.toUpperCase()} added to basket`,
            showConfirmButton:false,
            timer:1000
        })

    })
})