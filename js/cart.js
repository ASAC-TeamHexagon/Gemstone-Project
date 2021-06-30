'use strict';





let carts = document.querySelectorAll('.fa-shopping-bag');


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        // console.log(ProductAdd.all.name);

        cartNumbers(ProductAdd.all[i]);
        totalCost(ProductAdd.all[i]);
        console.log(ProductAdd.all);
    })
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(pro) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(pro);
}


function setItem(pro) {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    if (cartItem != null) {
        if (cartItem[pro.name] == undefined) {
            cartItem = {
                ...cartItem,
                [pro.name]: pro
            }
        }
        cartItem[pro.name].inCart += 1;
    } else {
        pro.inCart = 1;
        cartItem = {
            [pro.name]: pro
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItem));
}


function totalCost(pro) {
    let cartCost = localStorage.getItem('totalCost');
    // console.log(ProductAdd.all.price);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + pro.price);

    } else {
        localStorage.setItem('totalCost', pro.price);
    }
}

onLoadCartNumbers();

function displayCart() {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('totalCost');
    if (cartItem && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItem).map(item => {
            productContainer.innerHTML +=
                `
            <div class="products">
            <i class="fas fa-times-circle"></i> 
            <span>${item.name}</span>
            <img src="${item.image}">
            </div>
            
            <div class="price">${item.price}₿</div>
            
            <div class="quantity"><i class="fas fa-chevron-circle-left"></i>${item.inCart}<i class="fas fa-chevron-circle-right"></i></div>

            <div class="total">${item.inCart * item.price}₿</div>
            `;
        });
    }
    productContainer.innerHTML += `
     <div class ="basketTotalContainrt">
      Basket Total<div> ${cartCost}₿</div>
     
     </div>
     
     `;
}
displayCart();


