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
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useUser();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await loginUser(email, password);

      const res = await axios.get<ProfileResponse>(
        "/api/user/profile",
        { withCredentials: true }
      );

      setUser(res.data.user);
      setSuccess(true);
      setTimeout(() => {
        router.push("/discussions");
      }, 900);
    } catch {
      setError("Invalid email or password");
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
        disabled={loading || success}
        className="w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm mb-3 disabled:opacity-60"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        disabled={loading || success}
        className="w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm mb-3 disabled:opacity-60"
      />

      {error && <p className="text-xs text-red-400">{error}</p>}

      {success && (
        <p className="text-xs text-green-400">
          Login successful. Redirecting…
        </p>
      )}

      <button
        type="submit"
        disabled={loading || success}
        className="w-full rounded-lg bg-yellow-400 py-2 text-black font-medium disabled:opacity-50"
      >
        {loading ? "Signing in…" : success ? "Success" : "Sign in"}
      </button>
    </form>
  );
}
