// File: /components/RequireAuth.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase"; // Adjust if your firebase file is in /utils or elsewhere

export default function RequireAuth({ children }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        router.push("/login"); // Or your preferred redirect
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [router]);

  if (!authChecked) {
    return <p>Loading authentication...</p>; // Or a spinner
  }

  return <>{children}</>;
}
