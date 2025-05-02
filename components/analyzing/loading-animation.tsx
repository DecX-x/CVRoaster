"use client"

export default function LoadingAnimation() {
  return (
    <div className="space-y-4">
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

