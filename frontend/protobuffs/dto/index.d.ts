import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace dto. */
export namespace dto {

    /** Role enum. */
    enum Role {
        ADMIN = 0,
        TRACKER = 1,
        LEARNER = 2
    }

    /** Properties of a TeamShort. */
    interface ITeamShort {

        /** TeamShort id */
        id?: (string|null);

        /** TeamShort number */
        number?: (number|null);
    }

    /** Represents a TeamShort. */
    class TeamShort implements ITeamShort {

        /**
         * Constructs a new TeamShort.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamShort);

        /** TeamShort id. */
        public id: string;

        /** TeamShort number. */
        public number: number;

        /**
         * Creates a new TeamShort instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamShort instance
         */
        public static create(properties?: dto.ITeamShort): dto.TeamShort;

        /**
         * Encodes the specified TeamShort message. Does not implicitly {@link dto.TeamShort.verify|verify} messages.
         * @param message TeamShort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamShort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamShort message, length delimited. Does not implicitly {@link dto.TeamShort.verify|verify} messages.
         * @param message TeamShort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamShort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamShort message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamShort;

        /**
         * Decodes a TeamShort message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamShort;

        /**
         * Verifies a TeamShort message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamShort message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamShort
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamShort;

        /**
         * Creates a plain object from a TeamShort message. Also converts values to other types if specified.
         * @param message TeamShort
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamShort, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamShort to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamShort
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProfileResponse. */
    interface IProfileResponse {

        /** ProfileResponse fullName */
        fullName?: (string|null);

        /** ProfileResponse role */
        role?: (dto.Role|null);

        /** ProfileResponse email */
        email?: (string|null);

        /** ProfileResponse phone */
        phone?: (string|null);

        /** ProfileResponse messenger */
        messenger?: (string|null);

        /** ProfileResponse balance */
        balance?: (number|null);

        /** ProfileResponse team */
        team?: (dto.ITeamShort|null);
    }

    /** Represents a ProfileResponse. */
    class ProfileResponse implements IProfileResponse {

        /**
         * Constructs a new ProfileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProfileResponse);

        /** ProfileResponse fullName. */
        public fullName: string;

        /** ProfileResponse role. */
        public role: dto.Role;

        /** ProfileResponse email. */
        public email: string;

        /** ProfileResponse phone. */
        public phone: string;

        /** ProfileResponse messenger. */
        public messenger: string;

        /** ProfileResponse balance. */
        public balance: number;

        /** ProfileResponse team. */
        public team?: (dto.ITeamShort|null);

        /**
         * Creates a new ProfileResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileResponse instance
         */
        public static create(properties?: dto.IProfileResponse): dto.ProfileResponse;

        /**
         * Encodes the specified ProfileResponse message. Does not implicitly {@link dto.ProfileResponse.verify|verify} messages.
         * @param message ProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileResponse message, length delimited. Does not implicitly {@link dto.ProfileResponse.verify|verify} messages.
         * @param message ProfileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProfileResponse;

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProfileResponse;

        /**
         * Verifies a ProfileResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.ProfileResponse;

        /**
         * Creates a plain object from a ProfileResponse message. Also converts values to other types if specified.
         * @param message ProfileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProfileResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountGetResponse. */
    interface IAccountGetResponse {

        /** AccountGetResponse id */
        id?: (string|null);

        /** AccountGetResponse name */
        name?: (string|null);

        /** AccountGetResponse surname */
        surname?: (string|null);

        /** AccountGetResponse lastName */
        lastName?: (string|null);

        /** AccountGetResponse email */
        email?: (string|null);

        /** AccountGetResponse phone */
        phone?: (string|null);

        /** AccountGetResponse messenger */
        messenger?: (string|null);

        /** AccountGetResponse role */
        role?: (dto.Role|null);
    }

    /** Represents an AccountGetResponse. */
    class AccountGetResponse implements IAccountGetResponse {

        /**
         * Constructs a new AccountGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountGetResponse);

        /** AccountGetResponse id. */
        public id: string;

        /** AccountGetResponse name. */
        public name: string;

        /** AccountGetResponse surname. */
        public surname: string;

        /** AccountGetResponse lastName. */
        public lastName: string;

        /** AccountGetResponse email. */
        public email: string;

        /** AccountGetResponse phone. */
        public phone: string;

        /** AccountGetResponse messenger. */
        public messenger: string;

        /** AccountGetResponse role. */
        public role: dto.Role;

        /**
         * Creates a new AccountGetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountGetResponse instance
         */
        public static create(properties?: dto.IAccountGetResponse): dto.AccountGetResponse;

        /**
         * Encodes the specified AccountGetResponse message. Does not implicitly {@link dto.AccountGetResponse.verify|verify} messages.
         * @param message AccountGetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountGetResponse message, length delimited. Does not implicitly {@link dto.AccountGetResponse.verify|verify} messages.
         * @param message AccountGetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountGetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountGetResponse;

        /**
         * Decodes an AccountGetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountGetResponse;

        /**
         * Verifies an AccountGetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountGetResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountGetResponse;

        /**
         * Creates a plain object from an AccountGetResponse message. Also converts values to other types if specified.
         * @param message AccountGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountGetResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountCreateRequest. */
    interface IAccountCreateRequest {

        /** AccountCreateRequest name */
        name?: (string|null);

        /** AccountCreateRequest surname */
        surname?: (string|null);

        /** AccountCreateRequest lastName */
        lastName?: (string|null);

        /** AccountCreateRequest email */
        email?: (string|null);

        /** AccountCreateRequest phone */
        phone?: (string|null);

        /** AccountCreateRequest messenger */
        messenger?: (string|null);

        /** AccountCreateRequest role */
        role?: (dto.Role|null);

        /** AccountCreateRequest password */
        password?: (string|null);
    }

    /** Represents an AccountCreateRequest. */
    class AccountCreateRequest implements IAccountCreateRequest {

        /**
         * Constructs a new AccountCreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountCreateRequest);

        /** AccountCreateRequest name. */
        public name: string;

        /** AccountCreateRequest surname. */
        public surname: string;

        /** AccountCreateRequest lastName. */
        public lastName: string;

        /** AccountCreateRequest email. */
        public email: string;

        /** AccountCreateRequest phone. */
        public phone: string;

        /** AccountCreateRequest messenger. */
        public messenger: string;

        /** AccountCreateRequest role. */
        public role: dto.Role;

        /** AccountCreateRequest password. */
        public password: string;

