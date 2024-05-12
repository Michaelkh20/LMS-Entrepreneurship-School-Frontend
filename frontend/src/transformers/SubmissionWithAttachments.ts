import getSubmissionFilesUrls from '@/s3/getSubmissionFilesUrls';
import { SubmissionWithAttachments, IGetSubmissionResponse } from '@/types/api';

export default async function SubmissionWithAttachmentsTransformer(
  response: IGetSubmissionResponse
): Promise<SubmissionWithAttachments> {
  const {
    homework: { id: homeworkId },
    owner: { id: ownerId },
    payload: { textAnswer, attachmentUrls },
  } = response.submission;

  const fileNames = attachmentUrls.map(
    (fileName) => `${ownerId}/${homeworkId}/${fileName}`
  );

  const urls = await getSubmissionFilesUrls(fileNames);

  const attachments = attachmentUrls.map((fileName, index) => ({
    name: fileName,
    url: urls[index],
  }));

  return {
    id: response.submission.id,
    homework: response.submission.homework,
    owner: response.submission.owner,
    publisher: response.submission.publisher,
    team: response.submission.team,
    publishedAt: response.submission.publishedAt,
    attachments,
    textAnswer,
  };
}
