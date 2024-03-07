onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  const audio = document.getElementById('audio');
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function() {
  if (toggle.checked) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener('ended', function() {
  audio.currentTime = 0;
  audio.play();
});
