import { Card } from "@/components/ui/card"

export default function Instructions() {
  return (
    <Card className="p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Integration Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Copy the integration code from the box above.</li>
        <li>Open your website's HTML file or template.</li>
        <li>Paste the code just before the closing &lt;/head&gt; tag.</li>
        <li>Save the file and upload it to your web server.</li>
        <li>Refresh your website to see the chatbot in action.</li>
      </ol>
    </Card>
  )
}

