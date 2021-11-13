import * as $protobuf from "protobufjs";
/** Namespace intjson. */
export namespace intjson {

    /** EndingLetters enum. */
    enum EndingLetters {
        UNKNOWN = 0,
        OMEGA = 1,
        PSI = 2,
        CHI = 3
    }

    /** Properties of a Numbers. */
    interface INumbers {

        /** Numbers label */
        label?: (string|null);

        /** Numbers signed64 */
        signed64?: (number|Long|null);

        /** Numbers unsigned64 */
        unsigned64?: (number|Long|null);

        /** Numbers signed32 */
        signed32?: (number|null);

        /** Numbers unsigned32 */
        unsigned32?: (number|null);
    }

    /** Represents a Numbers. */
    class Numbers implements INumbers {

        /**
         * Constructs a new Numbers.
         * @param [properties] Properties to set
         */
        constructor(properties?: intjson.INumbers);

        /** Numbers label. */
        public label: string;

        /** Numbers signed64. */
        public signed64: (number|Long);

        /** Numbers unsigned64. */
        public unsigned64: (number|Long);

        /** Numbers signed32. */
        public signed32: number;

        /** Numbers unsigned32. */
        public unsigned32: number;

        /**
         * Creates a new Numbers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Numbers instance
         */
        public static create(properties?: intjson.INumbers): intjson.Numbers;

        /**
         * Encodes the specified Numbers message. Does not implicitly {@link intjson.Numbers.verify|verify} messages.
         * @param message Numbers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: intjson.INumbers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Numbers message, length delimited. Does not implicitly {@link intjson.Numbers.verify|verify} messages.
         * @param message Numbers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: intjson.INumbers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Numbers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Numbers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intjson.Numbers;

        /**
         * Decodes a Numbers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Numbers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intjson.Numbers;

        /**
         * Verifies a Numbers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Numbers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Numbers
         */
        public static fromObject(object: { [k: string]: any }): intjson.Numbers;

        /**
         * Creates a plain object from a Numbers message. Also converts values to other types if specified.
         * @param message Numbers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: intjson.Numbers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Numbers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Numbers {

        /** BeginningLetters enum. */
        enum BeginningLetters {
            UNKNOWN = 0,
            ALPHA = 1,
            BETA = 2,
            GAMMA = 3
        }
    }
}
