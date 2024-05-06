import { Attachment } from '@/types/api';
import { getPresignedDownloadUrl } from './presignedUrls';

export default async function getSubmissionFilesUrls(fileNames: string[]) {
  const promisedUrls = await Promise.allSettled(
    fileNames.map((fileName) => getPresignedDownloadUrl(fileName))
  );

  const urls = promisedUrls.map((url) =>
    url.status === 'fulfilled' ? url.value : ''
  );
  return urls;
}
