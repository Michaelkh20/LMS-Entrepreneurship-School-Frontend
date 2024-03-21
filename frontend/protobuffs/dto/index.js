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

    dto.TeamShort = (function() {

        /**
         * Properties of a TeamShort.
         * @memberof dto
         * @interface ITeamShort
         * @property {string|null} [id] TeamShort id
         * @property {number|null} [number] TeamShort number
         */

        /**
         * Constructs a new TeamShort.
         * @memberof dto
         * @classdesc Represents a TeamShort.
         * @implements ITeamShort
         * @constructor
         * @param {dto.ITeamShort=} [properties] Properties to set
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
         * @memberof dto.TeamShort
         * @instance
         */
        TeamShort.prototype.id = "";

        /**
         * TeamShort number.
         * @member {number} number
         * @memberof dto.TeamShort
         * @instance
         */
        TeamShort.prototype.number = 0;

        /**
         * Creates a new TeamShort instance using the specified properties.
         * @function create
         * @memberof dto.TeamShort
         * @static
         * @param {dto.ITeamShort=} [properties] Properties to set
         * @returns {dto.TeamShort} TeamShort instance
         */
        TeamShort.create = function create(properties) {
            return new TeamShort(properties);
        };

        /**
         * Encodes the specified TeamShort message. Does not implicitly {@link dto.TeamShort.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamShort
         * @static
         * @param {dto.ITeamShort} message TeamShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamShort.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            return writer;
        };

        /**
         * Encodes the specified TeamShort message, length delimited. Does not implicitly {@link dto.TeamShort.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamShort
         * @static
         * @param {dto.ITeamShort} message TeamShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamShort.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamShort message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamShort} TeamShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamShort.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamShort();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.number = reader.int32();
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
         * @memberof dto.TeamShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamShort} TeamShort
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
         * @memberof dto.TeamShort
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
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            return null;
        };

        /**
         * Creates a TeamShort message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamShort
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamShort} TeamShort
         */
        TeamShort.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamShort)
                return object;
            let message = new $root.dto.TeamShort();
            if (object.id != null)
                message.id = String(object.id);
            if (object.number != null)
                message.number = object.number | 0;
            return message;
        };

        /**
         * Creates a plain object from a TeamShort message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamShort
         * @static
         * @param {dto.TeamShort} message TeamShort
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamShort.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.number = 0;
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
         * @memberof dto.TeamShort
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamShort.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamShort
         * @function getTypeUrl
         * @memberof dto.TeamShort
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamShort.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamShort";
        };

        return TeamShort;
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
         * @property {dto.ITeamShort|null} [team] ProfileResponse team
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
         * @member {dto.ITeamShort|null|undefined} team
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
                $root.dto.TeamShort.encode(message.team, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
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
                        message.team = $root.dto.TeamShort.decode(reader, reader.uint32());
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
                let error = $root.dto.TeamShort.verify(message.team);
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
                message.team = $root.dto.TeamShort.fromObject(object.team);
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
                object.team = $root.dto.TeamShort.toObject(message.team, options);
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

    dto.AccountListElem = (function() {

        /**
         * Properties of an AccountListElem.
         * @memberof dto
         * @interface IAccountListElem
         * @property {string|null} [id] AccountListElem id
         * @property {string|null} [partName] AccountListElem partName
         * @property {string|null} [email] AccountListElem email
         * @property {dto.ITeamShort|null} [teamShort] AccountListElem teamShort
         * @property {dto.Role|null} [role] AccountListElem role
         * @property {number|null} [balance] AccountListElem balance
         */

        /**
         * Constructs a new AccountListElem.
         * @memberof dto
         * @classdesc Represents an AccountListElem.
         * @implements IAccountListElem
         * @constructor
         * @param {dto.IAccountListElem=} [properties] Properties to set
         */
        function AccountListElem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountListElem id.
         * @member {string} id
         * @memberof dto.AccountListElem
         * @instance
         */
        AccountListElem.prototype.id = "";

        /**
         * AccountListElem partName.
         * @member {string} partName
         * @memberof dto.AccountListElem
         * @instance
         */
        AccountListElem.prototype.partName = "";

        /**
         * AccountListElem email.
         * @member {string} email
         * @memberof dto.AccountListElem
         * @instance
         */
        AccountListElem.prototype.email = "";

        /**
         * AccountListElem teamShort.
         * @member {dto.ITeamShort|null|undefined} teamShort
         * @memberof dto.AccountListElem
         * @instance
         */
        AccountListElem.prototype.teamShort = null;

        /**
         * AccountListElem role.
         * @member {dto.Role} role
         * @memberof dto.AccountListElem
         * @instance
         */
        AccountListElem.prototype.role = 0;

        /**
         * AccountListElem balance.
         * @member {number} balance
         * @memberof dto.AccountListElem
         * @instance
         */
        AccountListElem.prototype.balance = 0;

        /**
         * Creates a new AccountListElem instance using the specified properties.
         * @function create
         * @memberof dto.AccountListElem
         * @static
         * @param {dto.IAccountListElem=} [properties] Properties to set
         * @returns {dto.AccountListElem} AccountListElem instance
         */
        AccountListElem.create = function create(properties) {
            return new AccountListElem(properties);
        };

        /**
         * Encodes the specified AccountListElem message. Does not implicitly {@link dto.AccountListElem.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountListElem
         * @static
         * @param {dto.IAccountListElem} message AccountListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountListElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.partName != null && Object.hasOwnProperty.call(message, "partName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.partName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.teamShort != null && Object.hasOwnProperty.call(message, "teamShort"))
                $root.dto.TeamShort.encode(message.teamShort, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.role);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.balance);
            return writer;
        };

        /**
         * Encodes the specified AccountListElem message, length delimited. Does not implicitly {@link dto.AccountListElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountListElem
         * @static
         * @param {dto.IAccountListElem} message AccountListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountListElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountListElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountListElem} AccountListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountListElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountListElem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.partName = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.teamShort = $root.dto.TeamShort.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.role = reader.int32();
                        break;
                    }
                case 6: {
                        message.balance = reader.int32();
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
         * Decodes an AccountListElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountListElem} AccountListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountListElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountListElem message.
         * @function verify
         * @memberof dto.AccountListElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountListElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.partName != null && message.hasOwnProperty("partName"))
                if (!$util.isString(message.partName))
                    return "partName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.teamShort != null && message.hasOwnProperty("teamShort")) {
                let error = $root.dto.TeamShort.verify(message.teamShort);
                if (error)
                    return "teamShort." + error;
            }
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance))
                    return "balance: integer expected";
            return null;
        };

        /**
         * Creates an AccountListElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountListElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountListElem} AccountListElem
         */
        AccountListElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountListElem)
                return object;
            let message = new $root.dto.AccountListElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.partName != null)
                message.partName = String(object.partName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.teamShort != null) {
                if (typeof object.teamShort !== "object")
                    throw TypeError(".dto.AccountListElem.teamShort: object expected");
                message.teamShort = $root.dto.TeamShort.fromObject(object.teamShort);
            }
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
            if (object.balance != null)
                message.balance = object.balance | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccountListElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountListElem
         * @static
         * @param {dto.AccountListElem} message AccountListElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountListElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.partName = "";
                object.email = "";
                object.teamShort = null;
                object.role = options.enums === String ? "ADMIN" : 0;
                object.balance = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.partName != null && message.hasOwnProperty("partName"))
                object.partName = message.partName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.teamShort != null && message.hasOwnProperty("teamShort"))
                object.teamShort = $root.dto.TeamShort.toObject(message.teamShort, options);
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.dto.Role[message.role] === undefined ? message.role : $root.dto.Role[message.role] : message.role;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = message.balance;
            return object;
        };

        /**
         * Converts this AccountListElem to JSON.
         * @function toJSON
         * @memberof dto.AccountListElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountListElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountListElem
         * @function getTypeUrl
         * @memberof dto.AccountListElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountListElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountListElem";
        };

        return AccountListElem;
    })();

    dto.AccountListResponse = (function() {

        /**
         * Properties of an AccountListResponse.
         * @memberof dto
         * @interface IAccountListResponse
         * @property {number|null} [totalElems] AccountListResponse totalElems
         * @property {Array.<dto.IAccountListElem>|null} [accountList] AccountListResponse accountList
         */

        /**
         * Constructs a new AccountListResponse.
         * @memberof dto
         * @classdesc Represents an AccountListResponse.
         * @implements IAccountListResponse
         * @constructor
         * @param {dto.IAccountListResponse=} [properties] Properties to set
         */
        function AccountListResponse(properties) {
            this.accountList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountListResponse totalElems.
         * @member {number} totalElems
         * @memberof dto.AccountListResponse
         * @instance
         */
        AccountListResponse.prototype.totalElems = 0;

        /**
         * AccountListResponse accountList.
         * @member {Array.<dto.IAccountListElem>} accountList
         * @memberof dto.AccountListResponse
         * @instance
         */
        AccountListResponse.prototype.accountList = $util.emptyArray;

        /**
         * Creates a new AccountListResponse instance using the specified properties.
         * @function create
         * @memberof dto.AccountListResponse
         * @static
         * @param {dto.IAccountListResponse=} [properties] Properties to set
         * @returns {dto.AccountListResponse} AccountListResponse instance
         */
        AccountListResponse.create = function create(properties) {
            return new AccountListResponse(properties);
        };

        /**
         * Encodes the specified AccountListResponse message. Does not implicitly {@link dto.AccountListResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountListResponse
         * @static
         * @param {dto.IAccountListResponse} message AccountListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalElems != null && Object.hasOwnProperty.call(message, "totalElems"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalElems);
            if (message.accountList != null && message.accountList.length)
                for (let i = 0; i < message.accountList.length; ++i)
                    $root.dto.AccountListElem.encode(message.accountList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccountListResponse message, length delimited. Does not implicitly {@link dto.AccountListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountListResponse
         * @static
         * @param {dto.IAccountListResponse} message AccountListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountListResponse} AccountListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.totalElems = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.accountList && message.accountList.length))
                            message.accountList = [];
                        message.accountList.push($root.dto.AccountListElem.decode(reader, reader.uint32()));
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
         * Decodes an AccountListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountListResponse} AccountListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountListResponse message.
         * @function verify
         * @memberof dto.AccountListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalElems != null && message.hasOwnProperty("totalElems"))
                if (!$util.isInteger(message.totalElems))
                    return "totalElems: integer expected";
            if (message.accountList != null && message.hasOwnProperty("accountList")) {
                if (!Array.isArray(message.accountList))
                    return "accountList: array expected";
                for (let i = 0; i < message.accountList.length; ++i) {
                    let error = $root.dto.AccountListElem.verify(message.accountList[i]);
                    if (error)
                        return "accountList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AccountListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountListResponse} AccountListResponse
         */
        AccountListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountListResponse)
                return object;
            let message = new $root.dto.AccountListResponse();
            if (object.totalElems != null)
                message.totalElems = object.totalElems | 0;
            if (object.accountList) {
                if (!Array.isArray(object.accountList))
                    throw TypeError(".dto.AccountListResponse.accountList: array expected");
                message.accountList = [];
                for (let i = 0; i < object.accountList.length; ++i) {
                    if (typeof object.accountList[i] !== "object")
                        throw TypeError(".dto.AccountListResponse.accountList: object expected");
                    message.accountList[i] = $root.dto.AccountListElem.fromObject(object.accountList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountListResponse
         * @static
         * @param {dto.AccountListResponse} message AccountListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accountList = [];
            if (options.defaults)
                object.totalElems = 0;
            if (message.totalElems != null && message.hasOwnProperty("totalElems"))
                object.totalElems = message.totalElems;
            if (message.accountList && message.accountList.length) {
                object.accountList = [];
                for (let j = 0; j < message.accountList.length; ++j)
                    object.accountList[j] = $root.dto.AccountListElem.toObject(message.accountList[j], options);
            }
            return object;
        };

        /**
         * Converts this AccountListResponse to JSON.
         * @function toJSON
         * @memberof dto.AccountListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountListResponse
         * @function getTypeUrl
         * @memberof dto.AccountListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountListResponse";
        };

        return AccountListResponse;
    })();

    dto.AccountShortListElem = (function() {

        /**
         * Properties of an AccountShortListElem.
         * @memberof dto
         * @interface IAccountShortListElem
         * @property {string|null} [id] AccountShortListElem id
         * @property {string|null} [fullName] AccountShortListElem fullName
         */

        /**
         * Constructs a new AccountShortListElem.
         * @memberof dto
         * @classdesc Represents an AccountShortListElem.
         * @implements IAccountShortListElem
         * @constructor
         * @param {dto.IAccountShortListElem=} [properties] Properties to set
         */
        function AccountShortListElem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountShortListElem id.
         * @member {string} id
         * @memberof dto.AccountShortListElem
         * @instance
         */
        AccountShortListElem.prototype.id = "";

        /**
         * AccountShortListElem fullName.
         * @member {string} fullName
         * @memberof dto.AccountShortListElem
         * @instance
         */
        AccountShortListElem.prototype.fullName = "";

        /**
         * Creates a new AccountShortListElem instance using the specified properties.
         * @function create
         * @memberof dto.AccountShortListElem
         * @static
         * @param {dto.IAccountShortListElem=} [properties] Properties to set
         * @returns {dto.AccountShortListElem} AccountShortListElem instance
         */
        AccountShortListElem.create = function create(properties) {
            return new AccountShortListElem(properties);
        };

        /**
         * Encodes the specified AccountShortListElem message. Does not implicitly {@link dto.AccountShortListElem.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountShortListElem
         * @static
         * @param {dto.IAccountShortListElem} message AccountShortListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountShortListElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fullName);
            return writer;
        };

        /**
         * Encodes the specified AccountShortListElem message, length delimited. Does not implicitly {@link dto.AccountShortListElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountShortListElem
         * @static
         * @param {dto.IAccountShortListElem} message AccountShortListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountShortListElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountShortListElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountShortListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountShortListElem} AccountShortListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountShortListElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountShortListElem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.fullName = reader.string();
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
         * Decodes an AccountShortListElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountShortListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountShortListElem} AccountShortListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountShortListElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountShortListElem message.
         * @function verify
         * @memberof dto.AccountShortListElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountShortListElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            return null;
        };

        /**
         * Creates an AccountShortListElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountShortListElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountShortListElem} AccountShortListElem
         */
        AccountShortListElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountShortListElem)
                return object;
            let message = new $root.dto.AccountShortListElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            return message;
        };

        /**
         * Creates a plain object from an AccountShortListElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountShortListElem
         * @static
         * @param {dto.AccountShortListElem} message AccountShortListElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountShortListElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.fullName = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            return object;
        };

        /**
         * Converts this AccountShortListElem to JSON.
         * @function toJSON
         * @memberof dto.AccountShortListElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountShortListElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountShortListElem
         * @function getTypeUrl
         * @memberof dto.AccountShortListElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountShortListElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountShortListElem";
        };

        return AccountShortListElem;
    })();

    dto.AccountShortListResponse = (function() {

        /**
         * Properties of an AccountShortListResponse.
         * @memberof dto
         * @interface IAccountShortListResponse
         * @property {Array.<dto.IAccountShortListElem>|null} [accountShortList] AccountShortListResponse accountShortList
         */

        /**
         * Constructs a new AccountShortListResponse.
         * @memberof dto
         * @classdesc Represents an AccountShortListResponse.
         * @implements IAccountShortListResponse
         * @constructor
         * @param {dto.IAccountShortListResponse=} [properties] Properties to set
         */
        function AccountShortListResponse(properties) {
            this.accountShortList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountShortListResponse accountShortList.
         * @member {Array.<dto.IAccountShortListElem>} accountShortList
         * @memberof dto.AccountShortListResponse
         * @instance
         */
        AccountShortListResponse.prototype.accountShortList = $util.emptyArray;

        /**
         * Creates a new AccountShortListResponse instance using the specified properties.
         * @function create
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {dto.IAccountShortListResponse=} [properties] Properties to set
         * @returns {dto.AccountShortListResponse} AccountShortListResponse instance
         */
        AccountShortListResponse.create = function create(properties) {
            return new AccountShortListResponse(properties);
        };

        /**
         * Encodes the specified AccountShortListResponse message. Does not implicitly {@link dto.AccountShortListResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {dto.IAccountShortListResponse} message AccountShortListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountShortListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountShortList != null && message.accountShortList.length)
                for (let i = 0; i < message.accountShortList.length; ++i)
                    $root.dto.AccountShortListElem.encode(message.accountShortList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccountShortListResponse message, length delimited. Does not implicitly {@link dto.AccountShortListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {dto.IAccountShortListResponse} message AccountShortListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountShortListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountShortListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AccountShortListResponse} AccountShortListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountShortListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AccountShortListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.accountShortList && message.accountShortList.length))
                            message.accountShortList = [];
                        message.accountShortList.push($root.dto.AccountShortListElem.decode(reader, reader.uint32()));
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
         * Decodes an AccountShortListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AccountShortListResponse} AccountShortListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountShortListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountShortListResponse message.
         * @function verify
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountShortListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountShortList != null && message.hasOwnProperty("accountShortList")) {
                if (!Array.isArray(message.accountShortList))
                    return "accountShortList: array expected";
                for (let i = 0; i < message.accountShortList.length; ++i) {
                    let error = $root.dto.AccountShortListElem.verify(message.accountShortList[i]);
                    if (error)
                        return "accountShortList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AccountShortListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AccountShortListResponse} AccountShortListResponse
         */
        AccountShortListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AccountShortListResponse)
                return object;
            let message = new $root.dto.AccountShortListResponse();
            if (object.accountShortList) {
                if (!Array.isArray(object.accountShortList))
                    throw TypeError(".dto.AccountShortListResponse.accountShortList: array expected");
                message.accountShortList = [];
                for (let i = 0; i < object.accountShortList.length; ++i) {
                    if (typeof object.accountShortList[i] !== "object")
                        throw TypeError(".dto.AccountShortListResponse.accountShortList: object expected");
                    message.accountShortList[i] = $root.dto.AccountShortListElem.fromObject(object.accountShortList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountShortListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {dto.AccountShortListResponse} message AccountShortListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountShortListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accountShortList = [];
            if (message.accountShortList && message.accountShortList.length) {
                object.accountShortList = [];
                for (let j = 0; j < message.accountShortList.length; ++j)
                    object.accountShortList[j] = $root.dto.AccountShortListElem.toObject(message.accountShortList[j], options);
            }
            return object;
        };

        /**
         * Converts this AccountShortListResponse to JSON.
         * @function toJSON
         * @memberof dto.AccountShortListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountShortListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountShortListResponse
         * @function getTypeUrl
         * @memberof dto.AccountShortListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountShortListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AccountShortListResponse";
        };

        return AccountShortListResponse;
    })();

    dto.TeamModalResponse = (function() {

        /**
         * Properties of a TeamModalResponse.
         * @memberof dto
         * @interface ITeamModalResponse
         * @property {string|null} [id] TeamModalResponse id
         * @property {number|null} [number] TeamModalResponse number
         * @property {string|null} [theme] TeamModalResponse theme
         * @property {Array.<dto.TeamModalResponse.IPersonShortInfo>|null} [learners] TeamModalResponse learners
         * @property {Array.<dto.TeamModalResponse.IPersonShortInfo>|null} [trackers] TeamModalResponse trackers
         */

        /**
         * Constructs a new TeamModalResponse.
         * @memberof dto
         * @classdesc Represents a TeamModalResponse.
         * @implements ITeamModalResponse
         * @constructor
         * @param {dto.ITeamModalResponse=} [properties] Properties to set
         */
        function TeamModalResponse(properties) {
            this.learners = [];
            this.trackers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamModalResponse id.
         * @member {string} id
         * @memberof dto.TeamModalResponse
         * @instance
         */
        TeamModalResponse.prototype.id = "";

        /**
         * TeamModalResponse number.
         * @member {number} number
         * @memberof dto.TeamModalResponse
         * @instance
         */
        TeamModalResponse.prototype.number = 0;

        /**
         * TeamModalResponse theme.
         * @member {string} theme
         * @memberof dto.TeamModalResponse
         * @instance
         */
        TeamModalResponse.prototype.theme = "";

        /**
         * TeamModalResponse learners.
         * @member {Array.<dto.TeamModalResponse.IPersonShortInfo>} learners
         * @memberof dto.TeamModalResponse
         * @instance
         */
        TeamModalResponse.prototype.learners = $util.emptyArray;

        /**
         * TeamModalResponse trackers.
         * @member {Array.<dto.TeamModalResponse.IPersonShortInfo>} trackers
         * @memberof dto.TeamModalResponse
         * @instance
         */
        TeamModalResponse.prototype.trackers = $util.emptyArray;

        /**
         * Creates a new TeamModalResponse instance using the specified properties.
         * @function create
         * @memberof dto.TeamModalResponse
         * @static
         * @param {dto.ITeamModalResponse=} [properties] Properties to set
         * @returns {dto.TeamModalResponse} TeamModalResponse instance
         */
        TeamModalResponse.create = function create(properties) {
            return new TeamModalResponse(properties);
        };

        /**
         * Encodes the specified TeamModalResponse message. Does not implicitly {@link dto.TeamModalResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamModalResponse
         * @static
         * @param {dto.ITeamModalResponse} message TeamModalResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamModalResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            if (message.theme != null && Object.hasOwnProperty.call(message, "theme"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.theme);
            if (message.learners != null && message.learners.length)
                for (let i = 0; i < message.learners.length; ++i)
                    $root.dto.TeamModalResponse.PersonShortInfo.encode(message.learners[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.trackers != null && message.trackers.length)
                for (let i = 0; i < message.trackers.length; ++i)
                    $root.dto.TeamModalResponse.PersonShortInfo.encode(message.trackers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TeamModalResponse message, length delimited. Does not implicitly {@link dto.TeamModalResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamModalResponse
         * @static
         * @param {dto.ITeamModalResponse} message TeamModalResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamModalResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamModalResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamModalResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamModalResponse} TeamModalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamModalResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamModalResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.number = reader.int32();
                        break;
                    }
                case 3: {
                        message.theme = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.learners && message.learners.length))
                            message.learners = [];
                        message.learners.push($root.dto.TeamModalResponse.PersonShortInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.trackers && message.trackers.length))
                            message.trackers = [];
                        message.trackers.push($root.dto.TeamModalResponse.PersonShortInfo.decode(reader, reader.uint32()));
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
         * Decodes a TeamModalResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamModalResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamModalResponse} TeamModalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamModalResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamModalResponse message.
         * @function verify
         * @memberof dto.TeamModalResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamModalResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            if (message.theme != null && message.hasOwnProperty("theme"))
                if (!$util.isString(message.theme))
                    return "theme: string expected";
            if (message.learners != null && message.hasOwnProperty("learners")) {
                if (!Array.isArray(message.learners))
                    return "learners: array expected";
                for (let i = 0; i < message.learners.length; ++i) {
                    let error = $root.dto.TeamModalResponse.PersonShortInfo.verify(message.learners[i]);
                    if (error)
                        return "learners." + error;
                }
            }
            if (message.trackers != null && message.hasOwnProperty("trackers")) {
                if (!Array.isArray(message.trackers))
                    return "trackers: array expected";
                for (let i = 0; i < message.trackers.length; ++i) {
                    let error = $root.dto.TeamModalResponse.PersonShortInfo.verify(message.trackers[i]);
                    if (error)
                        return "trackers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TeamModalResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamModalResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamModalResponse} TeamModalResponse
         */
        TeamModalResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamModalResponse)
                return object;
            let message = new $root.dto.TeamModalResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.number != null)
                message.number = object.number | 0;
            if (object.theme != null)
                message.theme = String(object.theme);
            if (object.learners) {
                if (!Array.isArray(object.learners))
                    throw TypeError(".dto.TeamModalResponse.learners: array expected");
                message.learners = [];
                for (let i = 0; i < object.learners.length; ++i) {
                    if (typeof object.learners[i] !== "object")
                        throw TypeError(".dto.TeamModalResponse.learners: object expected");
                    message.learners[i] = $root.dto.TeamModalResponse.PersonShortInfo.fromObject(object.learners[i]);
                }
            }
            if (object.trackers) {
                if (!Array.isArray(object.trackers))
                    throw TypeError(".dto.TeamModalResponse.trackers: array expected");
                message.trackers = [];
                for (let i = 0; i < object.trackers.length; ++i) {
                    if (typeof object.trackers[i] !== "object")
                        throw TypeError(".dto.TeamModalResponse.trackers: object expected");
                    message.trackers[i] = $root.dto.TeamModalResponse.PersonShortInfo.fromObject(object.trackers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamModalResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamModalResponse
         * @static
         * @param {dto.TeamModalResponse} message TeamModalResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamModalResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.learners = [];
                object.trackers = [];
            }
            if (options.defaults) {
                object.id = "";
                object.number = 0;
                object.theme = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.theme != null && message.hasOwnProperty("theme"))
                object.theme = message.theme;
            if (message.learners && message.learners.length) {
                object.learners = [];
                for (let j = 0; j < message.learners.length; ++j)
                    object.learners[j] = $root.dto.TeamModalResponse.PersonShortInfo.toObject(message.learners[j], options);
            }
            if (message.trackers && message.trackers.length) {
                object.trackers = [];
                for (let j = 0; j < message.trackers.length; ++j)
                    object.trackers[j] = $root.dto.TeamModalResponse.PersonShortInfo.toObject(message.trackers[j], options);
            }
            return object;
        };

        /**
         * Converts this TeamModalResponse to JSON.
         * @function toJSON
         * @memberof dto.TeamModalResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamModalResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamModalResponse
         * @function getTypeUrl
         * @memberof dto.TeamModalResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamModalResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamModalResponse";
        };

        TeamModalResponse.PersonShortInfo = (function() {

            /**
             * Properties of a PersonShortInfo.
             * @memberof dto.TeamModalResponse
             * @interface IPersonShortInfo
             * @property {string|null} [id] PersonShortInfo id
             * @property {string|null} [partName] PersonShortInfo partName
             * @property {string|null} [email] PersonShortInfo email
             * @property {string|null} [messenger] PersonShortInfo messenger
             */

            /**
             * Constructs a new PersonShortInfo.
             * @memberof dto.TeamModalResponse
             * @classdesc Represents a PersonShortInfo.
             * @implements IPersonShortInfo
             * @constructor
             * @param {dto.TeamModalResponse.IPersonShortInfo=} [properties] Properties to set
             */
            function PersonShortInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersonShortInfo id.
             * @member {string} id
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.id = "";

            /**
             * PersonShortInfo partName.
             * @member {string} partName
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.partName = "";

            /**
             * PersonShortInfo email.
             * @member {string} email
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.email = "";

            /**
             * PersonShortInfo messenger.
             * @member {string} messenger
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.messenger = "";

            /**
             * Creates a new PersonShortInfo instance using the specified properties.
             * @function create
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {dto.TeamModalResponse.IPersonShortInfo=} [properties] Properties to set
             * @returns {dto.TeamModalResponse.PersonShortInfo} PersonShortInfo instance
             */
            PersonShortInfo.create = function create(properties) {
                return new PersonShortInfo(properties);
            };

            /**
             * Encodes the specified PersonShortInfo message. Does not implicitly {@link dto.TeamModalResponse.PersonShortInfo.verify|verify} messages.
             * @function encode
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {dto.TeamModalResponse.IPersonShortInfo} message PersonShortInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonShortInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.partName != null && Object.hasOwnProperty.call(message, "partName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.partName);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.messenger != null && Object.hasOwnProperty.call(message, "messenger"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.messenger);
                return writer;
            };

            /**
             * Encodes the specified PersonShortInfo message, length delimited. Does not implicitly {@link dto.TeamModalResponse.PersonShortInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {dto.TeamModalResponse.IPersonShortInfo} message PersonShortInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonShortInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer.
             * @function decode
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {dto.TeamModalResponse.PersonShortInfo} PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersonShortInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamModalResponse.PersonShortInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.partName = reader.string();
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
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {dto.TeamModalResponse.PersonShortInfo} PersonShortInfo
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
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PersonShortInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.partName != null && message.hasOwnProperty("partName"))
                    if (!$util.isString(message.partName))
                        return "partName: string expected";
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
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {dto.TeamModalResponse.PersonShortInfo} PersonShortInfo
             */
            PersonShortInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.dto.TeamModalResponse.PersonShortInfo)
                    return object;
                let message = new $root.dto.TeamModalResponse.PersonShortInfo();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.partName != null)
                    message.partName = String(object.partName);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.messenger != null)
                    message.messenger = String(object.messenger);
                return message;
            };

            /**
             * Creates a plain object from a PersonShortInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {dto.TeamModalResponse.PersonShortInfo} message PersonShortInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersonShortInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.partName = "";
                    object.email = "";
                    object.messenger = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.partName != null && message.hasOwnProperty("partName"))
                    object.partName = message.partName;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.messenger != null && message.hasOwnProperty("messenger"))
                    object.messenger = message.messenger;
                return object;
            };

            /**
             * Converts this PersonShortInfo to JSON.
             * @function toJSON
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PersonShortInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PersonShortInfo
             * @function getTypeUrl
             * @memberof dto.TeamModalResponse.PersonShortInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PersonShortInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/dto.TeamModalResponse.PersonShortInfo";
            };

            return PersonShortInfo;
        })();

        return TeamModalResponse;
    })();

    dto.TeamListElement = (function() {

        /**
         * Properties of a TeamListElement.
         * @memberof dto
         * @interface ITeamListElement
         * @property {string|null} [id] TeamListElement id
         * @property {number|null} [number] TeamListElement number
         * @property {string|null} [theme] TeamListElement theme
         */

        /**
         * Constructs a new TeamListElement.
         * @memberof dto
         * @classdesc Represents a TeamListElement.
         * @implements ITeamListElement
         * @constructor
         * @param {dto.ITeamListElement=} [properties] Properties to set
         */
        function TeamListElement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamListElement id.
         * @member {string} id
         * @memberof dto.TeamListElement
         * @instance
         */
        TeamListElement.prototype.id = "";

        /**
         * TeamListElement number.
         * @member {number} number
         * @memberof dto.TeamListElement
         * @instance
         */
        TeamListElement.prototype.number = 0;

        /**
         * TeamListElement theme.
         * @member {string} theme
         * @memberof dto.TeamListElement
         * @instance
         */
        TeamListElement.prototype.theme = "";

        /**
         * Creates a new TeamListElement instance using the specified properties.
         * @function create
         * @memberof dto.TeamListElement
         * @static
         * @param {dto.ITeamListElement=} [properties] Properties to set
         * @returns {dto.TeamListElement} TeamListElement instance
         */
        TeamListElement.create = function create(properties) {
            return new TeamListElement(properties);
        };

        /**
         * Encodes the specified TeamListElement message. Does not implicitly {@link dto.TeamListElement.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamListElement
         * @static
         * @param {dto.ITeamListElement} message TeamListElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamListElement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            if (message.theme != null && Object.hasOwnProperty.call(message, "theme"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.theme);
            return writer;
        };

        /**
         * Encodes the specified TeamListElement message, length delimited. Does not implicitly {@link dto.TeamListElement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamListElement
         * @static
         * @param {dto.ITeamListElement} message TeamListElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamListElement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamListElement message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamListElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamListElement} TeamListElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamListElement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamListElement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.number = reader.int32();
                        break;
                    }
                case 3: {
                        message.theme = reader.string();
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
         * Decodes a TeamListElement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamListElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamListElement} TeamListElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamListElement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamListElement message.
         * @function verify
         * @memberof dto.TeamListElement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamListElement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            if (message.theme != null && message.hasOwnProperty("theme"))
                if (!$util.isString(message.theme))
                    return "theme: string expected";
            return null;
        };

        /**
         * Creates a TeamListElement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamListElement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamListElement} TeamListElement
         */
        TeamListElement.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamListElement)
                return object;
            let message = new $root.dto.TeamListElement();
            if (object.id != null)
                message.id = String(object.id);
            if (object.number != null)
                message.number = object.number | 0;
            if (object.theme != null)
                message.theme = String(object.theme);
            return message;
        };

        /**
         * Creates a plain object from a TeamListElement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamListElement
         * @static
         * @param {dto.TeamListElement} message TeamListElement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamListElement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.number = 0;
                object.theme = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.theme != null && message.hasOwnProperty("theme"))
                object.theme = message.theme;
            return object;
        };

        /**
         * Converts this TeamListElement to JSON.
         * @function toJSON
         * @memberof dto.TeamListElement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamListElement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamListElement
         * @function getTypeUrl
         * @memberof dto.TeamListElement
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamListElement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamListElement";
        };

        return TeamListElement;
    })();

    dto.TeamListResponse = (function() {

        /**
         * Properties of a TeamListResponse.
         * @memberof dto
         * @interface ITeamListResponse
         * @property {Array.<dto.ITeamListElement>|null} [teams] TeamListResponse teams
         */

        /**
         * Constructs a new TeamListResponse.
         * @memberof dto
         * @classdesc Represents a TeamListResponse.
         * @implements ITeamListResponse
         * @constructor
         * @param {dto.ITeamListResponse=} [properties] Properties to set
         */
        function TeamListResponse(properties) {
            this.teams = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamListResponse teams.
         * @member {Array.<dto.ITeamListElement>} teams
         * @memberof dto.TeamListResponse
         * @instance
         */
        TeamListResponse.prototype.teams = $util.emptyArray;

        /**
         * Creates a new TeamListResponse instance using the specified properties.
         * @function create
         * @memberof dto.TeamListResponse
         * @static
         * @param {dto.ITeamListResponse=} [properties] Properties to set
         * @returns {dto.TeamListResponse} TeamListResponse instance
         */
        TeamListResponse.create = function create(properties) {
            return new TeamListResponse(properties);
        };

        /**
         * Encodes the specified TeamListResponse message. Does not implicitly {@link dto.TeamListResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamListResponse
         * @static
         * @param {dto.ITeamListResponse} message TeamListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teams != null && message.teams.length)
                for (let i = 0; i < message.teams.length; ++i)
                    $root.dto.TeamListElement.encode(message.teams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TeamListResponse message, length delimited. Does not implicitly {@link dto.TeamListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamListResponse
         * @static
         * @param {dto.ITeamListResponse} message TeamListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamListResponse} TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.teams && message.teams.length))
                            message.teams = [];
                        message.teams.push($root.dto.TeamListElement.decode(reader, reader.uint32()));
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
         * Decodes a TeamListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamListResponse} TeamListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamListResponse message.
         * @function verify
         * @memberof dto.TeamListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teams != null && message.hasOwnProperty("teams")) {
                if (!Array.isArray(message.teams))
                    return "teams: array expected";
                for (let i = 0; i < message.teams.length; ++i) {
                    let error = $root.dto.TeamListElement.verify(message.teams[i]);
                    if (error)
                        return "teams." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TeamListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamListResponse} TeamListResponse
         */
        TeamListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamListResponse)
                return object;
            let message = new $root.dto.TeamListResponse();
            if (object.teams) {
                if (!Array.isArray(object.teams))
                    throw TypeError(".dto.TeamListResponse.teams: array expected");
                message.teams = [];
                for (let i = 0; i < object.teams.length; ++i) {
                    if (typeof object.teams[i] !== "object")
                        throw TypeError(".dto.TeamListResponse.teams: object expected");
                    message.teams[i] = $root.dto.TeamListElement.fromObject(object.teams[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamListResponse
         * @static
         * @param {dto.TeamListResponse} message TeamListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.teams = [];
            if (message.teams && message.teams.length) {
                object.teams = [];
                for (let j = 0; j < message.teams.length; ++j)
                    object.teams[j] = $root.dto.TeamListElement.toObject(message.teams[j], options);
            }
            return object;
        };

        /**
         * Converts this TeamListResponse to JSON.
         * @function toJSON
         * @memberof dto.TeamListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamListResponse
         * @function getTypeUrl
         * @memberof dto.TeamListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamListResponse";
        };

        return TeamListResponse;
    })();

    dto.TeamResponse = (function() {

        /**
         * Properties of a TeamResponse.
         * @memberof dto
         * @interface ITeamResponse
         * @property {string|null} [id] TeamResponse id
         * @property {number|null} [number] TeamResponse number
         * @property {string|null} [theme] TeamResponse theme
         * @property {Array.<dto.TeamResponse.IPersonShortInfo>|null} [learners] TeamResponse learners
         * @property {Array.<dto.TeamResponse.IPersonShortInfo>|null} [trackers] TeamResponse trackers
         */

        /**
         * Constructs a new TeamResponse.
         * @memberof dto
         * @classdesc Represents a TeamResponse.
         * @implements ITeamResponse
         * @constructor
         * @param {dto.ITeamResponse=} [properties] Properties to set
         */
        function TeamResponse(properties) {
            this.learners = [];
            this.trackers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamResponse id.
         * @member {string} id
         * @memberof dto.TeamResponse
         * @instance
         */
        TeamResponse.prototype.id = "";

        /**
         * TeamResponse number.
         * @member {number} number
         * @memberof dto.TeamResponse
         * @instance
         */
        TeamResponse.prototype.number = 0;

        /**
         * TeamResponse theme.
         * @member {string} theme
         * @memberof dto.TeamResponse
         * @instance
         */
        TeamResponse.prototype.theme = "";

        /**
         * TeamResponse learners.
         * @member {Array.<dto.TeamResponse.IPersonShortInfo>} learners
         * @memberof dto.TeamResponse
         * @instance
         */
        TeamResponse.prototype.learners = $util.emptyArray;

        /**
         * TeamResponse trackers.
         * @member {Array.<dto.TeamResponse.IPersonShortInfo>} trackers
         * @memberof dto.TeamResponse
         * @instance
         */
        TeamResponse.prototype.trackers = $util.emptyArray;

        /**
         * Creates a new TeamResponse instance using the specified properties.
         * @function create
         * @memberof dto.TeamResponse
         * @static
         * @param {dto.ITeamResponse=} [properties] Properties to set
         * @returns {dto.TeamResponse} TeamResponse instance
         */
        TeamResponse.create = function create(properties) {
            return new TeamResponse(properties);
        };

        /**
         * Encodes the specified TeamResponse message. Does not implicitly {@link dto.TeamResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamResponse
         * @static
         * @param {dto.ITeamResponse} message TeamResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            if (message.theme != null && Object.hasOwnProperty.call(message, "theme"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.theme);
            if (message.learners != null && message.learners.length)
                for (let i = 0; i < message.learners.length; ++i)
                    $root.dto.TeamResponse.PersonShortInfo.encode(message.learners[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.trackers != null && message.trackers.length)
                for (let i = 0; i < message.trackers.length; ++i)
                    $root.dto.TeamResponse.PersonShortInfo.encode(message.trackers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TeamResponse message, length delimited. Does not implicitly {@link dto.TeamResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamResponse
         * @static
         * @param {dto.ITeamResponse} message TeamResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamResponse} TeamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.number = reader.int32();
                        break;
                    }
                case 3: {
                        message.theme = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.learners && message.learners.length))
                            message.learners = [];
                        message.learners.push($root.dto.TeamResponse.PersonShortInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.trackers && message.trackers.length))
                            message.trackers = [];
                        message.trackers.push($root.dto.TeamResponse.PersonShortInfo.decode(reader, reader.uint32()));
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
         * Decodes a TeamResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamResponse} TeamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamResponse message.
         * @function verify
         * @memberof dto.TeamResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            if (message.theme != null && message.hasOwnProperty("theme"))
                if (!$util.isString(message.theme))
                    return "theme: string expected";
            if (message.learners != null && message.hasOwnProperty("learners")) {
                if (!Array.isArray(message.learners))
                    return "learners: array expected";
                for (let i = 0; i < message.learners.length; ++i) {
                    let error = $root.dto.TeamResponse.PersonShortInfo.verify(message.learners[i]);
                    if (error)
                        return "learners." + error;
                }
            }
            if (message.trackers != null && message.hasOwnProperty("trackers")) {
                if (!Array.isArray(message.trackers))
                    return "trackers: array expected";
                for (let i = 0; i < message.trackers.length; ++i) {
                    let error = $root.dto.TeamResponse.PersonShortInfo.verify(message.trackers[i]);
                    if (error)
                        return "trackers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TeamResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamResponse} TeamResponse
         */
        TeamResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamResponse)
                return object;
            let message = new $root.dto.TeamResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.number != null)
                message.number = object.number | 0;
            if (object.theme != null)
                message.theme = String(object.theme);
            if (object.learners) {
                if (!Array.isArray(object.learners))
                    throw TypeError(".dto.TeamResponse.learners: array expected");
                message.learners = [];
                for (let i = 0; i < object.learners.length; ++i) {
                    if (typeof object.learners[i] !== "object")
                        throw TypeError(".dto.TeamResponse.learners: object expected");
                    message.learners[i] = $root.dto.TeamResponse.PersonShortInfo.fromObject(object.learners[i]);
                }
            }
            if (object.trackers) {
                if (!Array.isArray(object.trackers))
                    throw TypeError(".dto.TeamResponse.trackers: array expected");
                message.trackers = [];
                for (let i = 0; i < object.trackers.length; ++i) {
                    if (typeof object.trackers[i] !== "object")
                        throw TypeError(".dto.TeamResponse.trackers: object expected");
                    message.trackers[i] = $root.dto.TeamResponse.PersonShortInfo.fromObject(object.trackers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamResponse
         * @static
         * @param {dto.TeamResponse} message TeamResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.learners = [];
                object.trackers = [];
            }
            if (options.defaults) {
                object.id = "";
                object.number = 0;
                object.theme = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.theme != null && message.hasOwnProperty("theme"))
                object.theme = message.theme;
            if (message.learners && message.learners.length) {
                object.learners = [];
                for (let j = 0; j < message.learners.length; ++j)
                    object.learners[j] = $root.dto.TeamResponse.PersonShortInfo.toObject(message.learners[j], options);
            }
            if (message.trackers && message.trackers.length) {
                object.trackers = [];
                for (let j = 0; j < message.trackers.length; ++j)
                    object.trackers[j] = $root.dto.TeamResponse.PersonShortInfo.toObject(message.trackers[j], options);
            }
            return object;
        };

        /**
         * Converts this TeamResponse to JSON.
         * @function toJSON
         * @memberof dto.TeamResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamResponse
         * @function getTypeUrl
         * @memberof dto.TeamResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamResponse";
        };

        TeamResponse.PersonShortInfo = (function() {

            /**
             * Properties of a PersonShortInfo.
             * @memberof dto.TeamResponse
             * @interface IPersonShortInfo
             * @property {string|null} [id] PersonShortInfo id
             * @property {string|null} [partName] PersonShortInfo partName
             * @property {string|null} [email] PersonShortInfo email
             * @property {number|null} [balance] PersonShortInfo balance
             */

            /**
             * Constructs a new PersonShortInfo.
             * @memberof dto.TeamResponse
             * @classdesc Represents a PersonShortInfo.
             * @implements IPersonShortInfo
             * @constructor
             * @param {dto.TeamResponse.IPersonShortInfo=} [properties] Properties to set
             */
            function PersonShortInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PersonShortInfo id.
             * @member {string} id
             * @memberof dto.TeamResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.id = "";

            /**
             * PersonShortInfo partName.
             * @member {string} partName
             * @memberof dto.TeamResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.partName = "";

            /**
             * PersonShortInfo email.
             * @member {string} email
             * @memberof dto.TeamResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.email = "";

            /**
             * PersonShortInfo balance.
             * @member {number} balance
             * @memberof dto.TeamResponse.PersonShortInfo
             * @instance
             */
            PersonShortInfo.prototype.balance = 0;

            /**
             * Creates a new PersonShortInfo instance using the specified properties.
             * @function create
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {dto.TeamResponse.IPersonShortInfo=} [properties] Properties to set
             * @returns {dto.TeamResponse.PersonShortInfo} PersonShortInfo instance
             */
            PersonShortInfo.create = function create(properties) {
                return new PersonShortInfo(properties);
            };

            /**
             * Encodes the specified PersonShortInfo message. Does not implicitly {@link dto.TeamResponse.PersonShortInfo.verify|verify} messages.
             * @function encode
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {dto.TeamResponse.IPersonShortInfo} message PersonShortInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonShortInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.partName != null && Object.hasOwnProperty.call(message, "partName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.partName);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.balance);
                return writer;
            };

            /**
             * Encodes the specified PersonShortInfo message, length delimited. Does not implicitly {@link dto.TeamResponse.PersonShortInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {dto.TeamResponse.IPersonShortInfo} message PersonShortInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PersonShortInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PersonShortInfo message from the specified reader or buffer.
             * @function decode
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {dto.TeamResponse.PersonShortInfo} PersonShortInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PersonShortInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamResponse.PersonShortInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.partName = reader.string();
                            break;
                        }
                    case 3: {
                            message.email = reader.string();
                            break;
                        }
                    case 4: {
                            message.balance = reader.int32();
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
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {dto.TeamResponse.PersonShortInfo} PersonShortInfo
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
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PersonShortInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.partName != null && message.hasOwnProperty("partName"))
                    if (!$util.isString(message.partName))
                        return "partName: string expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.balance != null && message.hasOwnProperty("balance"))
                    if (!$util.isInteger(message.balance))
                        return "balance: integer expected";
                return null;
            };

            /**
             * Creates a PersonShortInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {dto.TeamResponse.PersonShortInfo} PersonShortInfo
             */
            PersonShortInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.dto.TeamResponse.PersonShortInfo)
                    return object;
                let message = new $root.dto.TeamResponse.PersonShortInfo();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.partName != null)
                    message.partName = String(object.partName);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.balance != null)
                    message.balance = object.balance | 0;
                return message;
            };

            /**
             * Creates a plain object from a PersonShortInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {dto.TeamResponse.PersonShortInfo} message PersonShortInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PersonShortInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.partName = "";
                    object.email = "";
                    object.balance = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.partName != null && message.hasOwnProperty("partName"))
                    object.partName = message.partName;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.balance != null && message.hasOwnProperty("balance"))
                    object.balance = message.balance;
                return object;
            };

            /**
             * Converts this PersonShortInfo to JSON.
             * @function toJSON
             * @memberof dto.TeamResponse.PersonShortInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PersonShortInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PersonShortInfo
             * @function getTypeUrl
             * @memberof dto.TeamResponse.PersonShortInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PersonShortInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/dto.TeamResponse.PersonShortInfo";
            };

            return PersonShortInfo;
        })();

        return TeamResponse;
    })();

    dto.TeamCreateRequest = (function() {

        /**
         * Properties of a TeamCreateRequest.
         * @memberof dto
         * @interface ITeamCreateRequest
         * @property {number|null} [number] TeamCreateRequest number
         * @property {string|null} [theme] TeamCreateRequest theme
         * @property {Array.<string>|null} [learnersIds] TeamCreateRequest learnersIds
         * @property {Array.<string>|null} [trackersIds] TeamCreateRequest trackersIds
         */

        /**
         * Constructs a new TeamCreateRequest.
         * @memberof dto
         * @classdesc Represents a TeamCreateRequest.
         * @implements ITeamCreateRequest
         * @constructor
         * @param {dto.ITeamCreateRequest=} [properties] Properties to set
         */
        function TeamCreateRequest(properties) {
            this.learnersIds = [];
            this.trackersIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamCreateRequest number.
         * @member {number} number
         * @memberof dto.TeamCreateRequest
         * @instance
         */
        TeamCreateRequest.prototype.number = 0;

        /**
         * TeamCreateRequest theme.
         * @member {string} theme
         * @memberof dto.TeamCreateRequest
         * @instance
         */
        TeamCreateRequest.prototype.theme = "";

        /**
         * TeamCreateRequest learnersIds.
         * @member {Array.<string>} learnersIds
         * @memberof dto.TeamCreateRequest
         * @instance
         */
        TeamCreateRequest.prototype.learnersIds = $util.emptyArray;

        /**
         * TeamCreateRequest trackersIds.
         * @member {Array.<string>} trackersIds
         * @memberof dto.TeamCreateRequest
         * @instance
         */
        TeamCreateRequest.prototype.trackersIds = $util.emptyArray;

        /**
         * Creates a new TeamCreateRequest instance using the specified properties.
         * @function create
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {dto.ITeamCreateRequest=} [properties] Properties to set
         * @returns {dto.TeamCreateRequest} TeamCreateRequest instance
         */
        TeamCreateRequest.create = function create(properties) {
            return new TeamCreateRequest(properties);
        };

        /**
         * Encodes the specified TeamCreateRequest message. Does not implicitly {@link dto.TeamCreateRequest.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {dto.ITeamCreateRequest} message TeamCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
            if (message.theme != null && Object.hasOwnProperty.call(message, "theme"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.theme);
            if (message.learnersIds != null && message.learnersIds.length)
                for (let i = 0; i < message.learnersIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.learnersIds[i]);
            if (message.trackersIds != null && message.trackersIds.length)
                for (let i = 0; i < message.trackersIds.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.trackersIds[i]);
            return writer;
        };

        /**
         * Encodes the specified TeamCreateRequest message, length delimited. Does not implicitly {@link dto.TeamCreateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {dto.ITeamCreateRequest} message TeamCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamCreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamCreateRequest} TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamCreateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.number = reader.int32();
                        break;
                    }
                case 2: {
                        message.theme = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.learnersIds && message.learnersIds.length))
                            message.learnersIds = [];
                        message.learnersIds.push(reader.string());
                        break;
                    }
                case 4: {
                        if (!(message.trackersIds && message.trackersIds.length))
                            message.trackersIds = [];
                        message.trackersIds.push(reader.string());
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
         * Decodes a TeamCreateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamCreateRequest} TeamCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamCreateRequest message.
         * @function verify
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamCreateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            if (message.theme != null && message.hasOwnProperty("theme"))
                if (!$util.isString(message.theme))
                    return "theme: string expected";
            if (message.learnersIds != null && message.hasOwnProperty("learnersIds")) {
                if (!Array.isArray(message.learnersIds))
                    return "learnersIds: array expected";
                for (let i = 0; i < message.learnersIds.length; ++i)
                    if (!$util.isString(message.learnersIds[i]))
                        return "learnersIds: string[] expected";
            }
            if (message.trackersIds != null && message.hasOwnProperty("trackersIds")) {
                if (!Array.isArray(message.trackersIds))
                    return "trackersIds: array expected";
                for (let i = 0; i < message.trackersIds.length; ++i)
                    if (!$util.isString(message.trackersIds[i]))
                        return "trackersIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a TeamCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamCreateRequest} TeamCreateRequest
         */
        TeamCreateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamCreateRequest)
                return object;
            let message = new $root.dto.TeamCreateRequest();
            if (object.number != null)
                message.number = object.number | 0;
            if (object.theme != null)
                message.theme = String(object.theme);
            if (object.learnersIds) {
                if (!Array.isArray(object.learnersIds))
                    throw TypeError(".dto.TeamCreateRequest.learnersIds: array expected");
                message.learnersIds = [];
                for (let i = 0; i < object.learnersIds.length; ++i)
                    message.learnersIds[i] = String(object.learnersIds[i]);
            }
            if (object.trackersIds) {
                if (!Array.isArray(object.trackersIds))
                    throw TypeError(".dto.TeamCreateRequest.trackersIds: array expected");
                message.trackersIds = [];
                for (let i = 0; i < object.trackersIds.length; ++i)
                    message.trackersIds[i] = String(object.trackersIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamCreateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {dto.TeamCreateRequest} message TeamCreateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamCreateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.learnersIds = [];
                object.trackersIds = [];
            }
            if (options.defaults) {
                object.number = 0;
                object.theme = "";
            }
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.theme != null && message.hasOwnProperty("theme"))
                object.theme = message.theme;
            if (message.learnersIds && message.learnersIds.length) {
                object.learnersIds = [];
                for (let j = 0; j < message.learnersIds.length; ++j)
                    object.learnersIds[j] = message.learnersIds[j];
            }
            if (message.trackersIds && message.trackersIds.length) {
                object.trackersIds = [];
                for (let j = 0; j < message.trackersIds.length; ++j)
                    object.trackersIds[j] = message.trackersIds[j];
            }
            return object;
        };

        /**
         * Converts this TeamCreateRequest to JSON.
         * @function toJSON
         * @memberof dto.TeamCreateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamCreateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamCreateRequest
         * @function getTypeUrl
         * @memberof dto.TeamCreateRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamCreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamCreateRequest";
        };

        return TeamCreateRequest;
    })();

    dto.TeamEditRequest = (function() {

        /**
         * Properties of a TeamEditRequest.
         * @memberof dto
         * @interface ITeamEditRequest
         * @property {number|null} [number] TeamEditRequest number
         * @property {string|null} [theme] TeamEditRequest theme
         * @property {Array.<string>|null} [learnersIds] TeamEditRequest learnersIds
         * @property {Array.<string>|null} [trackersIds] TeamEditRequest trackersIds
         */

        /**
         * Constructs a new TeamEditRequest.
         * @memberof dto
         * @classdesc Represents a TeamEditRequest.
         * @implements ITeamEditRequest
         * @constructor
         * @param {dto.ITeamEditRequest=} [properties] Properties to set
         */
        function TeamEditRequest(properties) {
            this.learnersIds = [];
            this.trackersIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamEditRequest number.
         * @member {number} number
         * @memberof dto.TeamEditRequest
         * @instance
         */
        TeamEditRequest.prototype.number = 0;

        /**
         * TeamEditRequest theme.
         * @member {string} theme
         * @memberof dto.TeamEditRequest
         * @instance
         */
        TeamEditRequest.prototype.theme = "";

        /**
         * TeamEditRequest learnersIds.
         * @member {Array.<string>} learnersIds
         * @memberof dto.TeamEditRequest
         * @instance
         */
        TeamEditRequest.prototype.learnersIds = $util.emptyArray;

        /**
         * TeamEditRequest trackersIds.
         * @member {Array.<string>} trackersIds
         * @memberof dto.TeamEditRequest
         * @instance
         */
        TeamEditRequest.prototype.trackersIds = $util.emptyArray;

        /**
         * Creates a new TeamEditRequest instance using the specified properties.
         * @function create
         * @memberof dto.TeamEditRequest
         * @static
         * @param {dto.ITeamEditRequest=} [properties] Properties to set
         * @returns {dto.TeamEditRequest} TeamEditRequest instance
         */
        TeamEditRequest.create = function create(properties) {
            return new TeamEditRequest(properties);
        };

        /**
         * Encodes the specified TeamEditRequest message. Does not implicitly {@link dto.TeamEditRequest.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamEditRequest
         * @static
         * @param {dto.ITeamEditRequest} message TeamEditRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamEditRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
            if (message.theme != null && Object.hasOwnProperty.call(message, "theme"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.theme);
            if (message.learnersIds != null && message.learnersIds.length)
                for (let i = 0; i < message.learnersIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.learnersIds[i]);
            if (message.trackersIds != null && message.trackersIds.length)
                for (let i = 0; i < message.trackersIds.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.trackersIds[i]);
            return writer;
        };

        /**
         * Encodes the specified TeamEditRequest message, length delimited. Does not implicitly {@link dto.TeamEditRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamEditRequest
         * @static
         * @param {dto.ITeamEditRequest} message TeamEditRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamEditRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamEditRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamEditRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamEditRequest} TeamEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamEditRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamEditRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.number = reader.int32();
                        break;
                    }
                case 2: {
                        message.theme = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.learnersIds && message.learnersIds.length))
                            message.learnersIds = [];
                        message.learnersIds.push(reader.string());
                        break;
                    }
                case 4: {
                        if (!(message.trackersIds && message.trackersIds.length))
                            message.trackersIds = [];
                        message.trackersIds.push(reader.string());
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
         * Decodes a TeamEditRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamEditRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamEditRequest} TeamEditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamEditRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamEditRequest message.
         * @function verify
         * @memberof dto.TeamEditRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamEditRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            if (message.theme != null && message.hasOwnProperty("theme"))
                if (!$util.isString(message.theme))
                    return "theme: string expected";
            if (message.learnersIds != null && message.hasOwnProperty("learnersIds")) {
                if (!Array.isArray(message.learnersIds))
                    return "learnersIds: array expected";
                for (let i = 0; i < message.learnersIds.length; ++i)
                    if (!$util.isString(message.learnersIds[i]))
                        return "learnersIds: string[] expected";
            }
            if (message.trackersIds != null && message.hasOwnProperty("trackersIds")) {
                if (!Array.isArray(message.trackersIds))
                    return "trackersIds: array expected";
                for (let i = 0; i < message.trackersIds.length; ++i)
                    if (!$util.isString(message.trackersIds[i]))
                        return "trackersIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a TeamEditRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamEditRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamEditRequest} TeamEditRequest
         */
        TeamEditRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamEditRequest)
                return object;
            let message = new $root.dto.TeamEditRequest();
            if (object.number != null)
                message.number = object.number | 0;
            if (object.theme != null)
                message.theme = String(object.theme);
            if (object.learnersIds) {
                if (!Array.isArray(object.learnersIds))
                    throw TypeError(".dto.TeamEditRequest.learnersIds: array expected");
                message.learnersIds = [];
                for (let i = 0; i < object.learnersIds.length; ++i)
                    message.learnersIds[i] = String(object.learnersIds[i]);
            }
            if (object.trackersIds) {
                if (!Array.isArray(object.trackersIds))
                    throw TypeError(".dto.TeamEditRequest.trackersIds: array expected");
                message.trackersIds = [];
                for (let i = 0; i < object.trackersIds.length; ++i)
                    message.trackersIds[i] = String(object.trackersIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamEditRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamEditRequest
         * @static
         * @param {dto.TeamEditRequest} message TeamEditRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamEditRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.learnersIds = [];
                object.trackersIds = [];
            }
            if (options.defaults) {
                object.number = 0;
                object.theme = "";
            }
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.theme != null && message.hasOwnProperty("theme"))
                object.theme = message.theme;
            if (message.learnersIds && message.learnersIds.length) {
                object.learnersIds = [];
                for (let j = 0; j < message.learnersIds.length; ++j)
                    object.learnersIds[j] = message.learnersIds[j];
            }
            if (message.trackersIds && message.trackersIds.length) {
                object.trackersIds = [];
                for (let j = 0; j < message.trackersIds.length; ++j)
                    object.trackersIds[j] = message.trackersIds[j];
            }
            return object;
        };

        /**
         * Converts this TeamEditRequest to JSON.
         * @function toJSON
         * @memberof dto.TeamEditRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamEditRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamEditRequest
         * @function getTypeUrl
         * @memberof dto.TeamEditRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamEditRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamEditRequest";
        };

        return TeamEditRequest;
    })();

    dto.TeamChangeErrorResponse = (function() {

        /**
         * Properties of a TeamChangeErrorResponse.
         * @memberof dto
         * @interface ITeamChangeErrorResponse
         * @property {boolean|null} [number] TeamChangeErrorResponse number
         * @property {Array.<string>|null} [learnersIds] TeamChangeErrorResponse learnersIds
         * @property {Array.<string>|null} [trackersIds] TeamChangeErrorResponse trackersIds
         */

        /**
         * Constructs a new TeamChangeErrorResponse.
         * @memberof dto
         * @classdesc Represents a TeamChangeErrorResponse.
         * @implements ITeamChangeErrorResponse
         * @constructor
         * @param {dto.ITeamChangeErrorResponse=} [properties] Properties to set
         */
        function TeamChangeErrorResponse(properties) {
            this.learnersIds = [];
            this.trackersIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamChangeErrorResponse number.
         * @member {boolean} number
         * @memberof dto.TeamChangeErrorResponse
         * @instance
         */
        TeamChangeErrorResponse.prototype.number = false;

        /**
         * TeamChangeErrorResponse learnersIds.
         * @member {Array.<string>} learnersIds
         * @memberof dto.TeamChangeErrorResponse
         * @instance
         */
        TeamChangeErrorResponse.prototype.learnersIds = $util.emptyArray;

        /**
         * TeamChangeErrorResponse trackersIds.
         * @member {Array.<string>} trackersIds
         * @memberof dto.TeamChangeErrorResponse
         * @instance
         */
        TeamChangeErrorResponse.prototype.trackersIds = $util.emptyArray;

        /**
         * Creates a new TeamChangeErrorResponse instance using the specified properties.
         * @function create
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {dto.ITeamChangeErrorResponse=} [properties] Properties to set
         * @returns {dto.TeamChangeErrorResponse} TeamChangeErrorResponse instance
         */
        TeamChangeErrorResponse.create = function create(properties) {
            return new TeamChangeErrorResponse(properties);
        };

        /**
         * Encodes the specified TeamChangeErrorResponse message. Does not implicitly {@link dto.TeamChangeErrorResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {dto.ITeamChangeErrorResponse} message TeamChangeErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamChangeErrorResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.number);
            if (message.learnersIds != null && message.learnersIds.length)
                for (let i = 0; i < message.learnersIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.learnersIds[i]);
            if (message.trackersIds != null && message.trackersIds.length)
                for (let i = 0; i < message.trackersIds.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.trackersIds[i]);
            return writer;
        };

        /**
         * Encodes the specified TeamChangeErrorResponse message, length delimited. Does not implicitly {@link dto.TeamChangeErrorResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {dto.ITeamChangeErrorResponse} message TeamChangeErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamChangeErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamChangeErrorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamChangeErrorResponse} TeamChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamChangeErrorResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamChangeErrorResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.number = reader.bool();
                        break;
                    }
                case 3: {
                        if (!(message.learnersIds && message.learnersIds.length))
                            message.learnersIds = [];
                        message.learnersIds.push(reader.string());
                        break;
                    }
                case 4: {
                        if (!(message.trackersIds && message.trackersIds.length))
                            message.trackersIds = [];
                        message.trackersIds.push(reader.string());
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
         * Decodes a TeamChangeErrorResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamChangeErrorResponse} TeamChangeErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamChangeErrorResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamChangeErrorResponse message.
         * @function verify
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamChangeErrorResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (typeof message.number !== "boolean")
                    return "number: boolean expected";
            if (message.learnersIds != null && message.hasOwnProperty("learnersIds")) {
                if (!Array.isArray(message.learnersIds))
                    return "learnersIds: array expected";
                for (let i = 0; i < message.learnersIds.length; ++i)
                    if (!$util.isString(message.learnersIds[i]))
                        return "learnersIds: string[] expected";
            }
            if (message.trackersIds != null && message.hasOwnProperty("trackersIds")) {
                if (!Array.isArray(message.trackersIds))
                    return "trackersIds: array expected";
                for (let i = 0; i < message.trackersIds.length; ++i)
                    if (!$util.isString(message.trackersIds[i]))
                        return "trackersIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a TeamChangeErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamChangeErrorResponse} TeamChangeErrorResponse
         */
        TeamChangeErrorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamChangeErrorResponse)
                return object;
            let message = new $root.dto.TeamChangeErrorResponse();
            if (object.number != null)
                message.number = Boolean(object.number);
            if (object.learnersIds) {
                if (!Array.isArray(object.learnersIds))
                    throw TypeError(".dto.TeamChangeErrorResponse.learnersIds: array expected");
                message.learnersIds = [];
                for (let i = 0; i < object.learnersIds.length; ++i)
                    message.learnersIds[i] = String(object.learnersIds[i]);
            }
            if (object.trackersIds) {
                if (!Array.isArray(object.trackersIds))
                    throw TypeError(".dto.TeamChangeErrorResponse.trackersIds: array expected");
                message.trackersIds = [];
                for (let i = 0; i < object.trackersIds.length; ++i)
                    message.trackersIds[i] = String(object.trackersIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a TeamChangeErrorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {dto.TeamChangeErrorResponse} message TeamChangeErrorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamChangeErrorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.learnersIds = [];
                object.trackersIds = [];
            }
            if (options.defaults)
                object.number = false;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.learnersIds && message.learnersIds.length) {
                object.learnersIds = [];
                for (let j = 0; j < message.learnersIds.length; ++j)
                    object.learnersIds[j] = message.learnersIds[j];
            }
            if (message.trackersIds && message.trackersIds.length) {
                object.trackersIds = [];
                for (let j = 0; j < message.trackersIds.length; ++j)
                    object.trackersIds[j] = message.trackersIds[j];
            }
            return object;
        };

        /**
         * Converts this TeamChangeErrorResponse to JSON.
         * @function toJSON
         * @memberof dto.TeamChangeErrorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamChangeErrorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamChangeErrorResponse
         * @function getTypeUrl
         * @memberof dto.TeamChangeErrorResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamChangeErrorResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamChangeErrorResponse";
        };

        return TeamChangeErrorResponse;
    })();

    dto.TeamCreateSuccessResponse = (function() {

        /**
         * Properties of a TeamCreateSuccessResponse.
         * @memberof dto
         * @interface ITeamCreateSuccessResponse
         * @property {string|null} [id] TeamCreateSuccessResponse id
         */

        /**
         * Constructs a new TeamCreateSuccessResponse.
         * @memberof dto
         * @classdesc Represents a TeamCreateSuccessResponse.
         * @implements ITeamCreateSuccessResponse
         * @constructor
         * @param {dto.ITeamCreateSuccessResponse=} [properties] Properties to set
         */
        function TeamCreateSuccessResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TeamCreateSuccessResponse id.
         * @member {string} id
         * @memberof dto.TeamCreateSuccessResponse
         * @instance
         */
        TeamCreateSuccessResponse.prototype.id = "";

        /**
         * Creates a new TeamCreateSuccessResponse instance using the specified properties.
         * @function create
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {dto.ITeamCreateSuccessResponse=} [properties] Properties to set
         * @returns {dto.TeamCreateSuccessResponse} TeamCreateSuccessResponse instance
         */
        TeamCreateSuccessResponse.create = function create(properties) {
            return new TeamCreateSuccessResponse(properties);
        };

        /**
         * Encodes the specified TeamCreateSuccessResponse message. Does not implicitly {@link dto.TeamCreateSuccessResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {dto.ITeamCreateSuccessResponse} message TeamCreateSuccessResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateSuccessResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified TeamCreateSuccessResponse message, length delimited. Does not implicitly {@link dto.TeamCreateSuccessResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {dto.ITeamCreateSuccessResponse} message TeamCreateSuccessResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TeamCreateSuccessResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TeamCreateSuccessResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.TeamCreateSuccessResponse} TeamCreateSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateSuccessResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.TeamCreateSuccessResponse();
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
         * Decodes a TeamCreateSuccessResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.TeamCreateSuccessResponse} TeamCreateSuccessResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TeamCreateSuccessResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TeamCreateSuccessResponse message.
         * @function verify
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TeamCreateSuccessResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a TeamCreateSuccessResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.TeamCreateSuccessResponse} TeamCreateSuccessResponse
         */
        TeamCreateSuccessResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.TeamCreateSuccessResponse)
                return object;
            let message = new $root.dto.TeamCreateSuccessResponse();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a TeamCreateSuccessResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {dto.TeamCreateSuccessResponse} message TeamCreateSuccessResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TeamCreateSuccessResponse.toObject = function toObject(message, options) {
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
         * Converts this TeamCreateSuccessResponse to JSON.
         * @function toJSON
         * @memberof dto.TeamCreateSuccessResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TeamCreateSuccessResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TeamCreateSuccessResponse
         * @function getTypeUrl
         * @memberof dto.TeamCreateSuccessResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TeamCreateSuccessResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.TeamCreateSuccessResponse";
        };

        return TeamCreateSuccessResponse;
    })();

    return dto;
})();

export { $root as default };
