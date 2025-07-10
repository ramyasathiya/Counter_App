const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxLength = 100;

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  const remaining = maxLength - length;

  counter.innerHTML = `<strong>${length}</strong> / ${maxLength} characters`;

  if (length > maxLength) {
    counter.style.color = "red";
    counter.innerHTML += " ❌ Too long!";
  } else if (length >= maxLength - 10) {
    counter.style.color = "orange";
    counter.innerHTML += " ⚠️ Almost full";
  } else {
    counter.style.color = "#333";
  }
});
