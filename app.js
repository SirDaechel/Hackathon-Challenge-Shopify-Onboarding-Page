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
const checkbox = document.querySelector(".checkbox");
const checkboxes = document.querySelectorAll(".checkbox");
const brokenCircle = document.querySelector(".broken-circle-icon");
const fullCircle = document.querySelector(".full-circle");
const rotateCircle = document.querySelector(".rotate-circle");
const checkedIcon = document.querySelector(".checked-icon");
const progressBar = document.querySelector(".steps-completed-bar");
const stepsCompletedTxt = document.querySelector(".steps-completed-txt");

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

let stepsCompleted = 0;
let totalSteps = 5;

const incrementStepsCompleted = () => {
  stepsCompleted += 1;
  stepsCompletedTxt.textContent =
    stepsCompleted + " / " + totalSteps + " completed";
};

const decrementStepsCompleted = () => {
  stepsCompleted -= 1;
  stepsCompletedTxt.textContent =
    stepsCompleted + " / " + totalSteps + " completed";
};

let currentWidthPercentage = 0;

const moveProgressBar = () => {
  currentWidthPercentage += 20;
  progressBar.style.width = currentWidthPercentage + "%";
};

const removeProgressBar = () => {
  currentWidthPercentage -= 20;
  progressBar.style.width = currentWidthPercentage + "%";
};

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

checkboxes.forEach((cb) => {
  let isChecked = false;
  const cbBrokenCircle = cb.querySelector(".broken-circle-icon");
  const cbFullCircle = cb.querySelector(".full-circle");
  const cbRotateCircle = cb.querySelector(".rotate-circle");
  const cbCheckedCircle = cb.querySelector(".checked-icon");
  cb.addEventListener("click", () => {
    if (!isChecked) {
      cbFullCircle.style.display = "none";
      cbBrokenCircle.style.display = "none";
      cbRotateCircle.style.display = "block";
      cbRotateCircle.classList.add("show-rotate-circle");
      setTimeout(() => {
        cbRotateCircle.style.display = "none";
        cbCheckedCircle.style.display = "block";
      }, 200);
      isChecked = true;
      moveProgressBar();
      incrementStepsCompleted();
    } else {
      cbBrokenCircle.style.display = "block";
      cbRotateCircle.classList.remove("show-rotate-circle");
      cbCheckedCircle.style.display = "none";
      isChecked = false;
      removeProgressBar();
      decrementStepsCompleted();
    }
    const parentOfTheParent = cb.parentElement.parentElement;
    if (isChecked) {
      stepGuides.forEach((guide) => {
        if (parentOfTheParent !== guide) {
          guide.classList.remove("show-guide");
        }
        parentOfTheParent.classList.add("show-guide");
      });
    }
  });
});
