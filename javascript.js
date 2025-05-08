document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    const name = document
      .querySelector("input[placeholder='Your Name']")
      .value.trim();
    const email = document
      .querySelector("input[placeholder='Your Email']")
      .value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      messageBox.style.color = "red";
      messageBox.textContent = "Please fill out all fields before submitting.";
      return;
    }

    messageBox.style.color = "green";
    messageBox.textContent =
      "Thanks for your message, " + name + "! We'll be in touch soon.";
    form.reset();
  });
});
