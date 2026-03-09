import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

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
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        whileHover={{ scale: 1.02, y: -5, boxShadow: '0 10px 30px -15px var(--accent-primary)' }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid var(--bg-tertiary)',
                            cursor: 'default'
                        }}
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
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                                            style={{
                                                height: '100%',
                                                backgroundColor: 'var(--accent-primary)',
                                                borderRadius: '2px'
                                            }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
