import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      aria-label="WhatsApp quick contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group"
    >
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Flasho Tech on WhatsApp"
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-emerald-500 shrink-0" />
        <span className="hidden sm:inline font-semibold text-xs sm:text-sm tracking-wide">
          Chat with FTPL
        </span>
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </a>
    </motion.aside>
  );
}
