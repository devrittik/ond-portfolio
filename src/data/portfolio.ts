export const portfolio = {
  name: "Jordan Lee",
  initials: "JL",
  portraitAlt: "Placeholder portrait photograph",
  role: "Independent developer & product thinker",
  location: "Brooklyn, New York",
  availability: "Available for select projects",
  email: "hello@jordanlee.dev",
  intro:
    "I turn ambitious ideas into thoughtful digital products. Part engineer, part curious human, always looking for the detail that makes the difference.",
  about:
    "I’m a product-minded developer who enjoys working where thoughtful design meets dependable engineering. Over the last 7 years, I’ve partnered with small teams and growing companies to make the web feel a little more human.",
  aboutDetail:
    "My favorite work sits at the intersection of a clear problem and an open canvas. I care about the small things: a transition that feels natural, a system that stays understandable, and a product that earns a place in someone’s day.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/", handle: "github.com/jordanlee" },
    { label: "LinkedIn", href: "https://linkedin.com/", handle: "linkedin.com/in/jordanlee" },
  ],
  skills: [
    { group: "Build", items: ["TypeScript", "React", "Next.js", "Node.js"] },
    { group: "Design", items: ["Product thinking", "Design systems", "Prototyping", "Accessibility"] },
    { group: "Ship", items: ["Performance", "Testing", "CI / CD", "Cloud platforms"] },
  ],
  projects: [
    {
      number: "01",
      name: "Fieldnotes",
      type: "Product design · Engineering",
      description: "A calmer way for independent teams to collect ideas, find patterns, and move from notes to next steps.",
      image: "/images/project-fieldnotes.svg",
      imageAlt: "Fieldnotes project preview with a green editorial dashboard",
      tags: ["Next.js", "TypeScript", "Product design"],
      href: "https://example.com/fieldnotes",
      featured: true,
    },
    {
      number: "02",
      name: "Commonplace",
      type: "Strategy · Full-stack",
      description: "A neighborhood discovery guide made with local voices, useful details, and a distinctly human point of view.",
      image: "/images/project-commonplace.svg",
      imageAlt: "Commonplace project preview showing an editorial city guide",
      tags: ["React", "Maps", "Content design"],
      href: "https://example.com/commonplace",
      featured: true,
    },
    {
      number: "03",
      name: "Tempo Studio",
      type: "Design systems · Engineering",
      description: "A flexible component system that helps a growing product team ship polished work with less repetition.",
      image: "/images/project-tempo.svg",
      imageAlt: "Tempo Studio project preview showing a modular interface system",
      tags: ["React", "Storybook", "Accessibility"],
      href: "https://example.com/tempo",
      featured: true,
    },
  ],
} as const;