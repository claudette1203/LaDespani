import React, { createContext, useState, useContext, ReactNode } from 'react';

type LanguageContextType = {
    language: "EN" | "RO";
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<"EN" | "RO">('EN');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'RO' : 'EN'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
