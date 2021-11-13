/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots.intjson_proto || ($protobuf.roots.intjson_proto = {});
    
    $root.intjson = (function() {
    
        /**
         * Namespace intjson.
         * @exports intjson
         * @namespace
         */
        var intjson = {};
    
        /**
         * EndingLetters enum.
         * @name intjson.EndingLetters
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} OMEGA=1 OMEGA value
         * @property {number} PSI=2 PSI value
         * @property {number} CHI=3 CHI value
         */
        intjson.EndingLetters = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "OMEGA"] = 1;
            values[valuesById[2] = "PSI"] = 2;
            values[valuesById[3] = "CHI"] = 3;
            return values;
        })();
    
        intjson.Numbers = (function() {
    
            /**
             * Properties of a Numbers.
             * @memberof intjson
             * @interface INumbers
             * @property {string|null} [label] Numbers label
             * @property {number|Long|null} [signed64] Numbers signed64
             * @property {number|Long|null} [unsigned64] Numbers unsigned64
             * @property {number|null} [signed32] Numbers signed32
             * @property {number|null} [unsigned32] Numbers unsigned32
             */
    
            /**
             * Constructs a new Numbers.
             * @memberof intjson
             * @classdesc Represents a Numbers.
             * @implements INumbers
             * @constructor
             * @param {intjson.INumbers=} [properties] Properties to set
             */
            function Numbers(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Numbers label.
             * @member {string} label
             * @memberof intjson.Numbers
             * @instance
             */
            Numbers.prototype.label = "";
    
            /**
             * Numbers signed64.
             * @member {number|Long} signed64
             * @memberof intjson.Numbers
             * @instance
             */
            Numbers.prototype.signed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Numbers unsigned64.
             * @member {number|Long} unsigned64
             * @memberof intjson.Numbers
             * @instance
             */
            Numbers.prototype.unsigned64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Numbers signed32.
             * @member {number} signed32
             * @memberof intjson.Numbers
             * @instance
             */
            Numbers.prototype.signed32 = 0;
    
            /**
             * Numbers unsigned32.
             * @member {number} unsigned32
             * @memberof intjson.Numbers
             * @instance
             */
            Numbers.prototype.unsigned32 = 0;
    
            /**
             * Creates a new Numbers instance using the specified properties.
             * @function create
             * @memberof intjson.Numbers
             * @static
             * @param {intjson.INumbers=} [properties] Properties to set
             * @returns {intjson.Numbers} Numbers instance
             */
            Numbers.create = function create(properties) {
                return new Numbers(properties);
            };
    
            /**
             * Encodes the specified Numbers message. Does not implicitly {@link intjson.Numbers.verify|verify} messages.
             * @function encode
             * @memberof intjson.Numbers
             * @static
             * @param {intjson.INumbers} message Numbers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Numbers.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.signed64 != null && Object.hasOwnProperty.call(message, "signed64"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.signed64);
                if (message.unsigned64 != null && Object.hasOwnProperty.call(message, "unsigned64"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.unsigned64);
                if (message.signed32 != null && Object.hasOwnProperty.call(message, "signed32"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.signed32);
                if (message.unsigned32 != null && Object.hasOwnProperty.call(message, "unsigned32"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.unsigned32);
                return writer;
            };
    
            /**
             * Encodes the specified Numbers message, length delimited. Does not implicitly {@link intjson.Numbers.verify|verify} messages.
             * @function encodeDelimited
             * @memberof intjson.Numbers
             * @static
             * @param {intjson.INumbers} message Numbers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Numbers.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Numbers message from the specified reader or buffer.
             * @function decode
             * @memberof intjson.Numbers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {intjson.Numbers} Numbers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Numbers.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.intjson.Numbers();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.label = reader.string();
                        break;
                    case 2:
                        message.signed64 = reader.int64();
                        break;
                    case 3:
                        message.unsigned64 = reader.uint64();
                        break;
                    case 4:
                        message.signed32 = reader.int32();
                        break;
                    case 5:
                        message.unsigned32 = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Numbers message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof intjson.Numbers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {intjson.Numbers} Numbers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Numbers.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Numbers message.
             * @function verify
             * @memberof intjson.Numbers
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Numbers.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.signed64 != null && message.hasOwnProperty("signed64"))
                    if (!$util.isInteger(message.signed64) && !(message.signed64 && $util.isInteger(message.signed64.low) && $util.isInteger(message.signed64.high)))
                        return "signed64: integer|Long expected";
                if (message.unsigned64 != null && message.hasOwnProperty("unsigned64"))
                    if (!$util.isInteger(message.unsigned64) && !(message.unsigned64 && $util.isInteger(message.unsigned64.low) && $util.isInteger(message.unsigned64.high)))
                        return "unsigned64: integer|Long expected";
                if (message.signed32 != null && message.hasOwnProperty("signed32"))
                    if (!$util.isInteger(message.signed32))
                        return "signed32: integer expected";
                if (message.unsigned32 != null && message.hasOwnProperty("unsigned32"))
                    if (!$util.isInteger(message.unsigned32))
                        return "unsigned32: integer expected";
                return null;
            };
    
            /**
             * Creates a Numbers message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof intjson.Numbers
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {intjson.Numbers} Numbers
             */
            Numbers.fromObject = function fromObject(object) {
                if (object instanceof $root.intjson.Numbers)
                    return object;
                var message = new $root.intjson.Numbers();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.signed64 != null)
                    if ($util.Long)
                        (message.signed64 = $util.Long.fromValue(object.signed64)).unsigned = false;
                    else if (typeof object.signed64 === "string")
                        message.signed64 = parseInt(object.signed64, 10);
                    else if (typeof object.signed64 === "number")
                        message.signed64 = object.signed64;
                    else if (typeof object.signed64 === "object")
                        message.signed64 = new $util.LongBits(object.signed64.low >>> 0, object.signed64.high >>> 0).toNumber();
                if (object.unsigned64 != null)
                    if ($util.Long)
                        (message.unsigned64 = $util.Long.fromValue(object.unsigned64)).unsigned = true;
                    else if (typeof object.unsigned64 === "string")
                        message.unsigned64 = parseInt(object.unsigned64, 10);
                    else if (typeof object.unsigned64 === "number")
                        message.unsigned64 = object.unsigned64;
                    else if (typeof object.unsigned64 === "object")
                        message.unsigned64 = new $util.LongBits(object.unsigned64.low >>> 0, object.unsigned64.high >>> 0).toNumber(true);
                if (object.signed32 != null)
                    message.signed32 = object.signed32 | 0;
                if (object.unsigned32 != null)
                    message.unsigned32 = object.unsigned32 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Numbers message. Also converts values to other types if specified.
             * @function toObject
             * @memberof intjson.Numbers
             * @static
             * @param {intjson.Numbers} message Numbers
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Numbers.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.label = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.signed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.signed64 = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.unsigned64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.unsigned64 = options.longs === String ? "0" : 0;
                    object.signed32 = 0;
                    object.unsigned32 = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.signed64 != null && message.hasOwnProperty("signed64"))
                    if (typeof message.signed64 === "number")
                        object.signed64 = options.longs === String ? String(message.signed64) : message.signed64;
                    else
                        object.signed64 = options.longs === String ? $util.Long.prototype.toString.call(message.signed64) : options.longs === Number ? new $util.LongBits(message.signed64.low >>> 0, message.signed64.high >>> 0).toNumber() : message.signed64;
                if (message.unsigned64 != null && message.hasOwnProperty("unsigned64"))
                    if (typeof message.unsigned64 === "number")
                        object.unsigned64 = options.longs === String ? String(message.unsigned64) : message.unsigned64;
                    else
                        object.unsigned64 = options.longs === String ? $util.Long.prototype.toString.call(message.unsigned64) : options.longs === Number ? new $util.LongBits(message.unsigned64.low >>> 0, message.unsigned64.high >>> 0).toNumber(true) : message.unsigned64;
                if (message.signed32 != null && message.hasOwnProperty("signed32"))
                    object.signed32 = message.signed32;
                if (message.unsigned32 != null && message.hasOwnProperty("unsigned32"))
                    object.unsigned32 = message.unsigned32;
                return object;
            };
    
            /**
             * Converts this Numbers to JSON.
             * @function toJSON
             * @memberof intjson.Numbers
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Numbers.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * BeginningLetters enum.
             * @name intjson.Numbers.BeginningLetters
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} ALPHA=1 ALPHA value
             * @property {number} BETA=2 BETA value
             * @property {number} GAMMA=3 GAMMA value
             */
            Numbers.BeginningLetters = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "ALPHA"] = 1;
                values[valuesById[2] = "BETA"] = 2;
                values[valuesById[3] = "GAMMA"] = 3;
                return values;
            })();
    
            return Numbers;
        })();
    
        return intjson;
    })();

    return $root;
});
