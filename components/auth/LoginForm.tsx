"use client";
import { useState } from "react";
import axios from "axios";
import { loginUser } from "@/actions/auth.action";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/Usercontext";
import type { SafeUser } from "@/actions/user.action";



interface ProfileResponse {
  user: SafeUser;
}



export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { setUser } = useUser();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await loginUser(email, password);

      // 🔑 fetch profile AFTER login
      const res = await axios.get<ProfileResponse>(
        "/api/user/profile",
        { withCredentials: true }
      );

      setUser(res.data.user);
      router.push("/discussions");
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 mb-3">
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm mb-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm mb-3"
      />

      {error && <p className="text-xs text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-yellow-400 py-2 text-black font-medium disabled:opacity-50"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
