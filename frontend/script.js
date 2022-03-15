// Global variables
let counter = 2;
const sliderImages = ["slider_pic_1", "slider_pic_2", "slider_pic_3"];

function sliderAnimation() {
    const sliderImg = document.querySelector("#slider img");

    sliderImg.classList.remove("appear");
    sliderImg.classList.add("fade");
    setTimeout(function () {
        sliderImg.src = `images/${sliderImages[counter]}.jpg`;
        sliderImg.classList.remove("fade");
        sliderImg.classList.add("appear");
    }, 350);
}

function sliderClick(buttonId) {
    if (buttonId === "leftBtn") {
        if (counter > 0) {
            counter--;
            sliderAnimation();
        } else {
            counter = sliderImages.length - 1;
            sliderAnimation();
        }
    } else {
        if (counter < sliderImages.length - 1) {
            counter++;
            sliderAnimation();
        } else {
            counter = 0;
            sliderAnimation();
        }

    }
}

function loadEvent() {
    const sliderClickBtns = document.querySelectorAll("#slider button");

    // Automatic slider image change on interval
    const sliderChange = setInterval(function () {
        sliderAnimation();
        if (counter < sliderImages.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
    }, 5000);

    // Click event for buttons on slider
    for (const sliderClickBtn of sliderClickBtns) {
        sliderClickBtn.addEventListener("click", function (event) {
            sliderClick(event.target.id);
            clearInterval(sliderChange);
        })
    }
}

window.addEventListener("load", loadEvent);