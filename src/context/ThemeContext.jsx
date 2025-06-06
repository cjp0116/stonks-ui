'use client';
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        applyTheme()
    }, []);

    const applyTheme = (newTheme) => {
        const root = document.documentElement;
        const body = document.body;

        if (newTheme === 'dark') {
            root.classList.add('dark');
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    };

    const toggleTheme = () => {
        if (!mounted) return;
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme)
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
            { children }   
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme not inside a theme provider')
    }
    return context;
}