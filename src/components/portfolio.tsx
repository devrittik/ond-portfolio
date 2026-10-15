import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { PortraitCard } from "@/components/portrait-card";

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium uppercase text-muted">
      <span className="text-accent">{number}</span>
      <span className="h-px w-7 bg-border" />
      <span>{children}</span>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3" aria-label={`${portfolio.name}, home`}>
          <span className="grid size-9 place-items-center rounded-full bg-accent text-xs font-bold text-accent-contrast">{portfolio.initials}</span>
          <span className="text-sm font-semibold">{portfolio.name}</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
          <a className="transition-colors hover:text-foreground" href="#work">Work</a>
          <a className="transition-colors hover:text-foreground" href="#skills">Expertise</a>
        </div>
        <details className="group relative md:hidden">
          <summary aria-label="Open navigation" className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" size={18} />
          </summary>
          <div className="absolute right-0 top-12 grid min-w-44 gap-1 rounded-sm border border-border bg-surface p-2 shadow-xl">
            <a className="rounded-sm px-3 py-2 text-sm text-muted hover:bg-elevated hover:text-foreground" href="#about">About</a>
            <a className="rounded-sm px-3 py-2 text-sm text-muted hover:bg-elevated hover:text-foreground" href="#work">Work</a>
            <a className="rounded-sm px-3 py-2 text-sm text-muted hover:bg-elevated hover:text-foreground" href="#skills">Expertise</a>
          </div>
        </details>
        <a href="#contact" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute -right-40 -top-48 size-[500px] rounded-full border border-border/30" aria-hidden="true" />
      <div className="absolute -right-24 -top-32 size-[330px] rounded-full border border-border/30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="z-10 order-2 lg:order-1">
          <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-2 text-xs font-medium text-muted">
            <span className="size-2 rounded-full bg-accent" /> {portfolio.availability}
          </div>
          <h1 className="display-type reveal reveal-delay-1 max-w-3xl text-5xl leading-[0.96] sm:text-7xl xl:text-8xl">
            Good work, <span className="text-accent">made</span> with intention.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{portfolio.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#work" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5">
              Explore my work <ArrowDownRight aria-hidden="true" size={17} />
            </a>
            <span className="text-sm text-muted">Based in {portfolio.location}</span>
          </div>
          <a href="#about" aria-label="Scroll to about section" className="mt-14 inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent">
            <ArrowDown aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="relative order-1 mx-auto w-full max-w-[390px] lg:order-2">
          <div className="absolute -right-3 -top-3 z-10 flex size-[74px] rotate-6 items-center justify-center rounded-full bg-accent text-center text-[10px] font-bold uppercase leading-[1.3] tracking-[0.08em] text-accent-contrast">
            Open to<br />good ideas
          </div>
          <PortraitCard />
          <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 border-b border-l border-accent/60" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-rule scroll-mt-24 bg-surface/35">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <SectionLabel number="01" children="A little about me" />
          <p className="mt-6 text-sm text-muted">{portfolio.role}</p>
        </div>
        <div>
          <h2 className="display-type max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">Building for the way people <span className="text-accent">actually live.</span></h2>
          <div className="mt-7 grid gap-5 text-base leading-7 text-muted sm:grid-cols-2 sm:gap-8">
            <p>{portfolio.about}</p>
            <p>{portfolio.aboutDetail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-rule scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionLabel number="02" children="What I bring" />
            <h2 className="display-type mt-6 max-w-sm text-4xl leading-tight sm:text-5xl">A few ways I can <span className="text-accent">help.</span></h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {portfolio.skills.map((skill, index) => (
              <div key={skill.group} className="grid gap-3 py-6 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="text-sm text-muted">0{index + 1} / {skill.group}</span>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {skill.items.map((item) => <span key={item} className="text-base font-medium sm:text-lg">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="section-rule scroll-mt-24 bg-surface/35">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
          <div>
            <SectionLabel number="03" children="Selected work" />
            <h2 className="display-type mt-6 text-4xl leading-tight sm:text-5xl">A few things <span className="text-accent">I&apos;ve made.</span></h2>
          </div>
          <span className="text-sm text-muted">2021 — 2025</span>
        </div>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
          {portfolio.projects.filter((project) => project.featured).map((project, index) => (
            <article key={project.name} className={index === 0 ? "md:col-span-2" : ""}>
              <a href={project.href} target="_blank" rel="noreferrer" className="group block" aria-label={`View ${project.name} project`}>
                <div className={`relative overflow-hidden rounded-sm bg-elevated ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <Image src={project.image} alt={project.imageAlt} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 45vw"} className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                  <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background/85 text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="display-type text-2xl sm:text-3xl">{project.name}</h3>
                      <span className="text-xs text-muted">{project.number}</span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{project.description}</p>
                  </div>
                  <span className="text-xs text-muted">{project.type}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project technologies">
                  {project.tags.map((tag) => <li key={tag} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">{tag}</li>)}
                </ul>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-rule scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <SectionLabel number="04" children="Say hello" />
          <p className="mt-6 text-sm leading-6 text-muted">Have a good question, a thoughtful project, or a recommendation for a great sandwich?</p>
        </div>
        <div>
          <h2 className="display-type max-w-2xl text-4xl leading-tight sm:text-6xl">Let&apos;s make something <span className="text-accent">matter.</span></h2>
          <a href={`mailto:${portfolio.email}`} className="mt-8 inline-flex items-center gap-3 border-b border-accent pb-2 text-lg font-medium transition-colors hover:text-accent sm:text-xl">
            {portfolio.email} <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const iconFor = (label: string) => label === "GitHub" ? Github : label === "LinkedIn" ? Linkedin : Mail;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>© {new Date().getFullYear()} {portfolio.name}. Made with care.</span>
        <div className="flex items-center gap-5">
          {portfolio.socialLinks.map((link) => {
            const Icon = iconFor(link.label);
            return <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.handle} className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Icon aria-hidden="true" size={15} />{link.label}</a>;
          })}
          <a href="#home" aria-label="Back to top" className="grid size-8 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"><ArrowUpRight aria-hidden="true" size={14} /></a>
        </div>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Contact /></main><Footer /></>;
}