document.addEventListener("click", function (event) {
  const button = event.target.closest(".abstract-toggle");
  if (!button) return;

  const abstractId = button.getAttribute("aria-controls");
  const abstract = document.getElementById(abstractId);
  if (!abstract) return;

  const opening = button.getAttribute("aria-expanded") !== "true";

  button.setAttribute("aria-expanded", String(opening));
  abstract.hidden = !opening;
});