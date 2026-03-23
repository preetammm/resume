import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Award } from 'lucide-react';

import cert1 from '../assets/Screenshot 2026-03-23 113541.png';
import cert2 from '../assets/Screenshot 2026-03-23 113841.png';
import cert3 from '../assets/Screenshot 2026-03-23 113650.png';
import cert4 from '../assets/Screenshot 2026-03-23 113808.png';
import cert5 from '../assets/Screenshot 2026-03-23 113609.png';

const Certifications = () => {
    const certs = [
        {
            title: "Build Generative AI Apps and Solutions with No-Code Tools",
            issuer: "Infosys Springboard",
            date: "August 2025",
            description: "Mastered building and deploying Generative AI solutions using modern no-code platforms.",
            image: cert2
        },
        {
            title: "ChatGPT-4 Prompt Engineering: Generative AI & LLM",
            issuer: "Infosys Springboard",
            date: "August 2025",
            description: "Developed advanced prompt engineering skills to effectively leverage LLMs in real-world scenarios.",
            image: cert4
        },
        {
            title: "ChatGPT Made Easy: AI Essentials for Beginners",
            issuer: "Udemy",
            date: "August 2025",
            description: "Gained foundational knowledge of AI tools and learned practical use cases for ChatGPT.",
            image: cert3
        },
        {
            title: "Data Structure and Algorithm using Java Programming",
            issuer: "CipherSchools",
            date: "July 2025",
            description: "Strengthened problem-solving abilities by mastering core data structures and algorithms in Java.",
            image: cert5
        },
        {
            title: "Git and Github",
            issuer: "CipherSchools",
            date: "July 2025",
            description: "Acquired hands-on experience in version control, repository management, and collaborative development.",
            image: cert1
        }
    ];

    return (
        <SectionWrapper id="certifications">
            <h2 className="section-title">
                <span style={{ color: 'var(--text-primary)', fontSize: '2rem', marginRight: '1rem' }}>
                    <Award style={{ display: 'inline', marginBottom: '-5px' }} />
                </span>
                Certifications
            </h2>

            <div style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                paddingBottom: '2rem',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--accent-primary) var(--bg-tertiary)'
            }}>
                {certs.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        style={{
                            flex: '0 0 auto',
                            width: '320px',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px -15px var(--bg-primary)',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid var(--bg-tertiary)',
                            cursor: 'pointer'
                        }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div style={{
                            height: '200px',
                            width: '100%',
                            backgroundColor: 'var(--bg-tertiary)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={cert.image}
                                alt={cert.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerHTML += '<div style="display:flex; height:100%; align-items:center; justify-content:center; color: var(--text-tertiary); font-family: var(--font-mono)">[Certificate Image]</div>';
                                }}
                            />
                        </div>

                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <h3 style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    lineHeight: '1.3'
                                }}>
                                    {cert.title}
                                </h3>
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                                    {cert.description}
                                </p>
                                <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                                    {cert.issuer}
                                </p>
                                <p style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                                    {cert.date}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
