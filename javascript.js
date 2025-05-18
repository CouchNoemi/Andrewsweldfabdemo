document.addEventListener("DOMContentLoaded", function () {
  // Form submission logic
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const name = document.querySelector("input[name='name']").value.trim();
      const email = document.querySelector("input[name='email']").value.trim();
      const tel = document.querySelector("input[name='tel']").value.trim();

      const message = document.querySelector("textarea").value.trim();
      console.log(name, email, tel, message);

      const body = `
        Name: ${name}
        Email: ${email}
        Tel: ${tel}
        Message: ${message}
      `;
      window.location.href = `mailto:noemicouch@gmail.com,obendesmond2@gmail.com,?subject=Customer&body=${body}`;
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.querySelector("input[name='name']").value.trim();
      const email = document.querySelector("input[name='email']").value.trim();
      const tel = document.querySelector("input[name='tel']").value.trim();

      const message = document.querySelector("textarea").value.trim();

      console.log(name, tel, email);

      if (!name || !email || !message) {
        messageBox.style.color = "red";
        messageBox.textContent =
          "Please fill out all fields before submitting.";
        return;
      }

      messageBox.style.color = "green";
      messageBox.textContent =
        "Thanks for your message, " + name + "! We'll be in touch soon.";
      form.reset();
    });
  }

  // Show More button logic
  const showMoreBtn = document.getElementById("showMoreBtn");
  const hiddenImages = document.querySelectorAll(".gallery .hide");
  let index = 0;

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      const imagesToShow = 2;
      for (
        let i = 0;
        i < imagesToShow && index < hiddenImages.length;
        i++, index++
      ) {
        hiddenImages[index].classList.remove("hide");
      }

      if (index >= hiddenImages.length) {
        showMoreBtn.style.display = "none";
      }
    });
  }

  // Flat Beds section click logic
  const flatBedsBtn = document.getElementById("flatBedsBtn");
  const flatbedGallerySection = document.getElementById(
    "flatbedGallerySection"
  );

  if (flatBedsBtn && flatbedGallerySection) {
    flatBedsBtn.addEventListener("click", function () {
      flatbedGallerySection.classList.remove("hide");
      flatbedGallerySection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
