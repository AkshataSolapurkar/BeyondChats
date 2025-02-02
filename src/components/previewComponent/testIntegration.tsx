"use client"

import { Button } from "@/components/ui/button"

export default function TestIntegration() {
  const handleTestIntegration = () => {
    // Simulate sending an email
    console.log("Sending integration instructions to developer...")
    alert("Integration instructions have been sent to the developer.")
  }

  return (
    <div className="">
      <Button onClick={handleTestIntegration}>Send Instructions to Developer</Button>
    </div>
  )
}

