import s3Client from '@/s3/s3Client';
import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    const searchParams = req.nextUrl.searchParams;
    const file_name = searchParams.get('fileName');

    const putCommand = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: file_name!,
    });

    try {
      const url = await getSignedUrl(s3Client, putCommand, {
        expiresIn: 3600,
      });
      return new Response(JSON.stringify({ url }), { status: 200 });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Error creating presigned URL' }),
        { status: 500 }
      );
    }
  }

  return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
    status: 405,
  });
}
