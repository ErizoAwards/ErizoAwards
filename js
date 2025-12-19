function toggleMusic() {
    var music = document.getElementById("bgMusic");
    var btn = document.getElementById("musicBtn");
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸️";
    } else {
        music.pause();
        btn.innerHTML = "🎵";
    }
}
