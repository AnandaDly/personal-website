// src/pages/HomeStandard.jsx
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/common/Navbar';
import CustomCursor from '../components/common/CustomCursor';

const RevealSection = ({ children, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 } // Memicu animasi ketika 10% elemen terlihat di layar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
};
// --- Komponen Ikon SVG ---
const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const MailIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const WhatsappIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const ExternalLinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const HomeStandard = () => {
  // Data Proyek
  const projects = [
    {
      title: "Smart City",
      desc: "An interactive web application that displays a 3D visualization of a smart city using Three.js.",
      tech: "HTML, CSS, JavaScript, Three.js",
      image: "../../public/smartcity.png",
      github: "https://github.com/AnandaDly/smart-city",
      website: "https://anandadly.github.io/smart-city/"
    },
    {
      title: "Nauli Aksara",
      desc: "A web-based interactive learning platform for Batak script. ",
      tech: "HTML, CSS, JavaScript, Three.js",
      image: "https://placehold.co/600x400/eae6db/2c2c2c?text=Nauliaksara",
      website: "https://nauliaksara.id/"
    },
    {
      title: "Dedufy",
      desc: "Accelerate with Llama Hackathon Incubation Camp 2025 - An AI agent that functions as a virtual thesis examiner by processing uploaded thesis documents.",
      tech: "LLM, Python, React",
      image: "https://placehold.co/600x400/eae6db/2c2c2c?text=Dedufy",
      github: "https://github.com/AnandaDly/Dedufy",
      website: "https://dedufy.vercel.app/"
    },
    {
      title: "Adventure Flip",
      desc: "AI Partner Catalyst: Accelerate Innovation - An AI-powered storytelling app for children. Uses ElevenLabs and Gemini for interactive narration.",
      tech: "React, Gemini API, ElevenLabs",
      image: "https://placehold.co/600x400/eae6db/2c2c2c?text=Adventure+Flip",
      github: "https://github.com/AnandaDly/Adventure-Flip",
      website: "https://adventure-flip.vercel.app/"
    },
  ];

  // Data Game
  const games = [
    // {
    //   title: "3D Horror Project",
    //   engine: "Unity",
    //   status: "In Development",
    //   note: "Fokus pada terrain texturing dan atmosfer.",
    //   image: "https://placehold.co/600x400/eae6db/2c2c2c?text=Unity+Horror",
    //   website: "https://itch.io/"
    // },
    {
      title: "City Cleaner",
      engine: "Unity",
      status: "Released",
      note: "Indie Game Ignite Game Jam 2024.",
      image: "../../public/city-cleaner.png",
      website: "https://rizkyananda.itch.io/city-cleaner"
    },
    {
      title: "Overstacked",
      engine: "Unity",
      status: "Released",
      note: "Indie Game Ignite Game Jam 2025.",
      image: "../../public/overstacked.png",
      website: "https://rizkyananda.itch.io/overstacked"
    },
    {
      title: "Become A Rich Fashion Designer",
      engine: "Roblox Studio",
      status: "Released [Beta]",
      note: "",
      image: "../../public/roblox.png",
      website: "https://www.roblox.com/games/124753501434403/Become-A-Rich-Fashion-Designer#!/about"
    },
  ];

  return (
    <>
      <Navbar />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 2rem 5rem 2rem' }}>
        
        <RevealSection>
          <header className="hero-section">
            <div className="hero-content">
              
              <div className="profile-wrapper">
                <img 
                  src="../../public/FotoDiri.jpeg" 
                  alt="Rizky" 
                  className="profile-photo"
                />
              </div>

              <div className="hero-text" style={{ textAlign: 'left' }}>
                <h1 className="font-sketch" style={{ fontSize: '3rem', marginBottom: '0', lineHeight: '1' }}>
                  Rizky Ananda Alam Syah Daulay.
                </h1>
                <p className="font-sketch" style={{ fontSize: '1.8rem', opacity: 0.8, margin: '0.5rem 0 1.5rem 0' }}>
                  Software Engineer & Game Creator
                </p>
                
                <p style={{ maxWidth: '500px', lineHeight: '1.7', marginBottom: '2rem' }}>
                  I am a Software Engineering graduate from Politeknik Negeri Medan. Passionate about crafting innovative software solutions and immersive gaming experiences.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start' }}>
                  <a href="https://github.com/AnandaDly" target="_blank" rel="noreferrer" className="sketch-icon">
                    <GithubIcon size={28} />
                  </a>
                  <a href="mailto:emailanda@gmail.com" className="sketch-icon">
                    <MailIcon size={28} />
                  </a>
                </div>
              </div>

            </div>

          </header>
        </RevealSection>

        <RevealSection style={{ marginBottom: '6rem' }}>
          <h2 className="font-sketch" style={{ fontSize: '3rem', borderBottom: '2px solid var(--pencil-color)', marginBottom: '2rem', textAlign: 'center' }}>
            Tech
          </h2>
          
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[1, 2].map((loopIndex) => (
                <React.Fragment key={loopIndex}>
                  <img className="marquee-item" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-LLMs_&_AI-4B32C3?style=flat-square&logo=openai&logoColor=white" alt="LLMs" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-Three.js-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-Unity-000000?style=flat-square&logo=unity&logoColor=white" alt="Unity" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-Roblox_Studio-000000?style=flat-square&logo=roblox&logoColor=white" alt="Roblox Studio" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" />
                  <img className="marquee-item" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection style={{ marginBottom: '4rem' }}>
          <h2 className="font-sketch" style={{ fontSize: '3rem', borderBottom: '2px solid' }}>
            01. Software & AI Projects
          </h2>
          <div className="portfolio-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                {p.image && <img src={p.image} alt={p.title} className="card-img" />}
                <h3 className="font-sketch" style={{ fontSize: '1.8rem', marginTop: 0 }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', minHeight: '60px' }}>{p.desc}</p>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Stack: {p.tech}
                </div>
                <div className="icon-links-container">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="sketch-icon" title="View Source">
                      <GithubIcon />
                    </a>
                  )}
                  {p.website && (
                    <a href={p.website} target="_blank" rel="noreferrer" className="sketch-icon" title="Live Preview">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection style={{ marginBottom: '5rem' }}>
          <h2 className="font-sketch" style={{ fontSize: '3rem', borderBottom: '2px solid', textAlign: 'right' }}>
            02. Game Development
          </h2>
          <div className="portfolio-grid">
            {games.map((g, i) => (
              <div key={i} className="game-card">
                {g.image && <img src={g.image} alt={g.title} className="card-img" />}
                <h3 className="font-sketch" style={{ fontSize: '1.6rem', margin: '0.5rem 0' }}>{g.title}</h3>
                <p style={{ fontSize: '0.85rem', margin: 0 }}><strong>Engine:</strong> {g.engine}</p>
                <p style={{ fontSize: '0.85rem', margin: 0, fontStyle: 'italic', opacity: 0.8 }}>{g.status}</p>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>{g.note}</p>
                <div className="icon-links-container">
                  {g.website && (
                    <a href={g.website} target="_blank" rel="noreferrer" className="sketch-icon" title="Play Game">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection>
        <footer className="sketch-box" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
          <h3 className="font-sketch" style={{ fontSize: '2.5rem', marginTop: 0, marginBottom: '0.5rem', textAlign: 'center' }}>
            Contact
          </h3>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Feel free to reach out for collaborations, questions, or just to say hi! I'm always open to new opportunities and connections.
          </p>

          <div className="contact-grid">
            {/* Tombol Email */}
            <a href="mailto:emailanda@gmail.com" className="contact-btn">
              <MailIcon size={32} />
              <div className="contact-info">
                <span className="contact-title">Email</span>
                <span className="contact-handle">hello@rizky.com</span>
              </div>
            </a>

            {/* Tombol GitHub */}
            <a href="https://github.com/AnandaDly" target="_blank" rel="noreferrer" className="contact-btn">
              <GithubIcon size={32} />
              <div className="contact-info">
                <span className="contact-title">GitHub</span>
                <span className="contact-handle">AnandaDly</span>
              </div>
            </a>

            {/* Tombol LinkedIn */}
            <a href="https://www.linkedin.com/in/rizkyanandadaulay/" target="_blank" rel="noreferrer" className="contact-btn">
              <LinkedinIcon size={32} />
              <div className="contact-info">
                <span className="contact-title">LinkedIn</span>
                <span className="contact-handle">Rizky Ananda Alam Syah Daulay</span>
              </div>
            </a>

            {/* Tombol WhatsApp */}
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="contact-btn">
              <WhatsappIcon size={32} />
              <div className="contact-info">
                <span className="contact-title">WhatsApp</span>
                <span className="contact-handle">+62 812-xxxx-xxxx</span>
              </div>
            </a>
          </div>
        </footer>
        </RevealSection>

      </div>
    </>
  );
};

export default HomeStandard;