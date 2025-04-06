"use client"

import { useState, useEffect } from "react"

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div className="relative h-4 w-full bg-[#333333] rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e67373] via-[#7ac97a] to-[#6bb7d3] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-sm text-[#a0a0a0]">
        <span>Analyzing</span>
        <span>{progress}%</span>
      </div>

      <div className="flex justify-center mt-8">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-[#333333]"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-t-[#e67373] border-r-[#7ac97a] border-b-[#6bb7d3] border-l-transparent animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
      </div>
    </div>
  )
}

