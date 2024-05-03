export function getResponseHandler<
  T extends { decode: (input: Uint8Array) => U },
  U,
>(transformer: T) {
  return async (response: Response) => {
    if (!response.ok) {
      return await response.text();
    }
    const buffer = await response.arrayBuffer();
    const decodedResponse = transformer.decode(new Uint8Array(buffer));
    console.log(decodedResponse);
    return decodedResponse;
  };
}
