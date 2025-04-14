"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-900 rounded-3xl p-6 md:p-8 w-[90%] max-w-md z-50"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">Contact Me</h2>
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-red-500">
                  Vamsi Krishna
                </h3>
                <p className="text-zinc-300 mt-1">UI/UX Designer</p>
              </div>

              <div className="space-y-3">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="text-white">cjvkrishna5@gmail.com</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-sm text-zinc-400">Phone</p>
                  <p className="text-white">+91 8121602659</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:cjvkrishna5@gmail.com"
                  className="block w-full bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full py-3 text-center font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Email
                </a>
              </div>

              <div className="flex justify-center space-x-6 pt-2">
                <a
                  href="https://www.instagram.com/__vamsiii?igsh=MXJzeDJybm5icnp0Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/vamsi-krishna-017b62290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/cjvkrishna5?t=adH1qMUlD3ytdKS7B1CaSQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
