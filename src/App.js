import React, { useEffect, useState } from 'react';
import AnimatedRole from './components/AnimatedRole';
import Resume from './components/Resume';
import { mainBody, about, repos, skills, leadership, getInTouch, experiences, education } from './editable-stuff/config';

const sections = [['about', 'About', 'user'], ['experience', 'Experience', 'chart-line'], ['projects', 'Projects', 'copy'], ['skills', 'Skills', 'chart-bar'], ['education', 'Education', 'graduation-cap'], ['contact', 'Contact', 'envelope'], ['resume', 'Resume', 'file-alt']];
const projectTitles = { AxxesHackathon: 'QuickCare', CelestiFi: 'CelestiFi', AsteroidsProject_CS1200: 'Asteroids', 'SE4352.001-TeamWebsite': 'Navi' };
const projectIcons = ['comments', 'folder-open', 'rocket', 'compass'];
const skillIcons = { Java: ['java', true], 'C++': ['code'], 'C#': ['code'], Python: ['python', true], 'TypeScript / JavaScript': ['js', true], 'HTML / CSS': ['html5', true], Git: ['git', true], 'Arduino UNO R3': ['microchip'], 'CAD / PTC Onshape': ['cubes'], Vue: ['vuejs', true], React: ['react', true], 'Project Management': ['tasks'], 'Team Leadership': ['users'], 'Problem Solving': ['lightbulb'], Adaptability: ['sync-alt'], 'Time Management': ['clock'], 'Patience & Empathy': ['hands-helping'] };
function Icon({ name, brand = false }) { return <i aria-hidden="true" className={`${brand ? 'fab' : 'fas'} fa-${name}`} />; }
function Section({ id, title, children }) { return <section id={id} className="portfolio-section" aria-labelledby={`${id}-heading`}><h2 id={`${id}-heading`}>{title}</h2><div className="section-content">{children}</div></section>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const fullName = [mainBody.firstName, mainBody.middleName, mainBody.lastName].filter(Boolean).join(' ');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-10% 0px -65% 0px' });
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  const socialLinks = <>
    {mainBody.icons.map(icon => <a key={icon.image} href={icon.url} target="_blank" rel="noopener noreferrer" aria-label={icon.image === 'fa-github' ? 'GitHub' : 'LinkedIn'}><Icon name={icon.image.replace('fa-', '')} brand /></a>)}
  </>;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="mobile-header"><button type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="portfolio-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'times' : 'bars'} /></button><a className="mobile-header-brand" href="#home" onClick={() => setMenuOpen(false)}>{fullName}<span>Software Developer</span></a><a className="mobile-header-photo" href="#home" aria-label={`${fullName}, back to top`} onClick={() => setMenuOpen(false)}><img src={about.imageLink} alt="" width="44" height="44" /></a></header>
    {menuOpen && <button className="menu-backdrop" aria-label="Close navigation overlay" onClick={() => setMenuOpen(false)} />}
    <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
      <a className="profile-link" href="#home" aria-label={`${fullName}, back to top`} onClick={() => setMenuOpen(false)}><img src={about.imageLink} alt={fullName} width="140" height="140" /></a>
      <nav id="portfolio-navigation" aria-label="Main navigation">
        {sections.map(([id, label, icon]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}><Icon name={icon} /><span>{label}</span></a>)}
      </nav>
    </aside>
    <main id="main">
      <section id="home" className="hero" aria-label="Introduction">
        <div className="hero-content"><h1>Hi, I'm <span>{fullName}.</span></h1><AnimatedRole /><p className="hero-description">{mainBody.introduction}</p><div className="social-links">{socialLinks}</div><div className="hero-actions"><a className="button button-light" href="#about">Read More</a><a className="button button-outline" href="#contact">Contact Me</a></div></div>
      </section>
      <Section id="about" title="About"><p>{about.message}</p><ul className="about-details"><li><strong>Languages:</strong> Java, C++, C#, Python, TypeScript, JavaScript, HTML/CSS</li><li><strong>Tools & Technologies:</strong> Git, Arduino UNO R3, PTC Onshape, Vue</li><li><strong>Interests:</strong> Machine learning, robotics, embedded systems, full-stack development</li></ul><p>{leadership.message}</p></Section>
      <Section id="experience" title="Experience">{experiences.data.map(item => <article className="paper experience-card" key={item.company}><header><div className="company-mark" aria-hidden="true"><Icon name={item.icon} /></div><h3>{item.company}</h3><span className="job-role">{item.role}</span></header><ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><footer>{item.date}</footer></article>)}</Section>
      <Section id="projects" title="Projects"><div className="project-grid">{repos.specificRepos.map((name, index) => <article className="paper project-card" key={name}><div className={`project-art project-art-${index}`} aria-hidden="true"><Icon name={projectIcons[index] || 'code'} /><span>{projectTitles[name] || name}</span></div><div className="project-copy"><h3>{projectTitles[name] || name}</h3><p>{repos.descriptions[name]}</p><div className="project-links"><a className="project-link" href={`https://github.com/${repos.gitHubUsername}/${name}`} target="_blank" rel="noopener noreferrer"><Icon name="github" brand /> View repository <span className="sr-only">for {projectTitles[name] || name}</span><Icon name="external-link-alt" /></a>{repos.liveSites?.[name] && <a className="project-link" href={repos.liveSites[name]} target="_blank" rel="noopener noreferrer"><Icon name="globe" /> Live site<span className="sr-only"> for {projectTitles[name] || name}</span><Icon name="external-link-alt" /></a>}</div></div></article>)}</div></Section>
      <Section id="skills" title="Skills">{[['Technical Skills', skills.hardSkills], ['Collaboration & Leadership', skills.softSkills]].map(([title, list]) => <article className="paper skill-card" key={title}><h3>{title}</h3><ul className="skill-list">{list.map(skill => <li key={skill.name}><span className="skill-symbol" aria-hidden="true"><Icon name={skillIcons[skill.name]?.[0] || 'check'} brand={skillIcons[skill.name]?.[1]} /></span><span>{skill.name}</span></li>)}</ul></article>)}</Section>
      <Section id="education" title="Education"><article className="paper education-card"><h3>{education.school}</h3><p className="muted">{education.location}</p><p>{education.college}</p><p><strong>Degree program:</strong> {education.degree}<br /><strong>GPA:</strong> {education.gpa}</p></article></Section>
      <Section id="contact" title="Contact"><p>Interested in building something together? Let's talk.</p><ul className="contact-list"><li><span><Icon name="envelope" /></span><a href={`mailto:${getInTouch.email}`}>{getInTouch.email}</a></li><li><span><Icon name="github" brand /></span><a href="https://github.com/Jayden-Boomer" target="_blank" rel="noopener noreferrer">github.com/Jayden-Boomer</a></li><li><span><Icon name="linkedin-in" brand /></span><a href="https://www.linkedin.com/in/jaydenboomer/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jaydenboomer</a></li></ul></Section>
      <Section id="resume" title="Resume"><Resume /></Section>
      <footer className="site-footer">{fullName} &middot; Built with React<br /><small>Layout inspired by <a href="https://varadbhogayata.github.io" target="_blank" rel="noopener noreferrer">Varad Bhogayata</a>. Original template by <a href="https://github.com/hashirshoaeb/home" target="_blank" rel="noopener noreferrer">Hashir Shoaib</a>.</small></footer>
    </main>
  </>;
}
