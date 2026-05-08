// components.jsx — Nav, Cursor, Reveal, Magnetic, ProjectCard, CaseStudy

const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ---------- Custom Cursor ---------- */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [variant, setVariant] = useState("default"); // default | hover | text

  useEffect(() => {
    let dotX = -100, dotY = -100;
    let ringX = -100, ringY = -100;
    let mouseX = -100, mouseY = -100;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dotX = mouseX; dotY = mouseY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
    };
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      if (t.closest('a, button, [data-hover]')) setVariant('hover');
      else if (t.closest('h1, h2, h3, p, [data-text]')) setVariant('text');
      else setVariant('default');
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
    <>
      <div ref={dotRef} className={`cursor-dot ${variant === 'text' ? 'text' : ''}`} style={{ display: variant === 'text' ? 'none' : 'block' }} />
      <div ref={ringRef} className={`cursor-ring ${variant}`} />
    </>
  );
}

/* ---------- Nav (hide on scroll down) ---------- */
function Nav({ onNav, onOpenCase, active }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) { setHidden(false); lastY.current = y; return; }
      setHidden(y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'work', n: '01' },
    { id: 'about', n: '02' },
    { id: 'experience', n: '03' },
    { id: 'contact', n: '04' },
  ];

  return (
    <nav className={`nav ${hidden ? 'hidden' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => { e.preventDefault(); onNav('top'); }}>
          <span className="dot"></span>
          Hicham<span style={{ color: 'var(--fg-3)' }}>/</span>Dandan
        </a>
        <div className="nav-links">
          {items.map(it => (
            <a key={it.id} href={`#${it.id}`} className={active === it.id ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); onNav(it.id); }}>
              <span className="num">{it.n}</span>{it.id}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>
          <span className="pulse"></span>
          Available
        </a>
      </div>
    </nav>
  );
}

/* ---------- Reveal-on-scroll wrapper ---------- */
function Reveal({ children, delay = 0, as = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${className}`} {...rest}>{children}</Tag>;
}

/* ---------- Magnetic button ---------- */
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return <span ref={ref} className="magnetic" style={{ transition: 'transform .25s cubic-bezier(.2,.7,.3,1)' }}>{children}</span>;
}

/* ---------- Project art (placeholders w/ identity) ---------- */
function ProjectArt({ project }) {
  if (project.art === 'art-2') {
    return (
      <div className={`thumb-art ${project.art}`}>
        <span className="badge">{project.title.charAt(0)}</span>
      </div>
    );
  }
  if (project.art === 'art-4') {
    return (
      <div className={`thumb-art ${project.art}`}>
        <span className="glyph">{project.title.charAt(0).toLowerCase()}</span>
      </div>
    );
  }
  if (project.art === 'art-5') {
    return (
      <div className={`thumb-art ${project.art}`}>
        <div className="terminal">
          <span className="ln"><span className="cm">// edge agent</span></span>
          <span className="ln"><span className="pr">$</span> signalbox watch --site=tx-04</span>
          <span className="ln"><span className="cm">↳ 2,318 sensors connected</span></span>
          <span className="ln"><span className="pr">↳</span> compressing @ 82.4×</span>
          <span className="ln"><span className="pr">↳</span> latency p99 = 1.8s</span>
          <span className="ln"><span className="cm">// stream healthy</span></span>
        </div>
      </div>
    );
  }
  return <div className={`thumb-art ${project.art}`}></div>;
}

/* ---------- Project card ---------- */
function ProjectCard({ project, span, onOpen }) {
  return (
    <article className={`work-card span-${span}`} onClick={() => onOpen(project)}>
      <div className="thumb">
        <ProjectArt project={project} />
        <div className="thumb-overlay">
          <p className="desc">{project.desc}</p>
        </div>
      </div>
      <div className="work-card-body">
        <div className="work-card-meta">
          <span>{project.num} / {project.year}</span>
          <span>↗ View Case</span>
        </div>
        <h3 className="work-card-title">{project.title}<span style={{ color: 'var(--fg-3)' }}> — {project.subtitle}</span></h3>
        <div className="work-card-tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  );
}

/* ---------- Case Study Overlay ---------- */
function CaseStudy({ project, onClose, onOpen }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  // parallax
  const heroImgRef = useRef(null);
  useEffect(() => {
    const el = heroImgRef.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const overlay = el.closest('.cs-overlay');
      const y = overlay ? overlay.scrollTop : 0;
      el.style.transform = `translateY(${y * 0.15}px)`;
    };
    const overlay = el.closest('.cs-overlay');
    overlay?.addEventListener('scroll', onScroll);
    return () => overlay?.removeEventListener('scroll', onScroll);
  }, []);

  const next = window.PROJECTS[(window.PROJECTS.findIndex(p => p.id === project.id) + 1) % window.PROJECTS.length];

  return (
    <div className="cs-overlay">
      <button className="cs-close" onClick={onClose} aria-label="Close case study">✕</button>

      <section className="cs-hero">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
            <span>Case Study / {project.num}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title} <em>— {project.subtitle.toLowerCase()}.</em></h1>
          <div className="cs-hero-meta">
            <div><div className="k">Role</div><div className="v">{project.role}</div></div>
            <div><div className="k">Timeline</div><div className="v">{project.timeline}</div></div>
            <div><div className="k">Tools</div><div className="v" style={{ fontSize: 16, fontFamily: 'var(--sans)', color: 'var(--fg-2)' }}>{project.tools}</div></div>
            <div><div className="k">Year</div><div className="v">{project.year}</div></div>
          </div>
          <div className="cs-hero-img">
            <div ref={heroImgRef} style={{ position: 'absolute', inset: '-10%' }}>
              <ProjectArt project={project} />
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container cs-section-grid">
          <div className="cs-section-label">Overview</div>
          <div className="cs-section-body">
            <p>{project.overview}</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container cs-section-grid">
          <div className="cs-section-label">The Problem</div>
          <div>
            <div className="cs-section-body">
              <p>{project.problem}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container cs-section-grid">
          <div className="cs-section-label">Process</div>
          <div>
            <div className="cs-prose">
              <p>{project.process}</p>
            </div>
            <div className="cs-gallery">
              <div className="img wide"><ProjectArt project={project} /></div>
              <div className="img"><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)' }}><div style={{ position: 'absolute', inset: 16, border: '1px solid var(--line-2)', borderRadius: 4 }}></div></div></div>
              <div className="img"><div className="art-1" style={{ position: 'absolute', inset: 0 }}></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container cs-section-grid">
          <div className="cs-section-label">Outcomes</div>
          <div>
            <div className="cs-outcomes">
              {project.outcomes.map((o, i) => (
                <div key={i} className="cs-outcome">
                  <div className="v"><em>{o.v}</em></div>
                  <div className="k">{o.k}</div>
                  <div className="d">{o.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-next">
        <div className="container">
          <div className="label">Next case study</div>
          <h3><a href={`#${next.id}`} onClick={(e) => { e.preventDefault(); onOpen(next); }}>{next.title} — {next.subtitle.toLowerCase()} →</a></h3>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Cursor, Nav, Reveal, Magnetic, ProjectCard, ProjectArt, CaseStudy });
