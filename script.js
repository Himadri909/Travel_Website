// Trigger Section Animation on Scroll
const allSections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

allSections.forEach((section) => sectionObserver.observe(section));

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// about section slide animation

let slideIndex = 0;
const images = document.querySelectorAll(".custom-slider img");

function slideShow() {
  images.forEach((img) => img.classList.remove("active"));
  images[slideIndex].classList.add("active");
  slideIndex = (slideIndex + 1) % images.length;
}

slideShow(); // Show first image
setInterval(slideShow, 3000); // Auto slide every 3 sec

//gallery scroll animation

const galleryItems = document.querySelectorAll(".gallery-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

galleryItems.forEach((item) => observer.observe(item));

// counter

const counters = document.querySelectorAll(".counter-number");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target + "+";
    }
  };
  updateCount();
});

// form validation
// Simple form validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message === "") {
    alert("Please enter your message.");
    return;
  }

  alert("Thank you for contacting us, " + name + "!");
  contactForm.reset();
});
