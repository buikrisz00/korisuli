// Global variables
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

// Check which HTML preview text needs to be generated
function checkWhichPreview(imgId) {
    const slider = document.getElementById("slider");
    // Reflow without doing anything
    void(slider.offsetHeight);

    if (imgId === "jegiskolankImg") {
        slider.classList.add("jegiskolankBackground");
        return generateJegiskolankHTML();
    } else if (imgId === "hokisuliImg") {
        slider.classList.add("hokisuliBackground");
        return generateHokisuliHTML();
    }
}

// Generate HTML preview text for Jégiskolánk
function generateJegiskolankHTML() {
    return `
        <h1>Jégiskolánk</h1>
        <p>Jégiskolánk hosszú és sikeres múltra tekinthet vissza! Ismerje meg megalakulásunk történetét!</p>
        <button>Tovább &#8674</button>
    `
}

// Generate HTML preview text for Jégiskolánk
function generateHokisuliHTML() {
    return `
        <h1>Hokisuli</h1>
        <p>2019-ben megnyitottuk kapuinkat a hoki felé is. Kis csapatunk hoki oktatásai külön edzéseken történnek a jégiskola mellett.</p>
        <button>Tovább &#8674</button>
    `
}

function loadEvent() {
    const slider = document.getElementById("slider");
    const sliderClickBtns = document.querySelectorAll(".options button");
    const sliderImages = document.querySelectorAll(".options .option");
    const welcomeTxt = document.querySelector(".welcomeTxt");

    // Click event for buttons on slider
    for (const sliderClickBtn of sliderClickBtns) {
        sliderClickBtn.addEventListener("click", function (event) {
            miniMenu(event.target.id);
            /* clearInterval(sliderChange) */;
        })
    }

    // Click event for slider images
    for (const sliderImage of sliderImages) {
        sliderImage.addEventListener("click", function (event) {
            slider.className = "";
            welcomeTxt.innerHTML = "";
            welcomeTxt.insertAdjacentHTML("beforeend", checkWhichPreview(event.target.id));
        })
    }
}

window.addEventListener("load", loadEvent);