import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText = ({ text, style = {}, className = "" }) => {
    const [displayedText, setDisplayedText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isHovering) {
            let iteration = 0;
            interval = setInterval(() => {
                setDisplayedText(prev =>
                    prev
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return letters[Math.floor(Math.random() * 26)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        } else {
            setDisplayedText(text);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isHovering, text]);

    return (
        <motion.span
            className={className}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            style={{
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                display: 'inline-block',
                cursor: 'pointer',
                ...style
            }}
        >
            {displayedText}
        </motion.span>
    );
};

export default AnimatedText;
