import type React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col">
      <div className="max-w-7xl w-full mx-auto space-y-4">
        {/* Navigation */}
        <nav className="bg-zinc-900/80 rounded-full p-2 md:p-3">
          <ul className="flex justify-between items-center px-4 md:px-6">
            <li>
              <Link href="/" className="font-medium">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" className="text-red-500 font-medium">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="font-medium">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Back Button */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Category Content */}
        {children}

        {/* Footer */}
        <footer className="bg-zinc-900/80 rounded-3xl p-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-medium">Portfolio 2025</h3>
            </div>
            <div className="flex gap-4 my-4 md:my-0">
              <Link href="#" className="text-red-500">
                Twitter
              </Link>
              <Link href="#" className="text-zinc-400">
                Instagram
              </Link>
              <Link href="#" className="text-zinc-400">
                LinkedIn
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1">
              <span className="h-2 w-2 bg-red-500 rounded-full"></span>
              <span>AVAILABLE FOR JOB</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
