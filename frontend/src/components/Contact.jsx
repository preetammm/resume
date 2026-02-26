import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Mail, Linkedin, Github, FileText, Send } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        try {
            // Assuming backend is running on same port in prod, or 5000 in dev
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            await axios.post(`${apiUrl}/api/contact`, formData);
            setStatus({ submitting: false, success: true, error: null });
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({
                submitting: false,
                success: false,
                error: error.response?.data?.error || 'Something went wrong. Please try again later.'
            });
        }
    };

    return (
        <SectionWrapper id="contact" className="contact-section">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '2rem', marginRight: '1rem' }}>05.</span>
                Get In Touch
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                {/* Contact Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Feel free to reach out to me directly or connect with me on social media. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <a href="mailto:preetamp765@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <Mail size={24} style={{ color: 'var(--accent-primary)' }} />
                            <span>preetamp765@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/preetamprajapati" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <Linkedin size={24} style={{ color: 'var(--accent-primary)' }} />
                            <span>LinkedIn Profile</span>
                        </a>
                        <a href="https://github.com/preetammm" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <Github size={24} style={{ color: 'var(--accent-primary)' }} />
                            <span>GitHub Profile</span>
                        </a>
                        <a href="https://drive.google.com/file/d/1AXQVNPIlipFU0rOYrjgSQjcoNulIHg9C/view?usp=sharing" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                            <FileText size={24} style={{ color: 'var(--accent-primary)' }} />
                            <span>View Resume</span>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--bg-tertiary)' }}>
                    <div>
                        <label htmlFor="name" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--bg-tertiary)', borderRadius: '4px', color: 'var(--text-primary)', transition: 'border-color 0.3s ease', outline: 'none' }}
                            onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                            onBlur={e => e.target.style.borderColor = 'var(--bg-tertiary)'}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--bg-tertiary)', borderRadius: '4px', color: 'var(--text-primary)', transition: 'border-color 0.3s ease', outline: 'none' }}
                            onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                            onBlur={e => e.target.style.borderColor = 'var(--bg-tertiary)'}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--bg-tertiary)', borderRadius: '4px', color: 'var(--text-primary)', transition: 'border-color 0.3s ease', outline: 'none', resize: 'vertical' }}
                            onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                            onBlur={e => e.target.style.borderColor = 'var(--bg-tertiary)'}
                        ></textarea>
                    </div>

                    <button type="submit" disabled={status.submitting} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', width: '100%', opacity: status.submitting ? 0.7 : 1 }}>
                        {status.submitting ? 'Sending...' : 'Send Message'}
                        {!status.submitting && <Send size={18} />}
                    </button>

                    {status.success && <p style={{ color: '#10b981', fontSize: '0.9rem', textAlign: 'center' }}>Message sent successfully!</p>}
                    {status.error && <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', textAlign: 'center' }}>{status.error}</p>}
                </form>

            </div>
        </SectionWrapper>
    );
};

export default Contact;
