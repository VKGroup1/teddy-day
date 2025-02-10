document.getElementById("revealBtn").addEventListener("click", function() {
    document.querySelector(".love-letter").classList.remove("hidden");
    this.style.display = "none"; // Hide the button after clicking

    // Play cute teddy sound
    let teddySound = new Audio('assets/teddy-sound.mp3');
    teddySound.play();
});
