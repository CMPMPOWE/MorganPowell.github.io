import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        // Check if dark mode preference exists in localStorage
        const savedMode = localStorage.getItem('theme');
        return savedMode === 'dark';
    });

    useEffect(() => {
        // Apply the dark mode class to the body element based on the state
        if (darkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="toggle-btn bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
