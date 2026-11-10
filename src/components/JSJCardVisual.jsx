import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, QrCode, RotateCw } from 'lucide-react';
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

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 12;

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
      className={`relative select-none perspective-1000 w-full max-w-[420px] mx-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-brandBlue/20 via-brandRed/15 to-primary-800/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

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
        className="relative w-full aspect-[1.586/1] rounded-2xl sm:rounded-3xl preserve-3d cursor-pointer shadow-xl transition-shadow duration-300"
      >
        {/* CARD FRONT */}
        <div className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl backface-hidden p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#061224] via-[#0B1F3A] to-[#122B4D] border border-blue-400/30 text-white shadow-xl">
          {/* Subtle circuit overlay */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2F6BFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Header Row: JSJ Brand & Member Type */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-brandBlue to-blue-400 p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[6px] sm:rounded-[10px] flex items-center justify-center font-extrabold text-xs sm:text-sm tracking-wider text-white">
                  JSJ
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="font-heading font-extrabold tracking-wider text-sm sm:text-base">JSJ CARD</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brandRed animate-ping" />
                </div>
                <p className="text-[8px] sm:text-[10px] font-medium tracking-widest text-blue-200/80 uppercase">
                  Universal Purpose Pass
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[8px] sm:text-[10px] font-bold tracking-wider bg-brandRed/20 border border-brandRed/40 text-brandRed uppercase whitespace-nowrap">
                {member.type}
              </span>
              <div className="flex items-center gap-1 mt-0.5 text-blue-200/60">
                <Wifi className="w-3 h-3 rotate-90" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider">Contactless</span>
              </div>
            </div>
          </div>

          {/* Middle: EMV Chip & Metallic Band */}
          <div className="relative z-10 flex items-center justify-between my-auto py-1 sm:py-2">
            {/* Realistic Chip */}
            <div className="w-9 h-7 sm:w-11 sm:h-8 rounded bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 p-0.5 shadow-inner border border-amber-300/60 flex items-center justify-center shrink-0">
              <div className="w-full h-full border border-amber-700/30 rounded-xs grid grid-cols-3 grid-rows-2 gap-0.5 p-0.5 opacity-80">
                <div className="border border-amber-900/40" />
                <div className="border border-amber-900/40 col-span-2" />
                <div className="border border-amber-900/40 col-span-2" />
                <div className="border border-amber-900/40" />
              </div>
            </div>

            {/* Micro Badge */}
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>{member.status}</span>
            </div>
          </div>

          {/* Bottom: Member Number, Name & Valid Since */}
          <div className="relative z-10">
            <div className="text-[8px] sm:text-[10px] uppercase font-mono tracking-widest text-slate-300/80">
              MEMBERSHIP ID
            </div>
            <div className="font-mono text-sm sm:text-lg font-bold tracking-[0.14em] sm:tracking-[0.18em] text-white truncate">
              {member.id}
            </div>

            <div className="mt-1.5 sm:mt-2.5 flex items-end justify-between pt-1.5 border-t border-white/10">
              <div className="min-w-0 pr-2">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400 block">MEMBER NAME</span>
                <span className="text-[11px] sm:text-xs font-bold tracking-wide text-white truncate block">{member.name}</span>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400 block">VALID SINCE</span>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-brandRed">{member.validSince}</span>
              </div>
            </div>
          </div>

          {/* Interactive hint on front */}
          {canFlip && (
            <div className="absolute bottom-1 right-1/2 translate-x-1/2 flex items-center gap-1 text-[8px] sm:text-[9px] text-blue-200/50 pointer-events-none">
              <RotateCw className="w-2.5 h-2.5" />
              <span>Tap to flip</span>
            </div>
          )}
        </div>

        {/* CARD BACK */}
        <div className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl backface-hidden rotate-y-180 p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#061224] via-[#0B1F3A] to-[#163359] border border-blue-400/40 text-white shadow-xl">
          {/* Magnetic Stripe */}
          <div className="-mx-4 sm:-mx-6 -mt-1 h-8 sm:h-10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-white/10" />

          {/* Middle: Signature Strip & QR Code */}
          <div className="my-auto grid grid-cols-12 gap-2 sm:gap-4 items-center">
            {/* Signature & Security info */}
            <div className="col-span-7 space-y-1.5 sm:space-y-2">
              <div className="h-6 sm:h-8 bg-slate-200 rounded flex items-center justify-between px-2 sm:px-3 text-slate-800 font-mono text-[9px] sm:text-[11px] italic font-semibold">
                <span>Sumitra P.</span>
                <span className="font-bold font-sans not-italic text-slate-900 text-[9px] bg-white px-1 py-0.5 rounded">
                  782
                </span>
              </div>
              <p className="text-[8px] sm:text-[9px] leading-tight text-slate-300/80">
                Authorized signature. Property of Flasho Tech Pvt Ltd. Subject to terms at jsjcard.com.
              </p>
              <div className="text-[8px] sm:text-[9px] font-mono text-blue-300">
                FTPL BHUBANESWAR
              </div>
            </div>

            {/* QR Code Mockup */}
            <div className="col-span-5 flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow border border-slate-200">
              <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-primary-950" />
              <span className="text-[8px] sm:text-[9px] font-extrabold text-primary-950 tracking-wider uppercase mt-0.5">
                VERIFY
              </span>
            </div>
          </div>

          {/* Footer Back */}
          <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-300">
            <span className="font-semibold text-brandRed">FTPL NETWORK</span>
            <span className="font-mono text-[8px] sm:text-[9px] truncate">support@jsjcard.com</span>
          </div>

          {/* Interactive hint on back */}
          {canFlip && (
            <div className="absolute bottom-1 right-1/2 translate-x-1/2 flex items-center gap-1 text-[8px] sm:text-[9px] text-blue-200/50 pointer-events-none">
              <RotateCw className="w-2.5 h-2.5" />
              <span>Tap to flip front</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
