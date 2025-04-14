"use client";

import type React from "react";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ContactModal } from "@/components/contact-modal";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col">
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <div className="max-w-7xl w-full mx-auto space-y-4">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/80 backdrop-blur-sm rounded-full p-2 md:p-3 sticky top-4 z-50"
        >
          <ul className="flex justify-between items-center px-4 md:px-6">
            <li>
              <Link href="/" className="font-medium relative group">
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="text-red-500 font-medium relative group"
              >
                PORTFOLIO
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="font-medium relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          </ul>
        </motion.nav>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <motion.span whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
              <ArrowLeft size={16} />
            </motion.span>
            <span className="group-hover:underline">Back to home</span>
          </Link>
        </motion.div>

        {/* Category Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {children}
        </motion.div>

        {/* Footer - Update with social links */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-6 mt-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-medium">Portfolio 2025</h3>
            </div>
            <div className="flex gap-4 my-4 md:my-0">
              <a
                href="https://x.com/cjvkrishna5?t=adH1qMUlD3ytdKS7B1CaSQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/__vamsiii?igsh=MXJzeDJybm5icnp0Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/vamsi-krishna-017b62290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1">
              <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
              <span>AVAILABLE FOR JOB</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
