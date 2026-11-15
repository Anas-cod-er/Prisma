const features = [
  {
    number: "01",
    title: "Model your data",
    description:
      "Describe your data in a clear, readable schema that grows with your product.",
  },
  {
    number: "02",
    title: "Query with confidence",
    description:
      "Get a type-safe client that makes every query feel familiar and predictable.",
  },
  {
    number: "03",
    title: "Ship without friction",
    description:
      "Move from local development to production with a workflow your whole team can trust.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#" aria-label="Prisma home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  d="M17.3 3.8 27.1 22a2.1 2.1 0 0 1-1.6 3.1l-13.2 2.1a2.1 2.1 0 0 1-2.2-1.1L3.9 15.8a2.1 2.1 0 0 1 .3-2.4l9.4-9.7a2.2 2.2 0 0 1 3.7.1Z"
                  fill="currentColor"
                />
                <path
                  d="m15.7 11.2-3.1 12.4 8.3-1.3-5.2-11.1Z"
                  fill="var(--brand-cutout)"
                />
              </svg>
            </span>
            <span>prisma</span>
          </a>

          <div className="desktop-nav">
            <a href="#platform">Platform</a>
            <a href="#workflow">How it works</a>
            <a href="#docs">Docs</a>
          </div>

          <div className="nav-actions">
            <a className="nav-login" href="#docs">
              Log in
            </a>
            <a className="button button-dark nav-cta" href="#get-started">
              Get started <span aria-hidden="true">↗</span>
            </a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Toggle navigation">
              <span />
              <span />
            </summary>
            <div className="mobile-menu-panel">
              <a href="#platform">Platform</a>
              <a href="#workflow">How it works</a>
              <a href="#docs">Docs</a>
              <a href="#get-started">Get started <span aria-hidden="true">↗</span></a>
            </div>
          </details>
        </nav>
      </header>

      <main>
        <section className="hero" id="platform">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              THE DATA PLATFORM FOR DEVELOPERS
            </div>
            <h1>
              Your data layer,
              <br />
              <span>finally in focus.</span>
            </h1>
            <p className="hero-description">
              A better way to work with your database. Model, query, and ship
              with tools that make the complex feel simple.
            </p>
            <div className="hero-actions" id="get-started">
              <a className="button button-primary" href="#workflow">
                Explore the platform <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#docs">
                Read the docs <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span>
                <span>M</span>
                <span>A</span>
                <span>+</span>
              </div>
              <p>
                Built for the way <strong>you build</strong>
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="A preview of the Prisma data workspace">
            <div className="visual-glow" />
            <div className="workspace-card">
              <div className="workspace-topbar">
                <div className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="workspace-name">my-app / schema.prisma</span>
                <span className="saved-badge">
                  <span /> Synced
                </span>
              </div>
              <div className="workspace-content">
                <div className="workspace-sidebar">
                  <span className="sidebar-label">YOUR PROJECT</span>
                  <div className="sidebar-item active">
                    <span className="sidebar-icon">◇</span> Schema
                  </div>
                  <div className="sidebar-item">
                    <span className="sidebar-icon">⌘</span> Queries
                  </div>
                  <div className="sidebar-item">
                    <span className="sidebar-icon">▤</span> Database
                  </div>
                  <div className="sidebar-divider" />
                  <span className="sidebar-label">CONNECTION</span>
                  <div className="connection-status">
                    <span /> Connected
                  </div>
                </div>
                <div className="code-panel">
                  <div className="code-heading">
                    <span>schema.prisma</span>
                    <span className="code-more">···</span>
                  </div>
                  <div className="code-lines" aria-label="Prisma schema example">
                    <div><span className="line-number">1</span><span className="code-muted">generator</span> client {"{"}</div>
                    <div><span className="line-number">2</span>  provider = <span className="code-green">&quot;prisma-client-js&quot;</span></div>
                    <div><span className="line-number">3</span>{"}"}</div>
                    <div className="code-spacer"><span className="line-number">4</span></div>
                    <div><span className="line-number">5</span><span className="code-purple">model</span> <span className="code-yellow">Post</span> {"{"}</div>
                    <div><span className="line-number">6</span>  id      <span className="code-muted">Int</span>      <span className="code-pink">@id @default</span>(autoincrement())</div>
                    <div><span className="line-number">7</span>  title   <span className="code-muted">String</span></div>
                    <div><span className="line-number">8</span>  content <span className="code-muted">String?</span></div>
                    <div><span className="line-number">9</span>  author  <span className="code-muted">User</span>     <span className="code-pink">@relation</span>(fields: [authorId],</div>
                    <div><span className="line-number">10</span>                   references: [id])</div>
                    <div><span className="line-number">11</span>  authorId <span className="code-muted">Int</span></div>
                    <div><span className="line-number">12</span>{"}"}</div>
                  </div>
                  <div className="code-footer">
                    <span><i /> Schema is valid</span>
                    <span>UTF-8&nbsp;&nbsp; Ln 12, Col 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-note">
              <span className="note-icon">✓</span>
              <span><strong>Type-safe by design</strong><small>Catch issues before they ship</small></span>
            </div>
            <div className="visual-caption">
              <span className="caption-dot" />
              A little more clarity, built in.
            </div>
          </div>
        </section>

        <section className="feature-section" id="workflow">
          <div className="section-heading">
            <span className="section-kicker">A BETTER WAY FORWARD</span>
            <h2>Less wrestling with data.<br /><span>More making things happen.</span></h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="docs-callout" id="docs">
          <div>
            <span className="section-kicker">READY WHEN YOU ARE</span>
            <h2>Start with a clearer picture.</h2>
          </div>
          <a className="button button-light" href="#get-started">
            Find your next step <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" aria-label="Prisma home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M17.3 3.8 27.1 22a2.1 2.1 0 0 1-1.6 3.1l-13.2 2.1a2.1 2.1 0 0 1-2.2-1.1L3.9 15.8a2.1 2.1 0 0 1 .3-2.4l9.4-9.7a2.2 2.2 0 0 1 3.7.1Z" fill="currentColor" />
              <path d="m15.7 11.2-3.1 12.4 8.3-1.3-5.2-11.1Z" fill="var(--brand-cutout)" />
            </svg>
          </span>
          <span>prisma</span>
        </a>
        <p>Make working with data feel effortless.</p>
        <span className="footer-copy">© 2026 Prisma</span>
      </footer>
    </>
  );
}
