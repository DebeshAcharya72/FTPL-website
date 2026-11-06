import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, QrCode, Sparkles, RotateCw, ExternalLink } from 'lucide-react';
import { cardSpecs } from '../data/jsjCard';

export default function JSJCardVisual({
  interactive = true,
  canFlip = true,
  defaultFlipped = false,
  className = ""
}) {
  const [isFlipped, setIsFlipped] = useState(defaultFlipped);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const toggleFlip = () => {
    if (canFlip) {
      setIsFlipped(prev => !prev);
    }
  };

  const member = cardSpecs.memberSample;

  return (
    <div
      className={`relative select-none perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 via-highlight/20 to-primary-600/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-subtle pointer-events-none" />

      {/* 3D tilt container */}
      <motion.div
        ref={cardRef}
        onClick={toggleFlip}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY + (isFlipped ? 180 : 0),
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className={`relative w-full aspect-[1.586/1] max-w-[430px] mx-auto rounded-3xl preserve-3d cursor-pointer shadow-2xl transition-shadow duration-300 hover:shadow-glow-accent`}
      >
        {/* CARD FRONT */}
        <div className="absolute inset-0 w-full h-full rounded-3xl backface-hidden p-6 sm:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#07172C] via-[#0B1F3A] to-[#122B4D] border border-blue-400/30 text-white shadow-2xl">
          {/* Subtle circuit/holographic pattern overlay */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2F6BFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Holographic saffron-blue sheen */}
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-gradient-to-br from-highlight/20 via-accent/25 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Header Row: JSJ Brand & Member Type */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-blue-400 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center font-extrabold text-sm tracking-wider text-white">
                  JSJ
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold tracking-wider text-base sm:text-lg">JSJ CARD</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-ping" />
                </div>
                <p className="text-[10px] font-medium tracking-widest text-blue-200/80 uppercase">
                  Universal Purpose Pass
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-highlight/20 border border-highlight/40 text-highlight uppercase">
                {member.type}
              </span>
              <div className="flex items-center gap-1 mt-1 text-blue-200/60">
                <Wifi className="w-3.5 h-3.5 rotate-90" />
                <span className="text-[9px] uppercase tracking-wider">Contactless</span>
              </div>
            </div>
          </div>

          {/* Middle: EMV Chip & Metallic Band */}
          <div className="relative z-10 flex items-center justify-between my-auto py-2">
            {/* Realistic Chip */}
            <div className="w-12 h-9 rounded-lg bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 p-0.5 shadow-inner border border-amber-300/60 flex items-center justify-center">
              <div className="w-full h-full border border-amber-700/30 rounded-md grid grid-cols-3 grid-rows-2 gap-0.5 p-0.5 opacity-80">
                <div className="border border-amber-900/40 rounded-sm" />
                <div className="border border-amber-900/40 rounded-sm col-span-2" />
                <div className="border border-amber-900/40 rounded-sm col-span-2" />
                <div className="border border-amber-900/40 rounded-sm" />
              </div>
            </div>

            {/* Micro Badge */}
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{member.status}</span>
            </div>
          </div>

          {/* Bottom: Member Number, Name & Valid Since */}
          <div className="relative z-10">
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-300/80">
              MEMBERSHIP ID
            </div>
            <div className="font-mono text-lg sm:text-xl font-bold tracking-[0.2em] text-white drop-shadow-sm">
              {member.id}
            </div>

            <div className="mt-3 flex items-end justify-between pt-2 border-t border-white/10">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block">MEMBER NAME</span>
                <span className="text-xs sm:text-sm font-bold tracking-wide text-white">{member.name}</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block">VALID SINCE</span>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-highlight">{member.validSince}</span>
              </div>
            </div>
          </div>

          {/* Interactive hint on front */}
          {canFlip && (
            <div className="absolute bottom-2 right-1/2 translate-x-1/2 flex items-center gap-1 text-[9px] text-blue-200/50 hover:text-blue-200 pointer-events-none transition-colors">
              <RotateCw className="w-2.5 h-2.5" />
              <span>Click to flip</span>
            </div>
          )}
        </div>

        {/* CARD BACK */}
        <div className="absolute inset-0 w-full h-full rounded-3xl backface-hidden rotate-y-180 p-6 sm:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#061224] via-[#0B1F3A] to-[#163359] border border-blue-400/40 text-white shadow-2xl">
          {/* Magnetic Stripe */}
          <div className="-mx-7 -mt-1 h-11 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-white/10" />

          {/* Middle: Signature Strip & QR Code */}
          <div className="my-auto grid grid-cols-12 gap-4 items-center">
            {/* Signature & Security info */}
            <div className="col-span-7 space-y-2">
              <div className="h-8 bg-slate-200 rounded flex items-center justify-between px-3 text-slate-800 font-mono text-[11px] italic font-semibold">
                <span>Sumitra P.</span>
                <span className="font-bold font-sans not-italic text-slate-900 text-[10px] bg-white px-1.5 py-0.5 rounded shadow-sm">
                  CVV 782
                </span>
              </div>
              <p className="text-[9px] leading-tight text-slate-300/80">
                Authorized signature. This card remains property of Flasho Tech Pvt Ltd. Subject to terms at jsjcard.com.
              </p>
              <div className="text-[9px] font-mono text-accent-300">
                ISSUER: FTPL BHUBANESWAR
              </div>
            </div>

            {/* High-Contrast Interactive QR Code Mockup */}
            <div className="col-span-5 flex flex-col items-center justify-center p-2.5 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="relative p-1">
                <QrCode className="w-16 h-16 sm:w-20 sm:h-20 text-primary-950" />
              </div>
              <span className="text-[9px] font-extrabold text-primary-950 tracking-wider uppercase mt-1">
                SCAN TO VERIFY
              </span>
            </div>
          </div>

          {/* Footer Back */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-300">
            <span className="font-semibold text-highlight">FTPL SMART NETWORK</span>
            <span className="font-mono">support@jsjcard.com</span>
          </div>

          {/* Interactive hint on back */}
          {canFlip && (
            <div className="absolute bottom-2 right-1/2 translate-x-1/2 flex items-center gap-1 text-[9px] text-blue-200/50 hover:text-blue-200 pointer-events-none transition-colors">
              <RotateCw className="w-2.5 h-2.5" />
              <span>Click to flip front</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
