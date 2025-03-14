document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.getElementById("hero-text");
    
    setTimeout(() => {
        heroText.innerHTML = "Explore the World with Us!";
    }, 3000); // Changes text after 3 seconds
});
