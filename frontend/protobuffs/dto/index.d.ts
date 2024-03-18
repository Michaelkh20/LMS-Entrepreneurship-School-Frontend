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

    /** LotStatus enum. */
    enum LotStatus {
        APPROVAL = 0,
        ACTIVE = 1,
        INACTIVE = 2
    }

    /** Properties of a LotResponse. */
    interface ILotResponse {

        /** LotResponse id */
        id?: (number|null);

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
        performer?: (string|null);

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
        public id: number;

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
        public performer: string;

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
        id?: (number|null);

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
        public id: number;

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

    /** Role enum. */
    enum Role {
        ADMIN = 0,
        TRACKER = 1,
        LEARNER = 2
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
        team?: (dto.ProfileResponse.ITeamShort|null);
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
        public team?: (dto.ProfileResponse.ITeamShort|null);

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

    namespace ProfileResponse {

        /** Properties of a TeamShort. */
        interface ITeamShort {

            /** TeamShort id */
            id?: (string|null);

            /** TeamShort number */
            number?: (string|null);
        }

        /** Represents a TeamShort. */
        class TeamShort implements ITeamShort {

            /**
             * Constructs a new TeamShort.
             * @param [properties] Properties to set
             */
            constructor(properties?: dto.ProfileResponse.ITeamShort);

            /** TeamShort id. */
            public id: string;

            /** TeamShort number. */
            public number: string;

            /**
             * Creates a new TeamShort instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TeamShort instance
             */
            public static create(properties?: dto.ProfileResponse.ITeamShort): dto.ProfileResponse.TeamShort;

            /**
             * Encodes the specified TeamShort message. Does not implicitly {@link dto.ProfileResponse.TeamShort.verify|verify} messages.
             * @param message TeamShort message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dto.ProfileResponse.ITeamShort, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TeamShort message, length delimited. Does not implicitly {@link dto.ProfileResponse.TeamShort.verify|verify} messages.
             * @param message TeamShort message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dto.ProfileResponse.ITeamShort, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TeamShort message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TeamShort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProfileResponse.TeamShort;

            /**
             * Decodes a TeamShort message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TeamShort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProfileResponse.TeamShort;

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
            public static fromObject(object: { [k: string]: any }): dto.ProfileResponse.TeamShort;

            /**
             * Creates a plain object from a TeamShort message. Also converts values to other types if specified.
             * @param message TeamShort
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dto.ProfileResponse.TeamShort, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a TeamLearnerResponse. */
    interface ITeamLearnerResponse {

        /** TeamLearnerResponse id */
        id?: (string|null);

        /** TeamLearnerResponse teamNumber */
        teamNumber?: (number|null);

        /** TeamLearnerResponse projectTheme */
        projectTheme?: (string|null);

        /** TeamLearnerResponse learners */
        learners?: (dto.TeamLearnerResponse.IPersonShortInfo[]|null);

        /** TeamLearnerResponse trackers */
        trackers?: (dto.TeamLearnerResponse.IPersonShortInfo[]|null);
    }

    /** Represents a TeamLearnerResponse. */
    class TeamLearnerResponse implements ITeamLearnerResponse {

        /**
         * Constructs a new TeamLearnerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ITeamLearnerResponse);

        /** TeamLearnerResponse id. */
        public id: string;

        /** TeamLearnerResponse teamNumber. */
        public teamNumber: number;

        /** TeamLearnerResponse projectTheme. */
        public projectTheme: string;

        /** TeamLearnerResponse learners. */
        public learners: dto.TeamLearnerResponse.IPersonShortInfo[];

        /** TeamLearnerResponse trackers. */
        public trackers: dto.TeamLearnerResponse.IPersonShortInfo[];

        /**
         * Creates a new TeamLearnerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamLearnerResponse instance
         */
        public static create(properties?: dto.ITeamLearnerResponse): dto.TeamLearnerResponse;

        /**
         * Encodes the specified TeamLearnerResponse message. Does not implicitly {@link dto.TeamLearnerResponse.verify|verify} messages.
         * @param message TeamLearnerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ITeamLearnerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamLearnerResponse message, length delimited. Does not implicitly {@link dto.TeamLearnerResponse.verify|verify} messages.
         * @param message TeamLearnerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ITeamLearnerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamLearnerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamLearnerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamLearnerResponse;

        /**
         * Decodes a TeamLearnerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamLearnerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamLearnerResponse;

        /**
         * Verifies a TeamLearnerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamLearnerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamLearnerResponse
         */
        public static fromObject(object: { [k: string]: any }): dto.TeamLearnerResponse;

        /**
         * Creates a plain object from a TeamLearnerResponse message. Also converts values to other types if specified.
         * @param message TeamLearnerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.TeamLearnerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamLearnerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamLearnerResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TeamLearnerResponse {

        /** Properties of a PersonShortInfo. */
        interface IPersonShortInfo {

            /** PersonShortInfo personId */
            personId?: (string|null);

            /** PersonShortInfo fullName */
            fullName?: (string|null);

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
            constructor(properties?: dto.TeamLearnerResponse.IPersonShortInfo);

            /** PersonShortInfo personId. */
            public personId: string;

            /** PersonShortInfo fullName. */
            public fullName: string;

            /** PersonShortInfo email. */
            public email: string;

            /** PersonShortInfo messenger. */
            public messenger: string;

            /**
             * Creates a new PersonShortInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PersonShortInfo instance
             */
            public static create(properties?: dto.TeamLearnerResponse.IPersonShortInfo): dto.TeamLearnerResponse.PersonShortInfo;

            /**
             * Encodes the specified PersonShortInfo message. Does not implicitly {@link dto.TeamLearnerResponse.PersonShortInfo.verify|verify} messages.
             * @param message PersonShortInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dto.TeamLearnerResponse.IPersonShortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PersonShortInfo message, length delimited. Does not implicitly {@link dto.TeamLearnerResponse.PersonShortInfo.verify|verify} messages.
             * @param message PersonShortInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dto.TeamLearnerResponse.IPersonShortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.TeamLearnerResponse.PersonShortInfo;

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.TeamLearnerResponse.PersonShortInfo;

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
            public static fromObject(object: { [k: string]: any }): dto.TeamLearnerResponse.PersonShortInfo;

            /**
             * Creates a plain object from a PersonShortInfo message. Also converts values to other types if specified.
             * @param message PersonShortInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dto.TeamLearnerResponse.PersonShortInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
}
