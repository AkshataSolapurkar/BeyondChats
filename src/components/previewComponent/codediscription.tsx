import { Card } from "@/components/ui/card"
import { useState } from "react"
import FeedbackPopup from "./feedbackpop"

export default function CodeDisplay() {
  const [isTestPopupOpen, setIsTestPopupOpen] = useState(false)
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false)
  const integrationCode = `
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://yourdomain.com/chatbot.js'+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','CHATBOT-XXXX');
</script>
  `

  return (
    <Card className="p-4 bg-gray-100 w-full">
      <h2 className="text-xl font-bold mb-4">Integration Code</h2>
      <pre className="text-black border border-gray-300 p-4 rounded overflow-x-auto">
        <code>{integrationCode}</code>
      </pre>
      <div className="md:flex justify-between items-end">
        <div>
        <h2 className="text-xl p-4 font-bold">Integration Instructions</h2>
          <ol className="list-decimal px-4 list-inside space-y-2">
        <li>Copy the integration code from the box above.</li>
        <li>Open your website's HTML file or template.</li>
        <li>Paste the code just before the closing &lt;/head&gt; tag.</li>
        <li>Save the file and upload it to your web server.</li>
        <li>Refresh your website to see the chatbot in action.</li>
      </ol>
        </div>
        <button
              onClick={() => setIsTestPopupOpen(true)}
              className="text-blue-400 underline px-4 py-2 rounded"
            >
            Mail Instrustions to Developer ?
            </button>
        <FeedbackPopup
        isOpen={isTestPopupOpen}
        onClose={() => setIsTestPopupOpen(false)}
        title="Chatbot Setup Instructions"
        inputPlaceholder="Additional instructions"
        buttonText="Send Mail"
        placeholdername="Enter Developer's mail"
      />     
      </div>
    </Card>
  )
}

