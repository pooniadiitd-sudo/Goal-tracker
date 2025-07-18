document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark", toggle.checked);
    });
  }

  const chartEl = document.getElementById("weeklyChart");
  if (chartEl) {
    new Chart(chartEl, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Tasks Completed",
            data: [5, 6, 3, 7, 4, 2, 1],
            backgroundColor: "#03dac6"
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }
});

function addTask() {
  alert("Add Task clicked! (Placeholder)");
}
function exportData() {
  alert("Export to JSON (Placeholder)");
}
function exportCSV() {
  alert("Export to CSV (Placeholder)");
}
function importData(event) {
  alert("Import selected: " + event.target.files[0].name);
}