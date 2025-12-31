/* eslint-disable */
import axios from 'axios';
import { SafeUser } from './user.action';

interface LoginResponse {
  user: SafeUser;
}

export async function loginUser(email: string, password: string): Promise<SafeUser> {
  try {
    const res = await axios.post<LoginResponse>(
      "/api/auth/login",
      { email, password },
      { withCredentials: true }
    );
    return res.data.user; // ✅ TypeScript now knows `res.data.user` is SafeUser
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
}



export const logout = async () => {
  await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  window.location.replace("/login");
};
