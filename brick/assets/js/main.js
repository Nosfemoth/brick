document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const modalEl = document.getElementById("contactModal");

  if (!contactBtn || !modalEl || typeof bootstrap === "undefined") {
    return;
  }

  const modal = new bootstrap.Modal(modalEl);

  contactBtn.addEventListener("click", function () {
    modal.show();
  });
});
