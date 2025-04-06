import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-[#333333] bg-[#1e1e1e]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="AI CV Roaster Logo" width={40} height={40} />
          <span className="text-xl font-bold bg-gradient-to-r from-[#e67373] via-[#7ac97a] to-[#6bb7d3] bg-clip-text text-transparent">
            AI CV Roaster
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">

        </nav>

        <div className="flex items-center gap-4">
          <Link href="/upload">
            <Button className="bg-gradient-to-r from-[#e67373] to-[#7ac97a] hover:from-[#d86565] hover:to-[#69b869] text-white">
              Upload CV
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

