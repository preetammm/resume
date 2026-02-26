import React from 'react';
import SectionWrapper from './SectionWrapper';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", level: 90 },
                { name: "JavaScript (ES6+)", level: 95 },
                { name: "HTML5", level: 95 },
                { name: "CSS3 / Styling", level: 85 }
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "REST APIs", level: 90 }
            ]
        }
    ];

    return (
        <SectionWrapper id="skills">
            <h2 className="section-title">
                <span style={{ color: 'var(--text-primary)', fontSize: '2rem', marginRight: '1rem' }}>02.</span>
                Technical Arsenal
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
                {skillCategories.map((category, idx) => (
                    <div key={idx} style={{
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '8px',
                        border: '1px solid var(--bg-tertiary)',
                        transition: 'transform 0.3s ease',
                        cursor: 'default'
                    }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{
                            color: 'var(--text-primary)',
                            fontSize: '1.5rem',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>▹</span>
                            {category.title}
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{skill.name}</span>
                                        <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{skill.level}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '2px', overflow: 'hidden' }}>
                                        <div style={{
                                            width: `${skill.level}%`,
                                            height: '100%',
                                            backgroundColor: 'var(--accent-primary)',
                                            borderRadius: '2px',
                                            transition: 'width 1s ease-in-out'
                                        }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
