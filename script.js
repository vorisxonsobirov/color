
const scrollToTopBtn = document.getElementById("scrollToTop");

scrollToTopBtn.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});




const scrollBtn = document.getElementById("scroll");
const card1 = document.querySelector(".card1");
 
card1.addEventListener("click", (e) => {
  function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }
  const getRandomColor = () =>
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
  let changeColor = () => {
    document.body.style.background = getRandomColor();
  };
  setInterval(changeColor, 1000);
  let intervalOfGradient = () => {
    const amountColors = random(2.6);
    const arrOfColor = [];
    for (let i = 0; i < amountColors; i++) {
      arrOfColor[i] = getRandomColor();
    }
    return arrOfColor;
  };
  let renderOfGradient = () => {
    setTimeout(() => {
      document.body.style.background = `linear-gradient(${random(
        0,
        360
      )}deg,${intervalOfGradient()})`;
      // console.log(document.body.style.background);
    });
  };
  setInterval(renderOfGradient, 1500);
});
const udalit = document.getElementById("udalit");

udalit.addEventListener("click", (event) => {
  event.target.parentElement.classList.toggle("bg-red-400");
  event.target.parentElement.parentElement.classList.toggle("bg-gray-400");
});// console.log(
//   window.navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
//   })
// );

const scrollToTopBtn = document.getElementById("scrollToTop");

scrollToTopBtn.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});

const scrollBtn = document.getElementById("scroll");
const card1 = document.querySelector(".card1");

// window.addEventListener("mousemove", (e) => {
//   scrollBtn.style.top = e.clientY + "px";
//   scrollBtn.style.left = e.clientX + "px";
// });
card1.addEventListener("click", (e) => {
  function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }
  const getRandomColor = () =>
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
  let changeColor = () => {
    document.body.style.background = getRandomColor();
  };
  setInterval(changeColor, 1000);
  let intervalOfGradient = () => {
    const amountColors = random(2.6);
    const arrOfColor = [];
    for (let i = 0; i < amountColors; i++) {
      arrOfColor[i] = getRandomColor();
    }
    return arrOfColor;
  };
  let renderOfGradient = () => {
    setTimeout(() => {
      document.body.style.background = `linear-gradient(${random(
        0,
        360
      )}deg,${intervalOfGradient()})`;
      // console.log(document.body.style.background);
    });
  };
  setInterval(renderOfGradient, 1500);
});
const udalit = document.getElementById("udalit");

udalit.addEventListener("click", (event) => {
  event.target.parentElement.classList.toggle("bg-red-400");
  event.target.parentElement.parentElement.classList.toggle("bg-gray-400");
});