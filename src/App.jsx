import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { achievements, education, experience, profile, projects, skills } from "./resumeData";
import "./styles.css";

const commands = [
  { name: "help", hint: "show available commands" },
  { name: "about", hint: "load profile summary" },
  { name: "projects", hint: "open selected work" },
  { name: "skills", hint: "list technical stack" },
  { name: "experience", hint: "show industry work" },
  { name: "education", hint: "show academic record" },
  { name: "achievements", hint: "show certificates and wins" },
  { name: "contact", hint: "show contact links" },
  { name: "all", hint: "unlock every module" },
  { name: "clear", hint: "reset terminal output" }
];

const sectionOrder = ["about", "projects", "skills", "experience", "education", "achievements", "contact"];
const logoMap = {
  Python: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", mark: "PY" },
  Java: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", mark: "JV" },
  "C++": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", mark: "C++" },
  C: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", mark: "C" },
  JavaScript: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", mark: "JS" },
  Windows: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg", mark: "WIN" },
  Linux: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", mark: "LNX" },
  "Kali Linux": { src: "https://cdn.simpleicons.org/kalilinux/557C94", mark: "KALI" },
  Wireshark: { src: "https://cdn.simpleicons.org/wireshark/1679A7", mark: "WS" },
  Git: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", mark: "GIT" },
  "Burp Suite": { src: "https://cdn.simpleicons.org/burpsuite/FF6633", mark: "BURP" },
  Excel: { src: "/logos/excel.svg", mark: "XLS" },
  Figma: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", mark: "FIG" }
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-4 1.5-4-2-6-2.5" />
      <path d="M15 22v-3.4a3 3 0 0 0-.9-2.3c3-.3 6.1-1.5 6.1-6.6a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.6 2.2 4.5 2.5 4.5 2.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3 9.7c0 5.1 3.1 6.3 6.1 6.6a3 3 0 0 0-.9 2.3V22" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 10v8" />
      <path d="M6.5 6v.1" />
      <path d="M11 18v-8" />
      <path d="M11 13.7c0-2.3 1.3-3.9 3.3-3.9s3.2 1.3 3.2 4V18" />
      <path d="M4 3h16v18H4z" />
    </svg>
  );
}

function TerminalBar({ label }) {
  return (
    <div className="terminal-bar">
      <span />
      <span />
      <span />
      <p>{label}</p>
    </div>
  );
}

function TagRow({ items }) {
  return (
    <div className="tag-row">
      {items.map((item) => (
        <span key={item}>[ {item} ]</span>
      ))}
    </div>
  );
}

function LogoGrid({ items }) {
  return (
    <div className="logo-grid">
      {items.map((item) => {
        const logo = logoMap[item] ?? { mark: item.slice(0, 3).toUpperCase() };

        return (
          <div className="logo-tile" key={item}>
            <span className="logo-mark">
              {logo.src ? <img alt="" src={logo.src} /> : logo.mark}
            </span>
            <strong>{item}</strong>
          </div>
        );
      })}
    </div>
  );
}

function HelpOutput() {
  return (
    <div className="command-help">
      {commands.map((command) => (
        <p key={command.name}>
          <strong>{command.name}</strong>
          <span>{command.hint}</span>
        </p>
      ))}
    </div>
  );
}

