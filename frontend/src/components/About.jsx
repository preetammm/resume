import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedText from './AnimatedText';

const About = () => {
    return (
        <SectionWrapper id="about">
            <h2 className="section-title">
                <span style={{ color: 'var(--text-primary)', fontSize: '2rem', marginRight: '1rem' }}>01.</span>
                About Me
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                        I started my development journey by building frontend interfaces using HTML, CSS, and JavaScript, focusing on <span className="highlight" style={{ color: 'var(--accent-primary)' }}>responsive and user-friendly design</span>. As my interest grew, I moved into backend development using Node.js and database systems like MongoDB and MySQL, learning how scalable systems are structured.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                        Over time, I worked on full-stack applications involving authentication systems, API development, and real-time database integration. I also explored system-level programming through a <span className="highlight" style={{ color: 'var(--text-primary)' }}>Python-based OS monitoring tool</span>, which deepened my understanding of Operating Systems and resource management.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                        Currently, I focus on writing structured, efficient code, strengthening my Data Structures and Algorithms foundation, and building scalable backend systems using modern technologies.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    position: 'relative',
                    padding: '4rem 0'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '80%',
                        border: '1px solid var(--bg-tertiary)',
                        borderRadius: '4px',
                        zIndex: 0,
                        opacity: 0.5,
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '40%',
                        left: '45%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: '4px',
                        zIndex: 0,
                        opacity: 0.1,
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{ zIndex: 1, textAlign: 'center' }}>
                        <AnimatedText
                            text="DEVELOPER"
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '900',
                                letterSpacing: '0.15em',
                                color: 'transparent',
                                WebkitTextStroke: '2px var(--accent-primary)',
                                textShadow: '4px 4px 0px rgba(239, 68, 68, 0.2)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
