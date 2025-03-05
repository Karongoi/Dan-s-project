document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to Dan's Website!");

    let parentElement = document.getElementById("main");

    if (parentElement) {
        parentElement.innerHTML = ""; // Clears any previous content

        for (let i = 1; i <= 5; i++) {
            let newDiv = document.createElement("div");
            newDiv.textContent = i;
            newDiv.classList.add("box");
            parentElement.appendChild(newDiv);
        }
    } else {
        console.error("Element with ID 'main' not found.");
    }

    // Add button functionality
    document.getElementById("myButton").addEventListener("click", () => {
        alert("Button Clicked!");
    });
});
