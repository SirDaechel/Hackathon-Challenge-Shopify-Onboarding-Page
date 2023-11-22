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
