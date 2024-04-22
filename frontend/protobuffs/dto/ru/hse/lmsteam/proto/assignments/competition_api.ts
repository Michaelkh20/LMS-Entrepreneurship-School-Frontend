/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Page } from "../common/pageable";

export const protobufPackage = "ru.hse.lmsteam.proto.competitions";

export interface GetCompetition {
}

export interface GetCompetition_Response {
  competition: Competition | undefined;
}

export interface CreateOrUpdateCompetition {
}

export interface CreateOrUpdateCompetition_Request {
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface CreateOrUpdateCompetition_Response {
  competition: Competition | undefined;
}

export interface DeleteCompetition {
}

export interface DeleteCompetition_Response {
  entriesDeleted: number;
}

export interface GetCompetitions {
}

export interface GetCompetitions_Response {
  page: Page | undefined;
  competitions: CompetitionSnippet[];
}

export interface Competition {
  id: string;
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface CompetitionSnippet {
  id: string;
  title: string;
  deadlineDate: Date | undefined;
}

function createBaseGetCompetition(): GetCompetition {
  return {};
}

export const GetCompetition = {
  encode(_: GetCompetition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCompetition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetCompetition>, I>>(base?: I): GetCompetition {
    return GetCompetition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCompetition>, I>>(_: I): GetCompetition {
    const message = createBaseGetCompetition();
    return message;
  },
};

function createBaseGetCompetition_Response(): GetCompetition_Response {
  return { competition: undefined };
}

export const GetCompetition_Response = {
  encode(message: GetCompetition_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.competition !== undefined) {
      Competition.encode(message.competition, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCompetition_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetition_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.competition = Competition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetCompetition_Response>, I>>(base?: I): GetCompetition_Response {
    return GetCompetition_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCompetition_Response>, I>>(object: I): GetCompetition_Response {
    const message = createBaseGetCompetition_Response();
    message.competition = (object.competition !== undefined && object.competition !== null)
      ? Competition.fromPartial(object.competition)
      : undefined;
    return message;
  },
};

function createBaseCreateOrUpdateCompetition(): CreateOrUpdateCompetition {
  return {};
}

export const CreateOrUpdateCompetition = {
  encode(_: CreateOrUpdateCompetition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateCompetition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateCompetition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateCompetition>, I>>(base?: I): CreateOrUpdateCompetition {
    return CreateOrUpdateCompetition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateCompetition>, I>>(_: I): CreateOrUpdateCompetition {
    const message = createBaseCreateOrUpdateCompetition();
    return message;
  },
};

function createBaseCreateOrUpdateCompetition_Request(): CreateOrUpdateCompetition_Request {
  return {
    deadlineDate: undefined,
    publishDate: undefined,
    title: "",
    description: "",
    gradingCriteria: "",
    externalMaterialUrls: [],
  };
}

export const CreateOrUpdateCompetition_Request = {
  encode(message: CreateOrUpdateCompetition_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.deadlineDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.publishDate !== undefined) {
      Timestamp.encode(toTimestamp(message.publishDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.gradingCriteria !== "") {
      writer.uint32(58).string(message.gradingCriteria);
    }
    for (const v of message.externalMaterialUrls) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateCompetition_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateCompetition_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.publishDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.title = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gradingCriteria = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.externalMaterialUrls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateCompetition_Request>, I>>(
    base?: I,
  ): CreateOrUpdateCompetition_Request {
    return CreateOrUpdateCompetition_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateCompetition_Request>, I>>(
    object: I,
  ): CreateOrUpdateCompetition_Request {
    const message = createBaseCreateOrUpdateCompetition_Request();
    message.deadlineDate = object.deadlineDate ?? undefined;
    message.publishDate = object.publishDate ?? undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.gradingCriteria = object.gradingCriteria ?? "";
    message.externalMaterialUrls = object.externalMaterialUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateOrUpdateCompetition_Response(): CreateOrUpdateCompetition_Response {
  return { competition: undefined };
}

export const CreateOrUpdateCompetition_Response = {
  encode(message: CreateOrUpdateCompetition_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.competition !== undefined) {
      Competition.encode(message.competition, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateCompetition_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateCompetition_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.competition = Competition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateCompetition_Response>, I>>(
    base?: I,
  ): CreateOrUpdateCompetition_Response {
    return CreateOrUpdateCompetition_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateCompetition_Response>, I>>(
    object: I,
  ): CreateOrUpdateCompetition_Response {
    const message = createBaseCreateOrUpdateCompetition_Response();
    message.competition = (object.competition !== undefined && object.competition !== null)
      ? Competition.fromPartial(object.competition)
      : undefined;
    return message;
  },
};

function createBaseDeleteCompetition(): DeleteCompetition {
  return {};
}

export const DeleteCompetition = {
  encode(_: DeleteCompetition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCompetition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCompetition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<DeleteCompetition>, I>>(base?: I): DeleteCompetition {
    return DeleteCompetition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCompetition>, I>>(_: I): DeleteCompetition {
    const message = createBaseDeleteCompetition();
    return message;
  },
};

function createBaseDeleteCompetition_Response(): DeleteCompetition_Response {
  return { entriesDeleted: 0 };
}

export const DeleteCompetition_Response = {
  encode(message: DeleteCompetition_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entriesDeleted !== 0) {
      writer.uint32(8).int64(message.entriesDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCompetition_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCompetition_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.entriesDeleted = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<DeleteCompetition_Response>, I>>(base?: I): DeleteCompetition_Response {
    return DeleteCompetition_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCompetition_Response>, I>>(object: I): DeleteCompetition_Response {
    const message = createBaseDeleteCompetition_Response();
    message.entriesDeleted = object.entriesDeleted ?? 0;
    return message;
  },
};

function createBaseGetCompetitions(): GetCompetitions {
  return {};
}

export const GetCompetitions = {
  encode(_: GetCompetitions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCompetitions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetitions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetCompetitions>, I>>(base?: I): GetCompetitions {
    return GetCompetitions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCompetitions>, I>>(_: I): GetCompetitions {
    const message = createBaseGetCompetitions();
    return message;
  },
};

function createBaseGetCompetitions_Response(): GetCompetitions_Response {
  return { page: undefined, competitions: [] };
}

export const GetCompetitions_Response = {
  encode(message: GetCompetitions_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.competitions) {
      CompetitionSnippet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCompetitions_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetitions_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.page = Page.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.competitions.push(CompetitionSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetCompetitions_Response>, I>>(base?: I): GetCompetitions_Response {
    return GetCompetitions_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCompetitions_Response>, I>>(object: I): GetCompetitions_Response {
    const message = createBaseGetCompetitions_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.competitions = object.competitions?.map((e) => CompetitionSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCompetition(): Competition {
  return {
    id: "",
    deadlineDate: undefined,
    publishDate: undefined,
    title: "",
    description: "",
    gradingCriteria: "",
    externalMaterialUrls: [],
  };
}

export const Competition = {
  encode(message: Competition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.deadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.deadlineDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.publishDate !== undefined) {
      Timestamp.encode(toTimestamp(message.publishDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.gradingCriteria !== "") {
      writer.uint32(50).string(message.gradingCriteria);
    }
    for (const v of message.externalMaterialUrls) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Competition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetition();
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
          if (tag !== 18) {
            break;
          }

          message.deadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.publishDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gradingCriteria = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.externalMaterialUrls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Competition>, I>>(base?: I): Competition {
    return Competition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Competition>, I>>(object: I): Competition {
    const message = createBaseCompetition();
    message.id = object.id ?? "";
    message.deadlineDate = object.deadlineDate ?? undefined;
    message.publishDate = object.publishDate ?? undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.gradingCriteria = object.gradingCriteria ?? "";
    message.externalMaterialUrls = object.externalMaterialUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseCompetitionSnippet(): CompetitionSnippet {
  return { id: "", title: "", deadlineDate: undefined };
}

export const CompetitionSnippet = {
  encode(message: CompetitionSnippet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.deadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.deadlineDate), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompetitionSnippet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionSnippet();
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
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CompetitionSnippet>, I>>(base?: I): CompetitionSnippet {
    return CompetitionSnippet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompetitionSnippet>, I>>(object: I): CompetitionSnippet {
    const message = createBaseCompetitionSnippet();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.deadlineDate = object.deadlineDate ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

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
