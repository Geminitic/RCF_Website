import React, { createContext, useContext, useState, ReactNode } from 'react';
/* eslint-disable react-refresh/only-export-components */

interface UserContextType {
  isAdmin: boolean;
  setIsAdmin: (_value: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <UserContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </UserContext.Provider>
  );
};
