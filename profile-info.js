const profileFirstName = document.querySelector(
  ".profile-first-name"
)
const profileSecondName = document.querySelector(
  ".profile-second-name"
)
const profileDate = document.querySelector(".profile-date")
const profileEducation = document.querySelector(
  ".profile-education"
)
const profileSubmit = document.querySelector(
  ".profile-submit"
)

let arr = []
profileSubmit.addEventListener("click", () => {
  if (
    profileFirstName.value &&
    profileSecondName.value &&
    profileDate.value &&
    profileEducation.value
  ) {
    arr.push(profileFirstName.value)
    arr.push(profileSecondName.value)
    arr.push(profileDate.value)
    arr.push(profileEducation.value)
    console.log(arr)
    profileFirstName.value = ""
    profileSecondName.value = ""
    profileDate.value = ""
    profileEducation.value = ""
  }
})
