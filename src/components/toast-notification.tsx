"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
}

export function ToastNotification({
  message,
  isVisible,
}: ToastNotificationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-50"
        >
          <span className="bg-green-500 rounded-full p-1">
            <Check size={12} />
          </span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
