'use client';

import React, { ReactNode, createContext, useEffect, useState } from "react";


const defaultContext = {
    mode: "light",
    changeMode: (mode: "light" | "dark") => {},
}

const ThemeContext = createContext(defaultContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            const localTheme = localStorage.getItem('theme');

            if (localTheme) return localTheme;

            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return "dark";
            }
        }
        
        return 'light';
    });

    const changeMode = (mode: string) => {
        setMode(mode);
        localStorage.setItem('theme', mode);
    }

    return <ThemeContext.Provider value={{ mode, changeMode }}>{children}</ThemeContext.Provider>
}

const ThemeWrapper = ({ children }: { children: ReactNode }) => <ThemeProvider>{children}</ThemeProvider>

const useTheme = () => React.useContext(ThemeContext)

export { useTheme, ThemeWrapper };
