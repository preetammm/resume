import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import AnimatedText from './AnimatedText';
import myPhoto from '../assets/Whisk_602457660eb9720a90746eadbde55ba6eg.png';

const Hero = () => {
    const techStack = [
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
        "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
        "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
        "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
        "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
        "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
        "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/apache-%23D22128.svg?style=for-the-badge&logo=apache&logoColor=white",
        "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
        "https://img.shields.io/badge/Adobe%20After%20Effects-%239999FF.svg?style=for-the-badge&logo=Adobe%20After%20Effects&logoColor=white",
        "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
        "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
        "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
        "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
    ];

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
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
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
                        className="hero-tech-stack"
                        style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '600px' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <div style={{ width: '100%', marginBottom: '0.5rem', fontSize: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                            Tech Stack:
                        </div>
                        {techStack.map((badge, idx) => (
                            <img key={idx} src={badge} alt="Tech Badge" style={{ height: '24px', borderRadius: '4px' }} />
                        ))}
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
