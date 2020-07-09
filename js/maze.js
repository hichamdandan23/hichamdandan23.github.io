"use strict";

$(document).ready(function () {
    $("#start").click(start);
});

function start() {
    rest();
    $(".boundary").mouseenter(lose);
    $("#maze").mouseleave(lose);
    $("#end").mouseenter(win);
    $("#maze").mousemove(draw);
}

function lose() {
    $("#status").html('You lose! :[');
    $(".boundary").addClass("youlose");
    removeListeners();
    alert("You lose! :[");
}

function win() {
    $("#status").html('You Win! :]');
    removeListeners();
    alert("You Win! :]");
}

function removeListeners() {
    $("#end").off("mouseenter");
    $(".boundary").off("mouseenter");
    $("#maze").off("mouseleave");
    $("#maze").off("mousemove");
}

function rest() {
    $("#status").html(' hit "E" to end the game');
    $(".boundary").removeClass("youlose");
    $("span").remove();
}

function draw() {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    $("#maze").append($("<span>", {
        "html": "*",
        "css": {
            "position": "fixed",
            "top": y + "px",
            "left": x + "px",
            "color": "blue"
        }
    }));
}