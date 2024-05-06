export async function getPresignedUploadUrl(fileName: string): Promise<string> {
  const response = await fetch(`/api/get-upload-file-url?fileName=${fileName}`);
  const data = await response.json();
  if (response.ok) {
    return data.url;
  } else {
    throw new Error(data.error || 'Error requesting presigned URL');
  }
}

export async function getPresignedDownloadUrl(
  fileName: string
): Promise<string> {
  const response = await fetch(
    `/api/get-download-file-url?fileName=${fileName}`
  );
  const data = await response.json();
  if (response.ok) {
    return data.url;
  } else {
    throw new Error(data.error || 'Error requesting presigned URL');
  }
}
