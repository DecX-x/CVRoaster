"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { FileText, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileDropzoneProps {
  onFileSelected: (file: File) => void
  selectedFile: File | null
}

export default function FileDropzone({ onFileSelected, selectedFile }: FileDropzoneProps) {
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null)

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]

        // Check file type
        if (
          ![
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(file.type)
        ) {
          setError("Please upload a PDF or Word document")
          return
        }

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setError("File size must be less than 5MB")
          return
        }

        onFileSelected(file)
      }
    },
    [onFileSelected],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxFiles: 1,
  })

  const removeFile = () => {
    onFileSelected(null as unknown as File)
    setError(null)
  }

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-[#7ac97a] bg-[#7ac97a]/10"
              : "border-[#333333] hover:border-[#6bb7d3] hover:bg-[#6bb7d3]/10"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center gap-2">
            <Upload className="h-10 w-10 text-[#a0a0a0]" />
            <p className="text-lg font-medium text-[#f5f5f5]">
              {isDragActive ? "Drop your CV here" : "Drag & drop your CV here"}
            </p>
            <p className="text-sm text-[#a0a0a0]">or click to browse files (PDF or Word, max 5MB)</p>
          </div>
        </div>
      ) : (
        <div className="border rounded-lg p-4 bg-[#252525] border-[#333333]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-[#e67373]" />
              <div>
                <p className="font-medium truncate max-w-[200px] sm:max-w-xs text-[#f5f5f5]">{selectedFile.name}</p>
                <p className="text-sm text-[#a0a0a0]">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={removeFile} className="text-[#a0a0a0] hover:text-[#e67373]">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {error && <p className="text-[#e67373] text-sm">{error}</p>}
    </div>
  )
}

