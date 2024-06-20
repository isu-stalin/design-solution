//BOSH OG'RIQNI BOSHLANISHI :<

var carousel = document.querySelector(".carousel");
var carousel_one = document.querySelector(".carousel-content");
var slides = document.querySelectorAll(".slide");
var arr_slide = Array.prototype.slice.call(slides);
var carousel_two;
setScreenSize();
var slide_lenght;

function addClone() {
  var last_slide = carousel_one.lastElementChild.cloneNode(true);
  last_slide.style.left = -slide_lenght + "px";
  carousel_one.insertBefore(last_slide, carousel_one.firstChild);
}

function removeClone() {
  var first_slide = carousel_one.firstElementChild;
  first_slide.parentNode.removeChild(first_slide);
}

function moveSlidesRight() {
  var slides = document.querySelectorAll(".slide");
  var slides_array = Array.prototype.slice.call(slides);
  var width = 0;

  slides_array.forEach(function (el, i) {
    el.style.left = width + "px";
    width += slide_lenght;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  var slides = document.querySelectorAll(".slide");
  var slides_array = Array.prototype.slice.call(slides);
  slides_array = slides_array.reverse();
  var maxWidth = (slides_array.length - 1) * slide_lenght;

  slides_array.forEach(function (el, i) {
    maxWidth -= slide_lenght;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener("resize", setScreenSize);

function setScreenSize() {
  if (window.innerWidth >= 1) {
    carousel_two = 3;
  } else if (window.innerHTML >= 300) {
    carousel_two = 2;
  } else {
    carousel_two = 1;
  }
  getScreenSize();
}

function getScreenSize() {
  var slides = document.querySelectorAll(".slide");
  var slides_array = Array.prototype.slice.call(slides);
  slide_lenght = carousel.offsetWidth / carousel_two;
  var initialWidth = -slide_lenght;
  slides_array.forEach(function (el) {
    el.style.width = slide_lenght + "px";
    el.style.left = initialWidth + "px";
    initialWidth += slide_lenght;
  });
}

var rightNav = document.querySelector(".nav-right");
rightNav.addEventListener("click", moveLeft);

var moving = true;
function moveRight() {
  if (moving) {
    moving = false;
    var last_slide = carousel_one.lastElementChild;
    last_slide.parentNode.removeChild(last_slide);
    carousel_one.insertBefore(last_slide, carousel_one.firstChild);
    removeClone();
    var first_slide = carousel_one.firstElementChild;
    first_slide.addEventListener("transitionend", activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  var first_slide = carousel_one.firstElementChild;
  moving = true;
  first_slide.removeEventListener("transitionend", activateAgain);
}

var leftNav = document.querySelector(".nav-left");
leftNav.addEventListener("click", moveRight);


function moveLeft() {
  if (moving) {
    moving = false;
    removeClone();
    var first_slide = carousel_one.firstElementChild;
    first_slide.addEventListener("transitionend", last);
    moveSlidesLeft();
  }
}

function last() {
  var first_slide = carousel_one.firstElementChild;
  first_slide.parentNode.removeChild(first_slide);
  carousel_one.appendChild(first_slide);
  first_slide.style.left = (arr_slide.length - 1) * slide_lenght + "px";
  addClone();
  moving = true;
  first_slide.removeEventListener("transitionend", last);
}

//BOSH OG'RIQNI TUGASHI :>
//
//
//
//
//
//
//
//
//
//CLOCK START
const deadline = '2024-07-30';

function getTimerDate(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
    day = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minuts = Math.floor((t / 1000 * 60) % 60),
    seconds = Math.floor((t / 1000) % 60)


    return {
        total: t,
        d: day,
        h: hours,
        m: minuts,
        s: seconds,
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
       return `0${num}`;
    }else{
        return num;
    }
}

function setTimeDate(select, endTime) {
    const timer = document.querySelector(select),
    day = document.querySelector('#day'),
    hours = document.querySelector('#hour'),
    minuts = document.querySelector('#minut'),
    seconds = document.querySelector('#second'),
    timerInterval = setInterval(update, 1000);

    update();

    function update() {
        const t = getTimerDate(endTime);

        day.innerHTML = t.d;
        hours.innerHTML = getZero(t.h);
        minuts.innerHTML = getZero(t.m);
        seconds.innerHTML = getZero(t.s);

        if (t.total <= 0) {
            clearInterval(timerInterval)
        }
    }
}

setTimeDate('.timer', deadline)







//MODAL WINDOW



let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};