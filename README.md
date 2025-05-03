# AI CV Roaster

An AI-powered CV/Resume analysis tool that provides detailed feedback and improvement suggestions for your resume. Built on Llama 4 Maverick and Mistral AI`s OCR for advanced text analysis and OCR capabilities.

## Features

- Upload PDF or Word documents (.doc, .docx)
- Advanced CV analysis powered by Llama 4 Maverick 17Bx128E
- Intelligent OCR processing using Mistral AI
- Detailed feedback on CV content and structure
- Formatting and presentation analysis
- ATS compatibility check
- Multi-language support
- Actionable improvement suggestions

## Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm package manager
- Valid API keys for the following services:
  - DeepInfra API (for Llama 4 Maverick access)
  - LangChain API
  - Mistral AI API (for OCR processing)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DecX-x/CVRoaster
cd CVRoaster
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your API keys:
```env
DEEPINFRA_API_KEY=your_deepinfra_api_key
LANGCHAIN_API_KEY=your_langchain_api_key
LANGCHAIN_TRACING_V2=true
MISTRAL_API_KEY=your_mistral_api_key
```

## Configuration

### LLM Configuration

The application uses two powerful AI models:

1. **Llama 4 Maverick 17Bx128E**: Primary model for CV analysis and feedback generation
2. **Mistral AI**: Handles OCR processing and text extraction

Configuration can be customized in `lib/llm.ts`:

```typescript
const model = new ChatOpenAI({
    model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
    apiKey: apikey,
    temperature: 1.0,
    configuration: {
        baseURL: "https://api.deepinfra.com/v1/openai"
    }
})
```

**Switching LLM Providers**

You can change the LLM provider by modifying the `baseURL` in the configuration. For example:

```typescript
// For Groq
configuration: {
    baseURL: "https://api.groq.com/openai/v1"
}

// For OpenRouter
configuration: {
    baseURL: "https://openrouter.ai/api/v1"
}
```

> **Note:**  
> When switching providers, you may also need to update the `model` value and provide the correct API key for the chosen provider. Refer to each provider's documentation for supported model names and authentication requirements.

### OCR Configuration

Mistral AI handles document processing through the `/api/analyze-cv/ocr` endpoint, providing:
- High-accuracy text extraction
- Multi-language document support
- Structured data output for analysis

## Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
pnpm build
pnpm start
```

## API Routes

### POST /api/upload
- Handles CV file uploads
- Accepts PDF and Word documents
- Returns file URL and detected language

### POST /api/analyze-cv/generate
- Generates detailed CV analysis
- Provides scoring and feedback
- Returns improvement suggestions

### POST /api/analyze-cv/ocr
- Performs OCR on uploaded documents
- Extracts text for analysis

## File Size Limits

- Maximum file size: 5MB
- Supported formats: PDF, DOC, DOCX

## Directory Structure

```
ai-cv-roaster/
├── app/               # Next.js app directory
├── components/        # React components
├── lib/              # Utility functions and configurations
├── public/           # Static files
│   └── uploads/      # Uploaded files directory
└── ...
```


## License

MIT License - See LICENSE file for details