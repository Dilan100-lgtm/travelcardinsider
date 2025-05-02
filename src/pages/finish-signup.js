// pages/finish-signup.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";
import { signInWithEmailLink } from "firebase/auth";

export default function FinishSignup() {
  const router = useRouter();
  const [status, setStatus] = useState("Verifying link…");

  useEffect(() => {
    const completeLogin = async () => {
      const storedEmail = window.localStorage.getItem("emailForSignIn");
      if (!storedEmail) {
        setStatus("Missing e-mail. Please restart sign-in.");
        return;
      }

      try {
        await signInWithEmailLink(auth, storedEmail, window.location.href);
        window.localStorage.removeItem("emailForSignIn");

        // Redirect back to the requested page or home
        const destination = router.query.redirectTo || "/";
        router.replace(destination);
      } catch (err) {
        console.error(err);
        setStatus("Link invalid or expired. Please request a new one.");
      }
    };

    completeLogin();
  }, [router]);

  return (
    <main style={{ display:"flex",justifyContent:"center",alignItems:"center",height:"100vh" }}>
      <p>{status}</p>
    </main>
  );
}
