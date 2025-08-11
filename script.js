const sections = ["home", "about", "portfolio", "courses"];
let currentIndex = 0;

const showSection = (index) => {
  sections.forEach((id, i) => {
    const sec = document.getElementById(id);
    if (i === index) {
      sec.classList.add("active");
      sec.style.opacity = 0;
      setTimeout(() => {
        sec.style.opacity = 1;
      }, 50);
    } else {
      sec.classList.remove("active");
      sec.style.opacity = 0;
    }
  });
  // Update navbar active class
  document.querySelectorAll("nav .nav-links a").forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("data-target") === sections[index]){
      link.classList.add("active");
    }
  });
  currentIndex = index;
  if(sections[index]==="home") {
    startTypingEffect();
  }
};

// Typing effect for welcome text
const typingText = "Welcome to My Portofolio";
let typingIndex = 0;
let typingInterval;

function startTypingEffect() {
  const h1 = document.querySelector("#home h1.typing-text");
  h1.textContent = "";
  typingIndex = 0;
  clearInterval(typingInterval);
  typingInterval = setInterval(() => {
    if (typingIndex < typingText.length) {
      h1.textContent += typingText.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100);
}

// Next button
document.querySelectorAll(".btn-next").forEach(btn => {
  btn.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if(nextIndex >= sections.length) nextIndex = 0;
    showSection(nextIndex);
  });
});

// Navbar link click
document.querySelectorAll("nav .nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("data-target");
    const index = sections.indexOf(target);
    if(index !== -1) showSection(index);
  });
});

// On load show home with typing effect
window.addEventListener("load", () => {
  showSection(0);
});
