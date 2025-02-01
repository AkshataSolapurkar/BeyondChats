"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, FileText, ClipboardList, LinkIcon, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type React from "react"

interface OrgSetupProps {
  handleNextStep: () => void
}

type SourceType = "name" | "website" | "questionnaire" | null

const sources = [
  {
    id: "name",
    icon: FileText,
    title: "Company Name",
    description: "Auto import",
    placeholder: "Enter your company name",
  },
  {
    id: "website",
    icon: Globe,
    title: "Company Website URL",
    description: "Auto import",
    placeholder: "Enter your company URL",
  },
  {
    id: "questionnaire",
    icon: ClipboardList,
    title: "Company Description",
    description: "Manual entry",
    placeholder: "Enter company description",
  },
]

const OrgSetup: React.FC<OrgSetupProps> = ({ handleNextStep }) => {
  const [selectedSource, setSelectedSource] = useState<SourceType>(null)
  const [inputValues, setInputValues] = useState({
    name: "",
    website: "",
    questionnaire: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const getPlaceholder = () => {
    const source = sources.find((s) => s.id === selectedSource)
    return source?.placeholder || ""
  }

  const handleInputChange = (value: string) => {
    if (selectedSource) {
      setInputValues((prev) => ({ ...prev, [selectedSource]: value }))
    }
  }

  const allInputsFilled = Object.values(inputValues).every((value) => value.trim() !== "")

  const handleButtonClick = () => {
    if (allInputsFilled) {
      setIsLoading(true)
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isLoading) {
      timer = setTimeout(() => {
        handleNextStep()
        setIsLoading(false)
      }, 3000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isLoading, handleNextStep])

  return (
    <div className="max-w-3xl mx-auto relative min-h-[400px] p-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Help us understand your offering</h2>
      <p className="text-gray-600 mb-8">Choose a source to gather your value proposition info</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {sources.map((source) => {
          const Icon = source.icon
          return (
            <button
              key={source.id}
              onClick={() => {
                setSelectedSource(source.id as SourceType)
              }}
              className={`
                p-8 rounded-2xl transition-all duration-200 text-center
                ${
                  selectedSource === source.id
                    ? "bg-blue-50 border-blue-200"
                    : "bg-gray-50 hover:bg-gray-100 border-transparent"
                }
                border-2
              `}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-2xl bg-white">
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-1 text-gray-800">{source.title}</h3>
              <p className="text-sm text-gray-500">{source.description}</p>
            </button>
          )
        })}
      </div>

      <AnimatePresence>
        {selectedSource && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-xl border border-blue-200 p-2 mb-6">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder={getPlaceholder()}
                  value={inputValues[selectedSource] || ""}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="border-0 focus-visible:ring-0 text-gray-600 placeholder:text-gray-400"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center">
        <Button
          onClick={handleButtonClick}
          disabled={!allInputsFilled || isLoading}
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
    </div>
  )
}

export default OrgSetup

