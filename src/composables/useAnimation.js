import { onMounted, inject } from "vue";

export function useAnimation({
    animationElement,
    animationCallback,
    framerate = 60,
}) {
    const MAX_FRAME_RATE = framerate;
    const FRAME_DIFF = 1000 / MAX_FRAME_RATE;
    let lastDrawTime = 0;

    const backgroundIsIntersecting = inject('backgroundIsIntersecting', false);
    const backgroundsIntersect = inject('backgroundsIntersect');

    function init() {
      const now = Date.now();
      const diff = now - lastDrawTime;

      if (!backgroundIsIntersecting(animationElement.value)) {
        return
      }
      if (diff >= FRAME_DIFF) {
        animationCallback();
        lastDrawTime = now;
      }

      return window.requestAnimationFrame(init);
    }

    onMounted(() => {
      backgroundsIntersect(animationElement.value, init)
    });

    return { init }
}