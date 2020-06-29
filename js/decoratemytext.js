
window.onload = function () {
    var decorationButton = document.getElementById("biggerDecorations");
    var checkBox = document.getElementById("blingCheckBox");
    checkBox.onchange = onBling;
    decorationButton.onclick = onBiggerDecorationsClick;

};

function onBiggerDecorationsClick() {
    timer = null
    document.getElementById("text_area").style.textAlign = "right";
    var myFontSize = document.getElementById("text_area");
    var style = window.getComputedStyle(myFontSize, null).getPropertyValue('font-size');
    var fontSizeParsed = parseFloat(style);
    myFontSize.style.fontSize = (fontSizeParsed + 2) + 'px';

    if (timer === null) {
        timer = setInterval(onBiggerDecorationsClick, 1000);
    } else {
        clearInterval(timer); // cancel the timer
        timer = null;
    }
    return false;
};
function onBling() {

    if (document.getElementById("blingCheckBox").checked === true) {
        document.getElementById("text_area").style.fontWeight = "bold";
        document.getElementById("text_area").style.color = "green";
        document.getElementById("text_area").style.textDecoration = "underline";
    } else {
        document.getElementById("text_area").style.fontWeight = "normal";
        document.getElementById("text_area").style.color = "black";
        document.getElementById("text_area").style.textDecoration = "none";
    }
}


