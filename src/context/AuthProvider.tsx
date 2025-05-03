// context/AuthProvider.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Adjust path to your Firebase init file

// Define the shape of the context data
interface AuthContextType {
  user: User | null; // Firebase User object or null
  loading: boolean; // Added loading state
  logout: () => Promise<void>;
}

// Create the context with a default value (can be undefined or null)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Track initial auth state loading

  useEffect(() => {
    // Subscribe to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Auth state resolved
      console.log('Auth State Changed:', currentUser?.email || 'Logged out');
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Logout function
  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null); // Explicitly set user to null on logout
      console.log('User signed out successfully.');
    } catch (error) {
      console.error('Error signing out:', error);
      // Optionally handle logout errors (e.g., show a notification)
    }
  };

  // Value provided by the context
  const value: AuthContextType = {
    user,
    loading, // Expose loading state
    logout,
  };

  // Provide the context value to children
  // Don't render children until auth state is resolved to avoid flicker
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the Auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};