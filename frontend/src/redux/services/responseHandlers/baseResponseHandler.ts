type Decoder<T> = { decode: (input: Uint8Array) => T };
type Validator<T, U extends T> = (data: T) => data is U;
type Transformer<T, U> = (data: T) => Promise<U>;

export function getResponseHandler<T>(decoder: Decoder<T>) {
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

export function getResponseHandlerWithValidator<T, U extends T>(
  decoder: Decoder<T>,
  validator: Validator<T, U>
) {
  return async (response: Response) => {
    if (!response.ok) {
      return await response.text();
    }

    const buffer = await response.arrayBuffer();
    const decodedResponse = decoder.decode(new Uint8Array(buffer));
    console.log(decodedResponse);

    const validationResult = validator(decodedResponse);
    console.log(validationResult);

    if (!validationResult) {
      throw new Error('Validation failed');
    }

    return decodedResponse;
  };
}

export function getResponseHandlerWithValidatorAndTransformer<
  T,
  U extends T,
  V,
>(
  decoder: Decoder<T>,
  validator: Validator<T, U>,
  tranformer: Transformer<U, V>
) {
  return async (response: Response) => {
    if (!response.ok) {
      return await response.text();
    }

    const buffer = await response.arrayBuffer();
    const decodedResponse = decoder.decode(new Uint8Array(buffer));
    console.log(decodedResponse);

    const validationResult = validator(decodedResponse);
    console.log(validationResult);

    if (!validationResult) {
      throw new Error('Validation failed');
    }

    const transformedResponse = await tranformer(decodedResponse);

    return transformedResponse;
  };
}
