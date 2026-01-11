import { AuthLayout } from "@/components/auth/Layout";
import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Consistency loves familiar faces"
    >
      <LoginForm />

      <p className="text-center text-sm text-gray-400">
        New here?{" "}
        <Link href="/register" className="text-yellow-400 hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
