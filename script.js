document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eco-form");
  const message = document.getElementById("form-message");
  const submitBtn = document.getElementById("submit-btn");
  const visitCount = document.getElementById("visit-count");

  // Contador simple local por navegador
  if (visitCount) {
    const currentCount = Number(localStorage.getItem("eco_visits") || "0") + 1;
    localStorage.setItem("eco_visits", String(currentCount));
    visitCount.textContent = currentCount;
  }

  if (!form || !message || !submitBtn) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    message.className = "form-message";
    message.textContent = "";
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        message.classList.add("is-success");
        message.innerHTML =
          "✅ ¡Gracias! Tu información fue enviada correctamente. Nos ayudas mucho a validar esta idea.";
        form.reset();
      } else {
        message.classList.add("is-error");
        message.innerHTML =
          "❌ No se pudo enviar el formulario en este momento. Intenta nuevamente.";
      }
    } catch (error) {
      message.classList.add("is-error");
      message.innerHTML =
        "❌ Ocurrió un error de conexión. Revisa internet e inténtalo de nuevo.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar información";
    }
  });
});
