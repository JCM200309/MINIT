import { motion } from "motion/react";

export function FireIllusion() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Red Ambient Heat */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 5, -2, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full bg-[#c23b24]/20 blur-[140px]"
      />
      
      {/* Hot Yellow Core Embers */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] left-[25%] w-[45vw] h-[45vw] min-w-[400px] min-h-[400px] rounded-full bg-[#f6d94b]/15 blur-[120px]"
      />
      
      {/* Red/Orange Floating Ember */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.4, 0.1],
          x: [0, -60, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] -right-[15%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] rounded-full bg-[#c23b24]/15 blur-[150px]"
      />
    </div>
  );
}
