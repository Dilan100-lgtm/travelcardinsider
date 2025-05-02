// pages/finish-signup.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "@/lib/firebase"; // Added db import
import { signInWithEmailLink } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; // Added Firestore imports

export default function FinishSignup() {
  const router = useRouter();
  const [status, setStatus] = useState("Verifying link…");

  useEffect(() => {
    const completeLogin = async () => {
      const storedEmail = window.localStorage.getItem("emailForSignIn");
      if (!storedEmail) {
        setStatus("Missing e-mail. Please restart sign-in.");
        // Consider redirecting to login page or showing an error message
        return;
      }

      // Check if the link is intended for this app BEFORE signing in
      if (!auth || typeof auth.isSignInWithEmailLink !== 'function' || !auth.isSignInWithEmailLink(window.location.href)) {
         setStatus("Invalid link. Please request a new one.");
         // Optional: Clean up local storage if you are sure the link is invalid
         // window.localStorage.removeItem("emailForSignIn");
         return;
      }


      setStatus("Authenticating..."); // Update status
      try {
        // Sign in the user with the email link
        await signInWithEmailLink(auth, storedEmail, window.location.href);
        window.localStorage.removeItem("emailForSignIn"); // Clean up storage

        setStatus("Authentication successful. Saving user data..."); // Update status

        // --- ADDED FIRESTORE WRITE ---
        // Check if user is authenticated before writing to Firestore
        if (auth.currentUser) {
          try {
            // Use UID as the document ID for robustness
            const userRef = doc(db, 'users', auth.currentUser.uid);
            await setDoc(userRef, {
              email: auth.currentUser.email, // Use the authenticated user's email
              lastLoginAt: serverTimestamp(),
              // Set createdAt only if creating, or handle potential updates differently
              // Merge:true handles both create and update gracefully for lastLoginAt
            }, { merge: true }); // merge:true ensures we update lastLoginAt on subsequent logins

            setStatus("Sign-in successful! Redirecting..."); // Final success status
          } catch (dbError) {
              console.error("Error writing user data to Firestore:", dbError);
              // User is signed in, but DB write failed. Still redirect?
              setStatus("Sign-in complete, but failed to save user data. Redirecting...");
              // Decide if you want to block redirect on DB error or proceed. Proceeding here.
          }
        } else {
           // This case should ideally not happen if signInWithEmailLink succeeded without error
           console.error("User object not available after successful signInWithEmailLink.");
           setStatus("Authentication issue occurred after sign-in. Cannot save data.");
           // Decide recovery strategy: redirect to login, show error, etc.
           return; // Stop execution before redirect if critical
        }
        // --- END ADDED FIRESTORE WRITE ---


        // Redirect back to the originally requested page or home
        const destination = router.query.redirectTo || "/";
        router.replace(destination); // Use replace to avoid back button going to finish-signup

      } catch (err) {
        console.error("Sign-in error:", err);
        setStatus(`Link processing failed: ${err.message}. Please request a new link.`);
        // Clean up storage on error as well
        window.localStorage.removeItem("emailForSignIn");
      }
    };

    completeLogin();
    // Ensure useEffect dependencies are correct. Router is needed.
    // auth and db might be added if they could change, but likely stable.
  }, [router]);

  // Basic loading/status indicator page
  return (
    <main style={{ display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", height:"100vh", padding: "20px", textAlign: "center" }}>
      <h1>Finishing Sign In</h1>
      <p style={{ marginTop: "10px", fontSize: "1.1em" }}>{status}</p>
      {/* Optional: Add a spinner or more visual feedback */}
    </main>
  );
}