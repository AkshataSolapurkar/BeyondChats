"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Website from "../../../public/dummyWebsite.png"
import smallwebsite from "../../../public/smallwebsite.png"
import { TypeAnimation } from "react-type-animation"
import { X } from "lucide-react"

export default function PreviewBox() {
  const [isChatbotExpanded, setIsChatbotExpanded] = useState(true)
  const [messages, setMessages] = useState<Array<{ text: string; sender: "bot" | "user" }>>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isChatbotExpanded && messages.length === 0) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages([{ text: "Hello! How may I help you?", sender: "bot" }])
      }, 2000)
    }
  }, [isChatbotExpanded])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }])
      setInputMessage("")
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          { text: "I'm a demo bot. I can't actually respond to your messages.", sender: "bot" },
        ])
      }, 2000)
    }
  }

  const handleCloseChatbot = () => {
    setIsChatbotExpanded(false)
    setMessages([])
    setIsTyping(false)
  }

  return (
    <Card className="p-4 bg-gray-400 text-white font-mono w-full">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="relative">
        <Image
          src={Website}
          alt="Website Preview"
          sizes="(max-width: 640px) 100vw, 50vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className="hidden sm:block"
        />
        <Image
          src={smallwebsite}
          alt="Website Preview Small"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className="block sm:hidden"
        />

        <div
          className={`absolute bottom-4 right-4 bg-white text-black rounded-lg transition-all duration-300 ${
            isChatbotExpanded ? "w-80 h-96" : "w-12 h-12"
          }`}
        >
          {isChatbotExpanded ? (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-2 border-b">
                <span className="font-bold">Chat Support</span>
                <button onClick={handleCloseChatbot} className="text-gray-500 hover:text-gray-700">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-grow overflow-auto p-4">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                    <span
                      className={`inline-block p-2 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                    >
                      {message.text}
                    </span>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-left">
                    <span className="inline-block p-2 rounded-lg bg-gray-200 text-black">
                      <TypeAnimation
                        sequence={["Typing", 1000, "Typing.", 1000, "Typing..", 1000, "Typing...", 1000]}
                        wrapper="span"
                        cursor={true}
                        repeat={Number.POSITIVE_INFINITY}
                        style={{ fontSize: "16px", display: "inline-block" }}
                      />
                    </span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="flex p-2 border-t">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 focus:outline-none rounded-l-lg text-black"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">
                  Send
                </button>
              </form>
            </div>
          ) : (
            <button
              className="w-full bg-blue-600 rounded-full p-4 h-full text-[20px] flex items-center justify-center"
              onClick={() => setIsChatbotExpanded(true)}
            >
              💬
            </button>
          )}
        </div>
      </div>
    </Card>
  )
}

