document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eco-form");
  const message = document.getElementById("form-message");

  if (!form || !message) return;

  form.addEventListener("submit", () => {
    message.textContent = "Enviando información...";
  });
});
