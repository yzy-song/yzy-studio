"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const projects = [
    {
      name: "ChimeraLens",
      description: "AI Face-Swap Web App",
      url: "https://chimeralens.yzysong.com/",
      github: "https://github.com/yzy-song/ChimeraLens.git",
    },
    {
      name: "Aura",
      description: "AI-Powered Wellness PWA",
      url: "https://aura.yzysong.com/",
      github: "https://github.com/yzy-song/aura.git",
    },
    {
      name: "Nail Salon",
      description: "Full-Stack Booking System",
      url: "https://nailsalon.yzysong.com/",
      github: "https://github.com/yzy-song/nail-salon-mvp.git",
    },
    {
      name: "Cloudloom",
      description: "Cultural Experience Platform",
      url: "https://cloudloom.yzysong.com/",
      github: "https://github.com/yzy-song/Cloudloom.git",
    },
  ];

  const particles = [
    { size: 3, x: "10%", y: "20%", color: "purple", duration: 8 },
    { size: 4, x: "70%", y: "30%", color: "pink", duration: 3 },
    { size: 2, x: "50%", y: "70%", color: "cyan", duration: 12 },
    { size: 5, x: "80%", y: "10%", color: "white", duration: 14 },
    { size: 3, x: "30%", y: "50%", color: "blue", duration: 9 },
    { size: 2.5, x: "15%", y: "80%", color: "#7dd3fc", duration: 11 }, // 浅蓝
    { size: 3.5, x: "60%", y: "60%", color: "#fbbf24", duration: 13 }, // 金黄
    { size: 2, x: "40%", y: "15%", color: "#a3e635", duration: 8 },   // 青绿
    { size: 4, x: "85%", y: "75%", color: "#f87171", duration: 12 },  // 红色
    { size: 3, x: "25%", y: "35%", color: "#d1d5db", duration: 10 },  // 灰白
  ];
// ...existing code...

  // 鼠标跟随旋转状态
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = ((e.clientY / window.innerHeight) - 0.5) * 10; // 最大倾斜 5°~10°
      const y = ((e.clientX / window.innerWidth) - 0.5) * 10;
      setRotation({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white overflow-hidden perspective-1000">

      {/* 背景粒子 */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.size}rem`,
            height: `${p.size}rem`,
            backgroundColor: p.color,
            top: p.y,
            left: p.x,
            opacity: 0.3,
            filter: "blur(8px)",
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, repeatType: "loop" }}
        />
      ))}

      {/* 整个内容容器跟随鼠标旋转 */}
      <motion.div
        style={{ rotateX: rotation.x, rotateY: rotation.y }}
        className="relative z-10 flex flex-col items-center"
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* 页面标题 */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-text drop-shadow-lg"
        >
          YzY Studio
        </motion.h1>

        {/* 页面简介 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 mb-12 text-center"
        >
          Full-Stack Developer · AI · Cloud · Creative Projects
        </motion.p>

        {/* 项目卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-6xl px-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * i, type: "spring", stiffness: 100 }}
            >
              <Card className="bg-gradient-to-br from-gray-750/70 via-blue-900/90 to-gray-900/80 border-2 border-blue-500/20 cursor-pointer shadow-2xl rounded-2xl transition-transform transform hover:scale-105 hover:rotate-3 hover:shadow-blue-500/30 hover:border-blue-400/40 flex flex-col items-center justify-center min-h-[260px] min-w-[360px]">
                <CardContent className="p-8 flex flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold mb-2 text-purple-200 drop-shadow">{p.name}</h2>
                  <p className="text-gray-300 text-center mb-4">{p.description}</p>
                  <div className="flex flex-col gap-2 items-center">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-pink-400 transition flex items-center gap-1"
                    >
                      <svg width="18" height="18" fill="currentColor" className="inline-block"><path d="M10.5 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.56l-6.22 6.22a.75.75 0 1 1-1.06-1.06l6.22-6.22H10.5A.75.75 0 0 1 10.5 3z"></path><path d="M5.25 5A2.25 2.25 0 0 0 3 7.25v7.5A2.25 2.25 0 0 0 5.25 17h7.5A2.25 2.25 0 0 0 15 14.75v-2a.75.75 0 0 1 1.5 0v2A3.75 3.75 0 0 1 12.75 18h-7.5A3.75 3.75 0 0 1 1.5 14.75v-7.5A3.75 3.75 0 0 1 5.25 3h2a.75.75 0 0 1 0 1.5h-2z"></path></svg>
                      <span>访问项目</span>
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition flex items-center gap-1"
                    >
                      <svg width="18" height="18" fill="currentColor" className="inline-block"><path d="M9 2C5.13 2 2 5.13 2 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.62 7.62 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 9c0-3.87-3.13-7-7-7z"></path></svg>
                      <span>GitHub源码</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
