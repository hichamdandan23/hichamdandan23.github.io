// sections.jsx — Hero variations + Work, About, Experience, Contact

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* ---------- Hero A — Massive type w/ noise ---------- */
function HeroA({ accent, onScrollTo }) {
  return (
    <section className="hero hero-a">
      <div className="hero-bg-noise"></div>
      <div className="container">
        <Reveal>
          <div className="hero-eyebrow">
            <span className="live"></span>
            Software Engineer · Available May 2026
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1>
            Hicham<br/>Dandan<em>.</em>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-sub">
            Experienced software engineer with five years building efficient, scalable systems.
            I work across the stack — backend, automation, and the boring infrastructure that keeps
            products honest.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="k">Based in</span>
              <span className="v">Paris, France</span>
            </div>
            <div className="meta-item">
              <span className="k">Focus</span>
              <span className="v">Distributed systems</span>
            </div>
            <div className="meta-item">
              <span className="k">Years shipping</span>
              <span className="v">5+</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={480}>
          <div className="hero-ctas">
            <Magnetic>
              <a className="btn btn-primary" href="#work" onClick={(e) => { e.preventDefault(); onScrollTo('work'); }}>
                View Work <span className="arrow"></span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#" onClick={(e) => e.preventDefault()}>
                Download Resume <span className="arrow"></span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Hero B — Split with marquee ---------- */
function HeroB({ onScrollTo }) {
  const tickerWords = ['Distributed Systems', 'Real-time', 'TypeScript', 'Go', 'Rust', 'Postgres', 'Kafka'];
  const tickerWords2 = ['Reliability', 'Observability', 'Automation', 'Mentoring', 'Open Source', 'System Design'];

  return (
    <section className="hero hero-b">
      <div className="container">
        <div className="hero-b-grid">
          <div>
            <Reveal>
              <div className="hero-eyebrow" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--fg-3)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 32 }}>
                Portfolio · 2020 → 2026
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1>
                Software<br/>that <em>doesn't</em><br/>flinch.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p style={{ marginTop: 32, fontSize: 17, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 480 }}>
                I'm Hicham — five years building backend platforms, automation tooling, and the
                quiet infrastructure that earns trust over years, not demos.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="hero-ctas" style={{ marginTop: 40 }}>
                <Magnetic>
                  <a className="btn btn-primary" href="#work" onClick={(e) => { e.preventDefault(); onScrollTo('work'); }}>
                    View Work <span className="arrow"></span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a className="btn btn-ghost" href="#" onClick={(e) => e.preventDefault()}>
                    Resume <span className="arrow"></span>
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="marquee-stack">
              <div className="marquee">
                <div className="marquee-track">
                  {[...tickerWords, ...tickerWords].map((w, i) => (
                    <span key={i}>{w} <span className="dot">·</span></span>
                  ))}
                </div>
              </div>
              <div className="marquee">
                <div className="marquee-track reverse">
                  {[...tickerWords2, ...tickerWords2].map((w, i) => (
                    <span key={i}>{w} <span className="dot">·</span></span>
                  ))}
                </div>
              </div>
              <div className="marquee">
                <div className="marquee-track">
                  {[...tickerWords, ...tickerWords].map((w, i) => (
                    <span key={`b-${i}`} style={{ color: 'var(--fg-3)' }}>{w} <span className="dot">·</span></span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero C — Minimal serif statement ---------- */
function HeroC({ onScrollTo }) {
  return (
    <section className="hero hero-c">
      <div className="container">
        <div className="inner">
          <Reveal>
            <div className="stamp">— Hicham Dandan, software engineer</div>
          </Reveal>
          <Reveal delay={120}>
            <h1>
              Five years of building <em>scalable</em>,<br/>
              honest software that <em>streamlines</em><br/>
              the work nobody wanted to do.
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 64 }}>
              <Magnetic>
                <a className="btn btn-primary" href="#work" onClick={(e) => { e.preventDefault(); onScrollTo('work'); }}>
                  View Work <span className="arrow"></span>
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn btn-ghost" href="#" onClick={(e) => e.preventDefault()}>
                  Resume <span className="arrow"></span>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Selected Work ---------- */
function Work({ onOpenCase }) {
  // asymmetric layout map: 7+5, 12, 5+7, 6+6
  const layout = [7, 5, 12, 5, 7];
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <div className="section-label">Selected Work / 2022—2024</div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="section-title">A handful of <em>systems</em> I've shipped<br/>and lived to tell about.</h2>
        </Reveal>
        <div className="work-grid" style={{ marginTop: 64 }}>
          {window.PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className={`work-cell span-${layout[i] || 6}`}>
              <ProjectCard project={p} span={layout[i] || 6} onOpen={onOpenCase} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section-label">About / Who & How</div>
        </Reveal>
        <div className="about-grid">
          <div>
            <Reveal>
              <div className="about-photo">
                <span className="label">photo placeholder · 4:5</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="about-stats">
                <div className="stat">
                  <div className="v"><em>5+</em></div>
                  <div className="k">Years Shipping</div>
                </div>
                <div className="stat">
                  <div className="v"><em>14</em></div>
                  <div className="k">Engineers Mentored</div>
                </div>
                <div className="stat">
                  <div className="v"><em>4M</em></div>
                  <div className="k">Daily Tx Processed</div>
                </div>
                <div className="stat">
                  <div className="v"><em>0</em></div>
                  <div className="k">P0 Incidents (2024)</div>
                </div>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h3 className="about-bio">
                I'm a software engineer drawn to the unglamorous middle of products —
                the <em>ledgers</em>, the <em>pipelines</em>, the workflow tools that turn
                a heroic on-call into a quiet Tuesday afternoon.
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)', maxWidth: 580, marginBottom: 56 }}>
                Five years across fintech, logistics, and developer platforms. I care about
                correctness over cleverness, about systems that survive their second year, and
                about teams that ship without burning out. Outside of work I write about
                distributed systems and run a small Sunday hack night in Paris.
              </p>
            </Reveal>
            {Object.entries(window.SKILLS).map(([cat, items], i) => (
              <Reveal key={cat} delay={i * 80}>
                <div className="skill-section">
                  <h4>{cat}</h4>
                  <div className="skill-grid">
                    {items.map(s => <span key={s} className="skill-chip">{s}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <div className="skill-section">
                <h4>Daily Tools</h4>
                <div className="tools-grid">
                  {window.TOOLS.map(t => (
                    <div key={t.n} className="tool-cell">
                      <span className="n">{t.n}</span>
                      <span className="c">{t.c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-label">Experience / Trajectory</div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="section-title">Roles, in <em>chronological</em><br/>(reverse) order.</h2>
        </Reveal>
        <div className="timeline" style={{ marginTop: 64 }}>
          {window.EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="tl-item">
                <div className="tl-period">
                  {e.now ? <span className="now">{e.period}</span> : e.period}
                </div>
                <div>
                  <h3 className="tl-role">{e.role}</h3>
                  <div className="tl-company">
                    {e.company}<span className="sep">·</span>{e.location}
                  </div>
                  <p className="tl-desc">{e.desc}</p>
                  <div className="tl-tags">
                    {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [copied, setCopied] = useStateS(false);
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="section-label">Contact / Let's Talk</div>
        </Reveal>
        <Reveal delay={120}>
          <h2>
            Have a <em>system</em><br/>
            that needs <em>thinking through?</em>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <a className="contact-email" href="mailto:hicham@dandan.dev"
             onClick={(e) => {
               navigator.clipboard?.writeText('hicham@dandan.dev');
               setCopied(true);
               setTimeout(() => setCopied(false), 1800);
             }}>
            hicham@dandan.dev
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, fontStyle: 'normal', color: 'var(--fg-3)' }}>
              {copied ? '— copied' : '— click to copy'}
            </span>
          </a>
        </Reveal>
        <Reveal delay={360}>
          <div className="contact-socials">
            <a href="#" onClick={(e) => e.preventDefault()}>GitHub <span className="arrow"></span></a>
            <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn <span className="arrow"></span></a>
            <a href="#" onClick={(e) => e.preventDefault()}>Read.cv <span className="arrow"></span></a>
            <a href="#" onClick={(e) => e.preventDefault()}>X / Twitter <span className="arrow"></span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' });
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: 'none', padding: '0 48px' }}>
        <span>© 2026 Hicham Dandan · All Rights Reserved</span>
        <span className="now">
          <span className="dot"></span>
          {time} CET · Paris
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { HeroA, HeroB, HeroC, Work, About, Experience, Contact, Footer });
