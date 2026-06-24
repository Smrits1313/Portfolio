/* Section 1 — Hero. Full-viewport background video + glass chrome over it. */
(function () {
  const { motion } = window.Motion;
  const FadingVideo = window.FadingVideo;
  const BlurText = window.BlurText;
  const Navbar = window.Navbar;
  const { ArrowUpRight, Play, Clock, Globe } = window;

  // Shared entrance: blur + rise, eased out. Each block sets its own delay.
  const enter = {
    initial: { filter: "blur(10px)", opacity: 0, y: 20 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
  };
  const ease = "easeOut";

  const STAT_ICONS = { clock: Clock, globe: Globe };

  const Hero = () => {
    const C = window.SITE_CONTENT.hero;

    return (
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background video — focal point is the top of frame, scaled to 120% */}
        <FadingVideo
          src={C.video}
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: "120%", height: "120%" }}
        />

        {/* Foreground */}
        <div className="relative z-10 flex flex-col h-full">
          <Navbar />

          {/* Centered hero content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pt-24 px-4">
            {/* Badge */}
            <motion.div
              initial={enter.initial}
              animate={enter.animate}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 py-1"
            >
              <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
                {C.badge.tag}
              </span>
              <span className="text-sm text-white/90 pr-3">{C.badge.text}</span>
            </motion.div>

            {/* Headline (word-by-word blur-in) */}
            <div className="mt-6">
              <BlurText
                text={C.headline}
                className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
              />
            </div>

            {/* Subheading */}
            <motion.p
              initial={enter.initial}
              animate={enter.animate}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
              className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
            >
              {C.subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={enter.initial}
              animate={enter.animate}
              transition={{ duration: 0.7, ease, delay: 1.1 }}
              className="flex items-center gap-6 mt-6"
            >
              <button
                type="button"
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2"
              >
                {C.cta.primary}
                <ArrowUpRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium text-white"
              >
                {C.cta.secondary}
                <Play className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={enter.initial}
              animate={enter.animate}
              transition={{ duration: 0.7, ease, delay: 1.3 }}
              className="flex items-stretch gap-4 mt-8"
            >
              {C.stats.map((stat) => {
                const Icon = STAT_ICONS[stat.icon] || Clock;
                return (
                  <div
                    key={stat.label}
                    className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col"
                  >
                    <Icon className="w-7 h-7 text-white" />
                    <div className="mt-8">
                      <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white font-body font-light mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Partners */}
          <motion.div
            initial={enter.initial}
            animate={enter.animate}
            transition={{ duration: 0.7, ease, delay: 1.4 }}
            className="flex flex-col items-center gap-4 pb-8 px-4"
          >
            <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
              {C.partners.label}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {C.partners.names.map((name) => (
                <span
                  key={name}
                  className="font-heading italic text-white text-2xl md:text-3xl tracking-tight"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  window.Hero = Hero;
})();