        /**
         * Creates a new AccountCreateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountCreateRequest instance
         */
        public static create(properties?: dto.IAccountCreateRequest): dto.AccountCreateRequest;

        /**
         * Encodes the specified AccountCreateRequest message. Does not implicitly {@link dto.AccountCreateRequest.verify|verify} messages.
         * @param message AccountCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountCreateRequest message, length delimited. Does not implicitly {@link dto.AccountCreateRequest.verify|verify} messages.
         * @param message AccountCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountCreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountCreateRequest;

        /**
         * Decodes an AccountCreateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountCreateRequest;

        /**
         * Verifies an AccountCreateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountCreateRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountCreateRequest;

        /**
         * Creates a plain object from an AccountCreateRequest message. Also converts values to other types if specified.
         * @param message AccountCreateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountCreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountCreateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountCreateRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountEditRequest. */
    interface IAccountEditRequest {

        /** AccountEditRequest name */
        name?: (string|null);

        /** AccountEditRequest surname */
        surname?: (string|null);

        /** AccountEditRequest lastName */
        lastName?: (string|null);

        /** AccountEditRequest email */
        email?: (string|null);

        /** AccountEditRequest phone */
        phone?: (string|null);

        /** AccountEditRequest messenger */
        messenger?: (string|null);
    }

    /** Represents an AccountEditRequest. */
    class AccountEditRequest implements IAccountEditRequest {

        /**
         * Constructs a new AccountEditRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountEditRequest);

        /** AccountEditRequest name. */
        public name: string;

        /** AccountEditRequest surname. */
        public surname: string;

        /** AccountEditRequest lastName. */
        public lastName: string;

        /** AccountEditRequest email. */
        public email: string;

        /** AccountEditRequest phone. */
        public phone: string;

        /** AccountEditRequest messenger. */
        public messenger: string;

        /**
         * Creates a new AccountEditRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountEditRequest instance
         */
        public static create(properties?: dto.IAccountEditRequest): dto.AccountEditRequest;

        /**
         * Encodes the specified AccountEditRequest message. Does not implicitly {@link dto.AccountEditRequest.verify|verify} messages.
         * @param message AccountEditRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountEditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountEditRequest message, length delimited. Does not implicitly {@link dto.AccountEditRequest.verify|verify} messages.
         * @param message AccountEditRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountEditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountEditRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountEditRequest;

        /**
         * Decodes an AccountEditRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountEditRequest;

        /**
         * Verifies an AccountEditRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountEditRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountEditRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountEditRequest;

        /**
         * Creates a plain object from an AccountEditRequest message. Also converts values to other types if specified.
         * @param message AccountEditRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountEditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountEditRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountEditRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountChangeSuccessResponse. */
    interface IAccountChangeSuccessResponse {

        /** AccountChangeSuccessResponse id */
        id?: (string|null);
    }

    /** Represents an AccountChangeSuccessResponse. */
    class AccountChangeSuccessResponse implements IAccountChangeSuccessResponse {

        /**
         * Constructs a new AccountChangeSuccessResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountChangeSuccessResponse);

        /** AccountChangeSuccessResponse id. */
        public id: string;

        /**
         * Creates a new AccountChangeSuccessResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountChangeSuccessResponse instance
         */
        public static create(properties?: dto.IAccountChangeSuccessResponse): dto.AccountChangeSuccessResponse;

        /**
         * Encodes the specified AccountChangeSuccessResponse message. Does not implicitly {@link dto.AccountChangeSuccessResponse.verify|verify} messages.
         * @param message AccountChangeSuccessResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountChangeSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountChangeSuccessResponse message, length delimited. Does not implicitly {@link dto.AccountChangeSuccessResponse.verify|verify} messages.
         * @param message AccountChangeSuccessResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountChangeSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountChangeSuccessResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountChangeSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountChangeSuccessResponse;

        /**
         * Decodes an AccountChangeSuccessResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountChangeSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountChangeSuccessResponse;

        /**
         * Verifies an AccountChangeSuccessResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountChangeSuccessResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountChangeSuccessResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountChangeSuccessResponse;

        /**
         * Creates a plain object from an AccountChangeSuccessResponse message. Also converts values to other types if specified.
         * @param message AccountChangeSuccessResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountChangeSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountChangeSuccessResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountChangeSuccessResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountChangeErrorResponse. */
    interface IAccountChangeErrorResponse {

        /** AccountChangeErrorResponse email */
        email?: (boolean|null);

        /** AccountChangeErrorResponse phone */
        phone?: (boolean|null);
    }

    /** Represents an AccountChangeErrorResponse. */
    class AccountChangeErrorResponse implements IAccountChangeErrorResponse {

        /**
         * Constructs a new AccountChangeErrorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountChangeErrorResponse);

        /** AccountChangeErrorResponse email. */
        public email: boolean;

        /** AccountChangeErrorResponse phone. */
        public phone: boolean;

        /**
         * Creates a new AccountChangeErrorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountChangeErrorResponse instance
         */
        public static create(properties?: dto.IAccountChangeErrorResponse): dto.AccountChangeErrorResponse;

        /**
         * Encodes the specified AccountChangeErrorResponse message. Does not implicitly {@link dto.AccountChangeErrorResponse.verify|verify} messages.
         * @param message AccountChangeErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountChangeErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountChangeErrorResponse message, length delimited. Does not implicitly {@link dto.AccountChangeErrorResponse.verify|verify} messages.
         * @param message AccountChangeErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountChangeErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountChangeErrorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountChangeErrorResponse;

        /**
         * Decodes an AccountChangeErrorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountChangeErrorResponse;

        /**
         * Verifies an AccountChangeErrorResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountChangeErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountChangeErrorResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountChangeErrorResponse;

        /**
         * Creates a plain object from an AccountChangeErrorResponse message. Also converts values to other types if specified.
         * @param message AccountChangeErrorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountChangeErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountChangeErrorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountChangeErrorResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountListElem. */
    interface IAccountListElem {

        /** AccountListElem id */
        id?: (string|null);

        /** AccountListElem partName */
        partName?: (string|null);

        /** AccountListElem email */
        email?: (string|null);

        /** AccountListElem teamShort */
        teamShort?: (dto.ITeamShort|null);

        /** AccountListElem role */
        role?: (dto.Role|null);

        /** AccountListElem balance */
        balance?: (number|null);
    }

    /** Represents an AccountListElem. */
    class AccountListElem implements IAccountListElem {

        /**
         * Constructs a new AccountListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountListElem);

        /** AccountListElem id. */
        public id: string;

