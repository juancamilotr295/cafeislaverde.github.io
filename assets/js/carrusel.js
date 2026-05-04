document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("partnersTrack");
    if (!track) return;

    const carousel = track.parentElement;

    const visibleWidth = carousel.offsetWidth;
    let contentWidth = track.scrollWidth;

    /* 🔥 duplicar SOLO lo necesario (con límite) */
    let maxLoops = 5;

    while (contentWidth < visibleWidth * 2 && maxLoops > 0) {
        track.innerHTML += track.innerHTML;
        contentWidth = track.scrollWidth;
        maxLoops--;
    }

    /* ancho original real */
    const originalWidth = contentWidth / 2;

    track.style.setProperty("--scroll-width", originalWidth + "px");

    /* velocidad consistente */
    const pxPerSecond = 80;
    track.style.setProperty("--duration", originalWidth / pxPerSecond + "s");
});