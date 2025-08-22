document.addEventListener("DOMContentLoaded", () => {
  const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in-visible");
      obs.unobserve(entry.target);
    });
  }, appearOptions);

  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("fade-in-hidden");
    observer.observe(el);
  });
});