        /** AccountListElem partName. */
        public partName: string;

        /** AccountListElem email. */
        public email: string;

        /** AccountListElem teamShort. */
        public teamShort?: (dto.ITeamShort|null);

        /** AccountListElem role. */
        public role: dto.Role;

        /** AccountListElem balance. */
        public balance: number;

        /**
         * Creates a new AccountListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountListElem instance
         */
        public static create(properties?: dto.IAccountListElem): dto.AccountListElem;

        /**
         * Encodes the specified AccountListElem message. Does not implicitly {@link dto.AccountListElem.verify|verify} messages.
         * @param message AccountListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountListElem message, length delimited. Does not implicitly {@link dto.AccountListElem.verify|verify} messages.
         * @param message AccountListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountListElem;

        /**
         * Decodes an AccountListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountListElem;

        /**
         * Verifies an AccountListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountListElem;

        /**
         * Creates a plain object from an AccountListElem message. Also converts values to other types if specified.
         * @param message AccountListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountListResponse. */
    interface IAccountListResponse {

        /** AccountListResponse totalElems */
        totalElems?: (number|null);

        /** AccountListResponse accountList */
        accountList?: (dto.IAccountListElem[]|null);
    }

    /** Represents an AccountListResponse. */
    class AccountListResponse implements IAccountListResponse {

        /**
         * Constructs a new AccountListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountListResponse);

        /** AccountListResponse totalElems. */
        public totalElems: number;

        /** AccountListResponse accountList. */
        public accountList: dto.IAccountListElem[];

        /**
         * Creates a new AccountListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountListResponse instance
         */
        public static create(properties?: dto.IAccountListResponse): dto.AccountListResponse;

        /**
         * Encodes the specified AccountListResponse message. Does not implicitly {@link dto.AccountListResponse.verify|verify} messages.
         * @param message AccountListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountListResponse message, length delimited. Does not implicitly {@link dto.AccountListResponse.verify|verify} messages.
         * @param message AccountListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountListResponse;

        /**
         * Decodes an AccountListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountListResponse;

        /**
         * Verifies an AccountListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountListResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountListResponse;

        /**
         * Creates a plain object from an AccountListResponse message. Also converts values to other types if specified.
         * @param message AccountListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountShortListElem. */
    interface IAccountShortListElem {

        /** AccountShortListElem id */
        id?: (string|null);

        /** AccountShortListElem partName */
        partName?: (string|null);
    }

    /** Represents an AccountShortListElem. */
    class AccountShortListElem implements IAccountShortListElem {

        /**
         * Constructs a new AccountShortListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountShortListElem);

        /** AccountShortListElem id. */
        public id: string;

        /** AccountShortListElem partName. */
        public partName: string;

        /**
         * Creates a new AccountShortListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountShortListElem instance
         */
        public static create(properties?: dto.IAccountShortListElem): dto.AccountShortListElem;

        /**
         * Encodes the specified AccountShortListElem message. Does not implicitly {@link dto.AccountShortListElem.verify|verify} messages.
         * @param message AccountShortListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountShortListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountShortListElem message, length delimited. Does not implicitly {@link dto.AccountShortListElem.verify|verify} messages.
         * @param message AccountShortListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountShortListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountShortListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountShortListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountShortListElem;

        /**
         * Decodes an AccountShortListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountShortListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountShortListElem;

        /**
         * Verifies an AccountShortListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountShortListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountShortListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountShortListElem;

        /**
         * Creates a plain object from an AccountShortListElem message. Also converts values to other types if specified.
         * @param message AccountShortListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountShortListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountShortListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountShortListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountShortListResponse. */
    interface IAccountShortListResponse {

        /** AccountShortListResponse accountShortList */
        accountShortList?: (dto.IAccountShortListElem[]|null);
    }

    /** Represents an AccountShortListResponse. */
    class AccountShortListResponse implements IAccountShortListResponse {

        /**
         * Constructs a new AccountShortListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAccountShortListResponse);

        /** AccountShortListResponse accountShortList. */
        public accountShortList: dto.IAccountShortListElem[];

        /**
         * Creates a new AccountShortListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountShortListResponse instance
         */
        public static create(properties?: dto.IAccountShortListResponse): dto.AccountShortListResponse;

        /**
         * Encodes the specified AccountShortListResponse message. Does not implicitly {@link dto.AccountShortListResponse.verify|verify} messages.
         * @param message AccountShortListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAccountShortListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountShortListResponse message, length delimited. Does not implicitly {@link dto.AccountShortListResponse.verify|verify} messages.
         * @param message AccountShortListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAccountShortListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountShortListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountShortListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AccountShortListResponse;

        /**
         * Decodes an AccountShortListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountShortListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AccountShortListResponse;

        /**
         * Verifies an AccountShortListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountShortListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountShortListResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.AccountShortListResponse;

        /**
         * Creates a plain object from an AccountShortListResponse message. Also converts values to other types if specified.
         * @param message AccountShortListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AccountShortListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountShortListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountShortListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

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

        /** AuthResponse id */
        id?: (string|null);

        /** AuthResponse role */
        role?: (dto.Role|null);
    }

    /** Represents an AuthResponse. */
    class AuthResponse implements IAuthResponse {

        /**
         * Constructs a new AuthResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAuthResponse);

        /** AuthResponse id. */
        public id: string;

        /** AuthResponse role. */
        public role: dto.Role;

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

    /** Properties of a NameAndBalanceResponse. */
    interface INameAndBalanceResponse {

        /** NameAndBalanceResponse name */
        name?: (string|null);

        /** NameAndBalanceResponse balance */
        balance?: (number|null);
    }

    /** Represents a NameAndBalanceResponse. */
    class NameAndBalanceResponse implements INameAndBalanceResponse {

        /**
         * Constructs a new NameAndBalanceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.INameAndBalanceResponse);

        /** NameAndBalanceResponse name. */
        public name: string;

        /** NameAndBalanceResponse balance. */
        public balance: number;

        /**
         * Creates a new NameAndBalanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NameAndBalanceResponse instance
         */
        public static create(properties?: dto.INameAndBalanceResponse): dto.NameAndBalanceResponse;

