/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Page } from "../common/pageable";
import { LessonSnippet } from "../lessons/lessons_api";

export const protobufPackage = "ru.hse.lmsteam.proto.homeworks";

export interface GetHomework {
}

export interface GetHomework_Response {
  homework: Homework | undefined;
}

export interface CreateOrUpdateHomework {
}

export interface CreateOrUpdateHomework_Request {
  lessonId: string;
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  isGroupWork: boolean;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface CreateOrUpdateHomework_Response {
  homework: Homework | undefined;
}

export interface DeleteHomework {
}

export interface DeleteHomework_Response {
  entriesDeleted: number;
}

export interface GetHomeworks {
}

export interface GetHomeworks_Response {
  page: Page | undefined;
  homeworks: HomeworkSnippet[];
}

export interface Homework {
  id: string;
  lesson: LessonSnippet | undefined;
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  isGroupWork: boolean;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface HomeworkSnippet {
  id: string;
  lesson: LessonSnippet | undefined;
  title: string;
  deadlineDate: Date | undefined;
}

function createBaseGetHomework(): GetHomework {
  return {};
}

export const GetHomework = {
  encode(_: GetHomework, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHomework {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHomework();
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

  create<I extends Exact<DeepPartial<GetHomework>, I>>(base?: I): GetHomework {
    return GetHomework.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHomework>, I>>(_: I): GetHomework {
    const message = createBaseGetHomework();
    return message;
  },
};

function createBaseGetHomework_Response(): GetHomework_Response {
  return { homework: undefined };
}

export const GetHomework_Response = {
  encode(message: GetHomework_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.homework !== undefined) {
      Homework.encode(message.homework, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHomework_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHomework_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.homework = Homework.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetHomework_Response>, I>>(base?: I): GetHomework_Response {
    return GetHomework_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHomework_Response>, I>>(object: I): GetHomework_Response {
    const message = createBaseGetHomework_Response();
    message.homework = (object.homework !== undefined && object.homework !== null)
      ? Homework.fromPartial(object.homework)
      : undefined;
    return message;
  },
};

function createBaseCreateOrUpdateHomework(): CreateOrUpdateHomework {
  return {};
}

export const CreateOrUpdateHomework = {
  encode(_: CreateOrUpdateHomework, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateHomework {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateHomework();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateHomework>, I>>(base?: I): CreateOrUpdateHomework {
    return CreateOrUpdateHomework.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateHomework>, I>>(_: I): CreateOrUpdateHomework {
    const message = createBaseCreateOrUpdateHomework();
    return message;
  },
};

function createBaseCreateOrUpdateHomework_Request(): CreateOrUpdateHomework_Request {
  return {
    lessonId: "",
    deadlineDate: undefined,
    publishDate: undefined,
    isGroupWork: false,
    title: "",
    description: "",
    gradingCriteria: "",
    externalMaterialUrls: [],
  };
}

export const CreateOrUpdateHomework_Request = {
  encode(message: CreateOrUpdateHomework_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lessonId !== "") {
      writer.uint32(10).string(message.lessonId);
    }
    if (message.deadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.deadlineDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.publishDate !== undefined) {
      Timestamp.encode(toTimestamp(message.publishDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.isGroupWork !== false) {
      writer.uint32(32).bool(message.isGroupWork);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateHomework_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateHomework_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lessonId = reader.string();
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
          if (tag !== 32) {
            break;
          }

          message.isGroupWork = reader.bool();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateHomework_Request>, I>>(base?: I): CreateOrUpdateHomework_Request {
    return CreateOrUpdateHomework_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateHomework_Request>, I>>(
    object: I,
  ): CreateOrUpdateHomework_Request {
    const message = createBaseCreateOrUpdateHomework_Request();
    message.lessonId = object.lessonId ?? "";
    message.deadlineDate = object.deadlineDate ?? undefined;
    message.publishDate = object.publishDate ?? undefined;
    message.isGroupWork = object.isGroupWork ?? false;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.gradingCriteria = object.gradingCriteria ?? "";
    message.externalMaterialUrls = object.externalMaterialUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateOrUpdateHomework_Response(): CreateOrUpdateHomework_Response {
  return { homework: undefined };
}

export const CreateOrUpdateHomework_Response = {
  encode(message: CreateOrUpdateHomework_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.homework !== undefined) {
      Homework.encode(message.homework, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateHomework_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateHomework_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.homework = Homework.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateHomework_Response>, I>>(base?: I): CreateOrUpdateHomework_Response {
    return CreateOrUpdateHomework_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateHomework_Response>, I>>(
    object: I,
  ): CreateOrUpdateHomework_Response {
    const message = createBaseCreateOrUpdateHomework_Response();
    message.homework = (object.homework !== undefined && object.homework !== null)
      ? Homework.fromPartial(object.homework)
      : undefined;
    return message;
  },
};

function createBaseDeleteHomework(): DeleteHomework {
  return {};
}

export const DeleteHomework = {
  encode(_: DeleteHomework, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHomework {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteHomework();
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

  create<I extends Exact<DeepPartial<DeleteHomework>, I>>(base?: I): DeleteHomework {
    return DeleteHomework.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteHomework>, I>>(_: I): DeleteHomework {
    const message = createBaseDeleteHomework();
    return message;
  },
};

function createBaseDeleteHomework_Response(): DeleteHomework_Response {
  return { entriesDeleted: 0 };
}

export const DeleteHomework_Response = {
  encode(message: DeleteHomework_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entriesDeleted !== 0) {
      writer.uint32(8).int64(message.entriesDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHomework_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteHomework_Response();
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

  create<I extends Exact<DeepPartial<DeleteHomework_Response>, I>>(base?: I): DeleteHomework_Response {
    return DeleteHomework_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteHomework_Response>, I>>(object: I): DeleteHomework_Response {
    const message = createBaseDeleteHomework_Response();
    message.entriesDeleted = object.entriesDeleted ?? 0;
    return message;
  },
};

function createBaseGetHomeworks(): GetHomeworks {
  return {};
}

export const GetHomeworks = {
  encode(_: GetHomeworks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHomeworks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHomeworks();
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

  create<I extends Exact<DeepPartial<GetHomeworks>, I>>(base?: I): GetHomeworks {
    return GetHomeworks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHomeworks>, I>>(_: I): GetHomeworks {
    const message = createBaseGetHomeworks();
    return message;
  },
};

function createBaseGetHomeworks_Response(): GetHomeworks_Response {
  return { page: undefined, homeworks: [] };
}

export const GetHomeworks_Response = {
  encode(message: GetHomeworks_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.homeworks) {
      HomeworkSnippet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHomeworks_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHomeworks_Response();
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

          message.homeworks.push(HomeworkSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetHomeworks_Response>, I>>(base?: I): GetHomeworks_Response {
    return GetHomeworks_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetHomeworks_Response>, I>>(object: I): GetHomeworks_Response {
    const message = createBaseGetHomeworks_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.homeworks = object.homeworks?.map((e) => HomeworkSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHomework(): Homework {
  return {
    id: "",
    lesson: undefined,
    deadlineDate: undefined,
    publishDate: undefined,
    isGroupWork: false,
    title: "",
    description: "",
    gradingCriteria: "",
    externalMaterialUrls: [],
  };
}

export const Homework = {
  encode(message: Homework, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.lesson !== undefined) {
      LessonSnippet.encode(message.lesson, writer.uint32(18).fork()).ldelim();
    }
    if (message.deadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.deadlineDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.publishDate !== undefined) {
      Timestamp.encode(toTimestamp(message.publishDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.isGroupWork !== false) {
      writer.uint32(40).bool(message.isGroupWork);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.gradingCriteria !== "") {
      writer.uint32(66).string(message.gradingCriteria);
    }
    for (const v of message.externalMaterialUrls) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Homework {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHomework();
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

          message.lesson = LessonSnippet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publishDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isGroupWork = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.title = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.gradingCriteria = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
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

  create<I extends Exact<DeepPartial<Homework>, I>>(base?: I): Homework {
    return Homework.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Homework>, I>>(object: I): Homework {
    const message = createBaseHomework();
    message.id = object.id ?? "";
    message.lesson = (object.lesson !== undefined && object.lesson !== null)
      ? LessonSnippet.fromPartial(object.lesson)
      : undefined;
    message.deadlineDate = object.deadlineDate ?? undefined;
    message.publishDate = object.publishDate ?? undefined;
    message.isGroupWork = object.isGroupWork ?? false;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.gradingCriteria = object.gradingCriteria ?? "";
    message.externalMaterialUrls = object.externalMaterialUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseHomeworkSnippet(): HomeworkSnippet {
  return { id: "", lesson: undefined, title: "", deadlineDate: undefined };
}

export const HomeworkSnippet = {
  encode(message: HomeworkSnippet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.lesson !== undefined) {
      LessonSnippet.encode(message.lesson, writer.uint32(18).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.deadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.deadlineDate), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HomeworkSnippet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHomeworkSnippet();
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

          message.lesson = LessonSnippet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  create<I extends Exact<DeepPartial<HomeworkSnippet>, I>>(base?: I): HomeworkSnippet {
    return HomeworkSnippet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HomeworkSnippet>, I>>(object: I): HomeworkSnippet {
    const message = createBaseHomeworkSnippet();
    message.id = object.id ?? "";
    message.lesson = (object.lesson !== undefined && object.lesson !== null)
      ? LessonSnippet.fromPartial(object.lesson)
      : undefined;
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
