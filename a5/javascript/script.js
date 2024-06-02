var myImages = [
    "images/resume.jpg",
    "images/chessboard.jpg",
    "images/rhombus.jpg",
    "images/form validation.jpg",
    "images/slideshow.jpg"
];

var captionImages = ["Resume: We created a resume for the first artifact, learning how to use lists, breaks, headings, and other components in html", "Chessboard: We created a chessboard for the second artifact, learning how to use CSS to create the board.", "Rhombus: We created a rhombus for the third artifact, learning how to use functions in javascripts such as for loops and if statements.", "Form Validation: We created a form and validated it for the fourth artifact, learning document object model (DOM) and using if statements to validate teh form.", "Slideshow: We created a slideshow for the fifth artifact, learning more DOM elements as well as the EventListener to react to events as they occur."];
var index = 0;
var interval;

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
    resetInterval();
}

function back() {
    if (index === 0) {
        index = myImages.length - 1;
    } else {
        index--;
    }
    updateImage();
    resetInterval();
}

function autoSlide() {
    if (document.getElementById("auto").checked) {
        next();
    }
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 2000);
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

interval = setInterval(autoSlide, 2000);
