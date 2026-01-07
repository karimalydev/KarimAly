'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-background-light border border-border transition-colors duration-300 shadow-lg"
                aria-label="Toggle theme"
                disabled
            >
                <Sun size={20} className="text-foreground opacity-50" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-background-light border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-lg"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-foreground" />
            ) : (
                <Moon size={20} className="text-foreground" />
            )}
        </button>
    );
};

export default ThemeToggle;

