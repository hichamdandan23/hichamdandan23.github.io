// app-v2.jsx — Single-file React app for v2 portfolio

const { useState, useEffect, useRef, useCallback } = React;

/* ---------- Intro loader ---------- */
function Intro({ onDone }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);else
      {
        setTimeout(() => {
          setGone(true);
          setTimeout(onDone, 1100);
        }, 200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className={`intro ${gone ? 'gone' : ''}`}>
      <div className="intro-grid">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="intro-label">
        <span className="dot"></span>
        <span>Hicham Dandan / Portfolio · Edition 03</span>
      </div>
      <div className="intro-counter">{String(count).padStart(3, '0')}</div>
    </div>);

}

/* ---------- Cursor ---------- */
function CursorV2() {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    let mx = -100,my = -100,cx = -100,cy = -100,raf;
    const onMove = (e) => {mx = e.clientX;my = e.clientY;};
    const tick = () => {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      if (ref.current) ref.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target?.closest?.('[data-cursor]');
      if (t) {
        setHover(true);
        setLabel(t.getAttribute('data-cursor') || '');
      } else if (e.target?.closest?.('a, button')) {
        setHover(true);setLabel('');
      } else {
        setHover(false);setLabel('');
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`v2-cursor ${hover ? 'hover' : ''}`}>
      {label && <span className="label">{label}</span>}
    </div>);

}

/* ---------- Reveal ---------- */
function RevealV2({ children, className = '', stagger = false, delay = 0, as = 'div' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as;
  return (
    <Tag ref={ref} className={`${stagger ? 'v2-reveal-stagger' : 'v2-reveal'} ${className}`}>
      {children}
    </Tag>);

}

/* ---------- Word-by-word reveal ---------- */
function WordReveal({ children, delay = 0, className = '' }) {
  // children expected: array of { text, ital, accent } or strings
  const items = Array.isArray(children) ? children : [{ text: children }];
  return (
    <span className={className}>
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return <span key={i} className="word-mask"><span style={{ animationDelay: `${delay + i * 80}ms` }}>{item}&nbsp;</span></span>;
        }
        return (
          <span key={i} className="word-mask">
            <span
              className={`${item.ital ? 'ital' : ''} ${item.accent ? 'accent' : ''}`.trim()}
              style={{ animationDelay: `${delay + i * 80}ms` }}>
              
              {item.text}{item.nospace ? '' : '\u00A0'}
            </span>
          </span>);

      })}
    </span>);

}

/* ---------- Nav ---------- */
function NavV2({ onScrollTo }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const upd = () => setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Los_Angeles' }));
    upd();
    const id = setInterval(upd, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="v2-nav">
      <div className="v2-container v2-nav-inner">
        <a href="#top" className="v2-logo" onClick={(e) => {e.preventDefault();onScrollTo('top');}} data-cursor="home">
          <span className="mark" aria-hidden="true">
            <span className="mark-letters">Hicham Dandan</span>
          </span>
          <span className="stack">
            <span className="sub">Senior Software Engineer</span>
          </span>
        </a>
        <div className="v2-nav-links">
          <a href="#work" data-cursor="work" onClick={(e) => {e.preventDefault();onScrollTo('work');}}><span className="num">01</span>Work</a>
          <a href="#about" data-cursor="about" onClick={(e) => {e.preventDefault();onScrollTo('about');}}><span className="num">02</span>About</a>
          <a href="#experience" data-cursor="experience" onClick={(e) => {e.preventDefault();onScrollTo('experience');}}><span className="num">03</span>Experience</a>
          <a href="#contact" data-cursor="contact" onClick={(e) => {e.preventDefault();onScrollTo('contact');}}><span className="num">04</span>Contact</a>
        </div>
        <a href="#contact" className="v2-nav-cta" onClick={(e) => {e.preventDefault();onScrollTo('contact');}} data-cursor="say hi">
          <span className="dot"></span>
          Available
        </a>
      </div>
    </nav>);

}

