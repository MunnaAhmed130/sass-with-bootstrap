// scroll bar as horizontal progress bar

// console.log(
//   document.body.scrollHeight, // full height of the website
//   window.innerHeight, // height of the screen
//   // pageYOffset,
//   scrollY
// );

// pageYOffset is aliar for scrollY

let value = document.body.scrollHeight - window.innerHeight;

window.addEventListener("resize", () => {
  value = document.body.scrollHeight - window.innerHeight;
});

// console.log(value);

window.addEventListener("load", () => {
  // console.log("loaded");
  const scroll = scrollY;
  const progress = Math.round((scroll / value) * 100);
  // console.log(scroll, progress);
  document.querySelector(".scroll-progress-bar").style.width = `${progress}vw`;
});

window.addEventListener("scroll", () => {
  const scroll = scrollY;
  const progress = Math.round((scroll / value) * 100);
  // console.log(scroll, progress);
  document.querySelector(".scroll-progress-bar").style.width = `${progress}vw`;
});
