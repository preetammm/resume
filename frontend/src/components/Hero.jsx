import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import AnimatedText from './AnimatedText';
import myPhoto from '../assets/Whisk_6e26785ec09323d8e5f4b54823b469eceg.png';

const Hero = () => {
    return (
        <SectionWrapper id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                gap: '4rem',
                flexWrap: 'wrap-reverse'
            }}>
                <div style={{ flex: '1 1 500px', maxWidth: '800px' }}>
                    <motion.p
                        className="mono-text"
                        style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', display: 'block' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: '900', color: 'var(--text-primary)', lineHeight: '1.1', marginBottom: '1rem', letterSpacing: '-0em' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Preetam Prajapati.
                    </motion.h1>

                    <motion.h2
                        className="hero-subtitle"
                        style={{ fontSize: 'clamp(30px, 6vw, 60px)', fontWeight: '800', color: 'var(--text-secondary)', lineHeight: '1.1', marginBottom: '2rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        I build scalable web applications.
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '3rem', lineHeight: '1.6' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        I'm a <AnimatedText text="DEVELOPER" /> specializing in building exceptional digital experiences using the MERN stack. Currently, I'm focused on building accessible, human-centered, and placement-ready backend architectures.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            Check out my work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <a href="https://github.com/preetammm" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'} aria-label="Github"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/preetamprajapati" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'} aria-label="LinkedIn"><Linkedin size={24} /></a>
                        <a href="mailto:preetamp765@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'} aria-label="Email"><Mail size={24} /></a>
                        <a href="https://drive.google.com/file/d/1AXQVNPIlipFU0rOYrjgSQjcoNulIHg9C/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'} aria-label="Resume"><FileText size={24} /></a>
                    </motion.div>
                </div>

                <motion.div
                    style={{ flex: '1 1 300px', display: 'flex', justifySelf: 'center', alignItems: 'center', width: '100%', maxWidth: '400px' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            background: 'var(--accent-primary)',
                            padding: '8px',
                            boxShadow: '0 0 40px rgba(239, 68, 68, 0.3)',
                            position: 'relative'
                        }}
                        animate={{
                            borderRadius: [
                                '30% 70% 70% 30% / 30% 30% 70% 70%',
                                '50% 50% 20% 80% / 25% 80% 20% 75%',
                                '70% 30% 50% 50% / 70% 30% 70% 30%',
                                '30% 70% 70% 30% / 30% 30% 70% 70%'
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <img
                            src={myPhoto}
                            alt="Preetam Prajapati"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'inherit',
                                pointerEvents: 'none'
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
