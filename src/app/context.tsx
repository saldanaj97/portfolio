"use client";

import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({
  user: "",
  setUser: (user: string) => {
    console.error("UserContext setUser not implemented");
  },
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
