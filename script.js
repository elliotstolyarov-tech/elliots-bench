const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    if (contactForm.dataset.netlify === "true") {
      return;
    }

    event.preventDefault();
    const note = contactForm.querySelector(".form-note");
    note.textContent = "Thanks. In the next version, this form can connect to email or a database.";
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const briefCards = document.querySelectorAll(".brief-card");
const emptyState = document.querySelector(".empty-state");

if (filterButtons.length && briefCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      briefCards.forEach((card) => {
        const topics = card.dataset.topics.split(" ");
        const shouldShow = filter === "all" || topics.includes(filter);
        card.classList.toggle("is-hidden", !shouldShow);
        if (shouldShow) visibleCount += 1;
      });

      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
      }
    });
  });
}
