document.addEventListener("DOMContentLoaded", function() {
  const quotes = [
    { text: "Life is a journey, not a destination.", author: "Ralph Waldo Emerson", tag: "Life" },
    { text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr.", tag: "Faith" },
    { text: "Smile, and the world smiles with you.", author: "Stanley Gordon West", tag: "Smile" },
    { text: "Courage is grace under pressure.", author: "Ernest Hemingway", tag: "Courage" }
  ];
  let current = 0;
  const textEl = document.getElementById("quote-text");
  const authorEl = document.getElementById("quote-author");
  const tagButtons = document.querySelectorAll(".filter-tags button");

  function showQuote(idx) {
    const q = quotes[idx];
    textEl.textContent = `"${q.text}"`;
    authorEl.textContent = `— ${q.author}`;
  }

  function nextQuote() {
    current = (current + 1) % quotes.length;
    showQuote(current);
  }

  // Initial display
  showQuote(0);
  let interval = setInterval(nextQuote, 5000);

  // Tag filtering
  tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      clearInterval(interval);
      tagButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tag = btn.dataset.tag;
      const filtered = tag === "All"
        ? quotes
        : quotes.filter(q => q.tag === tag);
      if (filtered.length) {
        current = Math.floor(Math.random() * filtered.length);
        // Show a random quote from filtered set
        showQuote(quotes.indexOf(filtered[current]));
      }
      interval = setInterval(nextQuote, 5000);
    });
  });
});