import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-sm text-yellow-400 tracking-wide uppercase">
          404 — Thread Not Found
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          This discussion never happened.
          <br />
          <span className="text-gray-400">
            Or it did…and then it ghosted us.
          </span>
        </h1>

        <p className="text-gray-400 leading-relaxed">
          You’ve reached a page that either moved on with its life,
          got deleted during a heated debate,
          or was simply typed into the URL with too much confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            asChild
            className="bg-yellow-400 text-black hover:bg-yellow-300"
          >
            <Link href="/forum">
              Return to sanity
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <Link href="/">
              Pretend this never happened
            </Link>
          </Button>
        </div>

        <p className="text-xs text-gray-600 pt-6">
          Pro tip: Growth is intentional. URLs should be too.
        </p>
      </div>
    </main>
  );
}
