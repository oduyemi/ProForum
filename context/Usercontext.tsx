/* eslint-disable */
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import type { SafeUser } from "@/actions/user.action";


interface ProfileResponse {
  user: SafeUser;
}

interface UserContextType {
  user: SafeUser | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<SafeUser | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SafeUser | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setLoading(false);
      return;
    }

    if (user) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
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

    fetchProfile(); 
  }, [pathname, user]);

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
