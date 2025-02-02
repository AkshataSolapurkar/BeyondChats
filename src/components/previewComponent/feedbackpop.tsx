import { useState } from "react"
import { X } from "lucide-react"

interface FeedbackPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  inputPlaceholder: string
  buttonText: string
  placeholdername: string
}

export default function FeedbackPopup({ isOpen, onClose, title, inputPlaceholder,placeholdername, buttonText }: FeedbackPopupProps) {
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log("Submitted:", { email, feedback })
    onClose()
    setEmail("")
    setFeedback("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex md:p-0 p-5 items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholdername}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={inputPlaceholder}
            className="w-full p-2 mb-4 border rounded h-32"
            required
          />
          <button type="submit" className="w-full text-white p-2 rounded bg-gray-800">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

