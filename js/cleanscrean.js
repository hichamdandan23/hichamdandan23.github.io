
let arr = [];
let timer;
let opacity=1;
$(function () {
    Start();
    $("#start").click(Start);
});


function growCircle() {
    $(".containner>:not(.menu)").css({
        'height': (idx, oldvalue) => { return parseInt(oldvalue) + arr[1] + "px"; },
        'width': (idx, oldvalue) => { return parseInt(oldvalue) + arr[1] + "px"; }
    });
}

function reset(){
    $(".circle").remove();
}
function Start() {
    opacity=1;
    reset();
    clearInterval(timer);
    arr = [];
    $(".menu input").each((idx, elem) => {
        arr.push(parseInt($(elem).val()));
    });
    createCircles();
    timer=setInterval(growCircle, arr[2]);
    circleOnClick();
    circleObcity();
}

function circleObcity(){
    $(".containner>:not(.menu)").each((idx, elem) => {
        $(elem).mousemove(() => { 
            if(opacity>0.1){
                opacity-=0.01;
            }
            console.log(opacity);
            $(elem).css("opacity",opacity);
        });
        $(elem).mouseout(()=>{
            opacity=1;
            $(elem).css("opacity",opacity);
        })
    });

}
function circleOnClick(){
    $(".containner>:not(.menu)").each((idx, elem) => {
        $(elem).click(() => { $(elem).hide();});
    });
}

function createCircles() {
    let mycircles = [];
    for (let i = 0; i < arr[3]; ++i) {
        let left = getRandomArbitrary(12, 50) + "%";
        let top = getRandomArbitrary(20, 40) + "%";
        let elem = $("<div>", { "class": "circle", "css" : {"left": left, "top": top,"width":arr[0]+"px","height":arr[0]+"px" ,"background-color":getRandomColor()}});
        mycircles.push(elem);
    }
    $(".containner").append(mycircles);
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }