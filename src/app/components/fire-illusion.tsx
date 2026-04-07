import { motion } from "motion/react";

export function FireIllusion() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Red Ambient Heat */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.9, 0.6],
          rotate: [0, 5, -2, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(194,59,36,0.25) 0%, rgba(194,59,36,0) 65%)"
        }}
        className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full"
      />
      
      {/* Hot Yellow Core Embers */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          background: "radial-gradient(circle, rgba(246,217,75,0.2) 0%, rgba(246,217,75,0) 65%)"
        }}
        className="absolute bottom-[-10%] left-[25%] w-[45vw] h-[45vw] min-w-[400px] min-h-[400px] rounded-full"
      />
      
      {/* Red/Orange Floating Ember */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -60, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          background: "radial-gradient(circle, rgba(194,59,36,0.2) 0%, rgba(194,59,36,0) 65%)"
        }}
        className="absolute top-[10%] -right-[15%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] rounded-full"
      />
    </div>
  );
}
