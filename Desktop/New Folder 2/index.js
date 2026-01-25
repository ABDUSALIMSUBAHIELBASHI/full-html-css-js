
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const elements = document.querySelectorAll(".text-box, .image-box img");

function revealOnScroll() {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const msg = document.getElementById("successMsg");

  if (!name || !email || !amount) {
    msg.textContent = "Please fill out all required fields.";
    msg.style.color = "red";
    return false;
  }

  msg.textContent = `Thank you, ${name}! Your donation of $${amount} has been received.`;
  msg.style.color = "#ffb703";
  document.getElementById("donationForm").reset();
  return false;
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
