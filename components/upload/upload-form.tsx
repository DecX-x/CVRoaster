"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FileDropzone from "./file-dropzone"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function UploadForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState("english") // Default language

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a CV to continue",
        variant: "destructive",
      })
      return
    }
    
    setIsLoading(true)

    try {
      // Step 1: Upload the file
      const formData = new FormData()
      formData.append('file', file)
      formData.append('language', language)
      
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      
      if (!uploadResponse.ok) {
        const error = await uploadResponse.json()
        throw new Error(error.error || 'Error uploading file')
      }
      
      const { fileUrl, language: selectedLanguage } = await uploadResponse.json()
      
      // Store data in session storage for processing
      sessionStorage.setItem('cvFileUrl', fileUrl)
      sessionStorage.setItem('cvLanguage', selectedLanguage)
      
      // Navigate to analyzing page while processing continues in background
      router.push("/analyzing")
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsLoading(false)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    }
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

          <div className="space-y-2">
            <label htmlFor="language" className="block text-[#f5f5f5] text-sm font-medium">
              Select Language
            </label>
            <Select value={language} onValueChange={(value) => setLanguage(value)}>
              <SelectTrigger
                id="language"
                className="w-full bg-[#252525] text-[#f5f5f5] rounded-md transition-transform duration-300 hover:scale-105 focus:ring-2 focus:ring-[#7ac97a]"
              >
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent
                className="bg-[#1e1e1e] text-[#f5f5f5] rounded-md shadow-lg animate-fade-in"
              >
                <SelectItem value="english" className="hover:bg-[#333333] transition-colors">
                  English
                </SelectItem>
                <SelectItem value="indonesian" className="hover:bg-[#333333] transition-colors">
                  Indonesian
                </SelectItem>
                <SelectItem value="spanish" className="hover:bg-[#333333] transition-colors">
                  Spanish
                </SelectItem>
                <SelectItem value="french" className="hover:bg-[#333333] transition-colors">
                  French
                </SelectItem>
              </SelectContent>
            </Select>
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

