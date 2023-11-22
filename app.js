const alertIcon = document.querySelector(".bell-box");
const alertBox = document.querySelector(".alert-dialog");
const userBox = document.querySelector(".user");
const userDialog = document.querySelector(".user-dialog");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search");
const stepGuideData = document.querySelector(".step-guide-data");
const stepGuideArrow = document.querySelector(".step-guide-arrow");
const selectPlan = document.querySelector(".select-a-plan");
const closeSelectPlan = document.querySelector(".select-a-plan-close");

alertIcon.addEventListener("click", () => {
  alertBox.classList.toggle("show-alert-dialog");
});

userBox.addEventListener("click", () => {
  userDialog.classList.toggle("show-alert-dialog");
});

searchInput.addEventListener("focus", () => {
  searchContainer.classList.add("search-container-active");
});

searchInput.addEventListener("blur", () => {
  searchContainer.classList.remove("search-container-active");
});

stepGuideArrow.addEventListener("click", () => {
  stepGuideData.classList.toggle("close-step-guide-data");
  stepGuideArrow.classList.toggle("step-guide-arrow-rotate");
});

closeSelectPlan.addEventListener("click", () => {
  selectPlan.classList.add("select-a-plan-remove");
});
