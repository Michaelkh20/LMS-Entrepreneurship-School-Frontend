/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Page } from "../common/pageable";

export const protobufPackage = "ru.hse.lmsteam.proto.exams";

export interface GetExam {
}

export interface GetExam_Response {
  exam: Exam | undefined;
}

export interface CreateOrUpdateExam {
}

export interface CreateOrUpdateExam_Request {
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface CreateOrUpdateExam_Response {
  exam: Exam | undefined;
}

export interface DeleteExam {
}

export interface DeleteExam_Response {
  entriesDeleted: number;
}

export interface GetExams {
}

export interface GetExams_Response {
  page: Page | undefined;
  exams: ExamSnippet[];
}

export interface Exam {
  id: string;
  deadlineDate: Date | undefined;
  publishDate: Date | undefined;
  title: string;
  description: string;
  gradingCriteria: string;
  externalMaterialUrls: string[];
}

export interface ExamSnippet {
  id: string;
  title: string;
  deadlineDate: Date | undefined;
}

function createBaseGetExam(): GetExam {
  return {};
}

export const GetExam = {
  encode(_: GetExam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExam();
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

  create<I extends Exact<DeepPartial<GetExam>, I>>(base?: I): GetExam {
    return GetExam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExam>, I>>(_: I): GetExam {
    const message = createBaseGetExam();
    return message;
  },
};

function createBaseGetExam_Response(): GetExam_Response {
  return { exam: undefined };
}

export const GetExam_Response = {
  encode(message: GetExam_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exam !== undefined) {
      Exam.encode(message.exam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExam_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExam_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exam = Exam.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetExam_Response>, I>>(base?: I): GetExam_Response {
    return GetExam_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExam_Response>, I>>(object: I): GetExam_Response {
    const message = createBaseGetExam_Response();
    message.exam = (object.exam !== undefined && object.exam !== null) ? Exam.fromPartial(object.exam) : undefined;
    return message;
  },
};

function createBaseCreateOrUpdateExam(): CreateOrUpdateExam {
  return {};
}

export const CreateOrUpdateExam = {
  encode(_: CreateOrUpdateExam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateExam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateExam();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateExam>, I>>(base?: I): CreateOrUpdateExam {
    return CreateOrUpdateExam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateExam>, I>>(_: I): CreateOrUpdateExam {
    const message = createBaseCreateOrUpdateExam();
    return message;
  },
};

function createBaseCreateOrUpdateExam_Request(): CreateOrUpdateExam_Request {
  return {
    deadlineDate: undefined,
    publishDate: undefined,
    title: "",
    description: "",
    gradingCriteria: "",
    externalMaterialUrls: [],
  };
}

export const CreateOrUpdateExam_Request = {
  encode(message: CreateOrUpdateExam_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateExam_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateExam_Request();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateExam_Request>, I>>(base?: I): CreateOrUpdateExam_Request {
    return CreateOrUpdateExam_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateExam_Request>, I>>(object: I): CreateOrUpdateExam_Request {
    const message = createBaseCreateOrUpdateExam_Request();
    message.deadlineDate = object.deadlineDate ?? undefined;
    message.publishDate = object.publishDate ?? undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.gradingCriteria = object.gradingCriteria ?? "";
    message.externalMaterialUrls = object.externalMaterialUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateOrUpdateExam_Response(): CreateOrUpdateExam_Response {
  return { exam: undefined };
}

export const CreateOrUpdateExam_Response = {
  encode(message: CreateOrUpdateExam_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exam !== undefined) {
      Exam.encode(message.exam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateExam_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateExam_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exam = Exam.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateExam_Response>, I>>(base?: I): CreateOrUpdateExam_Response {
    return CreateOrUpdateExam_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateExam_Response>, I>>(object: I): CreateOrUpdateExam_Response {
    const message = createBaseCreateOrUpdateExam_Response();
    message.exam = (object.exam !== undefined && object.exam !== null) ? Exam.fromPartial(object.exam) : undefined;
    return message;
  },
};

function createBaseDeleteExam(): DeleteExam {
  return {};
}

export const DeleteExam = {
  encode(_: DeleteExam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExam();
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

  create<I extends Exact<DeepPartial<DeleteExam>, I>>(base?: I): DeleteExam {
    return DeleteExam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExam>, I>>(_: I): DeleteExam {
    const message = createBaseDeleteExam();
    return message;
  },
};

function createBaseDeleteExam_Response(): DeleteExam_Response {
  return { entriesDeleted: 0 };
}

export const DeleteExam_Response = {
  encode(message: DeleteExam_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entriesDeleted !== 0) {
      writer.uint32(8).int64(message.entriesDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExam_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExam_Response();
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

  create<I extends Exact<DeepPartial<DeleteExam_Response>, I>>(base?: I): DeleteExam_Response {
    return DeleteExam_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExam_Response>, I>>(object: I): DeleteExam_Response {
    const message = createBaseDeleteExam_Response();
    message.entriesDeleted = object.entriesDeleted ?? 0;
    return message;
  },
};

function createBaseGetExams(): GetExams {
  return {};
}

export const GetExams = {
  encode(_: GetExams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExams();
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

  create<I extends Exact<DeepPartial<GetExams>, I>>(base?: I): GetExams {
    return GetExams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExams>, I>>(_: I): GetExams {
    const message = createBaseGetExams();
    return message;
  },
};

function createBaseGetExams_Response(): GetExams_Response {
  return { page: undefined, exams: [] };
}

export const GetExams_Response = {
  encode(message: GetExams_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.exams) {
      ExamSnippet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExams_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExams_Response();
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

          message.exams.push(ExamSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetExams_Response>, I>>(base?: I): GetExams_Response {
    return GetExams_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExams_Response>, I>>(object: I): GetExams_Response {
    const message = createBaseGetExams_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.exams = object.exams?.map((e) => ExamSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExam(): Exam {
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

export const Exam = {
  encode(message: Exam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Exam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExam();
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

  create<I extends Exact<DeepPartial<Exam>, I>>(base?: I): Exam {
    return Exam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Exam>, I>>(object: I): Exam {
    const message = createBaseExam();
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

function createBaseExamSnippet(): ExamSnippet {
  return { id: "", title: "", deadlineDate: undefined };
}

export const ExamSnippet = {
  encode(message: ExamSnippet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamSnippet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSnippet();
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

  create<I extends Exact<DeepPartial<ExamSnippet>, I>>(base?: I): ExamSnippet {
    return ExamSnippet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExamSnippet>, I>>(object: I): ExamSnippet {
    const message = createBaseExamSnippet();
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
