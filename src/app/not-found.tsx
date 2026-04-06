import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-2xl bg-brand-gradient flex items-center justify-center mb-8 glow-brand">
        <Zap className="w-10 h-10 text-white" fill="white" />
      </div>
      <h1 className="text-8xl font-black gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted max-w-md mb-8">
        Looks like this page took the stage but never showed up. Let&apos;s get you back to the main event.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-semibold hover:opacity-90 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  );
}
