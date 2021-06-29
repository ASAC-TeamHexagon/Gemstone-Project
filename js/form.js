'use strict';
let form = document.getElementById('form');
// console.log(form);

function Gemstone(first_name, last_name, Email, password, password2, phone) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.Email = Email;
  this.password = password;
  this.password2 = password2;
  this.phone = phone;
  Gemstone.all.push(this);
}





Gemstone.all = [];

function addNewUser(e) {

  e.preventDefault();

  let first_name = event.target.first_name.value;
  let last_name = event.target.last_name.value;
  let Email = event.target.Email.value;
  let password = event.target.password.value;
  let password2 = event.target.password2.value;
  let phone = event.target.phone.value;
  swal("Good job!", "Your submit done!", "success");

  // window.location.assign('index.html')
  if (first_name) {
    document.querySelector('.cart span #nameText')."Welocome "+textContent = first_name;
    

  }
  
  form.reset();

  //   let newForm = new Gemstone(first_name,last_name,company,Email,area_code,phone,subject);

}
form.addEventListener('submit', addNewUser);
