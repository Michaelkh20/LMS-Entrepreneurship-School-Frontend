import SubmissionWithAttachmentsTransformer from '@/transformers/SubmissionWithAttachments';
import { GetSubmissionResponseTransformer } from '@/types/proto';
import { submissionSchema } from '@/validators/Submission';

export async function submissionResponseHandler(response: Response) {
  if (!response.ok) {
    return await response.text();
  }

  const buffer = await response.arrayBuffer();
  const decodedResponse = GetSubmissionResponseTransformer.decode(
    new Uint8Array(buffer)
  );
  console.log(decodedResponse);

  const parsedResponse = submissionSchema.parse(decodedResponse.submission);
  console.log(parsedResponse);

  const transformedResponse = await SubmissionWithAttachmentsTransformer(
    parsedResponse
  );
  console.log(transformedResponse);

  return transformedResponse;
}
