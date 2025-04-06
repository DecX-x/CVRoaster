import UploadForm from "@/components/upload/upload-form"

export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 gradient-text text-center">Upload Your CV</h1>
        <p className="text-[#a0a0a0] mb-8 text-center">
          Get honest, constructive feedback to improve your job application success rate
        </p>

        <UploadForm />
      </div>
    </div>
  )
}

