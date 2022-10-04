import locomotiveScroll from "locomotive-scroll";
import "./styles/styles.css";
import "./styles/media-queries.css";
import "./styles/base.css";
import headerImg from "./assets/images/header-img.png";
import headerImgSm from "./assets/images/header-img-sm.png";
import abuotImg from "./assets/images/abuot.png";
import project1 from "./assets/images/project-1.png";
import project2 from "./assets/images/project-2.png";
import project3 from "./assets/images/project-3.png";
import { gsap } from "gsap"

const headerImage = document.getElementById("header-img");
const headerImageSm = document.getElementById("header-img-sm");
const aboutImage = document.getElementById("about-img");
const project1Image = document.getElementById("project1-img");
const project2Image = document.getElementById("project2-img");
const project3Image = document.getElementById("project3-img");
const cursor = document.querySelector(".cursor")
const images = document.querySelectorAll("img")


images.forEach(image => {
  image.addEventListener("mouseenter", e => {
  cursor.classList.add("image-cursor")
})
image.addEventListener("mouseleave", e => {
  cursor.classList.remove("image-cursor")
})
}
)

console.log('images', images)
headerImage.src = headerImg;
headerImageSm.src = headerImgSm;
aboutImage.src = abuotImg;
project1Image.src = project1;
project2Image.src = project2;
project3Image.src = project3;

window.addEventListener("mousemove", e => {
  cursor.style.top = `${e.clientY}px`
  cursor.style.left = `${e.clientX}px`
})

// document.onreadystatechange = function () {
//   const container = document.querySelector(".container");
//   const loader = document.querySelector("#loader");
//   if (document.readyState !== "complete") {
//     container.style.visibility = "hidden";
//     loader.style.visibility = "visible";
//   } else {
//     container.style.visibility = "visible";
//     setTimeout(() => {
//       loader.remove();
//     }, 5000);
//   }
// };

const loader = document.querySelector("#loader");
window.addEventListener("DOMContentLoaded", ()=> {
  setTimeout(() => {
    loader.remove();
    ``
    const scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    
  }, 5000);
})


gsap.registerPlugin(ScrollTrigger);
gsap.to("#say-hi", {x: 500})

let sections = gsap.utils.toArray(".project");
const getTotalWidth = () => sections.slice(1).reduce((val, section) => val + section.offsetWidth, 0);
const totalWidth = getTotalWidth();
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    scroller: ".projects",
    pinType: "fixed",
    trigger: ".projects-wrap",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    start: 0,
    end: "+=" + (totalWidth / 4).toString(),
    invalidateOnRefresh: true
  }
});
