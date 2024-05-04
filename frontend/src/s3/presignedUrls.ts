export async function getPresignedUploadUrl(fileName: string) {
  const response = await fetch(`/api/get-upload-file-url?fileName=${fileName}`);
  const data = await response.json();
  if (response.ok) {
    return data.url;
  } else {
    throw new Error(data.error || 'Error requesting presigned URL');
  }
}
