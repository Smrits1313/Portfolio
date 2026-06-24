/*
 * BlurText — word-by-word blur-in headline.
 *
 * An IntersectionObserver fires once at 10% visibility, then each word
 * (split on spaces) animates through a 3-step blur/opacity/translate keyframe
 * with a staggered delay. Words use a real space gap (marginRight) rather than
 * a non-breaking space, because the tight letter-spacing collapses nbsp.
 */
(function () {
  const { useRef, useEffect, useState } = React;
  const { motion } = window.Motion;

  const BlurText = ({ text, className = "" }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    const words = text.split(" ");

    const hidden = { filter: "blur(10px)", opacity: 0, y: 50 };
    const shown = {
      filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
      opacity: [0, 0.5, 1],
      y: [50, -5, 0],
    };

    return (
      <p
        ref={ref}
        className={className}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: "0.1em",
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={hidden}
            animate={inView ? shown : hidden}
            transition={{
              duration: 0.7, // stepDuration 0.35 x 2
              times: [0, 0.5, 1],
              ease: "easeOut",
              delay: (i * 100) / 1000,
            }}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    );
  };
  window.BlurText = BlurText;
})();
