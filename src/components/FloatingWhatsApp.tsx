import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/8801798823797"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-[0_4px_20px_hsl(142,70%,45%,0.4)] hover:shadow-[0_4px_30px_hsl(142,70%,45%,0.6)] transition-shadow"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-primary-foreground" />
  </motion.a>
);

export default FloatingWhatsApp;
