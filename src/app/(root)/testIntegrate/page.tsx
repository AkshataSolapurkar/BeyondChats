"use client";

import { useState } from "react";
import PreviewBox from "@/components/previewComponent/previewindow";
import CodeDisplay from "@/components/previewComponent/codediscription";
import ToggleButtons from "@/components/previewComponent/togglebutton";
import FeedbackPopup from "@/components/previewComponent/feedbackpop";
import Link from "next/link";

export default function Home() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview");
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);

  return (
    <div className="bg-gradient-to-l from-[#f0e9ff] min-h-screen to-[#dbe6ff] p-[1%] flex flex-col justify-between">
      <div className="mx-auto py-6 w-[90%]">
        <div className="w-full md:flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Chatbot Integration & Testing</h1>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setIsFeedbackPopupOpen(true)}
              className="font-semibold bg-gradient-to-r from-[#5cabf9] via-[#5e7ef9] to-[#9b8cfb] hover:opacity-90 text-white px-4 py-2 rounded"
            >
              Chatbot not working? Share feedback
            </button>
            <Link href="/confetii">
            <button className="bg-gradient-to-r from-[#5cabf9] via-[#5e7ef9] to-[#9b8cfb] hover:opacity-90 font-semibold text-white px-4 py-2 rounded">
              Test Integration
            </button>
            </Link>
            
          </div>
        </div>

        <ToggleButtons onToggle={setActiveView} />

        <div>
          {activeView === "preview" ? (
            <PreviewBox />
          ) : (
            <CodeDisplay />
          )}
        </div>
        <div className="w-full md:hidden flex justify-between items-center mt-2 space-y-2 md:space-y-0 md:space-x-4">
        <button
          onClick={() => setIsFeedbackPopupOpen(true)}
          className="bg-gray-500 font-semibold text-white p-2  rounded"
        >
          Share feedback
        </button>
        <Link href="/confetii">
        <button className="bg-white font-semibold text-gray-500 p-2 rounded">
          Test Integration
        </button>
        </Link>
        
      </div>
      </div>

      <FeedbackPopup
        isOpen={isFeedbackPopupOpen}
        onClose={() => setIsFeedbackPopupOpen(false)}
        title="Share Feedback"
        inputPlaceholder="Enter your feedback"
        buttonText="Send Feedback"
        placeholdername="Title of your feedback"
      />
    </div>
  );
}
