"use client";

import { createContext, useContext } from "react";

export const AncestorContext = createContext(null);
export const AncestorProvider = ({ children }) => {
  const ancestor = "Knife";

  return (
    <AncestorContext.Provider value={{ ancestor }}>
      {children}
    </AncestorContext.Provider>
  );
};

export const useAncestor = () => {
  const ancestor = useContext(AncestorContext);
  return ancestor;
};
