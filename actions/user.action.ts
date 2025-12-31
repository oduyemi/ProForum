import axios from "axios";

export interface SafeUser {
    _id: string;
    fname: string;
    lname: string;
    username: string;
    email: string;
    image?: string;
    role: "user" | "trusted" | "mentor" | "admin";
    expertise: string[];
    reputation?: number;
    emailVerified: boolean;
    profileCompleted: boolean;
    lastLogin?: string;
  }


  interface ProfileResponse {
    user: SafeUser;
  }
  
  export async function fetchUserProfile(): Promise<SafeUser> {
    const res = await axios.get<ProfileResponse>(
      "/api/user/profile",
      { withCredentials: true }
    );
    return res.data.user; 
  }
  
  