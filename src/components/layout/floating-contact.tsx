"use client";

import { FaWhatsapp, FaLinkedin, FaInstagram, FaWeixin } from "react-icons/fa";
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
            className="h-12 w-12 rounded-full bg-[#07C160] text-white shadow-lg hover:bg-[#06ad56] hover:shadow-xl transition-all duration-300 cursor-pointer"
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

      {/* Instagram Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full !bg-[#E1306C] text-white !shadow-none hover:!bg-[#C13584] hover:!shadow-none transition-all duration-300 cursor-pointer border-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus-visible:outline-none"
            title="Follow us on Instagram"
          >
            <FaInstagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Button>
        </Link>
      </motion.div>

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
        transition={{ delay: 0.7 }}
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
