/*
 * Site content / data layer.
 *
 * Everything the page renders (copy, media URLs, links) lives here so the
 * structure in the *.babel.js components stays untouched when real data
 * arrives. Replace the strings below, or swap this whole file out.
 *
 * Icon keys:
 *   stats[].icon   -> "clock" | "globe"            (outline lucide icons)
 *   cards[].icon   -> "image" | "movie" | "lightbulb" (Material icons)
 */
window.SITE_CONTENT = {
  brand: {
    mark: "a", // lowercase italic serif glyph in the logo circle
    name: "Aeon",
  },

  nav: {
    links: ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"],
    cta: "Claim a Spot",
  },

  hero: {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4",
    badge: {
      tag: "New",
      text: "Maiden Crewed Voyage to Mars Arrives 2026",
    },
    headline: "Venture Past Our Sky Across the Universe",
    subheading:
      "Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.",
    cta: {
      primary: "Start Your Voyage",
      secondary: "View Liftoff",
    },
    stats: [
      { icon: "clock", value: "34.5 Min", label: "Average Videos Watch Time" },
      { icon: "globe", value: "2.8B+", label: "Users Across the Globe" },
    ],
    partners: {
      label: "Collaborating with top aerospace pioneers globally",
      names: ["Aeon", "Vela", "Apex", "Orbit", "Zeno"],
    },
  },

  capabilities: {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4",
    kicker: "// Capabilities",
    headingLines: ["Production", "evolved"],
    cards: [
      {
        icon: "image",
        tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"],
        title: "AI Scenery",
        body:
          "AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.",
      },
      {
        icon: "movie",
        tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"],
        title: "Batch Production",
        body:
          "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.",
      },
      {
        icon: "lightbulb",
        tags: ["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"],
        title: "Smart Lighting",
        body:
          "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.",
      },
    ],
  },
};
