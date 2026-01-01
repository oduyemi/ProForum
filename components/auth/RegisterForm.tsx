"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const submit = async (formData: FormData) => {
    setError(null);
    setSuccess(null);

    const payload = Object.fromEntries(formData.entries());

    startTransition(async () => {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        setSuccess(data.message);

        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } catch (err: any) {
        setError(err.message);
      }
    });
  };

  return (
    <form action={submit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3 my-3">
        <input name="fname" placeholder="First name" required className="input rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm" />
        <input name="lname" placeholder="Last name" required className="input rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm" />
      </div>

      <input name="username" placeholder="Username" required className="input mb-3 w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm" />
      <input name="email" type="email" placeholder="Email" required className="input mb-3 w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm" />
      <input name="password" type="password" placeholder="Password" required className="input mb-3 w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm" />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" required className="input mb-3 w-full rounded-lg bg-black border border-[#C69DD220] px-3 py-2 text-sm" />

      {error && <p className="text-xs text-red-400">{error}</p>}
      {success && <p className="text-xs text-green-400">{success}</p>}

      <button
        disabled={isPending}
        className="w-full rounded-lg bg-yellow-400 py-2 text-black font-medium hover:bg-yellow-300 mb-3"
      >
        {isPending ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
