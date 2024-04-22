/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { StringValue } from "../../../../../google/protobuf/wrappers";
import { Page } from "../common/pageable";

export const protobufPackage = "ru.hse.lmsteam.proto.lessons";

export interface GetLesson {
}

export interface GetLesson_Response {
  lesson: Lesson | undefined;
}

export interface UpdateLesson {
}

export interface UpdateLesson_Request {
  lesson: Lesson | undefined;
}

export interface UpdateLesson_Response {
  lesson: Lesson | undefined;
}

export interface CreateOrUpdateLesson {
}

export interface CreateOrUpdateLesson_Request {
  title: string;
  lessonNumber: number;
  publishDate:
    | Date
    | undefined;
  /** optional */
  description: string | undefined;
  videoUrls: string[];
  presentationUrls: string[];
}

export interface CreateOrUpdateLesson_Response {
  lesson: Lesson | undefined;
}

export interface GetLessons {
}

export interface GetLessons_Response {
  page: Page | undefined;
  lessons: LessonSnippet[];
}

export interface DeleteLesson {
}

export interface DeleteLesson_Response {
  entitiesDeleted: number;
}

export interface Lesson {
  /** required */
  id: string;
  title: string;
  lessonNumber: number;
  publishDate:
    | Date
    | undefined;
  /** optional */
  description: string | undefined;
  videoUrls: string[];
  presentationUrls: string[];
  homeworkIds: string[];
  testIds: string[];
}

export interface LessonSnippet {
  /** required */
  id: string;
  title: string;
  lessonNumber: number;
  publishDate: Date | undefined;
}

function createBaseGetLesson(): GetLesson {
  return {};
}

