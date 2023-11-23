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
const stepGuides = document.querySelectorAll(".step-guide-detail");
const stepTitleTexts = document.querySelectorAll(".guide-title");
const checkBox = document.querySelector(".broken-circle");

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

stepGuides.forEach((guide) => {
  const stepTitle = guide.querySelector(".guide-title");
  stepTitle.addEventListener("click", () => {
    stepGuides.forEach((stepGuide) => {
      if (stepGuide !== guide) {
        stepGuide.classList.remove("show-guide");
      }
    });
    guide.classList.add("show-guide");
  });
});

checkBox.addEventListener("mouseover", () => {
  checkBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
});

checkBox.addEventListener("mouseout", () => {
  checkBox.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="broken-circle-icon"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#8A8A8A"
                    stroke-width="2.08333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="5 5"
                  />
                </svg>`;
});
