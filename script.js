// NAVBAR ELEMENT
// const loginBtn = document.querySelector(".login-btn");

// REGISTRATION ELEMENTS
// const nameInput = document.getElementById("name");
// const emailInputRegi = document.getElementById("email");
// const passwordInputRegi = document.getElementById("password");
// const rePassword = document.getElementById("re-password");
// const submitBtnRegi = document.getElementById("submit");

// LOGIN ELEMENTS
// const emailInputLog = document.getElementById("email-log");
// const passwordInputLog = document.getElementById("password-log");
// const submitBtnLog = document.getElementById("submit-log");

// ENGLISH TEST ELEMENTS
// const questionEl = document.getElementById("question");
// const answerInput = document.querySelectorAll(".answer");
// const answerTextA = document.getElementById("a_text");
// const answerTextB = document.getElementById("b_text");
// const answerTextC = document.getElementById("c_text");
// const answerTextD = document.getElementById("d_text");
// const nextBtn = document.querySelector("next");

// INDEX OF ARRAY USER
let index = sessionStorage.getItem("index")
let Data = JSON.parse(localStorage.getItem("Data"))

// STATUS PAGE
const infoBtn = document.querySelector(".btn-apply-info")
console.log(infoBtn)
const englishBtn = document.querySelector(
  ".btn-apply-english"
)
const technicalBtn = document.querySelector(
  ".btn-apply-technical"
)
const logout = document.querySelector(".logout")
const submitPage = document.querySelector(".submit-page")

if (Data[index].profile !== "") {
  infoBtn.textContent = "Done"
  infoBtn.classList.remove("cursor")
} else {
  infoBtn.addEventListener("click", function () {
    window.location.href = "./profile-info.html"
  })
}

if (Data[index].taskE !== "") {
  englishBtn.textContent = "Done"
  englishBtn.classList.remove("cursor")
} else {
  englishBtn.addEventListener("click", function () {
    window.location.href = "./english-test.html"
  })
}

if (Data[index].taskT !== "") {
  technicalBtn.textContent = "Done"
  technicalBtn.classList.remove("cursor")
} else {
  technicalBtn.addEventListener("click", function () {
    window.location.href = "./technical-test.html"
  })
}

logout.addEventListener("click", function () {
  window.location.href = "./login.html"
})

let table = document.querySelector(".table")
let hero = document.querySelector(".hero")
let x = document.querySelector(".x")

if (
  Data[index].taskE !== "" &&
  Data[index].profile !== "" &&
  Data[index].taskT !== "" &&
  Data[index].answerAll == ""
) {
  x.classList.remove("hidden")
}

if (Data[index].answerAll === "") {
  x.addEventListener("click", () => {
    Data[index].answerAll = "Done"
    // if (
    //   Data[index].taskE !== "" &&
    //   Data[index].profile !== "" &&
    //   Data[index].taskT !== ""
    // ) {
    // }
    table.classList.remove("hidden")
    hero.classList.add("hidden")
  })
} else {
  table.classList.remove("hidden")
  hero.classList.add("hidden")
  x.remove()
}

// if (Data[index].answerAll) {
//   table.classList.remove("hidden")
//   hero.classList.add("hidden")
// }
