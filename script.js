// 1. Event Handling
document.getElementById("colorBtn").addEventListener("click", () => {
    const btn = document.getElementById("colorBtn");
    btn.textContent = "Clicked!";
    btn.style.backgroundColor = "#28a745";
  });
  
  document.getElementById("hoverText").addEventListener("mouseover", () => {
    document.getElementById("hoverText").textContent = "You're hovering!";
  });
  
  document.addEventListener("keydown", (e) => {
    document.getElementById("keypressDisplay").textContent = `You pressed: ${e.key}`;
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    document.getElementById("secretMsg").classList.remove("hidden");
  });
  
  // 2. Interactive Elements – Gallery
  const images = [
    "https://placekitten.com/300/200",
    "https://placekitten.com/301/200",
    "https://placekitten.com/302/200"
  ];
  let currentImg = 0;
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentImg];
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentImg = (currentImg - 1 + images.length) % images.length;
    document.getElementById("galleryImg").src = images[currentImg];
  });
  
  // Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
  
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
  
  // 3. Form Validation
  const form = document.getElementById("signupForm");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual form submission
  
    validateField("name", value => value.trim() !== "", "Name is required.");
    validateField("email", value => /\S+@\S+\.\S+/.test(value), "Enter a valid email.");
    validateField("password", value => value.length >= 8, "Password must be at least 8 characters.");
  });
  
  function validateField(id, testFn, errorMsg) {
    const input = document.getElementById(id);
    const feedback = document.getElementById(id + "Feedback");
  
    if (testFn(input.value)) {
      feedback.textContent = "✓";
      feedback.className = "feedback valid";
    } else {
      feedback.textContent = errorMsg;
      feedback.className = "feedback invalid";
    }
  }
  
  // Real-time validation
  ["name", "email", "password"].forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener("input", () => {
      if (id === "name") validateField(id, value => value.trim() !== "", "Name is required.");
      if (id === "email") validateField(id, value => /\S+@\S+\.\S+/.test(value), "Enter a valid email.");
      if (id === "password") validateField(id, value => value.length >= 8, "Password must be at least 8 characters.");
    });
  });
  