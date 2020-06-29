window.onload = function () {
    "use strict";
    let timer = null;
    let delay = 250;
    let textAreaContent = "";
    const textArea = document.getElementById("text-area");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const animation = document.getElementById("animation");
    const fontsize = document.getElementById("fontsize");
    const turbo = document.getElementById("turbo");

    start.onclick = function () {
        startAnimation();
    }

    const startAnimation = function () {
        const pages = textAreaContent.split("=====\n");
        const pageLength = pages.length;
        if (pageLength > 1) {
            start.disabled = true;
            animation.disabled = true;
            stop.disabled = false;
            let currentPage = 0;
            timer = setInterval(function () {
                if (currentPage == pageLength) {
                    currentPage = 0;
                }
                textArea.value = pages[currentPage];
                currentPage++;
            }, delay);
        }
    }

    stop.onclick = function () {
        clearInterval(timer);
        stop.disabled = true;
        start.disabled = false;
        animation.disabled = false;
        textArea.value = textAreaContent;
    }

    textArea.onchange = function () {
        textAreaContent = textArea.value;
    }

    animation.onchange = function () {
        textAreaContent = ANIMATIONS[animation.value];
        if (stop.disabled) {
            textArea.value = textAreaContent;
        }
    }

    fontsize.onchange = function () {
        textArea.style.fontSize = fontsize.value;
    }

    turbo.onchange = function () {
        if (turbo.checked) {
            delay = 50;
            if (start.disabled) {
                clearInterval(timer);
                startAnimation();
            }
        } else {
            delay = 250;
            if (start.disabled) {
                clearInterval(timer);
                startAnimation();
            }
        }
    }

}
