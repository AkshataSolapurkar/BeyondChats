"use client"

import { useState, useEffect } from "react"
import ReactConfetti from "react-confetti"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Twitter, Facebook, Linkedin, Loader2 } from "lucide-react"

const SuccessUI = () => {
  const [confettiActive, setConfettiActive] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setConfettiActive(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const shareUrl = "https://yourwebsite.com" // Replace with your actual URL
  const shareText = "I just integrated my chatbot! Check it out:"

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      "_blank",
    )
  }

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
      "_blank",
    )
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-l from-[#f0e9ff] min-h-screen to-[#dbe6ff]">
      {confettiActive && <ReactConfetti />}
      <Card className="w-full md:m-0 mx-5 max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Integration Successful!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-[#5cabf9] via-[#5e7ef9] to-[#9b8cfb] hover:opacity-90 text-white" >
            Explore Admin Panel
          </Button>
          <Button className="w-full bg-gradient-to-r from-[#5cabf9] via-[#5e7ef9] to-[#9b8cfb] hover:opacity-90 text-white">Start talking to your chatbot</Button>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" onClick={shareToTwitter}>
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={shareToFacebook}>
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={shareToLinkedIn}>
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const PendingUI = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-l from-[#f0e9ff] min-h-screen to-[#dbe6ff]">
      <Card className="w-full md:m-0 mx-5 max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Integration in Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <Loader2 className="h-16 w-16 animate-spin mx-auto" />
          <p>We're still working on detecting your integration. This may take a few minutes.</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-[#5cabf9] via-[#5e7ef9] to-[#9b8cfb] hover:opacity-90 text-white">
            Check Status
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const ConfettiPage = () => {
  const [isIntegrated, setIsIntegrated] = useState<boolean | null>(null)

  useEffect(() => {
    // Simulating an API call to check integration status
    setTimeout(() => {
      setIsIntegrated(true) // or false, depending on the actual integration status
    }, 2000)
  }, [])

  if (isIntegrated === null) {
    return <PendingUI />
  }

  return isIntegrated ? <SuccessUI /> : <PendingUI />
}

export default ConfettiPage

