window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  loader.classList.add("loader--hidden")

  loader.addEventListener("transitionend", () => {
    // document.body.removeChild(loader)
    loader.remove()
  })
})

// a.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     cursor.classList.add("hover")
//   })
//   item.addEventListener("mouseleave", () => {
//     cursor.classList.remove("hover")
//   })
// })
