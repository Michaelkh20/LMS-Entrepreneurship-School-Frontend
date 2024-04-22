export function getResponseHandler<
  T extends { decode: (input: Uint8Array) => U },
  U,
>(transformer: T) {
  return async (response: Response) => {
    const buffer = await response.arrayBuffer();
    const decodedResponse = transformer.decode(new Uint8Array(buffer));
    return decodedResponse;
  };
}
