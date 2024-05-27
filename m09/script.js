var clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function(event) {
  var elements = document.getElementsByClassName("dot");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  event.stopPropagation();
});

addEventListener("click", function(event) {
  // Prevent dots from being drawn on the control panel
  if (event.target.id !== "clearButton" && event.target.tagName !== "INPUT" && event.target.id !== "controls") {
    var colorInput = document.getElementById("color");
    var sizeInput = document.getElementById("size");

    var dot = document.createElement("div");
    dot.className = "dot";
    var size = parseInt(sizeInput.value);
    dot.style.width = dot.style.height = size + "px";
    dot.style.backgroundColor = colorInput.value;
    dot.style.left = (event.pageX - size / 2) + "px";
    dot.style.top = (event.pageY - size / 2) + "px";
    document.body.appendChild(dot);
  }
});


