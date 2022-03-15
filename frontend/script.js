/* // Global variables
let counter = 2;
const sliderImages = ["slider_pic_1", "slider_pic_2", "slider_pic_3"]; */

/* function sliderAnimation() {
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
} */
let counter = 0;
// Works for only 7 rn
function miniMenu(buttonId) {
    const options = document.querySelectorAll(".option");

    if (buttonId === "rightBtn") {
        if (counter < options.length - 3) {
            switch (counter) {
                case 0:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${counter + 1}`);
                    }
                    counter++;
                    break;
                case 1:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${counter + 1}`);
                    }
                    counter++;
                    break;
                case 2:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${counter + 1}`);
                    }
                    counter++;
                    break;
                case 3:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${counter + 1}`);
                    }
                    counter++;
                    break;
                case 4:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${counter + 1}`);
                    }
                    counter++;
                    break;
            }
        }
    } else {
        if (counter > 0) {
            switch (counter) {
                case options.length - 3:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${options.length - 4}`);
                    }
                    counter--;
                    break;
                case options.length - 4:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${options.length - 5}`);
                    }
                    counter--;
                    break;
                case options.length - 5:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${options.length - 6}`);
                    }
                    counter--;
                    break;
                case options.length - 6:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${options.length - 6}`);
                    }
                    counter--;
                    break;
                case options.length - 7:
                    for (const option of options) {
                        option.className = "";
                        option.classList.add(`option`);
                        option.classList.add(`scroll${options.length - 6}`);
                    }
                    counter--;
                    break;
            }
        }
    }
}

function loadEvent() {
    const sliderClickBtns = document.querySelectorAll(".options button");

    /* // Automatic slider image change on interval
    const sliderChange = setInterval(function () {
        sliderAnimation();
        if (counter < sliderImages.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
    }, 5000); */

    // Click event for buttons on slider
    for (const sliderClickBtn of sliderClickBtns) {
        sliderClickBtn.addEventListener("click", function (event) {
            miniMenu(event.target.id);
            /* clearInterval(sliderChange) */;
        })
    }
}

window.addEventListener("load", loadEvent);