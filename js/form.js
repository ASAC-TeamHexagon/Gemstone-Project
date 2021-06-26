'use strict';
// let form = document.getElementById('form');
// console.log(form);

function Gemstone (first_name,last_name,Email,password,area_code,phone,subject){
    this.first_name = first_name;
    this.last_name = last_name;
    this.Email = Email;
    this.password = password;
    this.area_code = area_code;
    this.phone = phone;
    this.subject = subject;
    Gemstone.all.push(this);
}
Gemstone.all = [];

function addNewUser(e) {

    // e.preventDefault();
    
let first_name = event.target.first_name.value;
  let last_name = event.target.last_name.value;
  let Email = event.target.Email.value;
  let password = event.target.password.value;
  let area_code = event.target.area_code.value;
  let phone = event.target.phone.value;
  let subject = event.target.subject.value;
  alert(`Hello ${first_name} ${last_name}, registration confirmed, please return to home Page to serve you !!! `);

//   let newForm = new Gemstone(first_name,last_name,company,Email,area_code,phone,subject);

}
form.addEventListener('submit',addNewUser);