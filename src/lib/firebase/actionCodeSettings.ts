// lib/firebase/actionCodeSettings.ts
import { ActionCodeSettings } from 'firebase/auth';

/**
 * Configuration settings for Firebase email action links (e.g., sign-in).
 * Ensure the URL matches your deployment and the dynamic link domain is configured
 * in your Firebase project if you intend to use Firebase Dynamic Links for better
 * cross-platform handling. Otherwise, adjust the URL as needed.
 */
export default function getActionCodeSettings(): ActionCodeSettings {
  const callbackUrl =
    process.env.NEXT_PUBLIC_FIREBASE_CALLBACK_URL ||
    'http://localhost:3000/auth/callback';

  return {
    url: callbackUrl,
    handleCodeInApp: true,
    // Uncomment the next line only if you set up Dynamic Links in Firebase:
    // dynamicLinkDomain: process.env.NEXT_PUBLIC_FIREBASE_DYNAMIC_LINK_DOMAIN || 'travelcardinsider.page.link'
  };
}


/*
 * Usage Example in pages/subscribe.tsx:
 *
 * import getActionCodeSettings from '../lib/firebase/actionCodeSettings';
 *
 * const actionCodeSettings = getActionCodeSettings();
 * await sendSignInLinkToEmail(auth, email, actionCodeSettings);
 *
 */