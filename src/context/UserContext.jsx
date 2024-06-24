'use client'

import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Provider component
const MyContextProvider = ({ children }) => {
    const [currTab, setCurrTab] = useState('about');
    const [theme, setTheme] = useState('dark');
    const AllTabs = ['About','Education','Projects','Blogs','Contact' ]
 
    return (
        <MyContext.Provider value={{ currTab, setCurrTab ,AllTabs,theme, setTheme}}>
            {children}
        </MyContext.Provider>
    );
};

// Custom hook to consume the context
const useMyContext = () => useContext(MyContext);

export { MyContextProvider, useMyContext };
