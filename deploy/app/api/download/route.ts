import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const file = searchParams.get('file');

  if (!file) {
    return new NextResponse('Fichier non spécifié', { status: 400 });
  }

  // Liste des fichiers autorisés
  const allowedFiles = [
    'Sparkle-1.0-pc.zip',
    'Sparkle-1.0-mac.zip',
    'sparkle.androide-release.apk'
  ];

  if (!allowedFiles.includes(file)) {
    return new NextResponse('Fichier non autorisé', { status: 403 });
  }

  try {
    const filePath = join(process.cwd(), 'public', 'downloads', file);
    const fileBuffer = await readFile(filePath);
    
    // Déterminer le type MIME
    let contentType = 'application/octet-stream';
    if (file.endsWith('.zip')) {
      contentType = 'application/zip';
    } else if (file.endsWith('.apk')) {
      contentType = 'application/vnd.android.package-archive';
    }

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${file}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
    return new NextResponse('Fichier non trouvé', { status: 404 });
  }
}



