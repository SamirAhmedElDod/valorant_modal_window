"use strict";

const modal = document.querySelector(".modal_view");
const modal2 = document.querySelector(".modal_view2");
const modal3 = document.querySelector(".modal_view3");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".modal");

// document.querySelector(".modal").addEventListener("click", function() {
//   console.log("button clicked");
// })
// btnOpen.addEventListener

const openFUN = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
const openFUN2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
const openFUN3 = function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
const closeFun = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
const closeFun2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
}
const closeFun3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
}

const toTop = function () {
  window.scrollTo(0, 200);
}

for (let i = 0; i < 3; i++) {
  document.querySelector(".modal").addEventListener("click", openFUN);
  document.querySelector(".modal2").addEventListener("click", openFUN2);
  document.querySelector(".modal3").addEventListener("click", openFUN3);

  document.querySelector(".close-modal").addEventListener("click", closeFun)
  document.querySelector(".close-modal2").addEventListener("click", closeFun2)
  document.querySelector(".close-modal3").addEventListener("click", closeFun3)

  document.querySelector(".overlay").addEventListener("click", closeFun)
  document.querySelector(".overlay").addEventListener("click", closeFun2)
  document.querySelector(".overlay").addEventListener("click", closeFun3)


  document.querySelector(".modal").addEventListener("click", toTop)
  document.querySelector(".modal2").addEventListener("click", toTop)
  document.querySelector(".modal3").addEventListener("click", toTop)
}

// for (let i = 0 ; i < openBtn.length; i++) {
//   console.log(btnOpen.add);
// }
