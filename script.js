const textData = [
  {
    id: 0,
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img_desktop: "./images/desktop-image-hero-1.jpg",
    img_mobile: "./images/mobile-image-hero-1.jpg",
  },
  {
    id: 1,
    title: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    img_desktop: "./images/desktop-image-hero-2.jpg",
    img_mobile: "./images/mobile-image-hero-2.jpg",
  },
  {
    id: 2,
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img_desktop: "./images/desktop-image-hero-3.jpg",
    img_mobile: "./images/mobile-image-hero-3.jpg",
  },
];

// nav func
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// arrows btn func
const arrowBtnNext = document.querySelector(".next-btn");
const arrowBtnPrev = document.querySelector(".prev-btn");

const heroSection = document.querySelector("[data-info='0']");
const heroTitle = document.querySelector(".hero-text h1");
const heroText = document.querySelector(".hero-text p");

let index = 0;

arrowBtnNext.addEventListener("click", () => {
  if (index < 2) {
    index++;
    heroTitle.textContent = textData[index].title;
    heroText.textContent = textData[index].text;
    heroSection.setAttribute("data-info", index);
  }
});

arrowBtnPrev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    heroTitle.textContent = textData[index].title;
    heroText.textContent = textData[index].text;
    heroSection.setAttribute("data-info", index);
  }
});
