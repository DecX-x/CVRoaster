"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FileDropzone from "./file-dropzone"

export default function UploadForm() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      router.push("/analyzing")
    }, 1500)
  }

  return (
    <Card className="shadow-lg bg-[#1e1e1e] border-[#333333]">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FileDropzone onFileSelected={(selectedFile) => setFile(selectedFile)} selectedFile={file} />

          <div className="text-center text-[#a0a0a0] py-2">
            <p>Simply upload your CV and our AI will analyze it for you.</p>
            <p className="text-sm mt-1">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#e67373] to-[#7ac97a] hover:from-[#d86565] hover:to-[#69b869] text-white py-6 text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Submit for Roasting"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

