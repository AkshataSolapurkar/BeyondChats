"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Search, AtSign, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import pricing from "../../../public/pricing.png"
import courcel from "../../../public/courcole.png"

interface Page {
  id: number
  image: string
  chunks: {
    content: string
  }[]
  scanned: boolean
}

interface WebsiteScannerProps {
  handleNextStep: () => void
}

const mockPages: Page[] = [
  {
    id: 1,
    image: pricing.src,
    chunks: [
      { content: "Welcome to Our Platform - Your Gateway to Innovation" },
      { content: "Discover cutting-edge solutions tailored for your business needs" },
      { content: "Streamline operations with our AI-powered tools and analytics" },
      { content: "Join thousands of satisfied customers worldwide" },
      { content: "Get started today with a free 30-day trial" },
      { content: "Our features include: data visualization, predictive analytics, and more" },
      { content: "24/7 customer support to ensure your success" },
      { content: "Flexible pricing plans to fit businesses of all sizes" },
    ],
    scanned: false,
  },
  {
    id: 2,
    image: courcel.src,
    chunks: [
      { content: "Enterprise Solutions - Powering Your Business Growth" },
      { content: "Scalable infrastructure to support your expanding operations" },
      { content: "Advanced security features to protect your sensitive data" },
      { content: "Seamless integration with your existing tools and workflows" },
      { content: "Custom reporting and analytics for data-driven decision making" },
      { content: "Dedicated account manager for personalized support" },
      { content: "Regular updates and new features based on customer feedback" },
      { content: "Join our community of industry leaders and innovators" },
    ],
    scanned: false,
  },
]

export default function WebsiteScanner({ handleNextStep }: WebsiteScannerProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [showChunks, setShowChunks] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isTraining, setIsTraining] = useState(false)
  const [trainingComplete, setTrainingComplete] = useState(false)
  const router = useRouter()

  const handleButtonClick = () => {
    if (currentPage === mockPages.length - 1) {
      setIsLoading(true)
    } else {
      togglePage("next")
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isLoading) {
      timer = setTimeout(() => {
        setIsTraining(true)
        setIsLoading(false)
      }, 3000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isLoading])

  useEffect(() => {
    if (isTraining) {
      const timer = setTimeout(() => {
        setTrainingComplete(true)
        setIsTraining(false)
        router.push("/preview")
      }, 20000)
      return () => clearTimeout(timer)
    }
  }, [isTraining, router])

  useEffect(() => {
    if (!mockPages[currentPage].scanned) {
      setIsScanning(true)
      setShowChunks(false)
      const scanningTime = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000)
      const timer = setTimeout(() => {
        setIsScanning(false)
        setShowChunks(true)
        mockPages[currentPage].scanned = true
      }, scanningTime)

      return () => clearTimeout(timer)
    } else {
      setIsScanning(false)
      setShowChunks(true)
    }
  }, [currentPage])

  const togglePage = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < mockPages.length - 1) {
      setCurrentPage((prev) => prev + 1)
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-5 px-8 space-y-8">
      {!isTraining && (
        <>
          <div className="flex justify-center">
            <Button
              onClick={handleButtonClick}
              className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-full"
            >
              {isLoading ? "Loading..." : "Continue"}
              {isLoading ? (
                <div className="w-4 h-4 ml-2 border-t-2 border-white border-solid rounded-full animate-spin"></div>
              ) : (
                <ChevronRight className="w-4 h-4 ml-2" />
              )}
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center gap-1">
              <Button
                variant="outline"
                onClick={() => togglePage("prev")}
                disabled={currentPage === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => togglePage("next")}
                disabled={currentPage === mockPages.length - 1}
                className="flex items-center gap-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex justify-center gap-2">
              {mockPages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPage ? "bg-blue-500" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
              <div className="relative w-full flex justify-center rounded-lg overflow-hidden">
                <div className="relative w-full h-[40vh]">
                  <img
                    src={mockPages[currentPage].image || "/placeholder.svg"}
                    alt={`Page ${currentPage + 1}`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                  <AnimatePresence>
                    {isScanning && (
                      <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        exit={{ top: "100%" }}
                        transition={{
                          duration: 1,
                          repeat: 5,
                        }}
                        className="absolute inset-x-0 h-20 bg-gradient-to-b from-blue-500/30 to-transparent pointer-events-none"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                className="w-full bg-white rounded-lg overflow-hidden mt-4"
                initial={{ height: 0 }}
                animate={{ height: showChunks ? "auto" : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="py-2">
                  <h3 className="text-lg font-semibold text-gray-700">Extracted Data</h3>
                </div>
                <div className="max-h-[30vh] overflow-y-auto py-2">
                  <AnimatePresence>
                    {showChunks && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        {mockPages[currentPage].chunks.map((chunk, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: { delay: index * 0.1 },
                            }}
                            className="bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100"
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-sm text-gray-700">{chunk.content}</div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}

      {isTraining && (
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
            <h2 className="text-2xl font-semibold text-center text-gray-700">Finding lookalikes</h2>
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
            onClick={() => router.push("/preview")}
            className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-full mt-4"
          >
            Continue
          </Button>
        </motion.div>
      )}
    </div>
  )
}

