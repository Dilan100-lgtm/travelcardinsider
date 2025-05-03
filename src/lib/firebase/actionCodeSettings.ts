// lib/firebase/actionCodeSettings.ts
import { ActionCodeSettings } from 'firebase/auth';

/**
 * Configuration settings for Firebase email action links (e.g., sign-in).
 * Ensure the URL matches your deployment and the dynamic link domain is configured
 * in your Firebase project if you intend to use Firebase Dynamic Links for better
 * cross-platform handling. Otherwise, adjust the URL as needed.
 */
export default function getActionCodeSettings(): ActionCodeSettings {
  // Use environment variables for URLs to easily switch between dev and prod
  const callbackUrl = process.env.NEXT_PUBLIC_FIREBASE_CALLBACK_URL || 'https://www.travelcardinsider.com/auth/callback';
  const dynamicLinkDomain = process.env.NEXT_PUBLIC_FIREBASE_DYNAMIC_LINK_DOMAIN || 'www.travelcardinsider.com'; // Replace with your domain if using

  return {
    // URL must be whitelisted in the Firebase Console > Authentication > Settings > Authorized domains
    url: callbackUrl, // Your production or local callback URL

    // This must be true.
    handleCodeInApp: true,

    // Optional: iOS bundle ID and Android package name if using mobile apps.
    // iOS: { bundleId: 'com.example.ios' },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },

    // Optional: Firebase Dynamic Link domain for shorter/more robust links.
    // Requires setting up Dynamic Links in Firebase console. Comment out if not using.
    dynamicLinkDomain: dynamicLinkDomain
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