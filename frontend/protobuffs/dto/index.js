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

    dto.PersonRequest = (function() {

        /**
         * Properties of a PersonRequest.
         * @memberof dto
         * @interface IPersonRequest
         * @property {number|null} [id] PersonRequest id
         */

        /**
         * Constructs a new PersonRequest.
         * @memberof dto
         * @classdesc Represents a PersonRequest.
         * @implements IPersonRequest
         * @constructor
         * @param {dto.IPersonRequest=} [properties] Properties to set
         */
        function PersonRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PersonRequest id.
         * @member {number} id
         * @memberof dto.PersonRequest
         * @instance
         */
        PersonRequest.prototype.id = 0;

        /**
         * Creates a new PersonRequest instance using the specified properties.
         * @function create
         * @memberof dto.PersonRequest
         * @static
         * @param {dto.IPersonRequest=} [properties] Properties to set
         * @returns {dto.PersonRequest} PersonRequest instance
         */
        PersonRequest.create = function create(properties) {
            return new PersonRequest(properties);
        };

        /**
         * Encodes the specified PersonRequest message. Does not implicitly {@link dto.PersonRequest.verify|verify} messages.
         * @function encode
         * @memberof dto.PersonRequest
         * @static
         * @param {dto.IPersonRequest} message PersonRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified PersonRequest message, length delimited. Does not implicitly {@link dto.PersonRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.PersonRequest
         * @static
         * @param {dto.IPersonRequest} message PersonRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PersonRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dto.PersonRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.PersonRequest} PersonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.PersonRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
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
         * Decodes a PersonRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.PersonRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.PersonRequest} PersonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PersonRequest message.
         * @function verify
         * @memberof dto.PersonRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersonRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a PersonRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.PersonRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.PersonRequest} PersonRequest
         */
        PersonRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.PersonRequest)
                return object;
            let message = new $root.dto.PersonRequest();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a PersonRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.PersonRequest
         * @static
         * @param {dto.PersonRequest} message PersonRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PersonRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PersonRequest to JSON.
         * @function toJSON
         * @memberof dto.PersonRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PersonRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PersonRequest
         * @function getTypeUrl
         * @memberof dto.PersonRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PersonRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.PersonRequest";
        };

        return PersonRequest;
    })();

    dto.PersonResponse = (function() {

        /**
         * Properties of a PersonResponse.
         * @memberof dto
         * @interface IPersonResponse
         * @property {string|null} [name] PersonResponse name
         * @property {string|null} [surname] PersonResponse surname
         */

        /**
         * Constructs a new PersonResponse.
         * @memberof dto
         * @classdesc Represents a PersonResponse.
         * @implements IPersonResponse
         * @constructor
         * @param {dto.IPersonResponse=} [properties] Properties to set
         */
        function PersonResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PersonResponse name.
         * @member {string} name
         * @memberof dto.PersonResponse
         * @instance
         */
        PersonResponse.prototype.name = "";

        /**
         * PersonResponse surname.
         * @member {string} surname
         * @memberof dto.PersonResponse
         * @instance
         */
        PersonResponse.prototype.surname = "";

        /**
         * Creates a new PersonResponse instance using the specified properties.
         * @function create
         * @memberof dto.PersonResponse
         * @static
         * @param {dto.IPersonResponse=} [properties] Properties to set
         * @returns {dto.PersonResponse} PersonResponse instance
         */
        PersonResponse.create = function create(properties) {
            return new PersonResponse(properties);
        };

        /**
         * Encodes the specified PersonResponse message. Does not implicitly {@link dto.PersonResponse.verify|verify} messages.
         * @function encode
         * @memberof dto.PersonResponse
         * @static
         * @param {dto.IPersonResponse} message PersonResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.surname != null && Object.hasOwnProperty.call(message, "surname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.surname);
            return writer;
        };

        /**
         * Encodes the specified PersonResponse message, length delimited. Does not implicitly {@link dto.PersonResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.PersonResponse
         * @static
         * @param {dto.IPersonResponse} message PersonResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PersonResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dto.PersonResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.PersonResponse} PersonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.PersonResponse();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PersonResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.PersonResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.PersonResponse} PersonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PersonResponse message.
         * @function verify
         * @memberof dto.PersonResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersonResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.surname != null && message.hasOwnProperty("surname"))
                if (!$util.isString(message.surname))
                    return "surname: string expected";
            return null;
        };

        /**
         * Creates a PersonResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.PersonResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.PersonResponse} PersonResponse
         */
        PersonResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.PersonResponse)
                return object;
            let message = new $root.dto.PersonResponse();
            if (object.name != null)
                message.name = String(object.name);
            if (object.surname != null)
                message.surname = String(object.surname);
            return message;
        };

        /**
         * Creates a plain object from a PersonResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.PersonResponse
         * @static
         * @param {dto.PersonResponse} message PersonResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PersonResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.surname = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.surname != null && message.hasOwnProperty("surname"))
                object.surname = message.surname;
            return object;
        };

        /**
         * Converts this PersonResponse to JSON.
         * @function toJSON
         * @memberof dto.PersonResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PersonResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PersonResponse
         * @function getTypeUrl
         * @memberof dto.PersonResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PersonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.PersonResponse";
        };

        return PersonResponse;
    })();

    return dto;
})();

export { $root as default };
