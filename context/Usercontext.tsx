"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import type { SafeUser } from "@/actions/user.action";

interface UserContextType {
  user: SafeUser | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<SafeUser | null>>;
}

interface ProfileResponse {
  user: SafeUser;
}


const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<SafeUser | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadSession = async () => {
      try {
        const res = await axios.get<ProfileResponse>(
          "/api/user/profile",
          { withCredentials: true }
        );
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
  
    loadSession();
  }, []);
  

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
