var myImages = [
    "images/resume.jpg",
    "images/contact us.jpg",
    "images/rhombus.jpg",
    "images/form validation.jpg",
    "images/slideshow.jpg"
];

var captionImages = ["Resume", "Contact Us", "Rhombus", "Form Validation", "Slideshow"];
var index = 0;

function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next() {
    if (myImages.length == index + 1) {
        index = 0;
    } else {
        index++;
    }
    updateImage();
}

function back() {
    if (index === 0) {
        index = myImages.length - 1;
    } else {
        index--;
    }
    updateImage();
}

function autoSlide() {
    if (document.getElementById("auto").checked) {
        next();
    }
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

setInterval(autoSlide, 2000);

