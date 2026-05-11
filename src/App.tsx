import { ArrowUpRight, Download, Github, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { contactLinks, navItems, profile, projects, skillGroups, stats, timeline } from "./data";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell antialiased">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="回到首页">
          <span className="brand-mark">XQY</span>
          <span>{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="移动端导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">AI Agent · RAG · 后端工程</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              查看项目
              <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              下载简历
              <Download size={18} />
            </a>
            <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
              <Github size={18} />
            </a>
          </div>

          <div className="hero-meta" aria-label="联系方式摘要">
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI Agent 和 RAG 系统视觉图">
          <img src="/hero-ai-agent.png" alt="AI Agent 与 RAG 系统的抽象视觉图" />
          <div className="visual-panel">
            <span>Selected Focus</span>
            <strong>Agentic RAG Systems</strong>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="能力亮点">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>精选项目</h2>
          <p>把 GitHub 作品和简历项目合并展示，突出真实系统能力、工程指标和 AI 应用落地经验。</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.name}>
                <div className="project-card-header">
                  <span className="project-icon">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p>{project.period}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>

                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>

                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="tags">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {project.links && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split-section" id="skills">
        <div className="section-heading compact">
          <p className="eyebrow">Stack</p>
          <h2>技能结构</h2>
          <p>用面试官容易扫描的方式组织能力，不只展示会什么，也展示能力之间怎么组合成系统。</p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-title">
                  <Icon size={20} />
                  <h3>{group.title}</h3>
                </div>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Timeline</p>
          <h2>经历与教育</h2>
          <p>真实业务系统经历与研究生阶段 AI 应用实践共同支撑求职方向。</p>
        </div>

        <div className="timeline">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <article className="timeline-item" key={`${item.title}-${item.period}`}>
                <span className="timeline-icon">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="timeline-type">{item.type}</p>
                  <h3>{item.title}</h3>
                  <time>{item.period}</time>
                  <p>{item.content}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>欢迎联系我讨论 AI 应用研发岗位</h2>
          <p>网页公开展示邮箱与 GitHub，手机号保留在 PDF 简历中，兼顾可联系性和隐私。</p>
        </div>

        <div className="contact-actions">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a className="button secondary" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
