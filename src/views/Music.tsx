import { html } from "hono/html";

const Music = () => {
  return (
    <p>
      Theme song:{" "}
      <a id="playPause" class="font-bold select-none cursor-pointer">
        [Blz - December]
      </a>{" "}
      (click to play/pause)
      <audio id="bg" src="/december.mp3" autoplay loop></audio>
      {html`
        <script>
          const audio = document.getElementById("bg");
          const playPause = document.getElementById("playPause");
          playPause.addEventListener("click", function () {
            if (audio.paused) {
              playPause.classList.toggle("text-primary", true);
              playPause.classList.toggle("shadow-primary", true);
              playPause.classList.toggle("shadow-secondary", false);
              playPause.classList.toggle("text-secondary-500", false);
              audio.play();
              playPause.innerHTML = "[Playing Blz - December]";
            } else {
              playPause.classList.toggle("text-primary", false);
              playPause.classList.toggle("shadow-primary", false);
              playPause.classList.toggle("text-secondary-500", true);
              playPause.classList.toggle("shadow-secondary", true);
              audio.pause();
              playPause.innerHTML = "[Paused Blz - December]";
            }
          });
        </script>
      `}
    </p>
  );
};

export default Music;
