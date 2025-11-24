"use client";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const[details,setdetails]=useState([]);
  function handlegooglesignin() {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const authInfo = { user, loading, 
    setUser, setLoading, 
    handlegooglesignin,
  details,setdetails
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
