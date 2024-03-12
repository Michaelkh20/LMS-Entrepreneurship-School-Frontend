/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const dto = $root.dto = (() => {

    /**
     * Namespace dto.
     * @exports dto
     * @namespace
     */
    const dto = {};

    dto.AuthRequest = (function() {

        /**
         * Properties of an AuthRequest.
         * @memberof dto
         * @interface IAuthRequest
         * @property {string|null} [login] AuthRequest login
         * @property {string|null} [password] AuthRequest password
         */

        /**
         * Constructs a new AuthRequest.
         * @memberof dto
         * @classdesc Represents an AuthRequest.
         * @implements IAuthRequest
         * @constructor
         * @param {dto.IAuthRequest=} [properties] Properties to set
         */
        function AuthRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthRequest login.
         * @member {string} login
         * @memberof dto.AuthRequest
         * @instance
         */
        AuthRequest.prototype.login = "";

        /**
         * AuthRequest password.
         * @member {string} password
         * @memberof dto.AuthRequest
         * @instance
         */
        AuthRequest.prototype.password = "";

        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @function create
         * @memberof dto.AuthRequest
         * @static
         * @param {dto.IAuthRequest=} [properties] Properties to set
         * @returns {dto.AuthRequest} AuthRequest instance
         */
        AuthRequest.create = function create(properties) {
            return new AuthRequest(properties);
        };

        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link dto.AuthRequest.verify|verify} messages.
         * @function encode
         * @memberof dto.AuthRequest
         * @static
         * @param {dto.IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link dto.AuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AuthRequest
         * @static
         * @param {dto.IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AuthRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.login = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthRequest message.
         * @function verify
         * @memberof dto.AuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AuthRequest} AuthRequest
         */
        AuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AuthRequest)
                return object;
            let message = new $root.dto.AuthRequest();
            if (object.login != null)
                message.login = String(object.login);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AuthRequest
         * @static
         * @param {dto.AuthRequest} message AuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.login = "";
                object.password = "";
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this AuthRequest to JSON.
         * @function toJSON
         * @memberof dto.AuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthRequest
         * @function getTypeUrl
         * @memberof dto.AuthRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AuthRequest";
        };

        return AuthRequest;
    })();

    dto.AuthResponse = (function() {

        /**
         * Properties of an AuthResponse.
         * @memberof dto
         * @interface IAuthResponse
         * @property {string|null} [result] AuthResponse result
         */

        /**
         * Constructs a new AuthResponse.
         * @memberof dto
         * @classdesc Represents an AuthResponse.
         * @implements IAuthResponse
         * @constructor
         * @param {dto.IAuthResponse=} [properties] Properties to set
         */
        function AuthResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthResponse result.
         * @member {string} result
         * @memberof dto.AuthResponse
         * @instance
         */
        AuthResponse.prototype.result = "";

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @function create
         * @memberof dto.AuthResponse
         * @static
         * @param {dto.IAuthResponse=} [properties] Properties to set
         * @returns {dto.AuthResponse} AuthResponse instance
         */
        AuthResponse.create = function create(properties) {
            return new AuthResponse(properties);
        };

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link dto.AuthResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.AuthResponse
         * @static
         * @param {dto.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
            return writer;
        };

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link dto.AuthResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AuthResponse
         * @static
         * @param {dto.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AuthResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.result = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthResponse message.
         * @function verify
         * @memberof dto.AuthResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            return null;
        };

        /**
         * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AuthResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AuthResponse} AuthResponse
         */
        AuthResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AuthResponse)
                return object;
            let message = new $root.dto.AuthResponse();
            if (object.result != null)
                message.result = String(object.result);
            return message;
        };

        /**
         * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AuthResponse
         * @static
         * @param {dto.AuthResponse} message AuthResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.result = "";
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this AuthResponse to JSON.
         * @function toJSON
         * @memberof dto.AuthResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthResponse
         * @function getTypeUrl
         * @memberof dto.AuthResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AuthResponse";
        };

        return AuthResponse;
    })();

    /**
     * Role enum.
     * @name dto.Role
     * @enum {number}
     * @property {number} ADMIN=0 ADMIN value
     * @property {number} TRACKER=1 TRACKER value
     * @property {number} LEARNER=2 LEARNER value
     */
    dto.Role = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ADMIN"] = 0;
        values[valuesById[1] = "TRACKER"] = 1;
        values[valuesById[2] = "LEARNER"] = 2;
        return values;
    })();

    dto.ProfileResponse = (function() {

        /**
         * Properties of a ProfileResponse.
         * @memberof dto
         * @interface IProfileResponse
         * @property {string|null} [fullName] ProfileResponse fullName
         * @property {dto.Role|null} [role] ProfileResponse role
         * @property {string|null} [email] ProfileResponse email
         * @property {string|null} [phone] ProfileResponse phone
         * @property {string|null} [messenger] ProfileResponse messenger
         * @property {number|null} [balance] ProfileResponse balance
         * @property {dto.ProfileResponse.ITeamShort|null} [team] ProfileResponse team
         */

        /**
         * Constructs a new ProfileResponse.
         * @memberof dto
         * @classdesc Represents a ProfileResponse.
         * @implements IProfileResponse
         * @constructor
         * @param {dto.IProfileResponse=} [properties] Properties to set
         */
        function ProfileResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileResponse fullName.
         * @member {string} fullName
         * @memberof dto.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.fullName = "";

        /**
         * ProfileResponse role.
         * @member {dto.Role} role
         * @memberof dto.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.role = 0;

        /**
         * ProfileResponse email.
         * @member {string} email
         * @memberof dto.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.email = "";

        /**
         * ProfileResponse phone.
         * @member {string} phone
         * @memberof dto.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.phone = "";

        /**
         * ProfileResponse messenger.
         * @member {string} messenger
         * @memberof dto.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.messenger = "";

        /**
         * ProfileResponse balance.
         * @member {number} balance
         * @memberof dto.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.balance = 0;

        /**
         * ProfileResponse team.
         * @member {dto.ProfileResponse.ITeamShort|null|undefined} team
         * @memberof dto.ProfileResponse
         * @instance
         */
        ProfileResponse.prototype.team = null;

        /**
         * Creates a new ProfileResponse instance using the specified properties.
         * @function create
         * @memberof dto.ProfileResponse
         * @static
         * @param {dto.IProfileResponse=} [properties] Properties to set
         * @returns {dto.ProfileResponse} ProfileResponse instance
         */
        ProfileResponse.create = function create(properties) {
            return new ProfileResponse(properties);
        };

        /**
         * Encodes the specified ProfileResponse message. Does not implicitly {@link dto.ProfileResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.ProfileResponse
         * @static
         * @param {dto.IProfileResponse} message ProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fullName);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone);
            if (message.messenger != null && Object.hasOwnProperty.call(message, "messenger"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.messenger);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.balance);
            if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                $root.dto.ProfileResponse.TeamShort.encode(message.team, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProfileResponse message, length delimited. Does not implicitly {@link dto.ProfileResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProfileResponse
         * @static
         * @param {dto.IProfileResponse} message ProfileResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProfileResponse} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProfileResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fullName = reader.string();
                        break;
                    }
                case 2: {
                        message.role = reader.int32();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.phone = reader.string();
                        break;
                    }
                case 5: {
                        message.messenger = reader.string();
                        break;
                    }
                case 6: {
                        message.balance = reader.int32();
                        break;
                    }
                case 7: {
                        message.team = $root.dto.ProfileResponse.TeamShort.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProfileResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProfileResponse} ProfileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileResponse message.
         * @function verify
         * @memberof dto.ProfileResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                if (!$util.isString(message.messenger))
                    return "messenger: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance))
                    return "balance: integer expected";
            if (message.team != null && message.hasOwnProperty("team")) {
                let error = $root.dto.ProfileResponse.TeamShort.verify(message.team);
                if (error)
                    return "team." + error;
            }
            return null;
        };

        /**
         * Creates a ProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProfileResponse} ProfileResponse
         */
        ProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProfileResponse)
                return object;
            let message = new $root.dto.ProfileResponse();
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "ADMIN":
            case 0:
                message.role = 0;
                break;
            case "TRACKER":
            case 1:
                message.role = 1;
                break;
            case "LEARNER":
            case 2:
                message.role = 2;
                break;
            }
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.messenger != null)
                message.messenger = String(object.messenger);
            if (object.balance != null)
                message.balance = object.balance | 0;
            if (object.team != null) {
                if (typeof object.team !== "object")
                    throw TypeError(".dto.ProfileResponse.team: object expected");
                message.team = $root.dto.ProfileResponse.TeamShort.fromObject(object.team);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProfileResponse
         * @static
         * @param {dto.ProfileResponse} message ProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fullName = "";
                object.role = options.enums === String ? "ADMIN" : 0;
                object.email = "";
                object.phone = "";
                object.messenger = "";
                object.balance = 0;
                object.team = null;
            }
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.dto.Role[message.role] === undefined ? message.role : $root.dto.Role[message.role] : message.role;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                object.messenger = message.messenger;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = message.balance;
            if (message.team != null && message.hasOwnProperty("team"))
                object.team = $root.dto.ProfileResponse.TeamShort.toObject(message.team, options);
            return object;
        };

        /**
         * Converts this ProfileResponse to JSON.
         * @function toJSON
         * @memberof dto.ProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfileResponse
         * @function getTypeUrl
         * @memberof dto.ProfileResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ProfileResponse";
        };

        ProfileResponse.TeamShort = (function() {

            /**
             * Properties of a TeamShort.
             * @memberof dto.ProfileResponse
             * @interface ITeamShort
             * @property {string|null} [id] TeamShort id
             * @property {string|null} [number] TeamShort number
             */

            /**
             * Constructs a new TeamShort.
             * @memberof dto.ProfileResponse
             * @classdesc Represents a TeamShort.
             * @implements ITeamShort
             * @constructor
             * @param {dto.ProfileResponse.ITeamShort=} [properties] Properties to set
             */
            function TeamShort(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TeamShort id.
             * @member {string} id
             * @memberof dto.ProfileResponse.TeamShort
             * @instance
             */
            TeamShort.prototype.id = "";

            /**
             * TeamShort number.
             * @member {string} number
             * @memberof dto.ProfileResponse.TeamShort
             * @instance
             */
            TeamShort.prototype.number = "";

            /**
             * Creates a new TeamShort instance using the specified properties.
             * @function create
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {dto.ProfileResponse.ITeamShort=} [properties] Properties to set
             * @returns {dto.ProfileResponse.TeamShort} TeamShort instance
             */
            TeamShort.create = function create(properties) {
                return new TeamShort(properties);
            };

            /**
             * Encodes the specified TeamShort message. Does not implicitly {@link dto.ProfileResponse.TeamShort.verify|verify} messages.
             * @function encode
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {dto.ProfileResponse.ITeamShort} message TeamShort message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamShort.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.number);
                return writer;
            };

            /**
             * Encodes the specified TeamShort message, length delimited. Does not implicitly {@link dto.ProfileResponse.TeamShort.verify|verify} messages.
             * @function encodeDelimited
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {dto.ProfileResponse.ITeamShort} message TeamShort message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamShort.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TeamShort message from the specified reader or buffer.
             * @function decode
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {dto.ProfileResponse.TeamShort} TeamShort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamShort.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProfileResponse.TeamShort();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.number = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TeamShort message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {dto.ProfileResponse.TeamShort} TeamShort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamShort.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TeamShort message.
             * @function verify
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TeamShort.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isString(message.number))
                        return "number: string expected";
                return null;
            };

            /**
             * Creates a TeamShort message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {dto.ProfileResponse.TeamShort} TeamShort
             */
            TeamShort.fromObject = function fromObject(object) {
                if (object instanceof $root.dto.ProfileResponse.TeamShort)
                    return object;
                let message = new $root.dto.ProfileResponse.TeamShort();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.number != null)
                    message.number = String(object.number);
                return message;
            };

            /**
             * Creates a plain object from a TeamShort message. Also converts values to other types if specified.
             * @function toObject
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {dto.ProfileResponse.TeamShort} message TeamShort
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TeamShort.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.number = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                return object;
            };

            /**
             * Converts this TeamShort to JSON.
             * @function toJSON
             * @memberof dto.ProfileResponse.TeamShort
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TeamShort.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TeamShort
             * @function getTypeUrl
             * @memberof dto.ProfileResponse.TeamShort
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TeamShort.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/dto.ProfileResponse.TeamShort";
            };

            return TeamShort;
        })();

        return ProfileResponse;
    })();

    dto.TeamLearnerResponse = (function() {

        /**
         * Properties of a TeamLearnerResponse.
         * @memberof dto
         * @interface ITeamLearnerResponse
         * @property {string|null} [id] TeamLearnerResponse id
         * @property {number|null} [teamNumber] TeamLearnerResponse teamNumber
         * @property {string|null} [projectTheme] TeamLearnerResponse projectTheme
         * @property {Array.<dto.TeamLearnerResponse.IPersonShortInfo>|null} [learners] TeamLearnerResponse learners
         * @property {Array.<dto.TeamLearnerResponse.IPersonShortInfo>|null} [trackers] TeamLearnerResponse trackers
         */

        /**
         * Constructs a new TeamLearnerResponse.
         * @memberof dto
         * @classdesc Represents a TeamLearnerResponse.
         * @implements ITeamLearnerResponse
         * @constructor
         * @param {dto.ITeamLearnerResponse=} [properties] Properties to set
         */
        function TeamLearnerResponse(properties) {
            this.learners = [];
            this.trackers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamLearnerResponse id.
         * @member {string} id
         * @memberof dto.TeamLearnerResponse
         * @instance
         */
        TeamLearnerResponse.prototype.id = "";

        /**
         * TeamLearnerResponse teamNumber.
         * @member {number} teamNumber
         * @memberof dto.TeamLearnerResponse
         * @instance
         */
        TeamLearnerResponse.prototype.teamNumber = 0;

        /**
         * TeamLearnerResponse projectTheme.
         * @member {string} projectTheme
         * @memberof dto.TeamLearnerResponse
         * @instance
         */
        TeamLearnerResponse.prototype.projectTheme = "";

        /**
         * TeamLearnerResponse learners.
         * @member {Array.<dto.TeamLearnerResponse.IPersonShortInfo>} learners
         * @memberof dto.TeamLearnerResponse
         * @instance
         */
        TeamLearnerResponse.prototype.learners = $util.emptyArray;

        /**
         * TeamLearnerResponse trackers.
         * @member {Array.<dto.TeamLearnerResponse.IPersonShortInfo>} trackers
         * @memberof dto.TeamLearnerResponse
         * @instance
         */
        TeamLearnerResponse.prototype.trackers = $util.emptyArray;

        /**
         * Creates a new TeamLearnerResponse instance using the specified properties.
         * @function create
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {dto.ITeamLearnerResponse=} [properties] Properties to set
         * @returns {dto.TeamLearnerResponse} TeamLearnerResponse instance
         */
        TeamLearnerResponse.create = function create(properties) {
            return new TeamLearnerResponse(properties);
        };

        /**
         * Encodes the specified TeamLearnerResponse message. Does not implicitly {@link dto.TeamLearnerResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {dto.ITeamLearnerResponse} message TeamLearnerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamLearnerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.teamNumber != null && Object.hasOwnProperty.call(message, "teamNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.teamNumber);
            if (message.projectTheme != null && Object.hasOwnProperty.call(message, "projectTheme"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.projectTheme);
            if (message.learners != null && message.learners.length)
                for (let i = 0; i < message.learners.length; ++i)
                    $root.dto.TeamLearnerResponse.PersonShortInfo.encode(message.learners[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.trackers != null && message.trackers.length)
                for (let i = 0; i < message.trackers.length; ++i)
                    $root.dto.TeamLearnerResponse.PersonShortInfo.encode(message.trackers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TeamLearnerResponse message, length delimited. Does not implicitly {@link dto.TeamLearnerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {dto.ITeamLearnerResponse} message TeamLearnerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamLearnerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamLearnerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamLearnerResponse} TeamLearnerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamLearnerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamLearnerResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.teamNumber = reader.int32();
                        break;
                    }
                case 3: {
                        message.projectTheme = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.learners && message.learners.length))
                            message.learners = [];
                        message.learners.push($root.dto.TeamLearnerResponse.PersonShortInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.trackers && message.trackers.length))
                            message.trackers = [];
                        message.trackers.push($root.dto.TeamLearnerResponse.PersonShortInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TeamLearnerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamLearnerResponse} TeamLearnerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamLearnerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamLearnerResponse message.
         * @function verify
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamLearnerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.teamNumber != null && message.hasOwnProperty("teamNumber"))
                if (!$util.isInteger(message.teamNumber))
                    return "teamNumber: integer expected";
            if (message.projectTheme != null && message.hasOwnProperty("projectTheme"))
                if (!$util.isString(message.projectTheme))
                    return "projectTheme: string expected";
            if (message.learners != null && message.hasOwnProperty("learners")) {
                if (!Array.isArray(message.learners))
                    return "learners: array expected";
                for (let i = 0; i < message.learners.length; ++i) {
                    let error = $root.dto.TeamLearnerResponse.PersonShortInfo.verify(message.learners[i]);
                    if (error)
                        return "learners." + error;
                }
            }
            if (message.trackers != null && message.hasOwnProperty("trackers")) {
                if (!Array.isArray(message.trackers))
                    return "trackers: array expected";
                for (let i = 0; i < message.trackers.length; ++i) {
                    let error = $root.dto.TeamLearnerResponse.PersonShortInfo.verify(message.trackers[i]);
                    if (error)
                        return "trackers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TeamLearnerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamLearnerResponse} TeamLearnerResponse
         */
        TeamLearnerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamLearnerResponse)
                return object;
            let message = new $root.dto.TeamLearnerResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.teamNumber != null)
                message.teamNumber = object.teamNumber | 0;
            if (object.projectTheme != null)
                message.projectTheme = String(object.projectTheme);
            if (object.learners) {
                if (!Array.isArray(object.learners))
                    throw TypeError(".dto.TeamLearnerResponse.learners: array expected");
                message.learners = [];
                for (let i = 0; i < object.learners.length; ++i) {
                    if (typeof object.learners[i] !== "object")
                        throw TypeError(".dto.TeamLearnerResponse.learners: object expected");
                    message.learners[i] = $root.dto.TeamLearnerResponse.PersonShortInfo.fromObject(object.learners[i]);
                }
            }
            if (object.trackers) {
                if (!Array.isArray(object.trackers))
                    throw TypeError(".dto.TeamLearnerResponse.trackers: array expected");
                message.trackers = [];
                for (let i = 0; i < object.trackers.length; ++i) {
                    if (typeof object.trackers[i] !== "object")
                        throw TypeError(".dto.TeamLearnerResponse.trackers: object expected");
                    message.trackers[i] = $root.dto.TeamLearnerResponse.PersonShortInfo.fromObject(object.trackers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamLearnerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {dto.TeamLearnerResponse} message TeamLearnerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamLearnerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.learners = [];
                object.trackers = [];
            }
            if (options.defaults) {
                object.id = "";
                object.teamNumber = 0;
                object.projectTheme = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.teamNumber != null && message.hasOwnProperty("teamNumber"))
                object.teamNumber = message.teamNumber;
            if (message.projectTheme != null && message.hasOwnProperty("projectTheme"))
                object.projectTheme = message.projectTheme;
            if (message.learners && message.learners.length) {
                object.learners = [];
                for (let j = 0; j < message.learners.length; ++j)
                    object.learners[j] = $root.dto.TeamLearnerResponse.PersonShortInfo.toObject(message.learners[j], options);
            }
            if (message.trackers && message.trackers.length) {
                object.trackers = [];
                for (let j = 0; j < message.trackers.length; ++j)
                    object.trackers[j] = $root.dto.TeamLearnerResponse.PersonShortInfo.toObject(message.trackers[j], options);
            }
            return object;
        };

        /**
         * Converts this TeamLearnerResponse to JSON.
         * @function toJSON
         * @memberof dto.TeamLearnerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamLearnerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamLearnerResponse
         * @function getTypeUrl
         * @memberof dto.TeamLearnerResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamLearnerResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamLearnerResponse";
        };

        TeamLearnerResponse.PersonShortInfo = (function() {

            /**
             * Properties of a PersonShortInfo.
             * @memberof dto.TeamLearnerResponse
             * @interface IPersonShortInfo
             * @property {string|null} [personId] PersonShortInfo personId
             * @property {string|null} [fullName] PersonShortInfo fullName
             * @property {string|null} [email] PersonShortInfo email
             * @property {string|null} [messenger] PersonShortInfo messenger
             */

            /**
             * Constructs a new PersonShortInfo.
             * @memberof dto.TeamLearnerResponse
             * @classdesc Represents a PersonShortInfo.
             * @implements IPersonShortInfo
             * @constructor
             * @param {dto.TeamLearnerResponse.IPersonShortInfo=} [properties] Properties to set
             */
            function PersonShortInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersonShortInfo personId.
             * @member {string} personId
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.personId = "";

            /**
             * PersonShortInfo fullName.
             * @member {string} fullName
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.fullName = "";

            /**
             * PersonShortInfo email.
             * @member {string} email
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.email = "";

            /**
             * PersonShortInfo messenger.
             * @member {string} messenger
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.messenger = "";

            /**
             * Creates a new PersonShortInfo instance using the specified properties.
             * @function create
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {dto.TeamLearnerResponse.IPersonShortInfo=} [properties] Properties to set
             * @returns {dto.TeamLearnerResponse.PersonShortInfo} PersonShortInfo instance
             */
            PersonShortInfo.create = function create(properties) {
                return new PersonShortInfo(properties);
            };

            /**
             * Encodes the specified PersonShortInfo message. Does not implicitly {@link dto.TeamLearnerResponse.PersonShortInfo.verify|verify} messages.
             * @function encode
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {dto.TeamLearnerResponse.IPersonShortInfo} message PersonShortInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonShortInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.personId != null && Object.hasOwnProperty.call(message, "personId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.personId);
                if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.fullName);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.messenger != null && Object.hasOwnProperty.call(message, "messenger"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.messenger);
                return writer;
            };

            /**
             * Encodes the specified PersonShortInfo message, length delimited. Does not implicitly {@link dto.TeamLearnerResponse.PersonShortInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {dto.TeamLearnerResponse.IPersonShortInfo} message PersonShortInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonShortInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer.
             * @function decode
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {dto.TeamLearnerResponse.PersonShortInfo} PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersonShortInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamLearnerResponse.PersonShortInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.personId = reader.string();
                            break;
                        }
                    case 2: {
                            message.fullName = reader.string();
                            break;
                        }
                    case 3: {
                            message.email = reader.string();
                            break;
                        }
                    case 4: {
                            message.messenger = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {dto.TeamLearnerResponse.PersonShortInfo} PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersonShortInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PersonShortInfo message.
             * @function verify
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PersonShortInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.personId != null && message.hasOwnProperty("personId"))
                    if (!$util.isString(message.personId))
                        return "personId: string expected";
                if (message.fullName != null && message.hasOwnProperty("fullName"))
                    if (!$util.isString(message.fullName))
                        return "fullName: string expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.messenger != null && message.hasOwnProperty("messenger"))
                    if (!$util.isString(message.messenger))
                        return "messenger: string expected";
                return null;
            };

            /**
             * Creates a PersonShortInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {dto.TeamLearnerResponse.PersonShortInfo} PersonShortInfo
             */
            PersonShortInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.dto.TeamLearnerResponse.PersonShortInfo)
                    return object;
                let message = new $root.dto.TeamLearnerResponse.PersonShortInfo();
                if (object.personId != null)
                    message.personId = String(object.personId);
                if (object.fullName != null)
                    message.fullName = String(object.fullName);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.messenger != null)
                    message.messenger = String(object.messenger);
                return message;
            };

            /**
             * Creates a plain object from a PersonShortInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {dto.TeamLearnerResponse.PersonShortInfo} message PersonShortInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersonShortInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.personId = "";
                    object.fullName = "";
                    object.email = "";
                    object.messenger = "";
                }
                if (message.personId != null && message.hasOwnProperty("personId"))
                    object.personId = message.personId;
                if (message.fullName != null && message.hasOwnProperty("fullName"))
                    object.fullName = message.fullName;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.messenger != null && message.hasOwnProperty("messenger"))
                    object.messenger = message.messenger;
                return object;
            };

            /**
             * Converts this PersonShortInfo to JSON.
             * @function toJSON
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PersonShortInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PersonShortInfo
             * @function getTypeUrl
             * @memberof dto.TeamLearnerResponse.PersonShortInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PersonShortInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/dto.TeamLearnerResponse.PersonShortInfo";
            };

            return PersonShortInfo;
        })();

        return TeamLearnerResponse;
    })();

    return dto;
})();

export { $root as default };
