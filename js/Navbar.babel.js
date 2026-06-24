/* Fixed top navigation: logo mark · center glass pill of links + CTA · spacer. */
(function () {
  const ArrowUpRight = window.ArrowUpRight;

  const Navbar = () => {
    const { brand, nav } = window.SITE_CONTENT;

    return (
      <nav className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50">
        <div className="flex items-center justify-between">
          {/* Left — logo */}
          <div className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <span className="font-heading italic lowercase text-white text-2xl leading-none">
              {brand.mark}
            </span>
          </div>

          {/* Center — desktop only */}
          <div className="hidden lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center">
            {nav.links.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-2 text-sm font-medium text-white/90 font-body"
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              className="ml-1 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
            >
              {nav.cta}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right — invisible spacer to balance the logo */}
          <div className="w-12 h-12 invisible shrink-0" aria-hidden="true" />
        </div>
      </nav>
    );
  };
  window.Navbar = Navbar;
})();
