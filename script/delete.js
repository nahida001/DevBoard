document.getElementById("clear-history").addEventListener("click", function() {
    const container = document.getElementById("history_add");
    if (container) {
        container.innerHTML = ""; 
    }
});

   