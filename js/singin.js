// localStorage.setItem("username", "mkyong-100@yahoo.com");
// localStorage.setItem("password", "Anj1G@de");


// form.addEventListener("submit", (e) => {
//   e.preventDefault();


//   const username = form.username.value;
//   const password = form.password.value;

//   const authenticated = authentication(username, password);

//   if (username && password) {
//     if (authenticated) {
//       window.location.href = "logout.html";
//     } else {
//       // alert("wrong");
//       spanEmail.textContent = "Incorrect email or password"; 
//     }
//   }else {
//     // alert("wrong");
//     spanEmail.textContent = "This is a field is required"; 
//     spanPass.textContent = "This is a field is required";
//   }
// });

const Data = JSON.parse(localStorage.getItem('Data'));
console.log(localStorage.getItem('Data'));

let arrData = Data;
console.log(arrData);



// function authentication(username, password) {
//   let trueName = "";
//   let truePass = "";

//   if (username && password) {
//     for (let i = 0; i < arr_userName.length; ++i) {
//       if (arr_userName[i] === username) {
//         trueName = "Yes";
//         break;
//       } 
//     }

//     for (let i = 0; i < arr_pass.length; ++i) {
//       if (arr_pass[i] === password) {
//         truePass = "Yes";
//         break;
//        }
//     }

//     if (trueName === "Yes" && truePass === "Yes") {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     spanEmail.textContent = "The email does not exist"; 
//     spanPass.textContent = "";
//   }
// }
 