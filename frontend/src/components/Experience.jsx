import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Full-Stack Developer",
            company: "Freelance",
            date: "2025 - Present",
            description: [
                "Designed and developed scalable full-stack applications using React.js, Node.js, and MongoDB.",
                "Built secure backend systems with Express.js and Firebase, focusing on authentication, role-based access control, and real-time data handling.",
                "Worked on performance optimization, structured API design, and clean modular architecture.",
                "Strengthened problem-solving skills by applying Data Structures and Algorithms in real-world application logic."
            ]
        },
        {
            role: "Software Developer",
            company: "Personal Projects",
            date: "2023 - 2025",
            description: [
                "Developed an AI-Powered OS Monitor using Python to analyze CPU, RAM, storage, and process behavior for system performance insights.",
                "Built a grievance redressal platform using HTML, CSS, JavaScript, PHP, and MySQL with secure database integration.",
                "Created a travel planning web application during a 24-hour hackathon integrating Maps API, JSON handling, and responsive UI design.",
                "Gained strong foundations in Java, C++, DBMS, Operating Systems, and Computer Networks through academic and practical implementation."
            ]
        }
    ];

    return (
        <SectionWrapper id="experience">
            <h2 className="section-title" style={{ textAlign: 'center' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '2rem', marginRight: '1rem' }}>04.</span>
                My Journey
            </h2>

            <div style={{ maxWidth: '800px', margin: '4rem auto 0', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    backgroundColor: 'var(--bg-tertiary)',
                    transform: 'translateX(15px)' // Center under the dots
                }} className="timeline-line"></div>

                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        style={{
                            position: 'relative',
                            paddingLeft: '3rem',
                            marginBottom: idx === experiences.length - 1 ? '0' : '4rem'
                        }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                        {/* Timeline Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            top: '5px',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-primary)',
                            border: '4px solid var(--bg-primary)',
                            boxSizing: 'content-box',
                            zIndex: 1,
                            transform: 'translateX(10px)'
                        }}></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '600' }}>
                                {exp.role} <span style={{ color: 'var(--accent-primary)' }}>@ {exp.company}</span>
                            </h3>
                            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                                {exp.date}
                            </span>
                        </div>

                        <ul style={{
                            listStyle: 'none',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            {exp.description.map((desc, dIdx) => (
                                <li key={dIdx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <span style={{ color: 'var(--accent-primary)', marginTop: '5px' }}>▹</span>
                                    <span style={{ lineHeight: '1.6' }}>{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