        /**
         * Encodes the specified NameAndBalanceResponse message. Does not implicitly {@link dto.NameAndBalanceResponse.verify|verify} messages.
         * @param message NameAndBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.INameAndBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NameAndBalanceResponse message, length delimited. Does not implicitly {@link dto.NameAndBalanceResponse.verify|verify} messages.
         * @param message NameAndBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.INameAndBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NameAndBalanceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NameAndBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.NameAndBalanceResponse;

        /**
         * Decodes a NameAndBalanceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NameAndBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.NameAndBalanceResponse;

        /**
         * Verifies a NameAndBalanceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NameAndBalanceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NameAndBalanceResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.NameAndBalanceResponse;

        /**
         * Creates a plain object from a NameAndBalanceResponse message. Also converts values to other types if specified.
         * @param message NameAndBalanceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.NameAndBalanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NameAndBalanceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NameAndBalanceResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LotStatus enum. */
    enum LotStatus {
        APPROVAL = 0,
        ACTIVE = 1,
        INACTIVE = 2
    }

    /** Properties of a LotResponse. */
    interface ILotResponse {

        /** LotResponse id */
        id?: (string|null);

        /** LotResponse number */
        number?: (string|null);

        /** LotResponse title */
        title?: (string|null);

        /** LotResponse description */
        description?: (string|null);

        /** LotResponse terms */
        terms?: (string|null);

        /** LotResponse price */
        price?: (number|null);

        /** LotResponse status */
        status?: (dto.LotStatus|null);

        /** LotResponse performer */
        performer?: (dto.IAccountShortListElem|null);

        /** LotResponse date */
        date?: (string|null);
    }

    /** Represents a LotResponse. */
    class LotResponse implements ILotResponse {

        /**
         * Constructs a new LotResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ILotResponse);

        /** LotResponse id. */
        public id: string;

        /** LotResponse number. */
        public number: string;

        /** LotResponse title. */
        public title: string;

        /** LotResponse description. */
        public description: string;

        /** LotResponse terms. */
        public terms: string;

        /** LotResponse price. */
        public price: number;

        /** LotResponse status. */
        public status: dto.LotStatus;

        /** LotResponse performer. */
        public performer?: (dto.IAccountShortListElem|null);

        /** LotResponse date. */
        public date: string;

        /**
         * Creates a new LotResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LotResponse instance
         */
        public static create(properties?: dto.ILotResponse): dto.LotResponse;

        /**
         * Encodes the specified LotResponse message. Does not implicitly {@link dto.LotResponse.verify|verify} messages.
         * @param message LotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ILotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LotResponse message, length delimited. Does not implicitly {@link dto.LotResponse.verify|verify} messages.
         * @param message LotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ILotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.LotResponse;

        /**
         * Decodes a LotResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.LotResponse;

        /**
         * Verifies a LotResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LotResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.LotResponse;

        /**
         * Creates a plain object from a LotResponse message. Also converts values to other types if specified.
         * @param message LotResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.LotResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LotResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LotShort. */
    interface ILotShort {

        /** LotShort id */
        id?: (string|null);

        /** LotShort number */
        number?: (string|null);

        /** LotShort title */
        title?: (string|null);

        /** LotShort performer */
        performer?: (string|null);

        /** LotShort price */
        price?: (number|null);
    }

    /** Represents a LotShort. */
    class LotShort implements ILotShort {

        /**
         * Constructs a new LotShort.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ILotShort);

        /** LotShort id. */
        public id: string;

        /** LotShort number. */
        public number: string;

        /** LotShort title. */
        public title: string;

        /** LotShort performer. */
        public performer: string;

        /** LotShort price. */
        public price: number;

        /**
         * Creates a new LotShort instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LotShort instance
         */
        public static create(properties?: dto.ILotShort): dto.LotShort;

        /**
         * Encodes the specified LotShort message. Does not implicitly {@link dto.LotShort.verify|verify} messages.
         * @param message LotShort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ILotShort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LotShort message, length delimited. Does not implicitly {@link dto.LotShort.verify|verify} messages.
         * @param message LotShort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ILotShort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotShort message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.LotShort;

        /**
         * Decodes a LotShort message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LotShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.LotShort;

        /**
         * Verifies a LotShort message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LotShort message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotShort
         */
        public static fromObject(object: { [k: string]: any }): dto.LotShort;

        /**
         * Creates a plain object from a LotShort message. Also converts values to other types if specified.
         * @param message LotShort
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.LotShort, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotShort to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LotShort
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LotsShortResponse. */
    interface ILotsShortResponse {

        /** LotsShortResponse totalLotsNumber */
        totalLotsNumber?: (number|null);

        /** LotsShortResponse lots */
        lots?: (dto.ILotShort[]|null);
    }

    /** Represents a LotsShortResponse. */
    class LotsShortResponse implements ILotsShortResponse {

        /**
         * Constructs a new LotsShortResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ILotsShortResponse);

        /** LotsShortResponse totalLotsNumber. */
        public totalLotsNumber: number;

        /** LotsShortResponse lots. */
        public lots: dto.ILotShort[];

        /**
         * Creates a new LotsShortResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LotsShortResponse instance
         */
        public static create(properties?: dto.ILotsShortResponse): dto.LotsShortResponse;

        /**
         * Encodes the specified LotsShortResponse message. Does not implicitly {@link dto.LotsShortResponse.verify|verify} messages.
         * @param message LotsShortResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ILotsShortResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LotsShortResponse message, length delimited. Does not implicitly {@link dto.LotsShortResponse.verify|verify} messages.
         * @param message LotsShortResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ILotsShortResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotsShortResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotsShortResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.LotsShortResponse;

        /**
         * Decodes a LotsShortResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LotsShortResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.LotsShortResponse;

        /**
         * Verifies a LotsShortResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LotsShortResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotsShortResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.LotsShortResponse;

        /**
         * Creates a plain object from a LotsShortResponse message. Also converts values to other types if specified.
         * @param message LotsShortResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.LotsShortResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotsShortResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LotsShortResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** BuyLotClaimStatus enum. */
    enum BuyLotClaimStatus {
        WAITING = 0,
        APPROVED = 1,
        DENIED = 2
    }

    /** Properties of a ClaimBuyLotResponse. */
    interface IClaimBuyLotResponse {

        /** ClaimBuyLotResponse id */
        id?: (string|null);

        /** ClaimBuyLotResponse status */
        status?: (dto.BuyLotClaimStatus|null);

        /** ClaimBuyLotResponse buyer */
        buyer?: (dto.IAccountShortListElem|null);

        /** ClaimBuyLotResponse lot */
        lot?: (dto.ILotResponse|null);

        /** ClaimBuyLotResponse date */
        date?: (string|null);
    }

    /** Represents a ClaimBuyLotResponse. */
    class ClaimBuyLotResponse implements IClaimBuyLotResponse {

