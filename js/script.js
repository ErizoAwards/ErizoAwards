function toggleMusic() {
    var music = document.getElementById("bgMusic");
    var btn = document.getElementById("musicBtn");
    
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸️";
        btn.style.boxShadow = "0 0 25px #00ff00";
    } else {
        music.pause();
        btn.innerHTML = "🎵";
        btn.style.boxShadow = "0 0 15px #bf953f";
    }
}
