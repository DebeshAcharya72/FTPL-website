import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with FTPL on WhatsApp"
        className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          Chat with FTPL
        </span>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
      </a>
    </motion.aside>
  );
}