export const GetLesson = {
  encode(_: GetLesson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLesson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLesson();
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

  create<I extends Exact<DeepPartial<GetLesson>, I>>(base?: I): GetLesson {
    return GetLesson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLesson>, I>>(_: I): GetLesson {
    const message = createBaseGetLesson();
    return message;
  },
};

function createBaseGetLesson_Response(): GetLesson_Response {
  return { lesson: undefined };
}

export const GetLesson_Response = {
  encode(message: GetLesson_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lesson !== undefined) {
      Lesson.encode(message.lesson, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLesson_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLesson_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lesson = Lesson.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetLesson_Response>, I>>(base?: I): GetLesson_Response {
    return GetLesson_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLesson_Response>, I>>(object: I): GetLesson_Response {
    const message = createBaseGetLesson_Response();
    message.lesson = (object.lesson !== undefined && object.lesson !== null)
      ? Lesson.fromPartial(object.lesson)
      : undefined;
    return message;
  },
};

function createBaseUpdateLesson(): UpdateLesson {
  return {};
}

export const UpdateLesson = {
  encode(_: UpdateLesson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLesson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLesson();
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

  create<I extends Exact<DeepPartial<UpdateLesson>, I>>(base?: I): UpdateLesson {
    return UpdateLesson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLesson>, I>>(_: I): UpdateLesson {
    const message = createBaseUpdateLesson();
    return message;
  },
};

function createBaseUpdateLesson_Request(): UpdateLesson_Request {
  return { lesson: undefined };
}

export const UpdateLesson_Request = {
  encode(message: UpdateLesson_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lesson !== undefined) {
      Lesson.encode(message.lesson, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLesson_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLesson_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lesson = Lesson.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<UpdateLesson_Request>, I>>(base?: I): UpdateLesson_Request {
    return UpdateLesson_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLesson_Request>, I>>(object: I): UpdateLesson_Request {
    const message = createBaseUpdateLesson_Request();
    message.lesson = (object.lesson !== undefined && object.lesson !== null)
      ? Lesson.fromPartial(object.lesson)
      : undefined;
    return message;
  },
};

function createBaseUpdateLesson_Response(): UpdateLesson_Response {
  return { lesson: undefined };
}

export const UpdateLesson_Response = {
  encode(message: UpdateLesson_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lesson !== undefined) {
      Lesson.encode(message.lesson, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLesson_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLesson_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lesson = Lesson.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<UpdateLesson_Response>, I>>(base?: I): UpdateLesson_Response {
    return UpdateLesson_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateLesson_Response>, I>>(object: I): UpdateLesson_Response {
    const message = createBaseUpdateLesson_Response();
    message.lesson = (object.lesson !== undefined && object.lesson !== null)
      ? Lesson.fromPartial(object.lesson)
      : undefined;
    return message;
  },
};

function createBaseCreateOrUpdateLesson(): CreateOrUpdateLesson {
  return {};
}

export const CreateOrUpdateLesson = {
  encode(_: CreateOrUpdateLesson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateLesson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateLesson();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateLesson>, I>>(base?: I): CreateOrUpdateLesson {
    return CreateOrUpdateLesson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateLesson>, I>>(_: I): CreateOrUpdateLesson {
    const message = createBaseCreateOrUpdateLesson();
    return message;
  },
};

function createBaseCreateOrUpdateLesson_Request(): CreateOrUpdateLesson_Request {
  return {
    title: "",
    lessonNumber: 0,
    publishDate: undefined,
    description: undefined,
    videoUrls: [],
    presentationUrls: [],
  };
}

export const CreateOrUpdateLesson_Request = {
  encode(message: CreateOrUpdateLesson_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.lessonNumber !== 0) {
      writer.uint32(16).int32(message.lessonNumber);
    }
    if (message.publishDate !== undefined) {
      Timestamp.encode(toTimestamp(message.publishDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== undefined) {
      StringValue.encode({ value: message.description! }, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.videoUrls) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.presentationUrls) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateLesson_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateLesson_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lessonNumber = reader.int32();
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

          message.description = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.videoUrls.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.presentationUrls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateLesson_Request>, I>>(base?: I): CreateOrUpdateLesson_Request {
    return CreateOrUpdateLesson_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateLesson_Request>, I>>(object: I): CreateOrUpdateLesson_Request {
    const message = createBaseCreateOrUpdateLesson_Request();
    message.title = object.title ?? "";
    message.lessonNumber = object.lessonNumber ?? 0;
    message.publishDate = object.publishDate ?? undefined;
    message.description = object.description ?? undefined;
    message.videoUrls = object.videoUrls?.map((e) => e) || [];
    message.presentationUrls = object.presentationUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateOrUpdateLesson_Response(): CreateOrUpdateLesson_Response {
  return { lesson: undefined };
}

export const CreateOrUpdateLesson_Response = {
  encode(message: CreateOrUpdateLesson_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lesson !== undefined) {
      Lesson.encode(message.lesson, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateLesson_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateLesson_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lesson = Lesson.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateLesson_Response>, I>>(base?: I): CreateOrUpdateLesson_Response {
    return CreateOrUpdateLesson_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateLesson_Response>, I>>(
    object: I,
  ): CreateOrUpdateLesson_Response {
    const message = createBaseCreateOrUpdateLesson_Response();
    message.lesson = (object.lesson !== undefined && object.lesson !== null)
      ? Lesson.fromPartial(object.lesson)
      : undefined;
    return message;
  },
};

function createBaseGetLessons(): GetLessons {
  return {};
}

export const GetLessons = {
  encode(_: GetLessons, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLessons {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLessons();
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

  create<I extends Exact<DeepPartial<GetLessons>, I>>(base?: I): GetLessons {
    return GetLessons.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLessons>, I>>(_: I): GetLessons {
    const message = createBaseGetLessons();
    return message;
  },
};

function createBaseGetLessons_Response(): GetLessons_Response {
  return { page: undefined, lessons: [] };
}

export const GetLessons_Response = {
  encode(message: GetLessons_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lessons) {
      LessonSnippet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLessons_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLessons_Response();
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

          message.lessons.push(LessonSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetLessons_Response>, I>>(base?: I): GetLessons_Response {
    return GetLessons_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLessons_Response>, I>>(object: I): GetLessons_Response {
    const message = createBaseGetLessons_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.lessons = object.lessons?.map((e) => LessonSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteLesson(): DeleteLesson {
  return {};
}

export const DeleteLesson = {
  encode(_: DeleteLesson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLesson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLesson();
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

  create<I extends Exact<DeepPartial<DeleteLesson>, I>>(base?: I): DeleteLesson {
    return DeleteLesson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLesson>, I>>(_: I): DeleteLesson {
    const message = createBaseDeleteLesson();
    return message;
  },
};

function createBaseDeleteLesson_Response(): DeleteLesson_Response {
  return { entitiesDeleted: 0 };
}

export const DeleteLesson_Response = {
  encode(message: DeleteLesson_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entitiesDeleted !== 0) {
      writer.uint32(8).int64(message.entitiesDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLesson_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLesson_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.entitiesDeleted = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<DeleteLesson_Response>, I>>(base?: I): DeleteLesson_Response {
    return DeleteLesson_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteLesson_Response>, I>>(object: I): DeleteLesson_Response {
    const message = createBaseDeleteLesson_Response();
    message.entitiesDeleted = object.entitiesDeleted ?? 0;
    return message;
  },
};

function createBaseLesson(): Lesson {
  return {
    id: "",
    title: "",
    lessonNumber: 0,
    publishDate: undefined,
    description: undefined,
    videoUrls: [],
    presentationUrls: [],
    homeworkIds: [],
    testIds: [],
  };
}

export const Lesson = {
  encode(message: Lesson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.lessonNumber !== 0) {
      writer.uint32(24).int32(message.lessonNumber);
    }
    if (message.publishDate !== undefined) {
      Timestamp.encode(toTimestamp(message.publishDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== undefined) {
      StringValue.encode({ value: message.description! }, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.videoUrls) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.presentationUrls) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.homeworkIds) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.testIds) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lesson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLesson();
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
          if (tag !== 24) {
            break;
          }

          message.lessonNumber = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publishDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.videoUrls.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.presentationUrls.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.homeworkIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.testIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Lesson>, I>>(base?: I): Lesson {
    return Lesson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lesson>, I>>(object: I): Lesson {
    const message = createBaseLesson();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.lessonNumber = object.lessonNumber ?? 0;
    message.publishDate = object.publishDate ?? undefined;
    message.description = object.description ?? undefined;
    message.videoUrls = object.videoUrls?.map((e) => e) || [];
    message.presentationUrls = object.presentationUrls?.map((e) => e) || [];
    message.homeworkIds = object.homeworkIds?.map((e) => e) || [];
    message.testIds = object.testIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseLessonSnippet(): LessonSnippet {
  return { id: "", title: "", lessonNumber: 0, publishDate: undefined };
}

export const LessonSnippet = {
  encode(message: LessonSnippet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.lessonNumber !== 0) {
      writer.uint32(24).int32(message.lessonNumber);
    }
    if (message.publishDate !== undefined) {
      Timestamp.encode(toTimestamp(message.publishDate), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LessonSnippet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLessonSnippet();
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
          if (tag !== 24) {
            break;
          }

          message.lessonNumber = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publishDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<LessonSnippet>, I>>(base?: I): LessonSnippet {
    return LessonSnippet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LessonSnippet>, I>>(object: I): LessonSnippet {
    const message = createBaseLessonSnippet();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.lessonNumber = object.lessonNumber ?? 0;
    message.publishDate = object.publishDate ?? undefined;
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
