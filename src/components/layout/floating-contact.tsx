"use client";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* LinkedIn Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-[#0077b5] text-white shadow-lg hover:bg-[#006396] hover:shadow-xl transition-all duration-300 cursor-pointer"
            title="Connect on LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="https://wa.me/85212345678" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:shadow-xl transition-all duration-300 cursor-pointer"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="h-8 w-8" />
            <span className="sr-only">WhatsApp</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
