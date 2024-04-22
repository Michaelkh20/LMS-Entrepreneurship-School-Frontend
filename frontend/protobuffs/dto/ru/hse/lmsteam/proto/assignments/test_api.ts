/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Page } from "../common/pageable";
import { LessonSnippet } from "../lessons/lessons_api";

export const protobufPackage = "ru.hse.lmsteam.proto.tests";

export interface GetTest {
}

export interface GetTest_Response {
  test: Test | undefined;
}

export interface CreateOrUpdateTest {
}

export interface CreateOrUpdateTest_Request {
  lessonId: string;
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface CreateOrUpdateTest_Response {
  test: Test | undefined;
}

export interface DeleteTest {
}

export interface DeleteTest_Response {
  entriesDeleted: number;
}

export interface GetTests {
}

export interface GetTests_Response {
  page: Page | undefined;
  tests: TestSnippet[];
}

export interface Test {
  id: string;
  lesson: LessonSnippet | undefined;
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface TestSnippet {
  id: string;
  lesson: LessonSnippet | undefined;
  title: string;
  deadlineDate: Date | undefined;
}

function createBaseGetTest(): GetTest {
  return {};
}

export const GetTest = {
  encode(_: GetTest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTest();
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

  create<I extends Exact<DeepPartial<GetTest>, I>>(base?: I): GetTest {
    return GetTest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTest>, I>>(_: I): GetTest {
    const message = createBaseGetTest();
    return message;
  },
};

function createBaseGetTest_Response(): GetTest_Response {
  return { test: undefined };
}

export const GetTest_Response = {
  encode(message: GetTest_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.test !== undefined) {
      Test.encode(message.test, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTest_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTest_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.test = Test.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetTest_Response>, I>>(base?: I): GetTest_Response {
    return GetTest_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTest_Response>, I>>(object: I): GetTest_Response {
    const message = createBaseGetTest_Response();
    message.test = (object.test !== undefined && object.test !== null) ? Test.fromPartial(object.test) : undefined;
    return message;
  },
};

function createBaseCreateOrUpdateTest(): CreateOrUpdateTest {
  return {};
}

export const CreateOrUpdateTest = {
  encode(_: CreateOrUpdateTest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateTest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateTest();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateTest>, I>>(base?: I): CreateOrUpdateTest {
    return CreateOrUpdateTest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateTest>, I>>(_: I): CreateOrUpdateTest {
    const message = createBaseCreateOrUpdateTest();
    return message;
  },
};

function createBaseCreateOrUpdateTest_Request(): CreateOrUpdateTest_Request {
  return {
    lessonId: "",
    deadlineDate: undefined,
    publishDate: undefined,
    title: "",
    description: "",
    gradingCriteria: "",
    externalMaterialUrls: [],
  };
}

export const CreateOrUpdateTest_Request = {
  encode(message: CreateOrUpdateTest_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lessonId !== "") {
      writer.uint32(10).string(message.lessonId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateTest_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateTest_Request();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateTest_Request>, I>>(base?: I): CreateOrUpdateTest_Request {
    return CreateOrUpdateTest_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateTest_Request>, I>>(object: I): CreateOrUpdateTest_Request {
    const message = createBaseCreateOrUpdateTest_Request();
    message.lessonId = object.lessonId ?? "";
    message.deadlineDate = object.deadlineDate ?? undefined;
    message.publishDate = object.publishDate ?? undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.gradingCriteria = object.gradingCriteria ?? "";
    message.externalMaterialUrls = object.externalMaterialUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateOrUpdateTest_Response(): CreateOrUpdateTest_Response {
  return { test: undefined };
}

export const CreateOrUpdateTest_Response = {
  encode(message: CreateOrUpdateTest_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.test !== undefined) {
      Test.encode(message.test, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateTest_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateTest_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.test = Test.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateTest_Response>, I>>(base?: I): CreateOrUpdateTest_Response {
    return CreateOrUpdateTest_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateTest_Response>, I>>(object: I): CreateOrUpdateTest_Response {
    const message = createBaseCreateOrUpdateTest_Response();
    message.test = (object.test !== undefined && object.test !== null) ? Test.fromPartial(object.test) : undefined;
    return message;
  },
};

function createBaseDeleteTest(): DeleteTest {
  return {};
}

export const DeleteTest = {
  encode(_: DeleteTest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTest();
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

  create<I extends Exact<DeepPartial<DeleteTest>, I>>(base?: I): DeleteTest {
    return DeleteTest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTest>, I>>(_: I): DeleteTest {
    const message = createBaseDeleteTest();
    return message;
  },
};

function createBaseDeleteTest_Response(): DeleteTest_Response {
  return { entriesDeleted: 0 };
}

export const DeleteTest_Response = {
  encode(message: DeleteTest_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entriesDeleted !== 0) {
      writer.uint32(8).int64(message.entriesDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTest_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTest_Response();
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

  create<I extends Exact<DeepPartial<DeleteTest_Response>, I>>(base?: I): DeleteTest_Response {
    return DeleteTest_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTest_Response>, I>>(object: I): DeleteTest_Response {
    const message = createBaseDeleteTest_Response();
    message.entriesDeleted = object.entriesDeleted ?? 0;
    return message;
  },
};

function createBaseGetTests(): GetTests {
  return {};
}

export const GetTests = {
  encode(_: GetTests, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTests {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTests();
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

  create<I extends Exact<DeepPartial<GetTests>, I>>(base?: I): GetTests {
    return GetTests.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTests>, I>>(_: I): GetTests {
    const message = createBaseGetTests();
    return message;
  },
};

function createBaseGetTests_Response(): GetTests_Response {
  return { page: undefined, tests: [] };
}

export const GetTests_Response = {
  encode(message: GetTests_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tests) {
      TestSnippet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTests_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTests_Response();
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

          message.tests.push(TestSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetTests_Response>, I>>(base?: I): GetTests_Response {
    return GetTests_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTests_Response>, I>>(object: I): GetTests_Response {
    const message = createBaseGetTests_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.tests = object.tests?.map((e) => TestSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTest(): Test {
  return {
    id: "",
    lesson: undefined,
    deadlineDate: undefined,
    publishDate: undefined,
    title: "",
    description: "",
    gradingCriteria: "",
    externalMaterialUrls: [],
  };
}

export const Test = {
  encode(message: Test, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Test {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTest();
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

  create<I extends Exact<DeepPartial<Test>, I>>(base?: I): Test {
    return Test.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Test>, I>>(object: I): Test {
    const message = createBaseTest();
    message.id = object.id ?? "";
    message.lesson = (object.lesson !== undefined && object.lesson !== null)
      ? LessonSnippet.fromPartial(object.lesson)
      : undefined;
    message.deadlineDate = object.deadlineDate ?? undefined;
    message.publishDate = object.publishDate ?? undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.gradingCriteria = object.gradingCriteria ?? "";
    message.externalMaterialUrls = object.externalMaterialUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestSnippet(): TestSnippet {
  return { id: "", lesson: undefined, title: "", deadlineDate: undefined };
}

export const TestSnippet = {
  encode(message: TestSnippet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TestSnippet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestSnippet();
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

  create<I extends Exact<DeepPartial<TestSnippet>, I>>(base?: I): TestSnippet {
    return TestSnippet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestSnippet>, I>>(object: I): TestSnippet {
    const message = createBaseTestSnippet();
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
