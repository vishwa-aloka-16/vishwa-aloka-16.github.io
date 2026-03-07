<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vishwa Aloka — Software Engineer & Data Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #080a0f;
      --surface: #0e1118;
      --surface2: #151921;
      --border: rgba(255,255,255,0.07);
      --accent: #00e5c0;
      --accent2: #3b82f6;
      --text: #e8eaf0;
      --muted: #6b7280;
      --heading: 'DM Serif Display', serif;
      --mono: 'DM Mono', monospace;
      --body: 'Outfit', sans-serif;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--body);
      font-weight: 300;
      line-height: 1.7;
      overflow-x: hidden;
      cursor: none;
    }

    /* Custom cursor */
    .cursor {
      position: fixed;
      width: 8px; height: 8px;
      background: var(--accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      mix-blend-mode: screen;
    }
    .cursor-ring {
      position: fixed;
      width: 36px; height: 36px;
      border: 1px solid rgba(0,229,192,0.35);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transition: transform 0.18s ease, width 0.2s, height 0.2s, border-color 0.2s;
    }

    /* Grid background */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
      z-index: 0;
    }

    /* Glow orbs */
    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
      z-index: 0;
      opacity: 0.18;
    }
    .orb-1 { width: 600px; height: 600px; background: #00e5c0; top: -200px; right: -100px; }
    .orb-2 { width: 500px; height: 500px; background: #3b82f6; bottom: 10%; left: -150px; }

    /* Nav */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      padding: 20px 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(20px);
      background: rgba(8,10,15,0.7);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      font-family: var(--mono);
      font-size: 13px;
      color: var(--accent);
      letter-spacing: 0.08em;
      text-decoration: none;
    }
    .nav-links {
      display: flex;
      gap: 36px;
      list-style: none;
    }
    .nav-links a {
      font-family: var(--mono);
      font-size: 12px;
      color: var(--muted);
      text-decoration: none;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--text); }

    /* Sections */
    section { position: relative; z-index: 1; }

    /* HERO */
    #hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 120px 60px 60px;
      gap: 60px;
    }
    .hero-left { max-width: 580px; }
    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--accent);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border: 1px solid rgba(0,229,192,0.25);
      padding: 6px 14px;
      border-radius: 2px;
      margin-bottom: 28px;
      opacity: 0;
      animation: fadeUp 0.6s 0.2s forwards;
    }
    .hero-tag::before {
      content: '';
      width: 6px; height: 6px;
      background: var(--accent);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    h1 {
      font-family: var(--heading);
      font-size: clamp(48px, 6vw, 80px);
      line-height: 1.05;
      letter-spacing: -0.02em;
      color: #fff;
      opacity: 0;
      animation: fadeUp 0.7s 0.35s forwards;
    }
    h1 em {
      font-style: italic;
      color: var(--accent);
      display: block;
    }
    .hero-desc {
      margin-top: 24px;
      font-size: 16px;
      color: var(--muted);
      max-width: 440px;
      line-height: 1.8;
      opacity: 0;
      animation: fadeUp 0.7s 0.5s forwards;
    }
    .hero-cta {
      margin-top: 40px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      opacity: 0;
      animation: fadeUp 0.7s 0.65s forwards;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 28px;
      font-family: var(--mono);
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 2px;
      transition: all 0.25s;
      cursor: none;
    }
    .btn-primary {
      background: var(--accent);
      color: #080a0f;
      font-weight: 500;
    }
    .btn-primary:hover {
      background: #fff;
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0,229,192,0.25);
    }
    .btn-secondary {
      background: transparent;
      color: var(--text);
      border: 1px solid var(--border);
    }
    .btn-secondary:hover {
      border-color: rgba(255,255,255,0.2);
      background: var(--surface);
      transform: translateY(-2px);
    }

    /* Hero right — stats panel */
    .hero-right {
      opacity: 0;
      animation: fadeIn 1s 0.8s forwards;
    }
    .stats-panel {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 36px;
      position: relative;
      overflow: hidden;
    }
    .stats-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
    }
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 32px;
    }
    .stat-item { border-left: 2px solid var(--border); padding-left: 16px; }
    .stat-number {
      font-family: var(--heading);
      font-size: 36px;
      color: #fff;
      line-height: 1;
    }
    .stat-label {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
      letter-spacing: 0.08em;
      margin-top: 4px;
    }
    .terminal-block {
      background: #0a0d12;
      border: 1px solid var(--border);
      border-radius: 3px;
      padding: 18px 20px;
      font-family: var(--mono);
      font-size: 12px;
      line-height: 1.8;
    }
    .terminal-line { display: flex; gap: 10px; }
    .t-prompt { color: var(--accent); }
    .t-cmd { color: var(--text); }
    .t-out { color: var(--muted); padding-left: 20px; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* DIVIDER */
    .section-divider {
      height: 1px;
      background: var(--border);
      margin: 0 60px;
      position: relative;
      z-index: 1;
    }

    /* ABOUT */
    #about {
      padding: 100px 60px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 80px;
      align-items: start;
    }
    .section-label {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--accent);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    h2 {
      font-family: var(--heading);
      font-size: clamp(32px, 4vw, 52px);
      color: #fff;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .about-text p {
      font-size: 16px;
      color: var(--muted);
      margin-bottom: 20px;
      line-height: 1.9;
    }
    .about-text strong { color: var(--text); font-weight: 500; }
    .highlight-line {
      display: inline-block;
      color: var(--accent);
      font-style: italic;
      font-family: var(--heading);
      font-size: 20px;
      margin-top: 8px;
    }

    /* SKILLS */
    #skills {
      padding: 100px 60px;
      background: var(--surface);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    .skills-header { margin-bottom: 60px; }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .skill-category {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 28px;
      transition: border-color 0.3s, transform 0.3s;
    }
    .skill-category:hover {
      border-color: rgba(0,229,192,0.3);
      transform: translateY(-4px);
    }
    .skill-cat-label {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--accent);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .skill-list { display: flex; flex-wrap: wrap; gap: 8px; }
    .skill-tag {
      font-family: var(--mono);
      font-size: 12px;
      color: var(--text);
      background: var(--surface2);
      border: 1px solid var(--border);
      padding: 5px 12px;
      border-radius: 2px;
      transition: all 0.2s;
    }
    .skill-tag:hover {
      background: rgba(0,229,192,0.08);
      border-color: rgba(0,229,192,0.3);
      color: var(--accent);
    }

    /* PROJECTS */
    #projects { padding: 100px 60px; }
    .projects-header { margin-bottom: 60px; }
    .projects-grid { display: grid; gap: 2px; }
    .project-row {
      display: grid;
      grid-template-columns: 80px 1fr 1fr auto;
      align-items: center;
      gap: 40px;
      padding: 32px 0;
      border-top: 1px solid var(--border);
      transition: all 0.3s;
      cursor: none;
    }
    .project-row:last-child { border-bottom: 1px solid var(--border); }
    .project-row:hover { padding-left: 16px; }
    .project-row:hover .project-num { color: var(--accent); }
    .project-num {
      font-family: var(--heading);
      font-size: 13px;
      color: var(--muted);
      font-style: italic;
      transition: color 0.3s;
    }
    .project-name {
      font-family: var(--heading);
      font-size: 22px;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .project-desc {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.6;
    }
    .project-tags { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
    .project-tag {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--muted);
      border: 1px solid var(--border);
      padding: 3px 10px;
      border-radius: 1px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .project-link {
      display: none;
      position: absolute;
      right: 60px;
      color: var(--accent);
      text-decoration: none;
      font-family: var(--mono);
      font-size: 11px;
      letter-spacing: 0.1em;
    }

    /* CONNECT */
    #connect {
      padding: 100px 60px;
      background: var(--surface);
      border-top: 1px solid var(--border);
    }
    .connect-inner {
      max-width: 700px;
    }
    .connect-inner p {
      font-size: 16px;
      color: var(--muted);
      margin-top: 20px;
      margin-bottom: 48px;
      line-height: 1.8;
    }
    .connect-links {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .connect-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 24px;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 3px;
      text-decoration: none;
      color: var(--text);
      font-family: var(--mono);
      font-size: 12px;
      letter-spacing: 0.08em;
      transition: all 0.25s;
      cursor: none;
    }
    .connect-link svg { color: var(--accent); }
    .connect-link:hover {
      border-color: rgba(0,229,192,0.35);
      background: rgba(0,229,192,0.05);
      color: var(--accent);
      transform: translateY(-2px);
    }

    /* FOOTER */
    footer {
      padding: 32px 60px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    footer p {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
      letter-spacing: 0.08em;
    }
    footer span { color: var(--accent); }

    /* Scroll reveal */
    .reveal {
      opacity: 0;
      transform: translateY(32px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Responsive */
    @media (max-width: 900px) {
      nav { padding: 18px 24px; }
      .nav-links { display: none; }
      #hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
      .hero-right { display: none; }
      #about { grid-template-columns: 1fr; padding: 60px 24px; gap: 32px; }
      #skills { padding: 60px 24px; }
      .skills-grid { grid-template-columns: 1fr; }
      #projects { padding: 60px 24px; }
      .project-row { grid-template-columns: 1fr; gap: 8px; }
      .project-num { display: none; }
      .project-tags { justify-content: flex-start; }
      #connect { padding: 60px 24px; }
      footer { padding: 24px; flex-direction: column; gap: 8px; text-align: center; }
      .section-divider { margin: 0 24px; }
    }
  </style>
</head>
<body>

  <!-- Cursor -->
  <div class="cursor" id="cursor"></div>
  <div class="cursor-ring" id="cursorRing"></div>

  <!-- Ambient orbs -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>

  <!-- Nav -->
  <nav>
    <a href="#hero" class="nav-logo">VA — 16</a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Stack</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#connect">Connect</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section id="hero">
    <div class="hero-left">
      <div class="hero-tag">Available for opportunities</div>
      <h1>Vishwa<br><em>Aloka.</em></h1>
      <p class="hero-desc">
        Software Engineering student at SLIIT. Building scalable platforms and extracting meaning from data — at the crossroads of full-stack engineering and data science.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#connect" class="btn btn-secondary">Get in Touch</a>
      </div>
    </div>
    <div class="hero-right">
      <div class="stats-panel">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">3+</div>
            <div class="stat-label">Projects Shipped</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3</div>
            <div class="stat-label">Core Languages</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">SE</div>
            <div class="stat-label">Degree — SLIIT</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">DE</div>
            <div class="stat-label">Aspiring Path</div>
          </div>
        </div>
        <div class="terminal-block">
          <div class="terminal-line">
            <span class="t-prompt">~</span>
            <span class="t-cmd">whoami</span>
          </div>
          <div class="terminal-line">
            <span class="t-out">Vishwa Aloka / Software Engineer</span>
          </div>
          <div class="terminal-line" style="margin-top:8px">
            <span class="t-prompt">~</span>
            <span class="t-cmd">cat focus.txt</span>
          </div>
          <div class="terminal-line">
            <span class="t-out">Data Engineering, Full-Stack, Scale</span>
          </div>
          <div class="terminal-line" style="margin-top:8px">
            <span class="t-prompt">~</span>
            <span class="t-cmd" style="color:var(--accent)">_</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- About -->
  <section id="about">
    <div class="about-meta reveal">
      <div class="section-label">01 / About</div>
      <h2>Who I am.</h2>
    </div>
    <div class="about-text reveal">
      <p>
        I'm a <strong>Software Engineering undergraduate at SLIIT</strong>, driven by the challenge of architecting systems that don't just work — they scale. My academic foundation spans algorithms, distributed systems, and database design, with a practical focus on shipping real products.
      </p>
      <p>
        My flagship work is the <strong>Smart University Platform</strong> — an integrated ecosystem solving real campus-life friction: intelligent parking management and a peer-to-peer student marketplace, built to handle real-world load with a clean, production-grade codebase.
      </p>
      <p>
        Beyond building, I'm equally drawn to the <strong>data layer</strong> — modeling, transforming, and interpreting datasets into decisions. My goal is to bridge full-stack engineering with data pipeline architecture, contributing to systems where code and data reinforce each other.
      </p>
      <span class="highlight-line">"Engineering the infrastructure of insight."</span>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Skills -->
  <section id="skills">
    <div class="skills-header reveal">
      <div class="section-label">02 / Stack</div>
      <h2>Technical arsenal.</h2>
    </div>
    <div class="skills-grid">
      <div class="skill-category reveal">
        <div class="skill-cat-label">Languages</div>
        <div class="skill-list">
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">Java</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">SQL</span>
          <span class="skill-tag">HTML / CSS</span>
        </div>
      </div>
      <div class="skill-category reveal" style="transition-delay: 0.1s">
        <div class="skill-cat-label">Frameworks & Libraries</div>
        <div class="skill-list">
          <span class="skill-tag">React</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Express</span>
          <span class="skill-tag">Pandas</span>
          <span class="skill-tag">JSP / Servlets</span>
        </div>
      </div>
      <div class="skill-category reveal" style="transition-delay: 0.2s">
        <div class="skill-cat-label">Data & Infrastructure</div>
        <div class="skill-list">
          <span class="skill-tag">MongoDB</span>
          <span class="skill-tag">MySQL</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">REST APIs</span>
          <span class="skill-tag">Data Modeling</span>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Projects -->
  <section id="projects">
    <div class="projects-header reveal">
      <div class="section-label">03 / Projects</div>
      <h2>Selected work.</h2>
    </div>

    <div class="projects-grid">
      <a href="https://github.com/vishwa-aloka-16/FlyCast" target="_blank" style="text-decoration:none;color:inherit">
        <div class="project-row reveal">
          <div class="project-num">01</div>
          <div>
            <div class="project-name">FlyCast</div>
          </div>
          <div class="project-desc">
            Predictive data modeling and flight forecasting platform using statistical analysis and ML-driven time-series models to surface actionable, forward-looking predictions.
          </div>
          <div class="project-tags">
            <span class="project-tag">Python</span>
            <span class="project-tag">Pandas</span>
            <span class="project-tag">ML</span>
          </div>
        </div>
      </a>

      <a href="https://github.com/vishwa-aloka-16/Smart-University-Platform" target="_blank" style="text-decoration:none;color:inherit">
        <div class="project-row reveal">
          <div class="project-num">02</div>
          <div>
            <div class="project-name">Smart University Platform</div>
          </div>
          <div class="project-desc">
            Integrated campus ecosystem with real-time intelligent parking management and a peer-to-peer student marketplace — architected for scale and reliability.
          </div>
          <div class="project-tags">
            <span class="project-tag">React</span>
            <span class="project-tag">Node.js</span>
            <span class="project-tag">MongoDB</span>
          </div>
        </div>
      </a>

      <a href="https://github.com/vishwa-aloka-16/Table-Reservation-Web-App" target="_blank" style="text-decoration:none;color:inherit">
        <div class="project-row reveal">
          <div class="project-num">03</div>
          <div>
            <div class="project-name">Table Reservation App</div>
          </div>
          <div class="project-desc">
            Full-featured restaurant reservation system with dynamic booking logic, real-time seat tracking, and an admin dashboard built with a classic Java server-side stack.
          </div>
          <div class="project-tags">
            <span class="project-tag">Java</span>
            <span class="project-tag">JSP</span>
            <span class="project-tag">MySQL</span>
          </div>
        </div>
      </a>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Connect -->
  <section id="connect">
    <div class="connect-inner">
      <div class="section-label reveal">04 / Connect</div>
      <h2 class="reveal">Let's build something.</h2>
      <p class="reveal">
        Open to internships, collaborative projects, and conversations about data engineering or full-stack architecture. Reach out and let's talk.
      </p>
      <div class="connect-links reveal">
        <a href="https://linkedin.com/in/vishwa-aloka" target="_blank" class="connect-link">
          <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a href="https://instagram.com/vishwa_aloka" target="_blank" class="connect-link">
          <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          Instagram
        </a>
        <a href="https://github.com/vishwa-aloka-16" target="_blank" class="connect-link">
          <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>Vishwa Aloka &mdash; <span>vishwa-aloka-16.github.io</span></p>
    <p>Built with precision. No frameworks. Pure craft.</p>
  </footer>

  <script>
    // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx - 4 + 'px';
      cursor.style.top = my - 4 + 'px';
    });

    function animateRing() {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .project-row, .skill-category').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(0,229,192,0.6)';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(0,229,192,0.35)';
      });
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  </script>
</body>
</html>
