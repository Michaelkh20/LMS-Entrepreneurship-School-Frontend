type Decoder<T> = { decode: (input: Uint8Array) => T };
type Validator<T> = (data: unknown) => T;
type Transformer<T, U> = (input: T) => Promise<U>;

export function getResponseHandler<T extends Decoder<U>, U>(decoder: T) {
  return async (response: Response) => {
    if (!response.ok) {
      return await response.text();
    }

    const buffer = await response.arrayBuffer();
    const decodedResponse = decoder.decode(new Uint8Array(buffer));
    console.log(decodedResponse);

    return decodedResponse;
  };
}

export function getResponseHandlerWithValidator<
  T extends Decoder<any>,
  U extends Validator<Y>,
  Y,
>(decoder: T, validator: U) {
  return async (response: Response) => {
    if (!response.ok) {
      return await response.text();
    }

    const buffer = await response.arrayBuffer();
    const decodedResponse = decoder.decode(new Uint8Array(buffer));
    console.log(decodedResponse);

    const parsedResponse = validator(decodedResponse);
    console.log(parsedResponse);

    return parsedResponse;
  };
}
