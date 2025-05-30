document.addEventListener("DOMContentLoaded", function () {
  // Accordion logic
  const cards = document.querySelectorAll(".questions-card");

  cards.forEach((card) => {
    const question = card.querySelector(".question");
    const answer = card.querySelector(".answer");
    const icon = question.querySelector("svg path");

    if (answer) answer.style.display = "none"; // Hide answers initially

    question.addEventListener("click", () => {
      const isActive = card.classList.contains("active");

      // Close all cards
      cards.forEach((c) => {
        c.classList.remove("active");
        const a = c.querySelector(".answer");
        const i = c.querySelector("svg path");
        if (a) a.style.display = "none";
        if (i) {
          i.setAttribute(
            "d",
            "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          );
        }
      });

      // Open this card if it was not already open
      if (!isActive) {
        card.classList.add("active");
        if (answer) answer.style.display = "block";
        if (icon) {
          icon.setAttribute(
            "d",
            "M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
          );
        }
      }
    });
  });
});
