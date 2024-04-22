/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ru.hse.lmsteam.proto.common";

export interface Page {
  totalPages: number;
  totalElements: number;
}

function createBasePage(): Page {
  return { totalPages: 0, totalElements: 0 };
}

export const Page = {
  encode(message: Page, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalPages !== 0) {
      writer.uint32(8).int32(message.totalPages);
    }
    if (message.totalElements !== 0) {
      writer.uint32(16).int64(message.totalElements);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Page {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalPages = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalElements = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Page>, I>>(base?: I): Page {
    return Page.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Page>, I>>(object: I): Page {
    const message = createBasePage();
    message.totalPages = object.totalPages ?? 0;
    message.totalElements = object.totalElements ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
