function setupEmailJS() {
  emailjs.init("1bkOTscosxtKZemWs");

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_h8k2sjj", "template_cpdyblo", form)
        .then(() => {
          alert("Message sent successfully!");
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupEmailJS();
});
