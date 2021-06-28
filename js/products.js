'use strict';

let products = document.getElementById('products');



function ProductAdd(name, price, image, category, description) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
    this.description = description;
    this.inCart = 0;

    ProductAdd.all.push(this);

}
ProductAdd.all = [];

ProductAdd.prototype.render = function () {
    let container = document.createElement('div');
    container.className = "product-card";
    products.appendChild(container);

    let productBack = document.createElement('div');
    productBack.className = "product-tumb";
    container.appendChild(productBack);

    let productImage = document.createElement('img');
    productImage.src = this.image;
    productBack.appendChild(productImage);

    let details = document.createElement('div');
    details.className = "product-details";
    container.appendChild(details);

    let productCategory = document.createElement('span');
    productCategory.className = "product-category";
    details.appendChild(productCategory);
    productCategory.textContent = this.category;

    let header4 = document.createElement('h4');
    details.appendChild(header4);

    let link = document.createElement('a');
    link.textContent = this.name;
    link.href = this.name;
    header4.appendChild(link);

    let description = document.createElement('p');
    details.appendChild(description);
    description.textContent = this.description;


    let productInfo = document.createElement('div');
    productInfo.className = "product-bottom-details";
    details.appendChild(productInfo);

    let productPrice = document.createElement('div');
    productPrice.className = "product-price";
    productInfo.appendChild(productPrice);
    productPrice.textContent = this.price;

    let productLinks = document.createElement('div');
    productLinks.className = "product-links";
    productInfo.appendChild(productLinks);

    let like = document.createElement('a');
    productLinks.appendChild(like);

    let likeIcon = document.createElement('i');
    likeIcon.className = "fa fa-heart"
    like.appendChild(likeIcon);

    let cart = document.createElement('a')
    productLinks.appendChild(cart);

    let cartIcon = document.createElement('i');
    cartIcon.className = "fas fa-shopping-bag"
    cart.appendChild(cartIcon);

    let rate = document.createElement('div')
    rate.className = "rating"
    productLinks.appendChild(rate);

    for (let i =0; i < Math.floor(Math.random() * 5) + 1;i++)
    {
        let stars= document.createElement('i');
        stars.className = "rating__star fas fa-star";
        rate.appendChild(stars);
    
    }
    
}


let ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    const starClassActive = "rateStar fas fa-star";
    const starClassInactive = "rateStar far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}






let amber = new ProductAdd('Amber Stone', 260 + "₿", './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing = new ProductAdd('Emerald Ring', 1000 + "₿", './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');



let amber2 = new ProductAdd('Amber Stone', 210 + "₿", './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing2 = new ProductAdd('Emerald Ring', 1100 + "₿", './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');



let amber3 = new ProductAdd('Amber Stone', 220 + "₿", './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing3 = new ProductAdd('Emerald Ring', 1500 + "₿", './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');










amber.render();
emeraldRing.render();

amber2.render();
emeraldRing2.render();
amber3.render();
emeraldRing3.render();




function formSubmission(event) {
    event.preventDefault();
    let name = event.target.itemName.value;
    let category = event.target.category.value;
    let image = event.target.productImage.value;
    let price = event.target.GemPrice.value;
    let description = event.target.GemDescription.value;





    let newProductAdd = new ProductAdd(name, price + "₿", image, category, description);
    newProductAdd.render();


    swal("Good job!", "Your submit done!", "success");

    localStorage.setItem('product', JSON.stringify(ProductAdd.all));

}

gemStoneForm.addEventListener('submit', formSubmission);

function getList() {
    let data = JSON.parse(localStorage.getItem('product'));
    console.log(data)
    if (data) {
        // data  = ProductAdd.all;

        for (let i = 0; i < data.length; i++) {

            let newProductAdd1 = new ProductAdd(data[i].name, data[i].price, data[i].image, data[i].category, data[i].description, data[i].inCart);
            newProductAdd1.render();
        }
    }

}
getList()



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







var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

