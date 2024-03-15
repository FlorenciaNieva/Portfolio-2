import React, { createContext, useState, useContext } from 'react';

const LanguagesContext = createContext();

export const useLanguage = () => useContext(LanguagesContext);

export const LanguagesContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <LanguagesContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguagesContext.Provider>
  );
};
