let autoplay = false;
let currentIndex = 0;
let intervalId;

function toggleAutoplay() {
  autoplay = !autoplay;
  if (autoplay) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
}

function startAutoplay() {
  intervalId = setInterval(() => {
    const items = document.querySelectorAll('#watthai');
    const total = items.length;
    currentIndex = (currentIndex + 1) % total;
    items.forEach((item, i) => {
      item.style.display = (i === currentIndex) ? 'block' : 'none';
    });
  }, 2000);
}

function stopAutoplay() {
  clearInterval(intervalId);
  document.querySelectorAll('#watthai').forEach((item) => {
    item.style.display = 'block';
  });
}