        /**
         * Constructs a new ClaimBuyLotResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IClaimBuyLotResponse);

        /** ClaimBuyLotResponse id. */
        public id: string;

        /** ClaimBuyLotResponse status. */
        public status: dto.BuyLotClaimStatus;

        /** ClaimBuyLotResponse buyer. */
        public buyer?: (dto.IAccountShortListElem|null);

        /** ClaimBuyLotResponse lot. */
        public lot?: (dto.ILotResponse|null);

        /** ClaimBuyLotResponse date. */
        public date: string;

        /**
         * Creates a new ClaimBuyLotResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimBuyLotResponse instance
         */
        public static create(properties?: dto.IClaimBuyLotResponse): dto.ClaimBuyLotResponse;

        /**
         * Encodes the specified ClaimBuyLotResponse message. Does not implicitly {@link dto.ClaimBuyLotResponse.verify|verify} messages.
         * @param message ClaimBuyLotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IClaimBuyLotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimBuyLotResponse message, length delimited. Does not implicitly {@link dto.ClaimBuyLotResponse.verify|verify} messages.
         * @param message ClaimBuyLotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IClaimBuyLotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimBuyLotResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimBuyLotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ClaimBuyLotResponse;

        /**
         * Decodes a ClaimBuyLotResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimBuyLotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ClaimBuyLotResponse;

        /**
         * Verifies a ClaimBuyLotResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimBuyLotResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimBuyLotResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.ClaimBuyLotResponse;

        /**
         * Creates a plain object from a ClaimBuyLotResponse message. Also converts values to other types if specified.
         * @param message ClaimBuyLotResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ClaimBuyLotResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimBuyLotResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimBuyLotResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimBuyLotRequest. */
    interface IClaimBuyLotRequest {

        /** ClaimBuyLotRequest buyerId */
        buyerId?: (string|null);

        /** ClaimBuyLotRequest lotId */
        lotId?: (string|null);
    }

    /** Represents a ClaimBuyLotRequest. */
    class ClaimBuyLotRequest implements IClaimBuyLotRequest {

        /**
         * Constructs a new ClaimBuyLotRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IClaimBuyLotRequest);

        /** ClaimBuyLotRequest buyerId. */
        public buyerId: string;

        /** ClaimBuyLotRequest lotId. */
        public lotId: string;

        /**
         * Creates a new ClaimBuyLotRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimBuyLotRequest instance
         */
        public static create(properties?: dto.IClaimBuyLotRequest): dto.ClaimBuyLotRequest;

        /**
         * Encodes the specified ClaimBuyLotRequest message. Does not implicitly {@link dto.ClaimBuyLotRequest.verify|verify} messages.
         * @param message ClaimBuyLotRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IClaimBuyLotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimBuyLotRequest message, length delimited. Does not implicitly {@link dto.ClaimBuyLotRequest.verify|verify} messages.
         * @param message ClaimBuyLotRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IClaimBuyLotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimBuyLotRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimBuyLotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ClaimBuyLotRequest;

        /**
         * Decodes a ClaimBuyLotRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimBuyLotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ClaimBuyLotRequest;

        /**
         * Verifies a ClaimBuyLotRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimBuyLotRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimBuyLotRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.ClaimBuyLotRequest;

        /**
         * Creates a plain object from a ClaimBuyLotRequest message. Also converts values to other types if specified.
         * @param message ClaimBuyLotRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ClaimBuyLotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimBuyLotRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimBuyLotRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimBuyLotListElem. */
    interface IClaimBuyLotListElem {

        /** ClaimBuyLotListElem id */
        id?: (string|null);

        /** ClaimBuyLotListElem lotNumber */
        lotNumber?: (string|null);

        /** ClaimBuyLotListElem buyer */
        buyer?: (string|null);

        /** ClaimBuyLotListElem date */
        date?: (string|null);

        /** ClaimBuyLotListElem status */
        status?: (dto.BuyLotClaimStatus|null);

        /** ClaimBuyLotListElem price */
        price?: (number|null);
    }

    /** Represents a ClaimBuyLotListElem. */
    class ClaimBuyLotListElem implements IClaimBuyLotListElem {

        /**
         * Constructs a new ClaimBuyLotListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IClaimBuyLotListElem);

        /** ClaimBuyLotListElem id. */
        public id: string;

        /** ClaimBuyLotListElem lotNumber. */
        public lotNumber: string;

        /** ClaimBuyLotListElem buyer. */
        public buyer: string;

        /** ClaimBuyLotListElem date. */
        public date: string;

        /** ClaimBuyLotListElem status. */
        public status: dto.BuyLotClaimStatus;

        /** ClaimBuyLotListElem price. */
        public price: number;

        /**
         * Creates a new ClaimBuyLotListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimBuyLotListElem instance
         */
        public static create(properties?: dto.IClaimBuyLotListElem): dto.ClaimBuyLotListElem;

        /**
         * Encodes the specified ClaimBuyLotListElem message. Does not implicitly {@link dto.ClaimBuyLotListElem.verify|verify} messages.
         * @param message ClaimBuyLotListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IClaimBuyLotListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimBuyLotListElem message, length delimited. Does not implicitly {@link dto.ClaimBuyLotListElem.verify|verify} messages.
         * @param message ClaimBuyLotListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IClaimBuyLotListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimBuyLotListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimBuyLotListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ClaimBuyLotListElem;

        /**
         * Decodes a ClaimBuyLotListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimBuyLotListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ClaimBuyLotListElem;

        /**
         * Verifies a ClaimBuyLotListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimBuyLotListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimBuyLotListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.ClaimBuyLotListElem;

        /**
         * Creates a plain object from a ClaimBuyLotListElem message. Also converts values to other types if specified.
         * @param message ClaimBuyLotListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ClaimBuyLotListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimBuyLotListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimBuyLotListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimBuyLotListResponse. */
    interface IClaimBuyLotListResponse {

        /** ClaimBuyLotListResponse totalElems */
        totalElems?: (number|null);

        /** ClaimBuyLotListResponse claimBuyLotList */
        claimBuyLotList?: (dto.IClaimBuyLotListElem[]|null);
    }

    /** Represents a ClaimBuyLotListResponse. */
    class ClaimBuyLotListResponse implements IClaimBuyLotListResponse {

        /**
         * Constructs a new ClaimBuyLotListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IClaimBuyLotListResponse);

        /** ClaimBuyLotListResponse totalElems. */
        public totalElems: number;

        /** ClaimBuyLotListResponse claimBuyLotList. */
        public claimBuyLotList: dto.IClaimBuyLotListElem[];

