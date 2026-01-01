import { AuthLayout } from "@/components/auth/Layout";
import { RegisterForm } from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Start growing"
      subtitle="Small steps, daily progress"
    >
      <RegisterForm />

      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="text-yellow-400 hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
