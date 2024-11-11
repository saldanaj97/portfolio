"use client";

import { createContext, ReactNode, useState } from "react";

// TODO - Replace all instances and uses of auth with user context
export const UserContext = createContext({
  user: "",
  setUser: (user: string) => {
    // console.log(user);
    console.log("UserContext setUser not implemented");
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
