/*
 * FadingVideo — looping background <video> with a custom rAF-driven crossfade.
 *
 * No CSS transitions: opacity is animated frame-by-frame so a new fade can
 * resume from wherever the previous one left off. Looping is implemented
 * manually (the `loop` attribute is intentionally OFF) so we can fade out near
 * the end and fade back in on restart.
 */
(function () {
  const { useRef, useEffect } = React;

  const FADE_MS = 500; // duration of a single fade, ms
  const FADE_OUT_LEAD = 0.55; // start fading out this many seconds before the end

  const FadingVideo = ({ src, className = "", style = {} }) => {
    const videoRef = useRef(null);
    const rafRef = useRef(null);
    const fadingOutRef = useRef(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      // Animate opacity from its current value toward `target` over `duration`.
      const fadeTo = (target, duration = FADE_MS) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const from = parseFloat(video.style.opacity) || 0;
        const delta = target - from;
        const start = performance.now();

        const step = (now) => {
          const t = Math.min((now - start) / duration, 1);
          video.style.opacity = String(from + delta * t);
          if (t < 1) {
            rafRef.current = requestAnimationFrame(step);
          }
        };
        rafRef.current = requestAnimationFrame(step);
      };

      const safePlay = () => {
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      };

      const onLoadedData = () => {
        video.style.opacity = "0";
        safePlay();
        fadeTo(1);
      };

      const onTimeUpdate = () => {
        const remaining = video.duration - video.currentTime;
        if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
          fadingOutRef.current = true;
          fadeTo(0);
        }
      };

      const onEnded = () => {
        video.style.opacity = "0";
        setTimeout(() => {
          video.currentTime = 0;
          safePlay();
          fadingOutRef.current = false;
          fadeTo(1);
        }, 100);
      };

      video.addEventListener("loadeddata", onLoadedData);
      video.addEventListener("timeupdate", onTimeUpdate);
      video.addEventListener("ended", onEnded);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        video.removeEventListener("loadeddata", onLoadedData);
        video.removeEventListener("timeupdate", onTimeUpdate);
        video.removeEventListener("ended", onEnded);
      };
    }, []);

    return (
      <video
        ref={videoRef}
        src={src}
        className={className}
        style={{ opacity: 0, ...style }}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
    );
  };
  window.FadingVideo = FadingVideo;
})();