function DynamicSection({ id }) {
  if (id === "about") {
    return (
      <article className="dynamic-card wide" data-section={id}>
        <TerminalBar label="~/modules/about" />
        <div className="dynamic-body">
          <p className="prompt">profile --summary</p>
          <h2>{profile.role}</h2>
          <p>{profile.summary}</p>
          <div className="fact-grid">
            {profile.quickFacts.map((fact) => (
              <div className="fact" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }

  if (id === "projects") {
    return (
      <article className="dynamic-card wide" data-section={id}>
        <TerminalBar label="~/modules/projects" />
        <div className="dynamic-body">
          <p className="prompt">projects --selected --api-first</p>
          <h2>APIs, threat intelligence, and ML work.</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <section className="project-card" key={project.name}>
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <span>{project.description}</span>
                <TagRow items={project.stack} />
                <small>{project.signal}</small>
              </section>
            ))}
          </div>
        </div>
      </article>
    );
  }

  if (id === "skills") {
    return (
      <article className="dynamic-card" data-section={id}>
        <TerminalBar label="~/modules/skills" />
        <div className="dynamic-body">
          <p className="prompt">skills --grouped</p>
          <div className="skill-grid">
            {skills.map((group) => (
              <section className="mini-card" key={group.title}>
                <h3>{group.title}</h3>
                {["Languages", "Platforms", "Tools"].includes(group.title) ? <LogoGrid items={group.items} /> : <TagRow items={group.items} />}
              </section>
            ))}
          </div>
        </div>
      </article>
    );
  }

  if (id === "experience") {
    return (
      <article className="dynamic-card" data-section={id}>
        <TerminalBar label="~/modules/experience" />
        <div className="dynamic-body">
          <p className="prompt">experience --tail</p>
          {experience.map((item) => (
            <section className="mini-card experience-card" key={`${item.company}-${item.role}`}>
              <div className="experience-logo" aria-hidden="true">
                <img alt="" src="/logos/jpmorganchase.svg" />
              </div>
              <div>
                <p>{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
                <ul>
                  {item.impact.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </article>
    );
  }

  if (id === "education") {
    return (
      <article className="dynamic-card" data-section={id}>
        <TerminalBar label="~/modules/education" />
        <div className="dynamic-body">
          <p className="prompt">education --record</p>
          <div className="stack-list">
            {education.map((item) => (
              <section className="mini-card" key={`${item.school}-${item.degree}`}>
                <p>{item.period}</p>
                <h3>{item.degree}</h3>
                <span>{item.school}</span>
                <small>{item.details}</small>
              </section>
            ))}
          </div>
        </div>
      </article>
    );
  }

  if (id === "achievements") {
    return (
      <article className="dynamic-card" data-section={id}>
        <TerminalBar label="~/modules/achievements" />
        <div className="dynamic-body">
          <p className="prompt">achievements --grep verified</p>
          <div className="stack-list">
            {achievements.map((item) => (
              <section className="mini-card compact" key={item}>
                <span>{item}</span>
              </section>
            ))}
          </div>
        </div>
      </article>
    );
  }

  if (id === "contact") {
    return (
      <article className="dynamic-card" data-section={id}>
        <TerminalBar label="~/modules/contact" />
        <div className="dynamic-body">
          <p className="prompt">connect --secure-channel</p>
          <h2>Let’s build useful security software.</h2>
          <p>{profile.location}</p>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <MailIcon /> Email
            </a>
            <a className="button secondary" href={profile.linkedin}>
              <LinkedInIcon /> LinkedIn
            </a>
            <a className="button secondary" href={profile.github}>
              <GitHubIcon /> GitHub
            </a>
            <a className="button secondary" href={profile.resumeUrl}>
              Resume <ArrowIcon />
            </a>
          </div>
        </div>
      </article>
    );
  }

  return null;
}

export default function App() {
  const pageRef = useRef(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const landingRef = useRef(null);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    { type: "system", value: "boot: portfolio shell online" },
    { type: "system", value: "type `help` to discover commands" }
  ]);
  const [unlocked, setUnlocked] = useState([]);

  const unlockedSet = useMemo(() => new Set(unlocked), [unlocked]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from(".identity > *", {
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        y: 24
      });

      gsap.from(".computer-shell", {
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        rotateX: 8,
        scale: 0.94,
        y: 34
      });

      gsap.to(".computer-shell", {
        duration: 3.6,
        ease: "sine.inOut",
        repeat: -1,
        y: -8,
        yoyo: true
      });

      gsap.to(".monitor-glow", {
        duration: 2.2,
        ease: "sine.inOut",
        opacity: 0.75,
        repeat: -1,
        yoyo: true
      });

      gsap.to(".orbital-node", {
        duration: 5,
        ease: "none",
        repeat: -1,
        rotate: 360,
        transformOrigin: "50% 50%",
        stagger: 0.8
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (!outputRef.current) {
      return;
    }

    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || unlocked.length === 0) {
      return;
    }

    const latest = `[data-section="${unlocked[unlocked.length - 1]}"]`;
    gsap.fromTo(
      latest,
      { autoAlpha: 0, filter: "blur(10px)", y: 34 },
      { autoAlpha: 1, duration: 0.85, ease: "power3.out", filter: "blur(0px)", y: 0 }
    );
  }, [unlocked]);

  function unlock(section) {
    setUnlocked((current) => (current.includes(section) ? current : [...current, section]));
  }

  function animateModuleExport(label, onComplete, scrollTargetId = label) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const source = outputRef.current;
    const target = landingRef.current;

    if (reduceMotion || !source || !target) {
      onComplete();
      return;
    }

    const sourceRect = source.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const packet = document.createElement("div");
    const beam = document.createElement("div");

    packet.className = "module-packet";
    packet.innerHTML = `<span>export</span><strong>${label}</strong>`;
    beam.className = "module-beam";

    document.body.append(packet, beam);

    const startX = sourceRect.left + sourceRect.width * 0.5;
    const startY = sourceRect.top + sourceRect.height * 0.78;
    const endX = targetRect.left + targetRect.width * 0.5;
    const endY = Math.min(window.innerHeight - 90, targetRect.top + 36);

    gsap.set(packet, { autoAlpha: 0, left: startX, position: "fixed", top: startY, xPercent: -50, yPercent: -50, zIndex: 80 });
    gsap.set(beam, {
      autoAlpha: 0,
      height: Math.max(120, endY - startY),
      left: startX,
      position: "fixed",
      top: startY,
      transformOrigin: "top center",
      width: 2,
      zIndex: 70
    });

    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        packet.remove();
        beam.remove();
        onComplete();
        window.setTimeout(() => {
          const scrollTarget =
            scrollTargetId === "all"
              ? document.querySelector(`[data-section="${sectionOrder[sectionOrder.length - 1]}"]`)
              : document.querySelector(`[data-section="${scrollTargetId}"]`);
          const destination = scrollTarget ?? target;
          const top = destination.getBoundingClientRect().top + window.scrollY - 18;

          window.scrollTo({ behavior: "smooth", top });
          gsap.fromTo(destination, { boxShadow: "0 0 0 rgba(0, 255, 65, 0)" }, { boxShadow: "0 0 42px rgba(0, 255, 65, 0.22)", duration: 0.32, yoyo: true, repeat: 1 });
        }, 160);
      }
    });

    timeline
      .to(".monitor", { boxShadow: "0 0 48px rgba(0, 255, 65, 0.28)", duration: 0.16, yoyo: true, repeat: 1 })
      .to(beam, { autoAlpha: 1, duration: 0.18, scaleY: 1 }, "<")
      .to(packet, { autoAlpha: 1, duration: 0.18, scale: 1.08 }, "<")
      .to(packet, {
        duration: 0.95,
        left: endX,
        rotation: 0.001,
        top: endY,
        xPercent: -50,
        yPercent: -50
      })
      .to(packet, { duration: 0.2, scale: 1.25, yoyo: true, repeat: 1 })
      .to([packet, beam], { autoAlpha: 0, duration: 0.18 }, "-=0.05");
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setLines([{ type: "system", value: "terminal cleared. type `help` to continue." }]);
      setUnlocked([]);
      setInput("");
      return;
    }

    if (command === "all") {
      setLines((current) => [
        ...current,
        { type: "command", value: command },
        { type: "response", value: "exporting full portfolio bundle ↓" }
      ]);
      animateModuleExport("all modules", () => setUnlocked(sectionOrder), "all");
      setInput("");
      return;
    }

    if (command === "help") {
      setLines((current) => [...current, { type: "command", value: command }, { type: "help", value: "available commands" }]);
      setInput("");
      return;
    }

    if (sectionOrder.includes(command)) {
      setLines((current) => [
        ...current,
        { type: "command", value: command },
        { type: "response", value: `exporting ${command} module ↓` }
      ]);
      animateModuleExport(command, () => unlock(command), command);
      setInput("");
      return;
    }

    setLines((current) => [
      ...current,
      { type: "command", value: command },
      { type: "error", value: `command not found: ${command}. try help.` }
    ]);
    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    runCommand(input);
  }

  return (
    <main ref={pageRef}>
      <div className="background-matrix" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <section className="command-hero">
        <div className="identity">
          <p className="eyebrow">{profile.commandLine}</p>
          <h1>{profile.name}</h1>
          <p>{profile.summary}</p>
          <div className="identity-grid">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <button className="button primary" onClick={() => inputRef.current?.focus()} type="button">
              Enter Command <ArrowIcon />
            </button>
            <a className="button secondary" href={profile.resumeUrl}>
              Resume <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="computer-stage">
          <div className="orbital-ring" aria-hidden="true">
            <span className="orbital-node" />
            <span className="orbital-node" />
            <span className="orbital-node" />
          </div>
          <div className="computer-shell">
            <div className="monitor-glow" />
            <div className="monitor">
              <TerminalBar label="~/naveen/portfolio.sh" />
              <div className="terminal-screen" ref={outputRef}>
                {lines.map((line, index) => (
                  <div className={`terminal-line ${line.type}`} key={`${line.type}-${line.value}-${index}`}>
                    {line.type === "command" ? <span className="prompt">naveen@portfolio:~$</span> : null}
                    {line.type === "help" ? <HelpOutput /> : <span>{line.value}</span>}
                  </div>
                ))}
                <form className="terminal-input" onSubmit={handleSubmit}>
                  <label htmlFor="portfolio-command">naveen@portfolio:~$</label>
                  <input
                    autoComplete="off"
                    id="portfolio-command"
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        runCommand(event.currentTarget.value);
                      }
                    }}
                    placeholder="type help"
                    ref={inputRef}
                    spellCheck="false"
                    value={input}
                  />
                  <span className="cursor" />
                </form>
              </div>
            </div>
            <div className="computer-neck" />
            <div className="computer-base" />
          </div>
        </div>
      </section>

      <section className="dynamic-output" aria-live="polite" ref={landingRef}>
        {unlocked.length === 0 ? (
          <div className="empty-state">
            <p>awaiting command</p>
            <span>Try `projects`, `skills`, `contact`, or `all`.</span>
          </div>
        ) : null}
        {sectionOrder.filter((section) => unlockedSet.has(section)).map((section) => (
          <DynamicSection id={section} key={section} />
        ))}
      </section>
    </main>
  );
}
