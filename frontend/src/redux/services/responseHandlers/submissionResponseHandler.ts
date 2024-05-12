import SubmissionWithAttachmentsTransformer from '@/transformers/SubmissionWithAttachments';
import { GetSubmissionResponseTransformer } from '@/types/proto';
import GetSubmissionResponseValidator from '@/validators/GetSubmissionResponse';

export async function submissionResponseHandler(response: Response) {
  if (!response.ok) {
    return await response.text();
  }

  const buffer = await response.arrayBuffer();
  const decodedResponse = GetSubmissionResponseTransformer.decode(
    new Uint8Array(buffer)
  );
  console.log(decodedResponse);

  const validationResult = GetSubmissionResponseValidator(decodedResponse);
  console.log(validationResult);

  if (!validationResult) {
    throw new Error('Validation failed');
  }

  const transformedResponse = await SubmissionWithAttachmentsTransformer(
    decodedResponse
  );
  console.log(transformedResponse);

  return transformedResponse;
}
