import React, { createContext, useContext, useEffect, useState } from 'react';  

interface ThemeContextType {  
    isDarkMode: boolean;  
    toggleTheme: () => void;  
}  

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);  

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {  
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);  

    useEffect(() => {  
        const mediaQuery: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");  
        setIsDarkMode(mediaQuery.matches);  

        const handleChange = (event: MediaQueryListEvent) => {  
            setIsDarkMode(event.matches);  
        };  

        mediaQuery.addEventListener("change", handleChange);  
        
        return () => {  
            mediaQuery.removeEventListener("change", handleChange);  
        };  
    }, []);  

    const toggleTheme = () => {  
        setIsDarkMode(prev => !prev);  
    };  

    return (  
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>  
            {children}  
        </ThemeContext.Provider>  
    );  
};  

export const useTheme = () => {  
    const context = useContext(ThemeContext);  
    if (!context) {  
        throw new Error('useTheme must be used within a ThemeProvider');  
    }  
    return context;  
};