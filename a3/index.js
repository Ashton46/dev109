	
// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
function createDiamond(pHeight, pColorEven, pColorOdd, pSymbol) {
    up(pHeight, pColorEven, pColorOdd, pSymbol);
    down(pHeight, pColorEven, pColorOdd, pSymbol);
}

function up(pHeight, pColorEven, pColorOdd, pSymbol) {
    var dLine = "";
    for (i = 0; i < pHeight; i++) {
        dLine += "<p>";
        for (j = 0; j < pHeight - i - 1; j++) {
            dLine += "&nbsp;";
        }
        for (j = 0; j < 2 * i + 1; j++) {
            if (j % 2)
                dLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                dLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        dLine += "</p>";
    }
    document.getElementById("diamond").innerHTML = dLine;
}

function down(pHeight, pColorEven, pColorOdd, pSymbol) {
    var dLine = "";
    for (i = pHeight - 2; i >= 0; i--) {
        dLine += "<p>";
        for (j = 0; j < pHeight - i - 1; j++) {
            dLine += "&nbsp;";
        }
        for (j = 0; j < 2 * i + 1; j++) {
            if (j % 2)
                dLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                dLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        dLine += "</p>";
    }
    document.getElementById("diamond").innerHTML += dLine;
}

