// script.js
document.getElementById("add-highlight-btn").addEventListener("click", function() {
    const newHighlight = prompt("Add a new highlight for Faker:");
    if (newHighlight) {
      const highlightList = document.getElementById("highlight-list");
      const newItem = document.createElement("li");
      newItem.textContent = newHighlight;
      highlightList.appendChild(newItem);
    }
  });
  
