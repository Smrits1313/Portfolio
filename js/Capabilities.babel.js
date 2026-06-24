/* Section 2 — Capabilities. Full-bleed background video + 3 glass feature cards. */
(function () {
  const { motion } = window.Motion;
  const FadingVideo = window.FadingVideo;
  const { MaterialIcon, MaterialPaths } = window;

  const Capabilities = () => {
    const C = window.SITE_CONTENT.capabilities;

    return (
      <section className="relative w-full min-h-screen overflow-hidden bg-black">
        {/* Background video — full bleed, no scale */}
        <FadingVideo
          src={C.video}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
          {/* Header */}
          <div className="mb-auto">
            <p className="text-sm font-body text-white/80 mb-6">{C.kicker}</p>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              {C.headingLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < C.headingLines.length - 1 ? <br /> : null}
                </React.Fragment>
              ))}
            </h2>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {C.cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
                className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
              >
                {/* Top row — icon + tag cloud */}
                <div className="flex items-start justify-between gap-4">
                  <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center shrink-0">
                    <MaterialIcon
                      path={MaterialPaths[card.icon]}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Bottom — title + body */}
                <div className="mt-6">
                  <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  window.Capabilities = Capabilities;
})();
