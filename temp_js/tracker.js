document.addEventListener("DOMContentLoaded", () => {
  setupTracker();
});

function setupTracker() {
  const trackerForm = document.getElementById("tracker-form");
  if (!trackerForm) return;

  trackerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const total = parseFloat(document.getElementById("book-total").value);
    const read = parseFloat(document.getElementById("pages-read").value);
    const speed = parseFloat(document.getElementById("read-speed").value);

    if (read > total) {
      alert("You can't read more pages than the book has!");
      return;
    }

    const percentage = (read / total) * 100;
    const remainingPages = total - read;
    const daysRemaining = Math.ceil(remainingPages / speed);

    document.getElementById("tracker-results").style.display = "block";

    const progressBar = document.getElementById("progress-bar");
    setTimeout(() => {
      progressBar.style.width = `${percentage}%`;
      progressBar.innerText = `${Math.round(percentage)}%`;
    }, 100);

    document.getElementById("percent-text").innerText = `${percentage.toFixed(1)}%`;
    document.getElementById("days-left").innerText = daysRemaining === Infinity ? "N/A" : daysRemaining;
    
    saveProgressToAccount(percentage, daysRemaining);
  });
}

function saveProgressToAccount(percentage, daysRemaining) {
    const user = localStorage.getItem("readifyUser");
    
    if (user) {
        const trackerData = {
            percent: percentage.toFixed(1),
            days: daysRemaining === Infinity ? "N/A" : daysRemaining,
            timestamp: new Date().toLocaleDateString()
        };
        
        localStorage.setItem("userTrackerProgress", JSON.stringify(trackerData));
        console.log("Progress synced to account.");
    }
}