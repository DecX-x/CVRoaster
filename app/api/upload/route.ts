import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

// Helper function to delete file
async function deleteFile(filePath: string) {
  try {
    await fs.promises.unlink(filePath);
    console.log(`Successfully deleted file: ${filePath}`);
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error);
  }
}

// Ensure the uploads directory exists
async function ensureUploadsDir() {
  try {
    await fs.promises.access(uploadsDir);
  } catch (error) {
    await mkdir(uploadsDir, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  let filePath: string | null = null;
  
  try {
    // Make sure uploads directory exists
    await ensureUploadsDir();
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const language = formData.get('language') as string || 'english';

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

    // Generate a unique filename
    const uniqueId = uuidv4();
    const fileExtension = file.name.split('.').pop();
    const fileName = `${uniqueId}.${fileExtension}`;
    filePath = path.join(uploadsDir, fileName);
    
    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Save file to the uploads directory
    await writeFile(filePath, buffer);
    
    // Create a public URL for the file
    const fileUrl = `/uploads/${fileName}`;

    // Return success response
    return NextResponse.json({ 
      success: true, 
      fileUrl,
      language
    });
  } catch (error) {
    // If we have a file path and an error occurred, cleanup the file
    if (filePath) {
      await deleteFile(filePath);
    }
    
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: `Error uploading file: ${error.message}` },
      { status: 500 }
    );
  }
}