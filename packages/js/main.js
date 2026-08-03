// /*==================== MENU SHOW Y HIDDEN ====================*/
// const navMenu = document.getElementById("nav-menu"),
//   navToggle = document.getElementById("nav-toggle"),
//   navClose = document.getElementById("nav-close");

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.add("show-menu");
//   });
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if (navClose) {
//   navClose.addEventListener("click", () => {
//     navMenu.classList.remove("show-menu");
//   });
// }

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll(".nav__link");

// function linkAction() {
//   const navMenu = document.getElementById("nav-menu");
//   // When we click on each nav__link, we remove the show-menu class
//   navMenu.classList.remove("show-menu");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));

// /*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName("skills__content"),
//   skillsHeader = document.querySelectorAll(".skills__header");

// function toggleSkills() {
//   let itemClass = this.parentNode.className;

//   for (i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = "skills__content skills__close";
//   }
//   if (itemClass === "skills__content skills__close") {
//     this.parentNode.className = "skills__content skills__open";
//   }
// }

// skillsHeader.forEach((el) => {
//   el.addEventListener("click", toggleSkills);
// });

// /*==================== QUALIFICATION TABS ====================*/
// const tabs = document.querySelectorAll("[data-target]"),
//   tabContents = document.querySelectorAll("[data-content]");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.target);

//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove("qualification__active");
//     });
//     target.classList.add("qualification__active");

//     tabs.forEach((tab) => {
//       tab.classList.remove("qualification__active");
//     });
//     tab.classList.add("qualification__active");
//   });
// });

// /*==================== SERVICES MODAL ====================*/
// const modalViews = document.querySelectorAll(".services__modal"),
//   modalBtns = document.querySelectorAll(".services__button"),
//   modalCloses = document.querySelectorAll(".services__modal-close");

// let modal = function (modalClick) {
//   modalViews[modalClick].classList.add("active-modal");
// };

// modalBtns.forEach((modalBtn, i) => {
//   modalBtn.addEventListener("click", () => {
//     modal(i);
//   });
// });

// modalCloses.forEach((modalClose) => {
//   modalClose.addEventListener("click", () => {
//     modalViews.forEach((modalView) => {
//       modalView.classList.remove("active-modal");
//     });
//   });
// });

// /*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper(".testimonial__container", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 48,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },

//   breakpoints: {
//     568: {
//       slidesPerView: 2,
//     },
//   },

//   /* mousewheel: true,
//   keyboard: true, */
// });

// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

// /*==================== CHANGE BACKGROUND HEADER ====================*/
// function scrollHeader() {
//   const nav = document.getElementById("header");
//   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 80) nav.classList.add("scroll-header");
//   else nav.classList.remove("scroll-header");
// }
// window.addEventListener("scroll", scrollHeader);

// /*==================== SHOW SCROLL UP ====================*/
// function scrollUp() {
//   const scrollUp = document.getElementById("scroll-up");
//   // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
//   if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
//   else scrollUp.classList.remove("show-scroll");
// }
// window.addEventListener("scroll", scrollUp);

// /*==================== DARK LIGHT THEME ====================*/

// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const iconTheme = "uil-sun";

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener("click", () => {
//   // Add or remove the dark / icon theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });
// // PROGRESS BAR
// document.addEventListener('scroll', function() {
//   const progressBar = document.getElementById('progress-bar');
//   const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   const scrollPosition = window.scrollY;
//   const scrollPercentage = (scrollPosition / totalHeight) * 100;

//   progressBar.style.width = scrollPercentage + '%';
// });


































































































"use strict";

/*==================== MENU SHOW / HIDE ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

// Unified function to handle state
const closeMenu = () => {
  if (navMenu) navMenu.classList.remove("show-menu");
  if (navClose) navClose.style.display = "none";
  if (navToggle) navToggle.style.display = "inline-flex";
};

// Open Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.style.display = "none";
    navClose.style.display = "inline-flex";
  });
}

// Close Menu via Close Button
if (navClose) {
  navClose.addEventListener("click", closeMenu);
}

// Close Menu & Reset Icons via Nav Links
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/*==================== ACCORDION SKILLS ====================*/
const skillsHeaders = document.querySelectorAll(".skills__header");

skillsHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const itemClass = this.parentNode.className;
    const allSkillsContents = document.querySelectorAll(".skills__content");

    allSkillsContents.forEach((content) => {
      content.className = "skills__content skills__close";
    });

    if (itemClass === "skills__content skills__close") {
      this.parentNode.className = "skills__content skills__open";
    }
  });
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((content) => content.classList.remove("qualification__active"));
    target.classList.add("qualification__active");

    tabs.forEach((t) => t.classList.remove("qualification__active"));
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => modalViews[index].classList.add("active-modal"));
});

modalCloses.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modalViews.forEach((view) => view.classList.remove("active-modal"));
  });
});

/*==================== TESTIMONIAL SWIPER ====================*/
if (typeof Swiper !== "undefined") {
  new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: { slidesPerView: 2 },
    },
  });
}

/*==================== SCROLL SECTIONS ACTIVE LINK (INTERSECTION OBSERVER) ====================*/
const sections = document.querySelectorAll("section[id]");
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -40% 0px",
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      document.querySelectorAll(".nav__menu a").forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active-link");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

/*==================== SCROLL UI UPDATES (BATCHED) ====================*/
const header = document.getElementById("header");
const scrollUpBtn = document.getElementById("scroll-up");
const progressBar = document.getElementById("progress-bar");
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      // Header Background
      if (header) {
        scrollY >= 80 ? header.classList.add("scroll-header") : header.classList.remove("scroll-header");
      }

      // Scroll Up Button
      if (scrollUpBtn) {
        scrollY >= 560 ? scrollUpBtn.classList.add("show-scroll") : scrollUpBtn.classList.remove("show-scroll");
      }

      // Progress Bar
      if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progressBar.style.width = `${(scrollY / totalHeight) * 100}%`;
      }

      isScrolling = false;
    });
    isScrolling = true;
  }
}, { passive: true });

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
if (themeButton) {
  const darkTheme = "dark-theme";
  const iconTheme = "uil-sun";

  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}