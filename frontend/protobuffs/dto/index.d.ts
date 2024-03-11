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
