export default function downloadFile(url: string, fileName: string) {
  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.download = fileName;

  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
}
