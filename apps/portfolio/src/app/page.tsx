"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* 背景悬浮元素 */}
      <motion.div
        className="absolute top-0 left-1/4 w-3 h-3 bg-purple-500 rounded-full z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-4 h-4 bg-pink-500 rounded-full z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <motion.h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-text">
        YzY Studio
      </motion.h1>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-300 mb-12"
      >
        Full-Stack Developer · AI · Cloud · Creative Projects
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4">
        {["ChimeraLens", "Aura", "Nail Salon", "Hanfu Experience"].map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * i }}
          >
            <Card className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 transition-transform transform hover:scale-105 hover:rotate-3 hover:shadow-2xl">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold">{p}</h2>
                <p className="text-gray-400">Click to view details</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
