import getSubmissionFilesUrls from '@/s3/getSubmissionFilesUrls';
import { SubmissionWithAttachments, Submission } from '@/types/api';

export default async function SubmissionWithAttachmentsTransformer(
  submisssion: Submission
): Promise<SubmissionWithAttachments> {
  const {
    homework: { id: homeworkId },
    owner: { id: ownerId },
    payload: { textAnswer, attachmentUrls },
  } = submisssion;

  const fileNames = attachmentUrls.map(
    (fileName) => `${ownerId}/${homeworkId}/${fileName}`
  );

  const urls = await getSubmissionFilesUrls(fileNames);

  const attachments = attachmentUrls.map((fileName, index) => ({
    name: fileName,
    url: urls[index],
  }));

  return {
    id: submisssion.id,
    homework: submisssion.homework,
    owner: submisssion.owner,
    publisher: submisssion.publisher,
    team: submisssion.team,
    publishedAt: submisssion.publishedAt,
    attachments,
    textAnswer,
  };
}
