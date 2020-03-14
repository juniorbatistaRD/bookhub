import React, { createContext, useState, useEffect } from "react";
import app from "../initFireBase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const change = user => {
    setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(change);

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
