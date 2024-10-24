"use client";

import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({
  user: "",
  setUser: (user: string) => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
