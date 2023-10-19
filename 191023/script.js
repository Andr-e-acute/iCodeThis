function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  document.querySelector(".time").textContent = currentDateTime;

  const currentDate = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });
  document.querySelector(".date").textContent = currentDate;
}
setInterval(updateDateTime, 6000);

updateDateTime();
