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
     * LotStatus enum.
     * @name dto.LotStatus
     * @enum {number}
     * @property {number} APPROVAL=0 APPROVAL value
     * @property {number} ACTIVE=1 ACTIVE value
     * @property {number} INACTIVE=2 INACTIVE value
     */
    dto.LotStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "APPROVAL"] = 0;
        values[valuesById[1] = "ACTIVE"] = 1;
        values[valuesById[2] = "INACTIVE"] = 2;
        return values;
    })();

    dto.LotResponse = (function() {

        /**
         * Properties of a LotResponse.
         * @memberof dto
         * @interface ILotResponse
         * @property {number|null} [id] LotResponse id
         * @property {string|null} [number] LotResponse number
         * @property {string|null} [title] LotResponse title
         * @property {string|null} [description] LotResponse description
         * @property {string|null} [terms] LotResponse terms
         * @property {number|null} [price] LotResponse price
         * @property {dto.LotStatus|null} [status] LotResponse status
         * @property {string|null} [performer] LotResponse performer
         * @property {string|null} [date] LotResponse date
         */

        /**
         * Constructs a new LotResponse.
         * @memberof dto
         * @classdesc Represents a LotResponse.
         * @implements ILotResponse
         * @constructor
         * @param {dto.ILotResponse=} [properties] Properties to set
         */
        function LotResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LotResponse id.
         * @member {number} id
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.id = 0;

        /**
         * LotResponse number.
         * @member {string} number
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.number = "";

        /**
         * LotResponse title.
         * @member {string} title
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.title = "";

        /**
         * LotResponse description.
         * @member {string} description
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.description = "";

        /**
         * LotResponse terms.
         * @member {string} terms
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.terms = "";

        /**
         * LotResponse price.
         * @member {number} price
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.price = 0;

        /**
         * LotResponse status.
         * @member {dto.LotStatus} status
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.status = 0;

        /**
         * LotResponse performer.
         * @member {string} performer
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.performer = "";

        /**
         * LotResponse date.
         * @member {string} date
         * @memberof dto.LotResponse
         * @instance
         */
        LotResponse.prototype.date = "";

        /**
         * Creates a new LotResponse instance using the specified properties.
         * @function create
         * @memberof dto.LotResponse
         * @static
         * @param {dto.ILotResponse=} [properties] Properties to set
         * @returns {dto.LotResponse} LotResponse instance
         */
        LotResponse.create = function create(properties) {
            return new LotResponse(properties);
        };

        /**
         * Encodes the specified LotResponse message. Does not implicitly {@link dto.LotResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.LotResponse
         * @static
         * @param {dto.ILotResponse} message LotResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.number);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.terms != null && Object.hasOwnProperty.call(message, "terms"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.terms);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.price);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
            if (message.performer != null && Object.hasOwnProperty.call(message, "performer"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.performer);
            if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.date);
            return writer;
        };

        /**
         * Encodes the specified LotResponse message, length delimited. Does not implicitly {@link dto.LotResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.LotResponse
         * @static
         * @param {dto.ILotResponse} message LotResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LotResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.LotResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.LotResponse} LotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.LotResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.number = reader.string();
                        break;
                    }
                case 3: {
                        message.title = reader.string();
                        break;
                    }
                case 4: {
                        message.description = reader.string();
                        break;
                    }
                case 5: {
                        message.terms = reader.string();
                        break;
                    }
                case 6: {
                        message.price = reader.double();
                        break;
                    }
                case 7: {
                        message.status = reader.int32();
                        break;
                    }
                case 8: {
                        message.performer = reader.string();
                        break;
                    }
                case 9: {
                        message.date = reader.string();
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
         * Decodes a LotResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.LotResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.LotResponse} LotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LotResponse message.
         * @function verify
         * @memberof dto.LotResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LotResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isString(message.number))
                    return "number: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.terms != null && message.hasOwnProperty("terms"))
                if (!$util.isString(message.terms))
                    return "terms: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.performer != null && message.hasOwnProperty("performer"))
                if (!$util.isString(message.performer))
                    return "performer: string expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isString(message.date))
                    return "date: string expected";
            return null;
        };

        /**
         * Creates a LotResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.LotResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.LotResponse} LotResponse
         */
        LotResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.LotResponse)
                return object;
            let message = new $root.dto.LotResponse();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.number != null)
                message.number = String(object.number);
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.terms != null)
                message.terms = String(object.terms);
            if (object.price != null)
                message.price = Number(object.price);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "APPROVAL":
            case 0:
                message.status = 0;
                break;
            case "ACTIVE":
            case 1:
                message.status = 1;
                break;
            case "INACTIVE":
            case 2:
                message.status = 2;
                break;
            }
            if (object.performer != null)
                message.performer = String(object.performer);
            if (object.date != null)
                message.date = String(object.date);
            return message;
        };

        /**
         * Creates a plain object from a LotResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.LotResponse
         * @static
         * @param {dto.LotResponse} message LotResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LotResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.number = "";
                object.title = "";
                object.description = "";
                object.terms = "";
                object.price = 0;
                object.status = options.enums === String ? "APPROVAL" : 0;
                object.performer = "";
                object.date = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.terms != null && message.hasOwnProperty("terms"))
                object.terms = message.terms;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.dto.LotStatus[message.status] === undefined ? message.status : $root.dto.LotStatus[message.status] : message.status;
            if (message.performer != null && message.hasOwnProperty("performer"))
                object.performer = message.performer;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            return object;
        };

        /**
         * Converts this LotResponse to JSON.
         * @function toJSON
         * @memberof dto.LotResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LotResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LotResponse
         * @function getTypeUrl
         * @memberof dto.LotResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LotResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.LotResponse";
        };

        return LotResponse;
    })();

    dto.LotShort = (function() {

        /**
         * Properties of a LotShort.
         * @memberof dto
         * @interface ILotShort
         * @property {number|null} [id] LotShort id
         * @property {string|null} [number] LotShort number
         * @property {string|null} [title] LotShort title
         * @property {string|null} [performer] LotShort performer
         * @property {number|null} [price] LotShort price
         */

        /**
         * Constructs a new LotShort.
         * @memberof dto
         * @classdesc Represents a LotShort.
         * @implements ILotShort
         * @constructor
         * @param {dto.ILotShort=} [properties] Properties to set
         */
        function LotShort(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LotShort id.
         * @member {number} id
         * @memberof dto.LotShort
         * @instance
         */
        LotShort.prototype.id = 0;

        /**
         * LotShort number.
         * @member {string} number
         * @memberof dto.LotShort
         * @instance
         */
        LotShort.prototype.number = "";

        /**
         * LotShort title.
         * @member {string} title
         * @memberof dto.LotShort
         * @instance
         */
        LotShort.prototype.title = "";

        /**
         * LotShort performer.
         * @member {string} performer
         * @memberof dto.LotShort
         * @instance
         */
        LotShort.prototype.performer = "";

        /**
         * LotShort price.
         * @member {number} price
         * @memberof dto.LotShort
         * @instance
         */
        LotShort.prototype.price = 0;

        /**
         * Creates a new LotShort instance using the specified properties.
         * @function create
         * @memberof dto.LotShort
         * @static
         * @param {dto.ILotShort=} [properties] Properties to set
         * @returns {dto.LotShort} LotShort instance
         */
        LotShort.create = function create(properties) {
            return new LotShort(properties);
        };

        /**
         * Encodes the specified LotShort message. Does not implicitly {@link dto.LotShort.verify|verify} messages.
         * @function encode
         * @memberof dto.LotShort
         * @static
         * @param {dto.ILotShort} message LotShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotShort.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.number);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.performer != null && Object.hasOwnProperty.call(message, "performer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.performer);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.price);
            return writer;
        };

        /**
         * Encodes the specified LotShort message, length delimited. Does not implicitly {@link dto.LotShort.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.LotShort
         * @static
         * @param {dto.ILotShort} message LotShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotShort.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LotShort message from the specified reader or buffer.
         * @function decode
         * @memberof dto.LotShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.LotShort} LotShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotShort.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.LotShort();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.number = reader.string();
                        break;
                    }
                case 3: {
                        message.title = reader.string();
                        break;
                    }
                case 4: {
                        message.performer = reader.string();
                        break;
                    }
                case 5: {
                        message.price = reader.double();
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
         * Decodes a LotShort message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.LotShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.LotShort} LotShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotShort.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LotShort message.
         * @function verify
         * @memberof dto.LotShort
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LotShort.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isString(message.number))
                    return "number: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.performer != null && message.hasOwnProperty("performer"))
                if (!$util.isString(message.performer))
                    return "performer: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            return null;
        };

        /**
         * Creates a LotShort message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.LotShort
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.LotShort} LotShort
         */
        LotShort.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.LotShort)
                return object;
            let message = new $root.dto.LotShort();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.number != null)
                message.number = String(object.number);
            if (object.title != null)
                message.title = String(object.title);
            if (object.performer != null)
                message.performer = String(object.performer);
            if (object.price != null)
                message.price = Number(object.price);
            return message;
        };

        /**
         * Creates a plain object from a LotShort message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.LotShort
         * @static
         * @param {dto.LotShort} message LotShort
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LotShort.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.number = "";
                object.title = "";
                object.performer = "";
                object.price = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.performer != null && message.hasOwnProperty("performer"))
                object.performer = message.performer;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            return object;
        };

        /**
         * Converts this LotShort to JSON.
         * @function toJSON
         * @memberof dto.LotShort
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LotShort.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LotShort
         * @function getTypeUrl
         * @memberof dto.LotShort
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LotShort.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.LotShort";
        };

        return LotShort;
    })();

    dto.LotsShortResponse = (function() {

        /**
         * Properties of a LotsShortResponse.
         * @memberof dto
         * @interface ILotsShortResponse
         * @property {number|null} [totalLotsNumber] LotsShortResponse totalLotsNumber
         * @property {Array.<dto.ILotShort>|null} [lots] LotsShortResponse lots
         */

        /**
         * Constructs a new LotsShortResponse.
         * @memberof dto
         * @classdesc Represents a LotsShortResponse.
         * @implements ILotsShortResponse
         * @constructor
         * @param {dto.ILotsShortResponse=} [properties] Properties to set
         */
        function LotsShortResponse(properties) {
            this.lots = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LotsShortResponse totalLotsNumber.
         * @member {number} totalLotsNumber
         * @memberof dto.LotsShortResponse
         * @instance
         */
        LotsShortResponse.prototype.totalLotsNumber = 0;

        /**
         * LotsShortResponse lots.
         * @member {Array.<dto.ILotShort>} lots
         * @memberof dto.LotsShortResponse
         * @instance
         */
        LotsShortResponse.prototype.lots = $util.emptyArray;

        /**
         * Creates a new LotsShortResponse instance using the specified properties.
         * @function create
         * @memberof dto.LotsShortResponse
         * @static
         * @param {dto.ILotsShortResponse=} [properties] Properties to set
         * @returns {dto.LotsShortResponse} LotsShortResponse instance
         */
        LotsShortResponse.create = function create(properties) {
            return new LotsShortResponse(properties);
        };

        /**
         * Encodes the specified LotsShortResponse message. Does not implicitly {@link dto.LotsShortResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.LotsShortResponse
         * @static
         * @param {dto.ILotsShortResponse} message LotsShortResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotsShortResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalLotsNumber != null && Object.hasOwnProperty.call(message, "totalLotsNumber"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalLotsNumber);
            if (message.lots != null && message.lots.length)
                for (let i = 0; i < message.lots.length; ++i)
                    $root.dto.LotShort.encode(message.lots[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LotsShortResponse message, length delimited. Does not implicitly {@link dto.LotsShortResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.LotsShortResponse
         * @static
         * @param {dto.ILotsShortResponse} message LotsShortResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotsShortResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LotsShortResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.LotsShortResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.LotsShortResponse} LotsShortResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotsShortResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.LotsShortResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.totalLotsNumber = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.lots && message.lots.length))
                            message.lots = [];
                        message.lots.push($root.dto.LotShort.decode(reader, reader.uint32()));
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
         * Decodes a LotsShortResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.LotsShortResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.LotsShortResponse} LotsShortResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotsShortResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LotsShortResponse message.
         * @function verify
         * @memberof dto.LotsShortResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LotsShortResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalLotsNumber != null && message.hasOwnProperty("totalLotsNumber"))
                if (!$util.isInteger(message.totalLotsNumber))
                    return "totalLotsNumber: integer expected";
            if (message.lots != null && message.hasOwnProperty("lots")) {
                if (!Array.isArray(message.lots))
                    return "lots: array expected";
                for (let i = 0; i < message.lots.length; ++i) {
                    let error = $root.dto.LotShort.verify(message.lots[i]);
                    if (error)
                        return "lots." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LotsShortResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.LotsShortResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.LotsShortResponse} LotsShortResponse
         */
        LotsShortResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.LotsShortResponse)
                return object;
            let message = new $root.dto.LotsShortResponse();
            if (object.totalLotsNumber != null)
                message.totalLotsNumber = object.totalLotsNumber | 0;
            if (object.lots) {
                if (!Array.isArray(object.lots))
                    throw TypeError(".dto.LotsShortResponse.lots: array expected");
                message.lots = [];
                for (let i = 0; i < object.lots.length; ++i) {
                    if (typeof object.lots[i] !== "object")
                        throw TypeError(".dto.LotsShortResponse.lots: object expected");
                    message.lots[i] = $root.dto.LotShort.fromObject(object.lots[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LotsShortResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.LotsShortResponse
         * @static
         * @param {dto.LotsShortResponse} message LotsShortResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LotsShortResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lots = [];
            if (options.defaults)
                object.totalLotsNumber = 0;
            if (message.totalLotsNumber != null && message.hasOwnProperty("totalLotsNumber"))
                object.totalLotsNumber = message.totalLotsNumber;
            if (message.lots && message.lots.length) {
                object.lots = [];
                for (let j = 0; j < message.lots.length; ++j)
                    object.lots[j] = $root.dto.LotShort.toObject(message.lots[j], options);
            }
            return object;
        };

        /**
         * Converts this LotsShortResponse to JSON.
         * @function toJSON
         * @memberof dto.LotsShortResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LotsShortResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LotsShortResponse
         * @function getTypeUrl
         * @memberof dto.LotsShortResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LotsShortResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.LotsShortResponse";
        };

        return LotsShortResponse;
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

    dto.AccountGetResponse = (function() {

        /**
         * Properties of an AccountGetResponse.
         * @memberof dto
         * @interface IAccountGetResponse
         * @property {string|null} [id] AccountGetResponse id
         * @property {string|null} [name] AccountGetResponse name
         * @property {string|null} [surname] AccountGetResponse surname
         * @property {string|null} [lastName] AccountGetResponse lastName
         * @property {string|null} [email] AccountGetResponse email
         * @property {string|null} [phone] AccountGetResponse phone
         * @property {string|null} [messenger] AccountGetResponse messenger
         * @property {dto.Role|null} [role] AccountGetResponse role
         */

        /**
         * Constructs a new AccountGetResponse.
         * @memberof dto
         * @classdesc Represents an AccountGetResponse.
         * @implements IAccountGetResponse
         * @constructor
         * @param {dto.IAccountGetResponse=} [properties] Properties to set
         */
        function AccountGetResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountGetResponse id.
         * @member {string} id
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.id = "";

        /**
         * AccountGetResponse name.
         * @member {string} name
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.name = "";

        /**
         * AccountGetResponse surname.
         * @member {string} surname
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.surname = "";

        /**
         * AccountGetResponse lastName.
         * @member {string} lastName
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.lastName = "";

        /**
         * AccountGetResponse email.
         * @member {string} email
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.email = "";

        /**
         * AccountGetResponse phone.
         * @member {string} phone
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.phone = "";

        /**
         * AccountGetResponse messenger.
         * @member {string} messenger
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.messenger = "";

        /**
         * AccountGetResponse role.
         * @member {dto.Role} role
         * @memberof dto.AccountGetResponse
         * @instance
         */
        AccountGetResponse.prototype.role = 0;

        /**
         * Creates a new AccountGetResponse instance using the specified properties.
         * @function create
         * @memberof dto.AccountGetResponse
         * @static
         * @param {dto.IAccountGetResponse=} [properties] Properties to set
         * @returns {dto.AccountGetResponse} AccountGetResponse instance
         */
        AccountGetResponse.create = function create(properties) {
            return new AccountGetResponse(properties);
        };

        /**
         * Encodes the specified AccountGetResponse message. Does not implicitly {@link dto.AccountGetResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountGetResponse
         * @static
         * @param {dto.IAccountGetResponse} message AccountGetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountGetResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.surname != null && Object.hasOwnProperty.call(message, "surname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.surname);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lastName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone);
            if (message.messenger != null && Object.hasOwnProperty.call(message, "messenger"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.messenger);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.role);
            return writer;
        };

        /**
         * Encodes the specified AccountGetResponse message, length delimited. Does not implicitly {@link dto.AccountGetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountGetResponse
         * @static
         * @param {dto.IAccountGetResponse} message AccountGetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountGetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountGetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountGetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountGetResponse} AccountGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountGetResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountGetResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.surname = reader.string();
                        break;
                    }
                case 4: {
                        message.lastName = reader.string();
                        break;
                    }
                case 5: {
                        message.email = reader.string();
                        break;
                    }
                case 6: {
                        message.phone = reader.string();
                        break;
                    }
                case 7: {
                        message.messenger = reader.string();
                        break;
                    }
                case 8: {
                        message.role = reader.int32();
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
         * Decodes an AccountGetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountGetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountGetResponse} AccountGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountGetResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountGetResponse message.
         * @function verify
         * @memberof dto.AccountGetResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountGetResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.surname != null && message.hasOwnProperty("surname"))
                if (!$util.isString(message.surname))
                    return "surname: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                if (!$util.isString(message.messenger))
                    return "messenger: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates an AccountGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountGetResponse} AccountGetResponse
         */
        AccountGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountGetResponse)
                return object;
            let message = new $root.dto.AccountGetResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.surname != null)
                message.surname = String(object.surname);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.messenger != null)
                message.messenger = String(object.messenger);
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
            return message;
        };

        /**
         * Creates a plain object from an AccountGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountGetResponse
         * @static
         * @param {dto.AccountGetResponse} message AccountGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.surname = "";
                object.lastName = "";
                object.email = "";
                object.phone = "";
                object.messenger = "";
                object.role = options.enums === String ? "ADMIN" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.surname != null && message.hasOwnProperty("surname"))
                object.surname = message.surname;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                object.messenger = message.messenger;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.dto.Role[message.role] === undefined ? message.role : $root.dto.Role[message.role] : message.role;
            return object;
        };

        /**
         * Converts this AccountGetResponse to JSON.
         * @function toJSON
         * @memberof dto.AccountGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountGetResponse
         * @function getTypeUrl
         * @memberof dto.AccountGetResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountGetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountGetResponse";
        };

        return AccountGetResponse;
    })();

    dto.AccountCreateRequest = (function() {

        /**
         * Properties of an AccountCreateRequest.
         * @memberof dto
         * @interface IAccountCreateRequest
         * @property {string|null} [name] AccountCreateRequest name
         * @property {string|null} [surname] AccountCreateRequest surname
         * @property {string|null} [lastName] AccountCreateRequest lastName
         * @property {string|null} [email] AccountCreateRequest email
         * @property {string|null} [phone] AccountCreateRequest phone
         * @property {string|null} [messenger] AccountCreateRequest messenger
         * @property {dto.Role|null} [role] AccountCreateRequest role
         * @property {string|null} [password] AccountCreateRequest password
         */

        /**
         * Constructs a new AccountCreateRequest.
         * @memberof dto
         * @classdesc Represents an AccountCreateRequest.
         * @implements IAccountCreateRequest
         * @constructor
         * @param {dto.IAccountCreateRequest=} [properties] Properties to set
         */
        function AccountCreateRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountCreateRequest name.
         * @member {string} name
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.name = "";

        /**
         * AccountCreateRequest surname.
         * @member {string} surname
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.surname = "";

        /**
         * AccountCreateRequest lastName.
         * @member {string} lastName
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.lastName = "";

        /**
         * AccountCreateRequest email.
         * @member {string} email
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.email = "";

        /**
         * AccountCreateRequest phone.
         * @member {string} phone
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.phone = "";

        /**
         * AccountCreateRequest messenger.
         * @member {string} messenger
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.messenger = "";

        /**
         * AccountCreateRequest role.
         * @member {dto.Role} role
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.role = 0;

        /**
         * AccountCreateRequest password.
         * @member {string} password
         * @memberof dto.AccountCreateRequest
         * @instance
         */
        AccountCreateRequest.prototype.password = "";

        /**
         * Creates a new AccountCreateRequest instance using the specified properties.
         * @function create
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {dto.IAccountCreateRequest=} [properties] Properties to set
         * @returns {dto.AccountCreateRequest} AccountCreateRequest instance
         */
        AccountCreateRequest.create = function create(properties) {
            return new AccountCreateRequest(properties);
        };

        /**
         * Encodes the specified AccountCreateRequest message. Does not implicitly {@link dto.AccountCreateRequest.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {dto.IAccountCreateRequest} message AccountCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountCreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.surname != null && Object.hasOwnProperty.call(message, "surname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.surname);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phone);
            if (message.messenger != null && Object.hasOwnProperty.call(message, "messenger"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.messenger);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.role);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified AccountCreateRequest message, length delimited. Does not implicitly {@link dto.AccountCreateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {dto.IAccountCreateRequest} message AccountCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountCreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountCreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountCreateRequest} AccountCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountCreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountCreateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.surname = reader.string();
                        break;
                    }
                case 3: {
                        message.lastName = reader.string();
                        break;
                    }
                case 4: {
                        message.email = reader.string();
                        break;
                    }
                case 5: {
                        message.phone = reader.string();
                        break;
                    }
                case 6: {
                        message.messenger = reader.string();
                        break;
                    }
                case 7: {
                        message.role = reader.int32();
                        break;
                    }
                case 8: {
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
         * Decodes an AccountCreateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountCreateRequest} AccountCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountCreateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountCreateRequest message.
         * @function verify
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountCreateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.surname != null && message.hasOwnProperty("surname"))
                if (!$util.isString(message.surname))
                    return "surname: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                if (!$util.isString(message.messenger))
                    return "messenger: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates an AccountCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountCreateRequest} AccountCreateRequest
         */
        AccountCreateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountCreateRequest)
                return object;
            let message = new $root.dto.AccountCreateRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.surname != null)
                message.surname = String(object.surname);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.messenger != null)
                message.messenger = String(object.messenger);
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
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from an AccountCreateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {dto.AccountCreateRequest} message AccountCreateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountCreateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.surname = "";
                object.lastName = "";
                object.email = "";
                object.phone = "";
                object.messenger = "";
                object.role = options.enums === String ? "ADMIN" : 0;
                object.password = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.surname != null && message.hasOwnProperty("surname"))
                object.surname = message.surname;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                object.messenger = message.messenger;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.dto.Role[message.role] === undefined ? message.role : $root.dto.Role[message.role] : message.role;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this AccountCreateRequest to JSON.
         * @function toJSON
         * @memberof dto.AccountCreateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountCreateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountCreateRequest
         * @function getTypeUrl
         * @memberof dto.AccountCreateRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountCreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountCreateRequest";
        };

        return AccountCreateRequest;
    })();

    dto.AccountEditRequest = (function() {

        /**
         * Properties of an AccountEditRequest.
         * @memberof dto
         * @interface IAccountEditRequest
         * @property {string|null} [name] AccountEditRequest name
         * @property {string|null} [surname] AccountEditRequest surname
         * @property {string|null} [lastName] AccountEditRequest lastName
         * @property {string|null} [email] AccountEditRequest email
         * @property {string|null} [phone] AccountEditRequest phone
         * @property {string|null} [messenger] AccountEditRequest messenger
         */

        /**
         * Constructs a new AccountEditRequest.
         * @memberof dto
         * @classdesc Represents an AccountEditRequest.
         * @implements IAccountEditRequest
         * @constructor
         * @param {dto.IAccountEditRequest=} [properties] Properties to set
         */
        function AccountEditRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountEditRequest name.
         * @member {string} name
         * @memberof dto.AccountEditRequest
         * @instance
         */
        AccountEditRequest.prototype.name = "";

        /**
         * AccountEditRequest surname.
         * @member {string} surname
         * @memberof dto.AccountEditRequest
         * @instance
         */
        AccountEditRequest.prototype.surname = "";

        /**
         * AccountEditRequest lastName.
         * @member {string} lastName
         * @memberof dto.AccountEditRequest
         * @instance
         */
        AccountEditRequest.prototype.lastName = "";

        /**
         * AccountEditRequest email.
         * @member {string} email
         * @memberof dto.AccountEditRequest
         * @instance
         */
        AccountEditRequest.prototype.email = "";

        /**
         * AccountEditRequest phone.
         * @member {string} phone
         * @memberof dto.AccountEditRequest
         * @instance
         */
        AccountEditRequest.prototype.phone = "";

        /**
         * AccountEditRequest messenger.
         * @member {string} messenger
         * @memberof dto.AccountEditRequest
         * @instance
         */
        AccountEditRequest.prototype.messenger = "";

        /**
         * Creates a new AccountEditRequest instance using the specified properties.
         * @function create
         * @memberof dto.AccountEditRequest
         * @static
         * @param {dto.IAccountEditRequest=} [properties] Properties to set
         * @returns {dto.AccountEditRequest} AccountEditRequest instance
         */
        AccountEditRequest.create = function create(properties) {
            return new AccountEditRequest(properties);
        };

        /**
         * Encodes the specified AccountEditRequest message. Does not implicitly {@link dto.AccountEditRequest.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountEditRequest
         * @static
         * @param {dto.IAccountEditRequest} message AccountEditRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountEditRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.surname != null && Object.hasOwnProperty.call(message, "surname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.surname);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phone);
            if (message.messenger != null && Object.hasOwnProperty.call(message, "messenger"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.messenger);
            return writer;
        };

        /**
         * Encodes the specified AccountEditRequest message, length delimited. Does not implicitly {@link dto.AccountEditRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountEditRequest
         * @static
         * @param {dto.IAccountEditRequest} message AccountEditRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountEditRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountEditRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountEditRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountEditRequest} AccountEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountEditRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountEditRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.surname = reader.string();
                        break;
                    }
                case 3: {
                        message.lastName = reader.string();
                        break;
                    }
                case 4: {
                        message.email = reader.string();
                        break;
                    }
                case 5: {
                        message.phone = reader.string();
                        break;
                    }
                case 6: {
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
         * Decodes an AccountEditRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountEditRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountEditRequest} AccountEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountEditRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountEditRequest message.
         * @function verify
         * @memberof dto.AccountEditRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountEditRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.surname != null && message.hasOwnProperty("surname"))
                if (!$util.isString(message.surname))
                    return "surname: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                if (!$util.isString(message.messenger))
                    return "messenger: string expected";
            return null;
        };

        /**
         * Creates an AccountEditRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountEditRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountEditRequest} AccountEditRequest
         */
        AccountEditRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountEditRequest)
                return object;
            let message = new $root.dto.AccountEditRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.surname != null)
                message.surname = String(object.surname);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.messenger != null)
                message.messenger = String(object.messenger);
            return message;
        };

        /**
         * Creates a plain object from an AccountEditRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountEditRequest
         * @static
         * @param {dto.AccountEditRequest} message AccountEditRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountEditRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.surname = "";
                object.lastName = "";
                object.email = "";
                object.phone = "";
                object.messenger = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.surname != null && message.hasOwnProperty("surname"))
                object.surname = message.surname;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.messenger != null && message.hasOwnProperty("messenger"))
                object.messenger = message.messenger;
            return object;
        };

        /**
         * Converts this AccountEditRequest to JSON.
         * @function toJSON
         * @memberof dto.AccountEditRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountEditRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountEditRequest
         * @function getTypeUrl
         * @memberof dto.AccountEditRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountEditRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountEditRequest";
        };

        return AccountEditRequest;
    })();

    dto.AccountChangeSuccessResponse = (function() {

        /**
         * Properties of an AccountChangeSuccessResponse.
         * @memberof dto
         * @interface IAccountChangeSuccessResponse
         * @property {string|null} [id] AccountChangeSuccessResponse id
         */

        /**
         * Constructs a new AccountChangeSuccessResponse.
         * @memberof dto
         * @classdesc Represents an AccountChangeSuccessResponse.
         * @implements IAccountChangeSuccessResponse
         * @constructor
         * @param {dto.IAccountChangeSuccessResponse=} [properties] Properties to set
         */
        function AccountChangeSuccessResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountChangeSuccessResponse id.
         * @member {string} id
         * @memberof dto.AccountChangeSuccessResponse
         * @instance
         */
        AccountChangeSuccessResponse.prototype.id = "";

        /**
         * Creates a new AccountChangeSuccessResponse instance using the specified properties.
         * @function create
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {dto.IAccountChangeSuccessResponse=} [properties] Properties to set
         * @returns {dto.AccountChangeSuccessResponse} AccountChangeSuccessResponse instance
         */
        AccountChangeSuccessResponse.create = function create(properties) {
            return new AccountChangeSuccessResponse(properties);
        };

        /**
         * Encodes the specified AccountChangeSuccessResponse message. Does not implicitly {@link dto.AccountChangeSuccessResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {dto.IAccountChangeSuccessResponse} message AccountChangeSuccessResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountChangeSuccessResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AccountChangeSuccessResponse message, length delimited. Does not implicitly {@link dto.AccountChangeSuccessResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {dto.IAccountChangeSuccessResponse} message AccountChangeSuccessResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountChangeSuccessResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountChangeSuccessResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountChangeSuccessResponse} AccountChangeSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountChangeSuccessResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountChangeSuccessResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
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
         * Decodes an AccountChangeSuccessResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountChangeSuccessResponse} AccountChangeSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountChangeSuccessResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountChangeSuccessResponse message.
         * @function verify
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountChangeSuccessResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AccountChangeSuccessResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountChangeSuccessResponse} AccountChangeSuccessResponse
         */
        AccountChangeSuccessResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountChangeSuccessResponse)
                return object;
            let message = new $root.dto.AccountChangeSuccessResponse();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AccountChangeSuccessResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {dto.AccountChangeSuccessResponse} message AccountChangeSuccessResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountChangeSuccessResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AccountChangeSuccessResponse to JSON.
         * @function toJSON
         * @memberof dto.AccountChangeSuccessResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountChangeSuccessResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountChangeSuccessResponse
         * @function getTypeUrl
         * @memberof dto.AccountChangeSuccessResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountChangeSuccessResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountChangeSuccessResponse";
        };

        return AccountChangeSuccessResponse;
    })();

    dto.AccountChangeErrorResponse = (function() {

        /**
         * Properties of an AccountChangeErrorResponse.
         * @memberof dto
         * @interface IAccountChangeErrorResponse
         * @property {boolean|null} [email] AccountChangeErrorResponse email
         * @property {boolean|null} [phone] AccountChangeErrorResponse phone
         */

        /**
         * Constructs a new AccountChangeErrorResponse.
         * @memberof dto
         * @classdesc Represents an AccountChangeErrorResponse.
         * @implements IAccountChangeErrorResponse
         * @constructor
         * @param {dto.IAccountChangeErrorResponse=} [properties] Properties to set
         */
        function AccountChangeErrorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountChangeErrorResponse email.
         * @member {boolean} email
         * @memberof dto.AccountChangeErrorResponse
         * @instance
         */
        AccountChangeErrorResponse.prototype.email = false;

        /**
         * AccountChangeErrorResponse phone.
         * @member {boolean} phone
         * @memberof dto.AccountChangeErrorResponse
         * @instance
         */
        AccountChangeErrorResponse.prototype.phone = false;

        /**
         * Creates a new AccountChangeErrorResponse instance using the specified properties.
         * @function create
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {dto.IAccountChangeErrorResponse=} [properties] Properties to set
         * @returns {dto.AccountChangeErrorResponse} AccountChangeErrorResponse instance
         */
        AccountChangeErrorResponse.create = function create(properties) {
            return new AccountChangeErrorResponse(properties);
        };

        /**
         * Encodes the specified AccountChangeErrorResponse message. Does not implicitly {@link dto.AccountChangeErrorResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {dto.IAccountChangeErrorResponse} message AccountChangeErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountChangeErrorResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.phone);
            return writer;
        };

        /**
         * Encodes the specified AccountChangeErrorResponse message, length delimited. Does not implicitly {@link dto.AccountChangeErrorResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {dto.IAccountChangeErrorResponse} message AccountChangeErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountChangeErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountChangeErrorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountChangeErrorResponse} AccountChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountChangeErrorResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountChangeErrorResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.email = reader.bool();
                        break;
                    }
                case 2: {
                        message.phone = reader.bool();
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
         * Decodes an AccountChangeErrorResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountChangeErrorResponse} AccountChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountChangeErrorResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountChangeErrorResponse message.
         * @function verify
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountChangeErrorResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (typeof message.email !== "boolean")
                    return "email: boolean expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (typeof message.phone !== "boolean")
                    return "phone: boolean expected";
            return null;
        };

        /**
         * Creates an AccountChangeErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountChangeErrorResponse} AccountChangeErrorResponse
         */
        AccountChangeErrorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountChangeErrorResponse)
                return object;
            let message = new $root.dto.AccountChangeErrorResponse();
            if (object.email != null)
                message.email = Boolean(object.email);
            if (object.phone != null)
                message.phone = Boolean(object.phone);
            return message;
        };

        /**
         * Creates a plain object from an AccountChangeErrorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {dto.AccountChangeErrorResponse} message AccountChangeErrorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountChangeErrorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.email = false;
                object.phone = false;
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this AccountChangeErrorResponse to JSON.
         * @function toJSON
         * @memberof dto.AccountChangeErrorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountChangeErrorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountChangeErrorResponse
         * @function getTypeUrl
         * @memberof dto.AccountChangeErrorResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountChangeErrorResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountChangeErrorResponse";
        };

        return AccountChangeErrorResponse;
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
