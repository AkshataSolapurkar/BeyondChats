"use client";

import { motion } from "framer-motion";
import { Search, AtSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TrainingAnimation() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8"
    >
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear" }}
        >
          <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center">
            <Search className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <motion.div
            key={angle}
            className="absolute left-1/2 top-1/2 w-16 h-16"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: `calc(${Math.cos((angle * Math.PI) / 180) * 80}px - 50%)`,
              y: `calc(${Math.sin((angle * Math.PI) / 180) * 80}px - 50%)`,
            }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="w-full h-full bg-white shadow-lg rounded-2xl flex items-center justify-center">
              {index % 2 === 0 ? (
                <AtSign className="w-6 h-6 text-gray-400" />
              ) : (
                <Target className="w-6 h-6 text-gray-400" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Finding lookalikes
        </h2>
        <motion.div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 20, ease: "linear" }}
          />
        </motion.div>
      </div>

      <Button
        onClick={() => router.push("/testIntegrate")}
        className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-full mt-4"
      >
        Continue
      </Button>
    </motion.div>
  );
}
