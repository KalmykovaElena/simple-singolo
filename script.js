const prev = document.querySelector(".arrow-left"),
  next = document.querySelector(".arrow-right"),
  slides = document.querySelectorAll(".slider"),
  dots = document.querySelectorAll(".dot");
let index = 0;

const changeActive = (ind) => {
  slides.forEach((el) => {
    el.classList.remove("active");
  });
  slides[ind].classList.add("active");
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    changeActive(index);
    changeActiveDots(index);
  } else {
    index++;
    changeActive(index);
    changeActiveDots(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    changeActive(index);
    changeActiveDots(index);
  } else {
    index--;
    changeActive(index);
    changeActiveDots(index);
  }
};
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) {
    console.log(11);
    nextSlide();
  } else if (event.keyCode == 37) {
    prevSlide();
  }
});
const changeActiveDots = (ind) => {
  dots.forEach((el) => {
    el.classList.remove("active");
  });
  dots[ind].classList.add("active");
};
dots.forEach((el, ind) => {
  el.addEventListener("click", () => {
    index = ind;
    changeActive(index);
    changeActiveDots(index);
  });
});

const btn = document.querySelector(".burger-icon"),
  menu = document.querySelector(".burger-menu"),
  anchor = document.querySelectorAll(".navigation--list");

btn.addEventListener("click", () => {
  menu.classList.toggle("active-burger-menu");
});

anchor.forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.remove("active-burger-menu");
  });
});
