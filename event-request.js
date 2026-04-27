(function () {
  var modal = document.getElementById("event-request-popup");
  if (!modal) return;

  var openButtons = document.querySelectorAll("[data-open-event-request]");
  var closeButtons = modal.querySelectorAll("[data-close-event-request]");

  function openModal(event) {
    if (event) event.preventDefault();
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }

  function closeModal() {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  }

  openButtons.forEach(function (button) {
    button.addEventListener("click", openModal);
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeModal);
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.hasAttribute("open")) closeModal();
  });
})();
