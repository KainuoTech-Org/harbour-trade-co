"use client";

import { FaWeixin, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function FloatingContact() {
  const { dict } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* WeChat Button with QR Popover */}
      <div className="relative group">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-[#07C160] text-white !shadow-none border-none ring-0 hover:bg-[#06ad56] transition-all duration-300 cursor-pointer"
            title="WeChat"
          >
            <FaWeixin className="h-6 w-6" />
            <span className="sr-only">WeChat</span>
          </Button>
        </motion.div>
        
        {/* QR Code Popover */}
        <div className="absolute bottom-0 right-14 mb-0 hidden group-hover:block transition-all duration-300 origin-bottom-right">
            <div className="bg-white p-3 rounded-xl shadow-2xl border border-border w-40 flex flex-col items-center gap-2">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border overflow-hidden p-1">
                    {/* Placeholder QR Code - Replace with real image */}
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WeChat-HarbourTrade" alt="WeChat QR" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-medium text-muted-foreground text-center">{dict.social.wechat_scan}</span>
            </div>
        </div>
      </div>

      {/* LinkedIn Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-[#0077b5] text-white !shadow-none border-none ring-0 hover:bg-[#006396] transition-all duration-300 cursor-pointer"
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
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="https://wa.me/85212345678" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-[#25D366] text-white !shadow-none border-none ring-0 hover:bg-[#128C7E] transition-all duration-300 cursor-pointer"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="h-8 w-8" />
            <span className="sr-only">WhatsApp</span>
          </Button>
        </Link>
      </motion.div>

      {/* Facebook Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-[#1877F2] text-white !shadow-none border-none ring-0 hover:bg-[#166fe5] transition-all duration-300 cursor-pointer"
            title="Follow us on Facebook"
          >
            <FaFacebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
