/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ru.hse.lmsteam.proto.teams";

export interface TeamSnippet {
  id: string;
  number: number;
  projectTheme: string;
  description: string;
}

function createBaseTeamSnippet(): TeamSnippet {
  return { id: "", number: 0, projectTheme: "", description: "" };
}

export const TeamSnippet = {
  encode(message: TeamSnippet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.projectTheme !== "") {
      writer.uint32(26).string(message.projectTheme);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TeamSnippet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTeamSnippet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectTheme = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<TeamSnippet>, I>>(base?: I): TeamSnippet {
    return TeamSnippet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TeamSnippet>, I>>(object: I): TeamSnippet {
    const message = createBaseTeamSnippet();
    message.id = object.id ?? "";
    message.number = object.number ?? 0;
    message.projectTheme = object.projectTheme ?? "";
    message.description = object.description ?? "";
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
