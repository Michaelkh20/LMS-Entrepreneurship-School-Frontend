import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace dto. */
export namespace dto {

    /** Properties of an AuthRequest. */
    interface IAuthRequest {

        /** AuthRequest login */
        login?: (string|null);

        /** AuthRequest password */
        password?: (string|null);
    }

    /** Represents an AuthRequest. */
    class AuthRequest implements IAuthRequest {

        /**
         * Constructs a new AuthRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAuthRequest);

        /** AuthRequest login. */
        public login: string;

        /** AuthRequest password. */
        public password: string;

        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthRequest instance
         */
        public static create(properties?: dto.IAuthRequest): dto.AuthRequest;

        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link dto.AuthRequest.verify|verify} messages.
         * @param message AuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link dto.AuthRequest.verify|verify} messages.
         * @param message AuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AuthRequest;

        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AuthRequest;

        /**
         * Verifies an AuthRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.AuthRequest;

        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @param message AuthRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthResponse. */
    interface IAuthResponse {

        /** AuthResponse result */
        result?: (string|null);
    }

    /** Represents an AuthResponse. */
    class AuthResponse implements IAuthResponse {

        /**
         * Constructs a new AuthResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAuthResponse);

        /** AuthResponse result. */
        public result: string;

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthResponse instance
         */
        public static create(properties?: dto.IAuthResponse): dto.AuthResponse;

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link dto.AuthResponse.verify|verify} messages.
         * @param message AuthResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link dto.AuthResponse.verify|verify} messages.
         * @param message AuthResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AuthResponse;

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AuthResponse;

        /**
         * Verifies an AuthResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.AuthResponse;

        /**
         * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
         * @param message AuthResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AuthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PersonRequest. */
    interface IPersonRequest {

        /** PersonRequest id */
        id?: (number|null);
    }

    /** Represents a PersonRequest. */
    class PersonRequest implements IPersonRequest {

        /**
         * Constructs a new PersonRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IPersonRequest);

        /** PersonRequest id. */
        public id: number;

        /**
         * Creates a new PersonRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PersonRequest instance
         */
        public static create(properties?: dto.IPersonRequest): dto.PersonRequest;

        /**
         * Encodes the specified PersonRequest message. Does not implicitly {@link dto.PersonRequest.verify|verify} messages.
         * @param message PersonRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IPersonRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PersonRequest message, length delimited. Does not implicitly {@link dto.PersonRequest.verify|verify} messages.
         * @param message PersonRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IPersonRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PersonRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.PersonRequest;

        /**
         * Decodes a PersonRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PersonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.PersonRequest;

        /**
         * Verifies a PersonRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PersonRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PersonRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.PersonRequest;

        /**
         * Creates a plain object from a PersonRequest message. Also converts values to other types if specified.
         * @param message PersonRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.PersonRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PersonRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PersonRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PersonResponse. */
    interface IPersonResponse {

        /** PersonResponse name */
        name?: (string|null);

        /** PersonResponse surname */
        surname?: (string|null);
    }

    /** Represents a PersonResponse. */
    class PersonResponse implements IPersonResponse {

        /**
         * Constructs a new PersonResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IPersonResponse);

        /** PersonResponse name. */
        public name: string;

        /** PersonResponse surname. */
        public surname: string;

        /**
         * Creates a new PersonResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PersonResponse instance
         */
        public static create(properties?: dto.IPersonResponse): dto.PersonResponse;

        /**
         * Encodes the specified PersonResponse message. Does not implicitly {@link dto.PersonResponse.verify|verify} messages.
         * @param message PersonResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IPersonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PersonResponse message, length delimited. Does not implicitly {@link dto.PersonResponse.verify|verify} messages.
         * @param message PersonResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IPersonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PersonResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.PersonResponse;

        /**
         * Decodes a PersonResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PersonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.PersonResponse;

        /**
         * Verifies a PersonResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PersonResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PersonResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.PersonResponse;

        /**
         * Creates a plain object from a PersonResponse message. Also converts values to other types if specified.
         * @param message PersonResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.PersonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PersonResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PersonResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
