/**
 * index.js
 * Common JS for index.html & thankyou.html
 * Author: You
 */

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     MOBILE MENU TOGGLE (Supports both menu versions)
     ===================================================== */

  const menuConfigs = [
    { toggle: "clMenuToggle", nav: "clNavLinks", activeClass: "cl-nav-active" },
    { toggle: "menuToggle", nav: "navLinks", activeClass: "active" }
  ];

  menuConfigs.forEach(config => {
    const toggleBtn = document.getElementById(config.toggle);
    const navLinks = document.getElementById(config.nav);

    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle(config.activeClass);
      });
    }
  });

  /* =====================================================
     SWIPER: USE CASES SLIDER
     ===================================================== */

  if (document.querySelector(".af-usecases-slider")) {
    new Swiper(".af-usecases-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      grabCursor: true,
      loop: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
  }

  /* =====================================================
     SWIPER: MINI SLIDER
     ===================================================== */

  if (document.querySelector(".af-mini-swiper")) {
    new Swiper(".af-mini-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      speed: 700,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  /* =====================================================
     CTA FORM VALIDATION
     ===================================================== */

  const form = document.querySelector(".af-cta-form");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phone");

  if (form && emailField && phoneField) {

    // Blocked personal email domains
    const blockedDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "aol.com",
      "icloud.com",
      "rediffmail.com",
      "protonmail.com",
    ];

    // Submit validation
    form.addEventListener("submit", function (e) {
      const email = emailField.value.trim().toLowerCase();
      const phone = phoneField.value.trim();

      // Business email validation
      if (!email.includes("@")) {
        alert("Please enter a valid business email address.");
        emailField.focus();
        e.preventDefault();
        return;
      }

      const emailDomain = email.split("@").pop();
      if (blockedDomains.includes(emailDomain)) {
        alert("Please use your business email address.");
        emailField.focus();
        e.preventDefault();
        return;
      }

      // Phone number validation (exactly 10 digits)
      if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        phoneField.focus();
        e.preventDefault();
      }
    });

    // Allow only numbers & max 10 digits
    phoneField.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
  }

});
