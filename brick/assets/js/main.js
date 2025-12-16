document.addEventListener("DOMContentLoaded", function () {
  const contactBtns = document.querySelectorAll(".contact-btn");
  const modalEl = document.getElementById("contactModal");

  if (!contactBtns.length || !modalEl || typeof bootstrap === "undefined") {
    return;
  }

  const modal = new bootstrap.Modal(modalEl);

  contactBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      modal.show();
    });
  });
});