        /**
         * Creates a new ClaimBuyLotListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimBuyLotListResponse instance
         */
        public static create(properties?: dto.IClaimBuyLotListResponse): dto.ClaimBuyLotListResponse;

        /**
         * Encodes the specified ClaimBuyLotListResponse message. Does not implicitly {@link dto.ClaimBuyLotListResponse.verify|verify} messages.
         * @param message ClaimBuyLotListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IClaimBuyLotListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimBuyLotListResponse message, length delimited. Does not implicitly {@link dto.ClaimBuyLotListResponse.verify|verify} messages.
         * @param message ClaimBuyLotListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IClaimBuyLotListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimBuyLotListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimBuyLotListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ClaimBuyLotListResponse;

        /**
         * Decodes a ClaimBuyLotListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimBuyLotListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ClaimBuyLotListResponse;

        /**
         * Verifies a ClaimBuyLotListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimBuyLotListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimBuyLotListResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.ClaimBuyLotListResponse;

        /**
         * Creates a plain object from a ClaimBuyLotListResponse message. Also converts values to other types if specified.
         * @param message ClaimBuyLotListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ClaimBuyLotListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimBuyLotListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimBuyLotListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimBuyLotListRequest. */
    interface IClaimBuyLotListRequest {

        /** ClaimBuyLotListRequest page */
        page?: (number|null);

        /** ClaimBuyLotListRequest pageSize */
        pageSize?: (number|null);
    }

    /** Represents a ClaimBuyLotListRequest. */
    class ClaimBuyLotListRequest implements IClaimBuyLotListRequest {

        /**
         * Constructs a new ClaimBuyLotListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IClaimBuyLotListRequest);

        /** ClaimBuyLotListRequest page. */
        public page: number;

        /** ClaimBuyLotListRequest pageSize. */
        public pageSize: number;

        /**
         * Creates a new ClaimBuyLotListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimBuyLotListRequest instance
         */
        public static create(properties?: dto.IClaimBuyLotListRequest): dto.ClaimBuyLotListRequest;

        /**
         * Encodes the specified ClaimBuyLotListRequest message. Does not implicitly {@link dto.ClaimBuyLotListRequest.verify|verify} messages.
         * @param message ClaimBuyLotListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IClaimBuyLotListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimBuyLotListRequest message, length delimited. Does not implicitly {@link dto.ClaimBuyLotListRequest.verify|verify} messages.
         * @param message ClaimBuyLotListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IClaimBuyLotListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimBuyLotListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimBuyLotListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ClaimBuyLotListRequest;

        /**
         * Decodes a ClaimBuyLotListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimBuyLotListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ClaimBuyLotListRequest;

        /**
         * Verifies a ClaimBuyLotListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimBuyLotListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimBuyLotListRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.ClaimBuyLotListRequest;

        /**
         * Creates a plain object from a ClaimBuyLotListRequest message. Also converts values to other types if specified.
         * @param message ClaimBuyLotListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ClaimBuyLotListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimBuyLotListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimBuyLotListRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TeamModalResponse. */
    interface ITeamModalResponse {

        /** TeamModalResponse id */
        id?: (string|null);

        /** TeamModalResponse number */
        number?: (number|null);

        /** TeamModalResponse theme */
        theme?: (string|null);

        /** TeamModalResponse learners */
        learners?: (dto.TeamModalResponse.IPersonShortInfo[]|null);

        /** TeamModalResponse trackers */
        trackers?: (dto.TeamModalResponse.IPersonShortInfo[]|null);
    }

    /** Represents a TeamModalResponse. */
    class TeamModalResponse implements ITeamModalResponse {

        /**
         * Constructs a new TeamModalResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamModalResponse);

        /** TeamModalResponse id. */
        public id: string;

        /** TeamModalResponse number. */
        public number: number;

        /** TeamModalResponse theme. */
        public theme: string;

        /** TeamModalResponse learners. */
        public learners: dto.TeamModalResponse.IPersonShortInfo[];

        /** TeamModalResponse trackers. */
        public trackers: dto.TeamModalResponse.IPersonShortInfo[];

        /**
         * Creates a new TeamModalResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamModalResponse instance
         */
        public static create(properties?: dto.ITeamModalResponse): dto.TeamModalResponse;

        /**
         * Encodes the specified TeamModalResponse message. Does not implicitly {@link dto.TeamModalResponse.verify|verify} messages.
         * @param message TeamModalResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamModalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamModalResponse message, length delimited. Does not implicitly {@link dto.TeamModalResponse.verify|verify} messages.
         * @param message TeamModalResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamModalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamModalResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamModalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamModalResponse;

        /**
         * Decodes a TeamModalResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamModalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamModalResponse;

        /**
         * Verifies a TeamModalResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamModalResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamModalResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamModalResponse;

        /**
         * Creates a plain object from a TeamModalResponse message. Also converts values to other types if specified.
         * @param message TeamModalResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamModalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamModalResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamModalResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TeamModalResponse {

        /** Properties of a PersonShortInfo. */
        interface IPersonShortInfo {

            /** PersonShortInfo id */
            id?: (string|null);

            /** PersonShortInfo partName */
            partName?: (string|null);

            /** PersonShortInfo email */
            email?: (string|null);

            /** PersonShortInfo messenger */
            messenger?: (string|null);
        }

        /** Represents a PersonShortInfo. */
        class PersonShortInfo implements IPersonShortInfo {

            /**
             * Constructs a new PersonShortInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: dto.TeamModalResponse.IPersonShortInfo);

            /** PersonShortInfo id. */
            public id: string;

            /** PersonShortInfo partName. */
            public partName: string;

            /** PersonShortInfo email. */
            public email: string;

            /** PersonShortInfo messenger. */
            public messenger: string;

            /**
             * Creates a new PersonShortInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PersonShortInfo instance
             */
            public static create(properties?: dto.TeamModalResponse.IPersonShortInfo): dto.TeamModalResponse.PersonShortInfo;

            /**
             * Encodes the specified PersonShortInfo message. Does not implicitly {@link dto.TeamModalResponse.PersonShortInfo.verify|verify} messages.
             * @param message PersonShortInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dto.TeamModalResponse.IPersonShortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PersonShortInfo message, length delimited. Does not implicitly {@link dto.TeamModalResponse.PersonShortInfo.verify|verify} messages.
             * @param message PersonShortInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dto.TeamModalResponse.IPersonShortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamModalResponse.PersonShortInfo;

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamModalResponse.PersonShortInfo;

            /**
             * Verifies a PersonShortInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PersonShortInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PersonShortInfo
             */
            public static fromObject(object: { [k: string]: any }): dto.TeamModalResponse.PersonShortInfo;

