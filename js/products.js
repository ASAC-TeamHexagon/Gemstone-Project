'use strict';

let products = document.getElementById('products');



function ProductAdd(name, price, image, category, description) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
    this.description = description;
    ProductAdd.all.push(this);
}

ProductAdd.all = [];

ProductAdd.prototype.render = function() {
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

}

let amber = new ProductAdd('Amber Stone', 260 + '$', './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing = new ProductAdd('Emerald Ring', 1000 + '$', './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');


let amber2 = new ProductAdd('Amber Stone', 260 + '$', './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing2 = new ProductAdd('Emerald Ring', 1000 + '$', './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');


let amber3 = new ProductAdd('Amber Stone', 260 + '$', './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing3 = new ProductAdd('Emerald Ring', 1000 + '$', './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');


let amber4 = new ProductAdd('Amber Stone', 260 + '$', './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing4 = new ProductAdd('Emerald Ring', 1000 + '$', './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');


let amber5 = new ProductAdd('Amber Stone', 260 + '$', './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing5 = new ProductAdd('Emerald Ring', 1000 + '$', './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');


let amber6 = new ProductAdd('Amber Stone', 260 + '$', './img/amber.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');
let emeraldRing6 = new ProductAdd('Emerald Ring', 1000 + '$', './img/Emerald-ring.png', 'Gemstones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!');




amber.render();
emeraldRing.render();
amber2.render();
emeraldRing2.render();
amber3.render();
emeraldRing3.render();
amber4.render();
emeraldRing4.render();
amber5.render();
emeraldRing5.render();
amber6.render();
emeraldRing6.render();


function formSubmission(event) {
    event.preventDefault();
    let name = event.target.itemName.value;
    let category = event.target.category.value;
    let image = event.target.productImage.value;
    let price = event.target.GemPrice.value;
    let description = event.target.GemDescription.value;




    let newProductAdd = new ProductAdd(name, price + '$', image, category, description);
    newProductAdd.render();
    swal("Ready!", "Your product added successfully ", "success");
    gemStoneForm.removeEventListener('submit', formSubmission);
    gemStoneForm.reset()
}

gemStoneForm.addEventListener('submit', formSubmission);