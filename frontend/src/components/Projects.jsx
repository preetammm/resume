import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
    const projects = [
        {
            title: "Interactive Chicken Ordering Platform",
            description: "A fully functional, highly interactive chicken ordering website built without external component libraries. Features extensive custom CSS animations, a dynamic cart system, and responsive mobile-first design.",
            tech: ["Node.js", "React.js", "Firebase"],
            github: "https://github.com/preetammm/CHICKEN-.git",
            live: "#",
            image: "/chicken-project.png"
        }
    ];

    return (
        <SectionWrapper id="projects">
            <h2 className="section-title">
                <span style={{ color: 'var(--text-primary)', fontSize: '2rem', marginRight: '1rem' }}>03.</span>
                Some Things I've Built
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '2rem' }}>
                {projects.map((project, idx) => (
                    <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        alignItems: 'center',
                        gap: '20px'
                    }} className="project-row">

                        {/* Project Image - Alternating sides based on odd/even */}
                        <div style={{
                            gridColumn: idx % 2 === 0 ? '1 / 8' : '6 / -1',
                            gridRow: '1',
                            position: 'relative',
                            zIndex: '1',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px -15px var(--bg-primary)',
                            aspectRatio: '16/9',
                            backgroundColor: 'var(--accent-primary)',
                            cursor: 'pointer'
                        }} className="project-image-container"
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}

                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'var(--accent-primary)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-tertiary)',
                                fontFamily: 'var(--font-mono)'
                            }} className="project-image-tint"
                            >
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            mixBlendMode: 'multiply',
                                            filter: 'grayscale(100%) contrast(1) brightness(90%)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.mixBlendMode = 'normal'; }}
                                        onMouseOut={e => { e.currentTarget.style.filter = 'grayscale(100%) contrast(1) brightness(90%)'; e.currentTarget.style.mixBlendMode = 'multiply'; }}
                                    />
                                ) : (
                                    "[Project Screenshot]"
                                )}
                            </div>
                        </div>

                        {/* Project Content */}
                        <div style={{
                            gridColumn: idx % 2 === 0 ? '7 / -1' : '1 / 7',
                            gridRow: '1',
                            position: 'relative',
                            zIndex: '2',
                            textAlign: idx % 2 === 0 ? 'right' : 'left'
                        }} className="project-content">
                            <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Featured Project</p>
                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem' }}>{project.title}</h3>

                            <div style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                color: 'var(--text-secondary)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6',
                                boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)',
                                marginBottom: '1.5rem',
                                border: '1px solid var(--bg-tertiary)'
                            }}>
                                <p>{project.description}</p>
                            </div>

                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                listStyle: 'none',
                                color: 'var(--text-tertiary)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.9rem',
                                justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
                                marginBottom: '1.5rem'
                            }}>
                                {project.tech.map((tech, tIdx) => (
                                    <li key={tIdx}>{tech}</li>
                                ))}
                            </ul>

                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                                justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start'
                            }}>
                                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
                                    <Github size={22} />
                                </a>
                                <a href={project.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
                                    <ExternalLink size={22} />
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Mobile-focused responsive adjustments handled in global CSS where needed */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 768px) {
          .project-row {
            display: flex !important;
            flex-direction: column !important;
          }
          .project-image-container {
            width: 100% !important;
            opacity: 0.2 !important;
            position: absolute !important;
            height: 100% !important;
          }
          .project-content {
            padding: 2rem 1.5rem !important;
            text-align: left !important;
          }
          .project-content ul, .project-content div:last-child {
            justify-content: flex-start !important;
          }
          .project-content > div:nth-child(3) {
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            border: none !important;
          }
        }
      `}} />
        </SectionWrapper>
    );
};

export default Projects;
