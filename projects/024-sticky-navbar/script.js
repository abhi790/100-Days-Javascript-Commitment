const navbarEle = document.querySelector(".navbar");
const topBarEle = document.querySelector(".top-bar");
const threshold = topBarEle.offsetHeight;
const navbarHeight = navbarEle.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= threshold) {
    navbarEle.classList.add("sticky");
    document.body.style.paddingTop = navbarHeight + "px";
  } else {
    navbarEle.classList.remove("sticky");
    document.body.style.paddingTop = "0px";
  }
});
