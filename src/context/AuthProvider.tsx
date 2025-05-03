// context/AuthProvider.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Adjust path if needed

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  console.log('AuthProvider Rendering - Loading:', loading, 'User:', user?.email); // <-- Log on every render

  useEffect(() => {
    console.log('AuthProvider useEffect Mounting...'); // <-- Log when effect runs
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('onAuthStateChanged triggered - User:', currentUser?.email); // <-- Log when auth state changes
      setUser(currentUser);
      setLoading(false); // <-- This MUST be called
      console.log('AuthProvider - Setting loading to false'); // <-- Log before setting loading false
    }, (error) => { // Add error handling for the listener itself
        console.error('onAuthStateChanged Error:', error);
        setLoading(false); // Also set loading false on error to prevent lockup
    });

    return () => {
        console.log('AuthProvider useEffect Cleaning up...'); // <-- Log on unmount
        unsubscribe();
    };
  }, []);

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
      console.log('User signed out successfully.');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value: AuthContextType = { user, loading, logout };

  // Conditional Rendering Logic
  if (loading) {
    console.log('AuthProvider RETURN - Still loading, rendering null (or a loader)');
    // Optionally return a loading spinner/skeleton here instead of null
    return null; // Or return <YourGlobalLoader />;
  }

  console.log('AuthProvider RETURN - Loading false, rendering children');
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};