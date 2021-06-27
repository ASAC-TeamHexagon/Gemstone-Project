'use strict';
let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name:'gray',
        tag:'grayston',
        price: 15,
        inCart: 0

    },
    {
        name:'balck',
        tag:'blackston',
        price: 150,
        inCart: 0

    },
    {
        name:'green',
        tag:'greenston',
        price: 11,
        inCart: 0

    },
    {
        name:'blue',
        tag:'blueston',
        price: 1571,
        inCart: 0

    },
    {
        name:'yellow',
        tag:'yellowston',
        price: 1541,
        inCart: 0

    },
    {
        name:'red',
        tag:'redston',
        price: 1751,
        incart: 0

    },
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
    
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(products);
}


function setItem(products) {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    console.log('cartItem')
    if(cartItem != null) {
        if (cartItem[products.tag] == undefined){
            cartItem = {
                ...cartItem,
                [products.tag]: products
            }
        }
        cartItem[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItem = {
            [products.tag]: products
        }
    }
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItem));
}

function totalCost(products){
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + products.price);

    } else {
        localStorage.setItem('totalCost', products.price);
    }
}





onLoadCartNumbers();