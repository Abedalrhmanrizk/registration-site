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
const englishBtn = document.querySelector(
  ".btn-apply-english"
)
const technicalBtn = document.querySelector(
  ".btn-apply-technical"
)
const logout = document.querySelector(".logout")
const submitPage = document.querySelector(".submit-page")

if (Data[index].profile !== "") {
  infoBtn.textContent = "completed"
  infoBtn.classList.remove("cursor")
} else {
  infoBtn.addEventListener("click", function () {
    window.location.href = "./profile-info.html"
  })
}

if (Data[index].taskE !== "") {
  englishBtn.textContent = "completed"
  englishBtn.classList.remove("cursor")
} else {
  englishBtn.addEventListener("click", function () {
    window.location.href = "./english-test.html"
  })
}

if (Data[index].taskT !== "") {
  technicalBtn.textContent = "completed"
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
let showTable = document.querySelector(".showTable")



if (
  Data[index].taskE !== "" &&
  Data[index].profile !== "" &&
  Data[index].taskT !== "" &&
  Data[index].answerAll == ""
) {
  x.classList.remove("hidden")
  Data[index].answerAll = "Done"
  showTable.innerHTML = `
    <tr>
      <th>${Data[index].nameInput}</th>
      <td>${Data[index].emailInputRegi}</td>
      <td>${Data[index].education}</td>
      <td>${Data[index].personalData}</td>
      <td>${Data[index].taskE} / 15</td>
      <td>${Data[index].taskT} / 10</td>
    </tr>
  `;  
}

if (Data[index].answerAll == "") {
  x.addEventListener("click", () => {
    table.classList.remove("hidden")
    hero.classList.add("hidden")
    x.remove()
  })
} else {
  table.classList.remove("hidden")
  hero.classList.add("hidden")
  x.remove()
}
