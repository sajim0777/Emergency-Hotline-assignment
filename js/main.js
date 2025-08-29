let totalHearts = 0;
let totalCoins = 100;
let totalCopies = 0;

// DOM references
const heartCount = document.getElementById("totalHeart");
const coinDisplay = document.getElementById("totalCoins");
const copyDisplay = document.getElementById("totalCopy");
const callHistoryContainer = document.querySelector(".call-history");

// Heart button
document.querySelectorAll(".icon-heart").forEach((heart) => {
  heart.addEventListener("click", () => {
    totalHearts++;
    heartCount.textContent = totalHearts;
  });
});

//  Call Button
document.querySelectorAll(".btn-call1-number").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".depertment-container");
    const serviceName = card.querySelector(".deprt-title").innerText;
    const serviceNumber = card.querySelector(".Number-dial").innerText;

    // check coin
    if (totalCoins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    totalCoins -= 20;
    coinDisplay.innerText = totalCoins;
    alert(`📞 Calling ${serviceName} at ${serviceNumber}`);

    const historyItem = document.createElement("div");
    historyItem.classList.add("call-history-container");
    historyItem.innerHTML = `
      <h3>${serviceName} <br /><span>${serviceNumber}</span></h3>
      <p>${new Date().toLocaleTimeString()}</p>
    `;
    callHistoryContainer.appendChild(historyItem);
  });
});

//  Copy Button
document.querySelectorAll(".btn-copy-number").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".depertment-container");
    const serviceNumber = card.querySelector(".Number-dial").innerText;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      totalCopies++;
      copyDisplay.textContent = `${totalCopies} Copy`;
      alert(`Number ${serviceNumber} copied to clipboard!`);
    });
  });
});

// Clear History
document.querySelector(".clear-btn").addEventListener("click", () => {
  const items = callHistoryContainer.querySelectorAll(
    ".call-history-container"
  );
  items.forEach((item, index) => {
    if (index > 0) item.remove();
  });
});
