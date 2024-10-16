import { useState, useEffect, useCallback } from 'react';

export const useNavbar = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const togglePanel = useCallback(() => setIsPanelOpen((prev) => !prev), []);

    useEffect(() => {
        const handleScroll = () => {
            if (isPanelOpen) {
                togglePanel();
            }
        };

        const handleClickOutside = (event) => {
            const navbarPanel = document.getElementById('navbar-panel');
            const hamburger = document.getElementById('hamburger');
            const cross = document.getElementById('cross');

            if (isPanelOpen && navbarPanel && !navbarPanel.contains(event.target) && event.target !== hamburger && event.target !== cross) {
                togglePanel();
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isPanelOpen, togglePanel]);

    return { isPanelOpen, togglePanel };
};
