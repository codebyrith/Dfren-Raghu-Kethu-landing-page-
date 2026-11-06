/**
 * Custom Antigravity Theme - Main JavaScript
 * Production-ready Vanilla JS for WordPress Classic Theme
 */

(function () {
  "use strict";

  // Configuration - Can be overridden via wp_localize_script (antigravityData)
  const config = {
    razorpayUrl: (typeof antigravityData !== 'undefined' && antigravityData.razorpayUrl) ? antigravityData.razorpayUrl : "https://rzp.io/rzp/Y6bhLqh",
    thankYouUrl: (typeof antigravityData !== 'undefined' && antigravityData.thankYouUrl) ? antigravityData.thankYouUrl : "/thank-you",
    themeUri: (typeof antigravityData !== 'undefined' && antigravityData.themeUri) ? antigravityData.themeUri : ""
  };

  /**
   * 1. Booking Modal Logic
   */
  window.openBookingModal = function (source = "General Booking") {
    const modal = document.getElementById("booking-modal");
    if (!modal) return;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Pre-fill fields if user booked previously
    try {
      const raw = sessionStorage.getItem("peyrachi_booking") || localStorage.getItem("peyrachi_booking");
      if (raw) {
        const d = JSON.parse(raw);
        const nameInput = document.getElementById("form-name");
        const phoneInput = document.getElementById("form-phone");
        const dobInput = document.getElementById("form-dob");
        const rasiInput = document.getElementById("form-rasi");

        if (nameInput && d.name && !nameInput.value) nameInput.value = d.name;
        if (phoneInput && d.phone && !phoneInput.value) phoneInput.value = d.phone;
        if (dobInput && d.dob && !dobInput.value) dobInput.value = d.dob;
        if (rasiInput && d.rasi && !rasiInput.value) rasiInput.value = d.rasi;
      }
    } catch (e) {
      console.warn("Storage read error:", e);
    }
  };

  window.closeBookingModal = function () {
    const modal = document.getElementById("booking-modal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  window.handleModalBackdropClick = function (event) {
    if (event.target.id === "booking-modal") {
      window.closeBookingModal();
    }
  };

  /**
   * 2. Booking Form Submission & Payment Redirection
   */
  window.handleBookingSubmit = function (event) {
    if (event) event.preventDefault();

    const name = document.getElementById("form-name")?.value.trim() || "";
    const phone = document.getElementById("form-phone")?.value.trim() || "";
    const dob = document.getElementById("form-dob")?.value || "";
    const rasi = document.getElementById("form-rasi")?.value || "";

    if (!name || !phone || !dob) {
      alert("Please fill in your Name, WhatsApp/Phone Number, and Date of Birth.");
      return;
    }

    const bookingData = {
      name: name,
      phone: phone,
      dob: dob,
      rasi: rasi,
      timestamp: new Date().toISOString(),
      consultation: "Rahu Ketu Peyarchi Consultation + Bonus Lifetime Gemstone Prediction"
    };

    try {
      sessionStorage.setItem("peyrachi_booking", JSON.stringify(bookingData));
      localStorage.setItem("peyrachi_booking", JSON.stringify(bookingData));
    } catch (e) {
      console.warn("Storage write error:", e);
    }

    const submitBtn = document.getElementById("submit-booking-btn");
    if (submitBtn) {
      submitBtn.innerHTML = `<span>Redirecting to Payment...</span>`;
      submitBtn.disabled = true;
    }

    // Open Razorpay gateway in a new tab
    window.open(config.razorpayUrl, "_blank");

    // Automatically navigate to Thank You / Confirmation page
    setTimeout(function () {
      window.location.href = config.thankYouUrl;
    }, 450);
  };

  /**
   * 3. FAQ Accordion Toggle (Dynamic open/close state)
   */
  window.toggleFaq = function (index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if (!content || !icon) return;

    const isHidden = content.classList.contains("hidden");

    // Close all FAQs dynamically
    document.querySelectorAll(".faq-content").forEach((c) => c.classList.add("hidden"));
    document.querySelectorAll("[id^='faq-icon-']").forEach((ic) => {
      ic.textContent = "+";
      ic.classList.remove("rotate-45");
    });

    if (isHidden) {
      content.classList.remove("hidden");
      icon.textContent = "×";
      icon.classList.add("rotate-45");
    }
  };

  /**
   * 4. Thank You Page Personalization Helper
   */
  function initThankYouPersonalization() {
    const nameRow = document.getElementById("client-name-row");
    const nameVal = document.getElementById("client-name-val");
    const phoneRow = document.getElementById("client-phone-row");
    const phoneVal = document.getElementById("client-phone-val");
    const waBtn = document.getElementById("thank-you-wa-btn");

    if (!nameRow && !waBtn) return;

    try {
      const raw = sessionStorage.getItem("peyrachi_booking") || localStorage.getItem("peyrachi_booking");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.name && nameRow && nameVal) {
          nameVal.textContent = d.name;
          nameRow.classList.remove("hidden");
        }
        if (d.phone && phoneRow && phoneVal) {
          phoneVal.textContent = d.phone;
          phoneRow.classList.remove("hidden");
        }
        if (waBtn && d.name) {
          const msg = encodeURIComponent(`Hi Dr. Kalpana Srikaanth team, I am ${d.name} (${d.phone}). I have completed my Rahu Ketu Peyarchi consultation booking payment.`);
          waBtn.href = `https://wa.me/918667515295?text=${msg}`;
        }
      }
    } catch (e) {
      console.warn("Thank you personalization error:", e);
    }
  }

  /**
   * 5. Document Ready Initialization
   */
  document.addEventListener("DOMContentLoaded", function () {
    // Escape key listener to close modal
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" || e.keyCode === 27) {
        window.closeBookingModal();
      }
    });

    // Wire up any elements with data-book-consultation
    document.querySelectorAll("[data-book-consultation]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.openBookingModal(btn.getAttribute("data-book-consultation") || "Button Click");
      });
    });

    // Form submit listener
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
      bookingForm.addEventListener("submit", window.handleBookingSubmit);
    }

    // Modal backdrop click listener
    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.addEventListener("click", window.handleModalBackdropClick);
    }

    // Modal close button
    const closeBtn = document.getElementById("close-modal-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", window.closeBookingModal);
    }

    // Initialize thank you page personalization
    initThankYouPersonalization();
  });
})();