/* ---------- Hero ---------- */
function HeroV2({ onScrollTo, started }) {


  return (
    <section className="v2-hero">
      <div className="v2-hero-orb"></div>
      <div className="v2-hero-grid-bg"></div>
      <div className="v2-container" style={{ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
        <div className="v2-hero-top">
          <div className="group">
            <span>Portfolio</span>
            <span className="v">2020 → 2026</span>
          </div>
          <div className="group">
            <span>Discipline</span>
            <span className="v">Software Engineering</span>
          </div>
          <div className="group right">
            <span>Currently</span>
            <span className="v">Irvine, California</span>
          </div>
        </div>

        <div className="v2-hero-stage" style={{ visibility: started ? 'visible' : 'hidden' }}>
          {started &&
          <>
              <div className="v2-hero-row">
                <span className="v2-hero-num">5<sup>yrs</sup></span>
                <h1 className="v2-hero-headline">
                  <WordReveal delay={0}>{[{ text: 'Software' }]}</WordReveal>
                  <WordReveal delay={120}>{[{ text: 'engineered', ital: true, accent: true }]}</WordReveal>
                  <WordReveal delay={220}>{[{ text: 'with' }, { text: 'craft,' }]}</WordReveal>
                  <WordReveal delay={420}>{[{ text: 'shipped' }, { text: 'with', ital: true }]}</WordReveal>
                  <WordReveal delay={580}>{[{ text: 'care.', ital: true, accent: true }]}</WordReveal>
                </h1>
                <span className="v2-hero-tag solid"><span className="dot" style={{ background: 'var(--accent-ink)' }}></span>Available May '26</span>
              </div>

              <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
                <RevealV2 delay={700}>
                  <p className="v2-hero-lede">
                    I'm Hicham — an experienced senior software engineer with five years building
                    <em> efficient, scalable </em>solutions across web, back-end, and
                    automation. Drawn to the unglamorous middle of products: ledgers,
                    pipelines, the tools that earn trust over years.
                  </p>
                </RevealV2>
                <RevealV2 delay={900}>
                  <div className="v2-hero-cta-row">
                    <span>Let's start</span>
                    <div className="row">
                      <a className="v2-btn v2-btn-primary" href="#work" data-cursor="explore" onClick={(e) => {e.preventDefault();onScrollTo('work');}}>
                        View Work <span className="arrow"></span>
                      </a>
                      <a className="v2-btn v2-btn-ghost" href="https://docs.google.com/document/d/1pAC2iUieplr8AD-ydUUxqqi6RGub33tK-D0JNS72p30/export?format=pdf" target="_blank" rel="noopener noreferrer" data-cursor="download">
                        Resume <span className="arrow"></span>
                      </a>
                    </div>
                  </div>
                </RevealV2>
              </div>

              <div className="v2-hero-strip" style={{ marginTop: 32 }}>
                <div className="v2-hero-strip-track">
                  {[...window.STRIP_ITEMS_V2, ...window.STRIP_ITEMS_V2, ...window.STRIP_ITEMS_V2].map((s, i) =>
                <span key={i}>
                      <span className="accent">✦</span>&nbsp;&nbsp;{s}
                    </span>
                )}
                </div>
              </div>
            </>
          }
        </div>
      </div>

      <div className="v2-scroll-cue">Scroll</div>
    </section>);

}

/* ---------- Marquee strip ---------- */
function StripV2() {
  const items = [
  { t: 'Distributed Systems', i: false },
  { t: 'Real-time', i: true },
  { t: 'TypeScript', i: false },
  { t: 'Automation', i: true },
  { t: 'Reliability', i: false },
  { t: 'Mentoring', i: true },
  { t: 'Open Source', i: false },
  { t: 'System Design', i: true }];

  const items2 = [...items, ...items];

  return (
    <div className="v2-strip">
      <div className="v2-strip-track">
        {items2.map((it, i) =>
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
            <span className="star">✦</span>
            <span className={it.i ? 'ital' : ''}>{it.t}</span>
          </span>
        )}
      </div>
    </div>);

}

/* ---------- Image slideshow ---------- */
function ImageSlideshow({ images }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Project visual ---------- */
function VisualV2({ project }) {
  if (project.images?.length) {
    return <ImageSlideshow images={project.images} />;
  }
  if (project.visual === 'v2-vis-1') {
    return (
      <div className={`v2-vis-1`} style={{ position: 'absolute', inset: 0 }}>
      </div>);

  }
  if (project.visual === 'v2-vis-2') {
    return (
      <div className="v2-vis-2" style={{ position: 'absolute', inset: 0 }}>
        <div className="ui-card">
          <div className="ui-bar">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <span className="ttl">orders.live</span>
          </div>
          <div className="ui-row">
            <span>#A4218</span><span style={{ color: 'var(--fg)' }}>Tagliatelle al Tartufo</span>
            <span className="pill ok">Served</span>
          </div>
          <div className="ui-row">
            <span>#A4219</span><span style={{ color: 'var(--fg)' }}>Burrata, Heirloom</span>
            <span className="pill warn">Cooking</span>
          </div>
          <div className="ui-row">
            <span>#A4220</span><span style={{ color: 'var(--fg)' }}>Espresso · Affogato</span>
            <span className="pill">New</span>
          </div>
          <div className="ui-row">
            <span>#A4221</span><span style={{ color: 'var(--fg)' }}>Tonnarelli Cacio</span>
            <span className="pill warn">Cooking</span>
          </div>
          <div className="ui-row" style={{ borderBottom: 'none' }}>
            <span>#A4222</span><span style={{ color: 'var(--fg)' }}>Tiramisù</span>
            <span className="pill">New</span>
          </div>
        </div>
      </div>);

  }
  if (project.visual === 'v2-vis-3') {
    return (
      <div className="v2-vis-3" style={{ position: 'absolute', inset: 0 }}>
        <div className="device">
          <div className="device-frame">
            <div className="notch"></div>
            <div className="img"></div>
            <div className="stack">
              <div className="row accent"></div>
              <div className="row"></div>
              <div className="row"></div>
              <div className="row" style={{ width: '70%' }}></div>
              <div className="row" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>);

  }
  if (project.visual === 'v2-vis-4') {
    return (
      <div className="v2-vis-4" style={{ position: 'absolute', inset: 0 }}>
        <div className="nodes">
          <svg viewBox="0 0 200 150" fill="none" stroke="var(--accent)" strokeWidth="1">
            <circle cx="40" cy="40" r="6" fill="var(--accent)" />
            <circle cx="100" cy="30" r="6" fill="var(--bg)" />
            <circle cx="160" cy="50" r="6" fill="var(--bg)" />
            <circle cx="60" cy="100" r="6" fill="var(--bg)" />
            <circle cx="140" cy="110" r="6" fill="var(--accent)" />
            <line x1="40" y1="40" x2="100" y2="30" />
            <line x1="100" y1="30" x2="160" y2="50" />
            <line x1="40" y1="40" x2="60" y2="100" />
            <line x1="100" y1="30" x2="60" y2="100" />
            <line x1="160" y1="50" x2="140" y2="110" />
            <line x1="60" y1="100" x2="140" y2="110" />
          </svg>
        </div>
      </div>);

  }
  if (project.visual === 'v2-vis-5') {
    return (
      <div className="v2-vis-5" style={{ position: 'absolute', inset: 0 }}>
        <div className="terminal">
          <div className="ttl">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <span>~/deploy</span>
          </div>
          <div><span className="cm"># single-command deploy</span></div>
          <div><span className="pr">$</span> ship deploy --env=prod</div>
          <div><span className="cm">↳ building image</span></div>
          <div><span className="cm">↳ pushing to registry</span></div>
          <div><span className="cm">↳ rolling out v1.42.0</span></div>
          <div><span className="ok">✓ deployed in 47s</span></div>
          <div><span className="pr">$</span> <span className="blink"></span></div>
        </div>
      </div>);

  }
  if (project.visual === 'v2-vis-6') {
    return (
      <div className="v2-vis-6" style={{ position: 'absolute', inset: 0 }}>
        <div className="map">
          <div className="route"></div>
          <div className="pin p1"></div>
          <div className="pin p2"></div>
          <div className="pin p3"></div>
        </div>
      </div>);

  }
  return null;
}

/* ---------- Work section ---------- */
function WorkV2({ onOpen }) {
  return (
    <section id="work" className="v2-section">
      <div className="v2-container">
        <div className="v2-section-head">
          <RevealV2 className="v2-section-meta">
            <span className="num">Selected Work</span>
            <span>2020 — 2026 / 06 cases</span>
          </RevealV2>
          <RevealV2>
            <h2 className="v2-section-title">
              Things I've <span className="ital accent">made</span> and lived <span className="ital">with.</span>
            </h2>
          </RevealV2>
        </div>

        <div className="v2-work-stack">
          {window.PROJECTS_V2.map((p, i) =>
          <RevealV2 key={p.num} className={`v2-work-row ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="v2-work-meta">
                <div className="v2-work-stamp">
                  <span className="n">/ {p.num}</span>
                  <span>{p.year}</span>
                  <span>·</span>
                  <span>{p.role}</span>
                </div>
                <h3 className="v2-work-title">
                  {p.title}
                  <span className="ital">{p.titleIta}</span>
                </h3>
                <p className="v2-work-desc">{p.desc}</p>
                <div className="v2-work-tags">
                  {p.tags.map((t) => <span key={t} className="v2-tag">{t}</span>)}
                </div>
                <a href="#" className="v2-work-link" data-cursor="open" onClick={(e) => {e.preventDefault();onOpen(p);}}>
                  {p.link} <span className="arrow"></span>
                </a>
              </div>
              <div className="v2-work-visual" data-cursor="view" onClick={() => onOpen(p)} style={{ cursor: 'pointer' }}>
                <span className="num-watermark">{p.num}</span>
                <VisualV2 project={p} />
              </div>
            </RevealV2>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- About ---------- */
function AboutV2() {
  return (
    <section id="about" className="v2-section">
      <div className="v2-container">
        <div className="v2-section-head">
          <RevealV2 className="v2-section-meta">
            <span className="num">About</span>
            <span>Who · How · Why</span>
          </RevealV2>
          <RevealV2>
            <h2 className="v2-section-title">
              Five years of <span className="ital accent">honest</span> software, <span className="ital">unhurried.</span>
            </h2>
          </RevealV2>
        </div>

        <div className="v2-about-grid">
          <div className="v2-about-portrait">
            <RevealV2>
              <div className="v2-about-photo">
                <span className="corner tl"></span>
                <span className="corner tr"></span>
                <span className="corner bl"></span>
                <span className="corner br"></span>
                <div className="badge">
                  <span className="dot"></span>
                  Hicham, in studio
                </div>
                <img src="profile.png" alt="Hicham Dandan" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'inherit' }} />
              </div>
            </RevealV2>
            <RevealV2 delay={120}>
              <div className="v2-about-meta">
                <div className="cell"><div className="k">Based</div><div className="v">Irvine, CA</div></div>
                <div className="cell"><div className="k">Status</div><div className="v">Open to roles</div></div>
                <div className="cell"><div className="k">Time zone</div><div className="v">PST / UTC-8</div></div>
                <div className="cell"><div className="k">Years</div><div className="v">5+</div></div>
              </div>
            </RevealV2>
          </div>

          <div>
            <RevealV2>
              <div className="v2-about-bio">
                <span className="quote">— A note about how I work</span>
                I'm drawn to the <em>unglamorous middle</em> of products — the
                ledgers, the pipelines, the workflow tools that turn a heroic
                on-call into a <em>quiet Tuesday afternoon</em>. Correctness over
                cleverness. Systems that survive their second year.
              </div>
            </RevealV2>

            <RevealV2 stagger>
              <div className="v2-stats">
                <div className="v2-stat"><div className="v">5<span className="ital">+</span></div><div className="k">Years shipping</div></div>
                <div className="v2-stat"><div className="v">4<span className="ital">×</span></div><div className="k">Interns mentored</div></div>
                <div className="v2-stat"><div className="v">200<span className="ital">+</span></div><div className="k">Properties integrated</div></div>
                <div className="v2-stat"><div className="v">3<span className="ital">×</span></div><div className="k">Onboarding throughput</div></div>
              </div>
            </RevealV2>

            <div className="v2-skills">
              {Object.entries(window.SKILLS_V2).map(([cat, items], i) =>
              <RevealV2 key={cat} delay={i * 60}>
                  <div className="v2-skill-section">
                    <h4>{cat}</h4>
                    <div className="v2-skill-grid">
                      {items.map((s) => <span key={s} className="v2-chip">{s}</span>)}
                    </div>
                  </div>
                </RevealV2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Experience ---------- */
function ExperienceV2() {
  return (
    <section id="experience" className="v2-section">
      <div className="v2-container">
        <div className="v2-section-head">
          <RevealV2 className="v2-section-meta">
            <span className="num">Experience</span>
            <span>2015 → Now / Five chapters</span>
          </RevealV2>
          <RevealV2>
            <h2 className="v2-section-title">
              Roles, in <span className="ital accent">reverse</span> chronological <span className="ital">order.</span>
            </h2>
          </RevealV2>
        </div>

        <div className="v2-exp-list">
          {window.EXPERIENCE_V2.map((e, i) =>
          <RevealV2 key={i} className="v2-exp-item" delay={i * 60}>
              <div className="v2-exp-period">
                {e.now ? <span className="now">{e.period}</span> : <span>{e.period}</span>}
                <span>{e.location}</span>
              </div>
              <div className="v2-exp-body">
                <div>
                  <h3 className="v2-exp-role">
                    {e.role}<br />
                    <span className="ital">— {e.company}</span>
                  </h3>
                  <ul className="v2-exp-bullets">
                    {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                  <div className="v2-work-tags">
                    {e.tags.map((t) => <span key={t} className="v2-tag">{t}</span>)}
                  </div>
                </div>
                <span className="v2-exp-arrow">↗</span>
              </div>
            </RevealV2>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Contact ---------- */
function ContactV2() {
  const [copied, setCopied] = useState(false);
  const onCopy = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText('hicham.dandan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact" className="v2-contact">
      <div className="v2-contact-bg"></div>
      <div className="v2-container">
        <RevealV2>
          <div className="v2-contact-eyebrow">Contact / 04 — Let's build</div>
        </RevealV2>
        <RevealV2 delay={100}>
          <h2 className="v2-contact-headline">
            Have a <span className="ital accent">system</span><br />
            that needs<br />
            <span className="ital">thinking through?</span>
          </h2>
        </RevealV2>
        <RevealV2 delay={200}>
          <a href="mailto:hicham.dandan@gmail.com" className="v2-contact-cta" data-cursor="copy" onClick={onCopy}>
            {copied ? 'copied to clipboard' : 'hicham.dandan@gmail.com'}
            <span className="arrow-circle"></span>
          </a>
        </RevealV2>
        <RevealV2 stagger delay={300}>
          <div className="v2-contact-grid">
            <div className="v2-contact-cell">
              <div className="k">Elsewhere</div>
              <div className="v" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="https://www.linkedin.com/in/hicham-dandan-software-engineer/" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
              </div>
            </div>
            <div className="v2-contact-cell">
              <div className="k">Currently</div>
              <div className="v">
                Irvine, California. Open to backend & full-stack roles, remote or on-site. Available now.
              </div>
            </div>
            <div className="v2-contact-cell">
              <div className="k">Last updated</div>
              <div className="v">May 2026 — built in three days as a sandbox for new motion patterns.</div>
            </div>
          </div>
        </RevealV2>
      </div>
    </section>);

}

/* ---------- Footer ---------- */
function FooterV2() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const upd = () => setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/Los_Angeles' }));
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <footer>
      <div className="v2-container">
        <div className="v2-footer">
          <span>© 2026 Hicham Dandan · All rights reserved</span>
          <span style={{ display: 'inline-flex', gap: 16 }}>
            <span>{time} PST</span>
            <span>·</span>
            <span>v3.0</span>
          </span>
        </div>
      </div>
    </footer>);

}

/* ---------- Case Study Overlay ---------- */
function CaseStudyV2({ project, onClose }) {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!project) { setMounted(false); return; }
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setMounted(true));
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={`v2-case ${mounted ? 'open' : ''}`} role="dialog" aria-modal="true">
      <div className="v2-case-backdrop" onClick={onClose}></div>
      <div className="v2-case-sheet" ref={scrollRef}>
        <div className="v2-case-bar">
          <span className="v2-case-tag">/ {project.num} · Case study</span>
          <button className="v2-case-close" onClick={onClose} data-cursor="close">
            <span>Close</span>
            <span className="x" aria-hidden="true">×</span>
          </button>
        </div>

        <header className="v2-case-hero">
          <div className="v2-case-hero-meta">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.role}</span>
            <span>·</span>
            <span>{project.timeline}</span>
          </div>
          <h1 className="v2-case-title">
            {project.title}<span className="ital accent">{project.titleIta}</span>
          </h1>
          <div className="v2-case-tags">
            {project.tags.map((t) => <span key={t} className="v2-tag">{t}</span>)}
          </div>
          <div className="v2-case-cover">
            <span className="num-watermark">{project.num}</span>
            <VisualV2 project={project} />
          </div>
        </header>

        <section className="v2-case-section">
          <div className="v2-case-label">Overview</div>
          <p className="v2-case-lede">{project.overview}</p>
        </section>

        <section className="v2-case-section grid">
          <div className="v2-case-cell"><div className="k">Role</div><div className="v">{project.role}</div></div>
          <div className="v2-case-cell"><div className="k">Year</div><div className="v">{project.year}</div></div>
          <div className="v2-case-cell"><div className="k">Timeline</div><div className="v">{project.timeline}</div></div>
          <div className="v2-case-cell"><div className="k">Stack</div><div className="v">{project.tags.slice(0,2).join(', ')}</div></div>
        </section>

        <section className="v2-case-section">
          <div className="v2-case-label">Problem</div>
          <p className="v2-case-body">{project.problem}</p>
        </section>

        <section className="v2-case-section">
          <div className="v2-case-label">Process</div>
          <ol className="v2-case-steps">
            {project.process.map((p, i) => (
              <li key={i}>
                <span className="step-num">/{String(i + 1).padStart(2, '0')}</span>
                <span className="step-body">{p}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="v2-case-section">
          <div className="v2-case-label">Outcomes</div>
          <div className="v2-case-outcomes">
            {project.outcomes.map((o, i) => (
              <div key={i} className="v2-case-outcome">
                <div className="v">{o.v}</div>
                <div className="k">{o.k}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="v2-case-foot">
          <span>End of case · {project.num} / 06</span>
          <button className="v2-case-close ghost" onClick={onClose} data-cursor="close">
            ← Back to work
          </button>
        </footer>
      </div>
    </div>);
}

/* ---------- App ---------- */
function App() {
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "accent": "lime",
    "theme": "dark"
  } /*EDITMODE-END*/);
  const [introDone, setIntroDone] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', t.accent);
    document.documentElement.setAttribute('data-theme-v2', t.theme);
  }, [t.accent, t.theme]);

  const scrollTo = (id) => {
    if (id === 'top') {window.scrollTo({ top: 0, behavior: 'smooth' });return;}
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 32;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <CursorV2 />
      <NavV2 onScrollTo={scrollTo} />
      <main id="top">
        <HeroV2 onScrollTo={scrollTo} started={introDone} />
        <WorkV2 onOpen={(p) => setOpenProject(p)} />
        <AboutV2 />
        <ExperienceV2 />
        <ContactV2 />
        <FooterV2 />
      </main>
      <CaseStudyV2 project={openProject} onClose={() => setOpenProject(null)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={t.theme}
        options={['dark', 'light']}
        onChange={(v) => setTweak('theme', v)} />
        <TweakSelect label="Accent" value={t.accent}
        options={[
        { value: 'lime', label: 'Electric lime' },
        { value: 'indigo', label: 'Indigo' },
        { value: 'amber', label: 'Warm amber' },
        { value: 'crimson', label: 'Crimson' },
        { value: 'ivory', label: 'Ivory (mono)' }]
        }
        onChange={(v) => setTweak('accent', v)} />
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById('v2-root')).render(<App />);