
import { useState } from 'react'
import './App.css'

const skills = [
  ['🌐', 'HTML & CSS', 'Building'],
  ['⚡', 'JavaScript', 'Learning'],
  ['⚛️', 'React', 'Building'],
  ['▲', 'Next.js', 'Exploring'],
  ['🟢', 'Node.js', 'Building'],
  ['🐬', 'MySQL', 'Learning'],
  ['🐍', 'Python', 'Exploring'],
  ['📱', 'Flutter & Dart', 'Learning'],
  ['🤖', 'Telegram Bots', 'Building'],
  ['🐙', 'Git & GitHub', 'Using'],
  ['🧩', 'Express.js', 'Learning'],
  ['🎨', 'Responsive CSS', 'Practising'],
]

const projects = [
  { type: 'Bots', icon: '🤖', title: 'Messaging Bot Toolkit', description: 'A modular bot project focused on useful automation and a friendly user experience.', tech: 'Node.js · Telegram' },
  { type: 'Web', icon: '🌙', title: 'HASIDU.Dev Portfolio', description: 'My personal developer space with a modern design, animations and project showcase.', tech: 'React · CSS · Vercel' },
  { type: 'Tools', icon: '🌐', title: 'Local Network Dashboard', description: 'A lightweight interface concept for organizing services on a private development network.', tech: 'Node.js · Networking' },
  { type: 'Bots', icon: '✨', title: 'AI Assistant Experiments', description: 'Exploring conversational workflows, APIs and helpful automation features.', tech: 'JavaScript · APIs' },
]

function App() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const visibleProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.type === filter)

  return (
    <div className="site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">H</span>
          <span>HASIDU<span className="mint">.Dev</span></span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>

        <a className="button button-primary nav-cta" href="#contact">Let's talk ↗</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> BUILDING IDEAS INTO DIGITAL PRODUCTS</div>
            <h1>Code with purpose.<br /><span className="gradient-text">Build without limits.</span></h1>
            <p className="hero-description">
              Hey, I'm <strong>Hasidu</strong> — a developer exploring web experiences,
              automation, and useful digital tools. I turn curious ideas into projects that work.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work ↗</a>
              <a className="button button-quiet" href="#contact">Get in touch →</a>
            </div>

            <div className="social-links">
              <span>FIND ME ON</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram ↗</a>
            </div>

            <div className="tech-pills">
              <span>⌘ Developer</span>
              <span>⚡ Automation</span>
              <span>◈ Always learning</span>
            </div>
          </div>

          <div className="terminal-wrap">
            <div className="floating-sticker sticker-code">&lt;/&gt;</div>
            <div className="floating-sticker sticker-spark">✦</div>
            <div className="terminal">
              <div className="terminal-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>hasidu.dev / profile.js</span>
                <span>•••</span>
              </div>
              <div className="terminal-code">
                <div className="code-muted">// A little about the developer</div>
                <div><span className="purple">const</span> <span className="blue">developer</span> = {'{'}</div>
                <div className="indent">name: <span className="green">"Hasidu"</span>,</div>
                <div className="indent">focus: [</div>
                <div className="indent more"><span className="green">"Web development"</span>,</div>
                <div className="indent more"><span className="green">"Telegram bots"</span>,</div>
                <div className="indent more"><span className="green">"Python & automation"</span></div>
                <div className="indent">],</div>
                <div className="indent">mindset: <span className="green">"Learn. Build. Improve."</span>,</div>
                <div className="indent">available: <span className="purple">true</span></div>
                <div>{'}'};</div>
                <div className="code-muted code-footer">// Ready for the next challenge <span className="green">▍</span></div>
              </div>
              <div className="terminal-bottom"><span>● SYSTEM READY</span><span>UTF-8 · JS</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <div><span className="section-number">01 / ABOUT ME</span><h2>Curiosity is my<br />favorite framework.</h2></div>
            <p>I enjoy understanding how things work, then using code to make them simpler, faster, and more useful.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card"><div className="feature-icon">⌘</div><h3>Thoughtful Development</h3><p>Building responsive interfaces with attention to usability, accessibility, and the details that make products feel polished.</p></article>
            <article className="feature-card"><div className="feature-icon">⚡</div><h3>Automation & Bots</h3><p>Exploring scripts and messaging bots that reduce repetitive work and connect tools in practical ways.</p></article>
            <article className="feature-card"><div className="feature-icon">◈</div><h3>Always Learning</h3><p>Growing through experiments, open-source projects, debugging, and turning lessons into better code.</p></article>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <div><span className="section-number">02 / TOOLBOX</span><h2>Tools I like to build with.</h2></div>
            <p>A growing toolkit — learning, testing, and improving with every project.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([icon, name, level]) => (
              <div className="skill-card" key={name}>
                <span className="skill-icon">{icon}</span><span>{name}</span><span className="skill-level">{level}</span>
              </div>
            ))}
          </div>
          <p className="skill-note">✦ Skill labels reflect my current learning and project practice, not formal certifications.</p>
        </section>

        <section className="section" id="projects">
          <div className="section-heading project-heading">
            <div><span className="section-number">03 / SELECTED WORK</span><h2>Projects in progress.</h2><p>A few directions from my developer journey.</p></div>
            <div className="filter-list">
              {['All', 'Web', 'Bots', 'Tools'].map(item => (
                <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'filter active' : 'filter'}>{item}</button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {visibleProjects.map(project => (
              <article className="project-card" key={project.title}>
                <div className="project-top"><span className="project-icon">{project.icon}</span><span className="project-type">{project.type.toUpperCase()}</span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="project-tech">{project.tech}</div>
                <button className="project-more" onClick={() => setSelected(project)}>Explore project ↗</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <div className="section-heading">
            <div><span className="section-number">04 / THE JOURNEY</span><h2>Progress over perfection.</h2></div>
            <p>A learning-first journey, one project at a time.</p>
          </div>
          <div className="timeline-item"><span>CURRENT</span><div><h3>Building personal projects</h3><p>Practising web development, exploring automation, and learning to ship projects.</p></div></div>
          <div className="timeline-item"><span>NEXT UP</span><div><h3>More polished, useful tools</h3><p>Improving code quality, documentation, and building projects people can use.</p></div></div>
        </section>

        <section className="section" id="contact">
          <div className="contact-panel">
            <div><span className="section-number">05 / GET IN TOUCH</span><h2>Have an idea?<br />Let's make it real.</h2><p>Interested in a project, collaboration, or talking tech? Reach out using the links here.</p><a className="button button-primary" href="mailto:your-email@example.com?subject=Project%20enquiry">Send an email ↗</a></div>
            <div className="contact-options">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><span><b>GitHub</b><small>Code & repositories</small></span><b>↗</b></a>
              <a href="https://t.me/" target="_blank" rel="noreferrer"><span><b>Telegram</b><small>Quick message</small></span><b>↗</b></a>
              <a href="mailto:your-email@example.com"><span><b>Email</b><small>your-email@example.com</small></span><b>↗</b></a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} HASIDU.Dev. Made with curiosity.</span><a href="#home">Back to top ↑</a></footer>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" role="dialog" aria-modal="true" onClick={event => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <span className="section-number">PROJECT NOTES</span>
            <h2>{selected.title}</h2><p>{selected.description}</p><p className="modal-tech">{selected.tech}</p>
            <button className="button button-primary" onClick={() => setSelected(null)}>Got it ✓</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
