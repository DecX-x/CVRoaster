import { NextRequest, NextResponse } from 'next/server';
import { Mistral } from '@mistralai/mistralai';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const language = (formData.get('language') as string) || 'english';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Check file type
    if (
      ![
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ].includes(file.type)
    ) {
      return NextResponse.json(
        { error: 'Please upload a PDF or Word document' },
        { status: 400 }
      );
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Initialize Mistral client for OCR
    const apiKey = process.env.MISTRAL_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Mistral API key is not configured' },
        { status: 500 }
      );
    }
    const client = new Mistral({ apiKey });

    // Convert file to buffer and upload to Mistral
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploaded_pdf = await client.files.upload({
      file: { fileName: file.name, content: buffer },
      purpose: 'ocr',
    });
    await client.files.retrieve({ fileId: uploaded_pdf.id });
    const signedUrl = await client.files.getSignedUrl({ fileId: uploaded_pdf.id });

    // Perform OCR
    const ocrResponse = await client.ocr.process({
      model: 'mistral-ocr-latest',
      document: {
        type: 'document_url',
        documentUrl: signedUrl.url,
      },
    });
    const extractedText = ocrResponse.pages.map(page => page.markdown);

    return NextResponse.json({
      success: true,
      extractedText,
      language,
    });
  } catch (error: any) {
    console.error('Error processing file:', error);
    return NextResponse.json(
      { error: `Error processing file: ${error.message}` },
      { status: 500 }
    );
  }
}