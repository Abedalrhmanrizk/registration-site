// NAVBAR ELEMENT
const loginBtn = document.querySelector(".login-btn");

// REGISTRATION ELEMENTS
const nameInput = document.getElementById("name");
const emailInputRegi = document.getElementById("email");
const passwordInputRegi = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const submitBtnRegi = document.getElementById("submit");

//get input field
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordRep = document.querySelector("#passwRep");
let submit = document.querySelector("#submit");

// LOGIN ELEMENTS
const emailInputLog = document.getElementById("email-log");
const passwordInputLog = document.getElementById("password-log");
const submitBtnLog = document.getElementById("submit-log");

// ENGLISH TEST ELEMENTS

// STATUS PAGE
const infoBtn = document.querySelector(".btn-apply-info");
const englishBtn = document.querySelector(".btn-apply-english");
const technicalBtn = document.querySelector(".btn-apply-technical");
const submitPage = document.querySelector(".submit-page");

// FOR MOBILE NAVBAR
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
