"use client";
import { useState, useTransition } from "react";
import { loginUser } from "@/actions/auth.action";
import { useUser } from "@/context/Usercontext";

export function LoginForm() {
  const { setUser } = useUser();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const submit = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    setError(null);

    startTransition(async () => {
      try {
        const user = await loginUser(email, password);
        setUser(user);
        window.location.replace("/forum");
      } catch (err: any) {
        setError(err.message);
      }
    });
  };

  return (
    <form action={submit} className="space-y-4">
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

      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}

      <button
        disabled={isPending}
        className="w-full rounded-lg bg-yellow-400 py-2 text-black font-medium hover:bg-yellow-300 disabled:opacity-50"
      >
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
