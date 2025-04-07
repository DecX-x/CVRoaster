import { NextRequest, NextResponse } from 'next/server';
import { Mistral } from '@mistralai/mistralai';
import fs from 'fs';
import path from 'path';

// Helper function to delete file
async function deleteFile(filePath: string) {
  try {
    await fs.promises.unlink(filePath);
    console.log(`Successfully deleted file: ${filePath}`);
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { fileUrl } = await request.json();

    if (!fileUrl) {
      return NextResponse.json(
        { error: 'No file URL provided' },
        { status: 400 }
      );
    }

    // Initialize Mistral client
    const apiKey = process.env.MISTRAL_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Mistral API key is not configured' },
        { status: 500 }
      );
    }
    
    const client = new Mistral({ apiKey });

    // Get the local file path from the URL
    // The fileUrl will be something like "/uploads/12345.pdf"
    const localFilePath = path.join(process.cwd(), 'public', fileUrl);
    
    // Read the file from local filesystem
    let fileContent;
    try {
      fileContent = fs.readFileSync(localFilePath);
    } catch (error) {
      console.error('Error reading file:', error);
      return NextResponse.json(
        { error: 'Failed to read file from server' },
        { status: 500 }
      );
    }

    // Upload file to Mistral for OCR
    const uploaded_pdf = await client.files.upload({
      file: {
        fileName: path.basename(localFilePath),
        content: fileContent,
      },
      purpose: "ocr",
    });

    // Retrieve file status
    await client.files.retrieve({
      fileId: uploaded_pdf.id
    });

    // Get signed URL
    const signedUrl = await client.files.getSignedUrl({
      fileId: uploaded_pdf.id,
    });

    // Process OCR
    const ocrResponse = await client.ocr.process({
      model: "mistral-ocr-latest",
      document: {
        type: "document_url",
        documentUrl: signedUrl.url,
      }
    });

    // Delete the file after OCR processing
    await deleteFile(localFilePath);

    // Extract markdown content from OCR response
    const extractedMarkdown = ocrResponse.pages.map(page => page.markdown);

    return NextResponse.json({ 
      success: true, 
      extractedText: extractedMarkdown 
    });
  } catch (error) {
    console.error('Error processing OCR:', error);
    return NextResponse.json(
      { error: 'Error processing OCR' },
      { status: 500 }
    );
  }
}