            /**
             * Creates a plain object from a PersonShortInfo message. Also converts values to other types if specified.
             * @param message PersonShortInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dto.TeamModalResponse.PersonShortInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PersonShortInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PersonShortInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a TeamListElement. */
    interface ITeamListElement {

        /** TeamListElement id */
        id?: (string|null);

        /** TeamListElement number */
        number?: (number|null);

        /** TeamListElement theme */
        theme?: (string|null);
    }

    /** Represents a TeamListElement. */
    class TeamListElement implements ITeamListElement {

        /**
         * Constructs a new TeamListElement.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamListElement);

        /** TeamListElement id. */
        public id: string;

        /** TeamListElement number. */
        public number: number;

        /** TeamListElement theme. */
        public theme: string;

        /**
         * Creates a new TeamListElement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamListElement instance
         */
        public static create(properties?: dto.ITeamListElement): dto.TeamListElement;

        /**
         * Encodes the specified TeamListElement message. Does not implicitly {@link dto.TeamListElement.verify|verify} messages.
         * @param message TeamListElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamListElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamListElement message, length delimited. Does not implicitly {@link dto.TeamListElement.verify|verify} messages.
         * @param message TeamListElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamListElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamListElement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamListElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamListElement;

        /**
         * Decodes a TeamListElement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamListElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamListElement;

        /**
         * Verifies a TeamListElement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamListElement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamListElement
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamListElement;

        /**
         * Creates a plain object from a TeamListElement message. Also converts values to other types if specified.
         * @param message TeamListElement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamListElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamListElement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamListElement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TeamListResponse. */
    interface ITeamListResponse {

        /** TeamListResponse teams */
        teams?: (dto.ITeamListElement[]|null);
    }

    /** Represents a TeamListResponse. */
    class TeamListResponse implements ITeamListResponse {

        /**
         * Constructs a new TeamListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamListResponse);

        /** TeamListResponse teams. */
        public teams: dto.ITeamListElement[];

        /**
         * Creates a new TeamListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamListResponse instance
         */
        public static create(properties?: dto.ITeamListResponse): dto.TeamListResponse;

        /**
         * Encodes the specified TeamListResponse message. Does not implicitly {@link dto.TeamListResponse.verify|verify} messages.
         * @param message TeamListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamListResponse message, length delimited. Does not implicitly {@link dto.TeamListResponse.verify|verify} messages.
         * @param message TeamListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamListResponse;

        /**
         * Decodes a TeamListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamListResponse;

        /**
         * Verifies a TeamListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamListResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamListResponse;

        /**
         * Creates a plain object from a TeamListResponse message. Also converts values to other types if specified.
         * @param message TeamListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TeamResponse. */
    interface ITeamResponse {

        /** TeamResponse id */
        id?: (string|null);

        /** TeamResponse number */
        number?: (number|null);

        /** TeamResponse theme */
        theme?: (string|null);

        /** TeamResponse learners */
        learners?: (dto.TeamResponse.IPersonShortInfo[]|null);

        /** TeamResponse trackers */
        trackers?: (dto.TeamResponse.IPersonShortInfo[]|null);
    }

    /** Represents a TeamResponse. */
    class TeamResponse implements ITeamResponse {

        /**
         * Constructs a new TeamResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamResponse);

        /** TeamResponse id. */
        public id: string;

        /** TeamResponse number. */
        public number: number;

        /** TeamResponse theme. */
        public theme: string;

        /** TeamResponse learners. */
        public learners: dto.TeamResponse.IPersonShortInfo[];

        /** TeamResponse trackers. */
        public trackers: dto.TeamResponse.IPersonShortInfo[];

        /**
         * Creates a new TeamResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamResponse instance
         */
        public static create(properties?: dto.ITeamResponse): dto.TeamResponse;

        /**
         * Encodes the specified TeamResponse message. Does not implicitly {@link dto.TeamResponse.verify|verify} messages.
         * @param message TeamResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamResponse message, length delimited. Does not implicitly {@link dto.TeamResponse.verify|verify} messages.
         * @param message TeamResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamResponse;

        /**
         * Decodes a TeamResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamResponse;

        /**
         * Verifies a TeamResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamResponse;

        /**
         * Creates a plain object from a TeamResponse message. Also converts values to other types if specified.
         * @param message TeamResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TeamResponse {

        /** Properties of a PersonShortInfo. */
        interface IPersonShortInfo {

            /** PersonShortInfo id */
            id?: (string|null);

            /** PersonShortInfo partName */
            partName?: (string|null);

            /** PersonShortInfo email */
            email?: (string|null);

            /** PersonShortInfo balance */
            balance?: (number|null);
        }

        /** Represents a PersonShortInfo. */
        class PersonShortInfo implements IPersonShortInfo {

            /**
             * Constructs a new PersonShortInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: dto.TeamResponse.IPersonShortInfo);

            /** PersonShortInfo id. */
            public id: string;

            /** PersonShortInfo partName. */
            public partName: string;

            /** PersonShortInfo email. */
            public email: string;

            /** PersonShortInfo balance. */
            public balance: number;

            /**
             * Creates a new PersonShortInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PersonShortInfo instance
             */
            public static create(properties?: dto.TeamResponse.IPersonShortInfo): dto.TeamResponse.PersonShortInfo;

            /**
             * Encodes the specified PersonShortInfo message. Does not implicitly {@link dto.TeamResponse.PersonShortInfo.verify|verify} messages.
             * @param message PersonShortInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dto.TeamResponse.IPersonShortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PersonShortInfo message, length delimited. Does not implicitly {@link dto.TeamResponse.PersonShortInfo.verify|verify} messages.
             * @param message PersonShortInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dto.TeamResponse.IPersonShortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamResponse.PersonShortInfo;

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamResponse.PersonShortInfo;

            /**
             * Verifies a PersonShortInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PersonShortInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PersonShortInfo
             */
            public static fromObject(object: { [k: string]: any }): dto.TeamResponse.PersonShortInfo;

            /**
             * Creates a plain object from a PersonShortInfo message. Also converts values to other types if specified.
             * @param message PersonShortInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dto.TeamResponse.PersonShortInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PersonShortInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PersonShortInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a TeamCreateRequest. */
    interface ITeamCreateRequest {

        /** TeamCreateRequest number */
        number?: (number|null);

        /** TeamCreateRequest theme */
        theme?: (string|null);

