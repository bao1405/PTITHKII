
import React, { createContext } from 'react';

const ThemeContext = React.createContext<string|any>({
    theme: null, 
    toggleTheme: () => {}, 
  });
export default ThemeContext;
