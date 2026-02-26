import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 2rem',
                    zIndex: 50,
                    background: isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
                    transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease'
                }}
            >
                <a href="#home" style={{
                    color: 'var(--accent-primary)',
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    textDecoration: 'none',
                    letterSpacing: '-1px'
                }}>
                    PP.
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'none' }} className="desktop-nav">
                    <ol style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.href}
                                    style={{
                                        color: 'var(--text-primary)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontFamily: 'var(--font-mono)',
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                                    onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
                                >
                                    <span style={{ color: 'var(--accent-primary)', marginRight: '5px' }}>0{i + 1}.</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ol>
                    <a href="https://drive.google.com/file/d/1AXQVNPIlipFU0rOYrjgSQjcoNulIHg9C/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginLeft: '2rem', padding: '0.5rem 1rem' }}>Resume</a>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="mobile-nav-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', zIndex: 60 }}
                >
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: 'min(75vw, 400px)',
                            background: 'var(--bg-secondary)',
                            zIndex: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '-10px 0px 30px -15px rgba(2,12,27,0.7)'
                        }}
                    >
                        <ol style={{ display: 'flex', flexDirection: 'column', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        style={{
                                            color: 'var(--text-primary)',
                                            textDecoration: 'none',
                                            fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
                                            fontFamily: 'var(--font-mono)',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span style={{ color: 'var(--accent-primary)', marginBottom: '5px', fontSize: '0.9rem' }}>0{i + 1}.</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ol>
                        <a href="https://drive.google.com/file/d/1AXQVNPIlipFU0rOYrjgSQjcoNulIHg9C/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: '3rem', width: 'max-content' }}>Resume</a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CSS for Media Queries to hide/show desktop/mobile nav */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}} />
        </>
    );
};

export default Navbar;
