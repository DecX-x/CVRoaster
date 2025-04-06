import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#1e1e1e] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#e67373] to-[#7ac97a] bg-clip-text text-transparent">
              AI CV Roaster
            </h3>
            <p className="text-[#a0a0a0] max-w-xs">
              Get honest, constructive feedback on your resume to improve your job application success rate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f5f5f5]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#a0a0a0] hover:text-[#e67373] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-[#a0a0a0] hover:text-[#7ac97a] transition-colors">
                  Upload CV
                </Link>
              </li>
              <li>
                <Link href="https://alxosphere.studio" className="text-[#a0a0a0] hover:text-[#6bb7d3] transition-colors">
                  Alxosphere Platform
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f5f5f5]">Alxosphere Apps</h3>
            <ul className="space-y-2">
            <li>
                <Link href="https://chat.alxosphere.studio" className="text-[#a0a0a0] hover:text-[#e67373] transition-colors">
                  Alxosphere Chat
                </Link>
              </li>
              <li>
                <Link href="https://dream.alxosphere.studio" className="text-[#a0a0a0] hover:text-[#7ac97a] transition-colors">
                  Dream Studio
                </Link>
              </li>
              <li>
                <Link href="https://echo.alxosphere.studio" className="text-[#a0a0a0] hover:text-[#6bb7d3] transition-colors">
                  Echo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[#333333] pt-4 text-center text-[#a0a0a0]">
          <p>© {new Date().getFullYear()} Alxosphere Platforms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

