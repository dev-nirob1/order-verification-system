"use client";
import { createContext, useState } from "react";

export const DrawerContext = createContext(null);

export function DrawerProvider({ children }) {
  const [drawer, setDrawer] = useState({ type: null, data: null });

  const openDrawer = (type, data = null) => {
    setDrawer({ type, data });
  };

  const closeDrawer = () => {
    setDrawer({ type: null, data: null });
  };

  return (
    <DrawerContext.Provider value={{ drawer, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}