        /** TeamCreateRequest learnersIds */
        learnersIds?: (string[]|null);

        /** TeamCreateRequest trackersIds */
        trackersIds?: (string[]|null);
    }

    /** Represents a TeamCreateRequest. */
    class TeamCreateRequest implements ITeamCreateRequest {

        /**
         * Constructs a new TeamCreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamCreateRequest);

        /** TeamCreateRequest number. */
        public number: number;

        /** TeamCreateRequest theme. */
        public theme: string;

        /** TeamCreateRequest learnersIds. */
        public learnersIds: string[];

        /** TeamCreateRequest trackersIds. */
        public trackersIds: string[];

        /**
         * Creates a new TeamCreateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamCreateRequest instance
         */
        public static create(properties?: dto.ITeamCreateRequest): dto.TeamCreateRequest;

        /**
         * Encodes the specified TeamCreateRequest message. Does not implicitly {@link dto.TeamCreateRequest.verify|verify} messages.
         * @param message TeamCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamCreateRequest message, length delimited. Does not implicitly {@link dto.TeamCreateRequest.verify|verify} messages.
         * @param message TeamCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamCreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamCreateRequest;

        /**
         * Decodes a TeamCreateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamCreateRequest;

        /**
         * Verifies a TeamCreateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamCreateRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamCreateRequest;

        /**
         * Creates a plain object from a TeamCreateRequest message. Also converts values to other types if specified.
         * @param message TeamCreateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamCreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamCreateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamCreateRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TeamEditRequest. */
    interface ITeamEditRequest {

        /** TeamEditRequest number */
        number?: (number|null);

        /** TeamEditRequest theme */
        theme?: (string|null);

        /** TeamEditRequest learnersIds */
        learnersIds?: (string[]|null);

        /** TeamEditRequest trackersIds */
        trackersIds?: (string[]|null);
    }

    /** Represents a TeamEditRequest. */
    class TeamEditRequest implements ITeamEditRequest {

        /**
         * Constructs a new TeamEditRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamEditRequest);

        /** TeamEditRequest number. */
        public number: number;

        /** TeamEditRequest theme. */
        public theme: string;

        /** TeamEditRequest learnersIds. */
        public learnersIds: string[];

        /** TeamEditRequest trackersIds. */
        public trackersIds: string[];

        /**
         * Creates a new TeamEditRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamEditRequest instance
         */
        public static create(properties?: dto.ITeamEditRequest): dto.TeamEditRequest;

        /**
         * Encodes the specified TeamEditRequest message. Does not implicitly {@link dto.TeamEditRequest.verify|verify} messages.
         * @param message TeamEditRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamEditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamEditRequest message, length delimited. Does not implicitly {@link dto.TeamEditRequest.verify|verify} messages.
         * @param message TeamEditRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamEditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamEditRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamEditRequest;

        /**
         * Decodes a TeamEditRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamEditRequest;

        /**
         * Verifies a TeamEditRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamEditRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamEditRequest
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamEditRequest;

        /**
         * Creates a plain object from a TeamEditRequest message. Also converts values to other types if specified.
         * @param message TeamEditRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamEditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamEditRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamEditRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TeamChangeErrorResponse. */
    interface ITeamChangeErrorResponse {

        /** TeamChangeErrorResponse number */
        number?: (boolean|null);

        /** TeamChangeErrorResponse learnersIds */
        learnersIds?: (string[]|null);

        /** TeamChangeErrorResponse trackersIds */
        trackersIds?: (string[]|null);
    }

    /** Represents a TeamChangeErrorResponse. */
    class TeamChangeErrorResponse implements ITeamChangeErrorResponse {

        /**
         * Constructs a new TeamChangeErrorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamChangeErrorResponse);

        /** TeamChangeErrorResponse number. */
        public number: boolean;

        /** TeamChangeErrorResponse learnersIds. */
        public learnersIds: string[];

        /** TeamChangeErrorResponse trackersIds. */
        public trackersIds: string[];

        /**
         * Creates a new TeamChangeErrorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamChangeErrorResponse instance
         */
        public static create(properties?: dto.ITeamChangeErrorResponse): dto.TeamChangeErrorResponse;

        /**
         * Encodes the specified TeamChangeErrorResponse message. Does not implicitly {@link dto.TeamChangeErrorResponse.verify|verify} messages.
         * @param message TeamChangeErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamChangeErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamChangeErrorResponse message, length delimited. Does not implicitly {@link dto.TeamChangeErrorResponse.verify|verify} messages.
         * @param message TeamChangeErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamChangeErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamChangeErrorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamChangeErrorResponse;

        /**
         * Decodes a TeamChangeErrorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamChangeErrorResponse;

        /**
         * Verifies a TeamChangeErrorResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamChangeErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamChangeErrorResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamChangeErrorResponse;

        /**
         * Creates a plain object from a TeamChangeErrorResponse message. Also converts values to other types if specified.
         * @param message TeamChangeErrorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamChangeErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamChangeErrorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamChangeErrorResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TeamCreateSuccessResponse. */
    interface ITeamCreateSuccessResponse {

        /** TeamCreateSuccessResponse id */
        id?: (string|null);
    }

    /** Represents a TeamCreateSuccessResponse. */
    class TeamCreateSuccessResponse implements ITeamCreateSuccessResponse {

        /**
         * Constructs a new TeamCreateSuccessResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamCreateSuccessResponse);

        /** TeamCreateSuccessResponse id. */
        public id: string;

        /**
         * Creates a new TeamCreateSuccessResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamCreateSuccessResponse instance
         */
        public static create(properties?: dto.ITeamCreateSuccessResponse): dto.TeamCreateSuccessResponse;

        /**
         * Encodes the specified TeamCreateSuccessResponse message. Does not implicitly {@link dto.TeamCreateSuccessResponse.verify|verify} messages.
         * @param message TeamCreateSuccessResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamCreateSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamCreateSuccessResponse message, length delimited. Does not implicitly {@link dto.TeamCreateSuccessResponse.verify|verify} messages.
         * @param message TeamCreateSuccessResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamCreateSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamCreateSuccessResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamCreateSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamCreateSuccessResponse;

        /**
         * Decodes a TeamCreateSuccessResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamCreateSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamCreateSuccessResponse;

        /**
         * Verifies a TeamCreateSuccessResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamCreateSuccessResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamCreateSuccessResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamCreateSuccessResponse;

        /**
         * Creates a plain object from a TeamCreateSuccessResponse message. Also converts values to other types if specified.
         * @param message TeamCreateSuccessResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamCreateSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamCreateSuccessResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamCreateSuccessResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
