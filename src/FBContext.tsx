import React, { createContext, useState, useContext } from "react";

// Create the context
const FABContext = createContext(null as any);

// Create a provider component
export const FABProvider = ({ children }: any) => {
  const [fabVisible, setFabVisible] = useState(true);

  return (
    <FABContext.Provider value={{ fabVisible, setFabVisible }}>
      {children}
    </FABContext.Provider>
  );
};

// Custom hook to use the FAB context
export const useFAB = () => useContext(FABContext);
