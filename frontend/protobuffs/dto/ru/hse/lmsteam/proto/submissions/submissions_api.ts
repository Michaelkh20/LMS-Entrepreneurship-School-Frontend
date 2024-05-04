/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { HomeworkSnippet } from "../assignments/homework_api";
import { Page } from "../common/pageable";
import { TeamSnippet } from "../common/team_snippet";
import { UserSnippet } from "../users/users_api";

export const protobufPackage = "ru.hse.lmsteam.proto.submissions";

export interface GetSubmission {
}

export interface GetSubmission_Response {
  submission: Submission | undefined;
}

export interface CreateSubmission {
}

export interface CreateSubmission_Request {
  homeworkId: string;
  publishedAt: Date | undefined;
  payload: SubmissionPayload | undefined;
}

export interface CreateSubmission_Response {
  submission: Submission | undefined;
}

export interface GetSubmissions {
}

export interface GetSubmissions_Response {
  page: Page | undefined;
  submissions: Submission[];
}

export interface Submission {
  id: string;
  homework: HomeworkSnippet | undefined;
  owner: UserSnippet | undefined;
  publisher:
    | UserSnippet
    | undefined;
  /** this field is set only if submission is on team homework */
  team: TeamSnippet | undefined;
  publishedAt: Date | undefined;
  payload: SubmissionPayload | undefined;
}

export interface SubmissionPayload {
  textAnswer: string;
  attachmentUrls: string[];
}

function createBaseGetSubmission(): GetSubmission {
  return {};
}

export const GetSubmission = {
  encode(_: GetSubmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubmission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubmission();
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

  create<I extends Exact<DeepPartial<GetSubmission>, I>>(base?: I): GetSubmission {
    return GetSubmission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSubmission>, I>>(_: I): GetSubmission {
    const message = createBaseGetSubmission();
    return message;
  },
};

function createBaseGetSubmission_Response(): GetSubmission_Response {
  return { submission: undefined };
}

export const GetSubmission_Response = {
  encode(message: GetSubmission_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submission !== undefined) {
      Submission.encode(message.submission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubmission_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubmission_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.submission = Submission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetSubmission_Response>, I>>(base?: I): GetSubmission_Response {
    return GetSubmission_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSubmission_Response>, I>>(object: I): GetSubmission_Response {
    const message = createBaseGetSubmission_Response();
    message.submission = (object.submission !== undefined && object.submission !== null)
      ? Submission.fromPartial(object.submission)
      : undefined;
    return message;
  },
};

function createBaseCreateSubmission(): CreateSubmission {
  return {};
}

export const CreateSubmission = {
  encode(_: CreateSubmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubmission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmission();
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

  create<I extends Exact<DeepPartial<CreateSubmission>, I>>(base?: I): CreateSubmission {
    return CreateSubmission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSubmission>, I>>(_: I): CreateSubmission {
    const message = createBaseCreateSubmission();
    return message;
  },
};

function createBaseCreateSubmission_Request(): CreateSubmission_Request {
  return { homeworkId: "", publishedAt: undefined, payload: undefined };
}

export const CreateSubmission_Request = {
  encode(message: CreateSubmission_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.homeworkId !== "") {
      writer.uint32(10).string(message.homeworkId);
    }
    if (message.publishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      SubmissionPayload.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubmission_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmission_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.homeworkId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = SubmissionPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateSubmission_Request>, I>>(base?: I): CreateSubmission_Request {
    return CreateSubmission_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSubmission_Request>, I>>(object: I): CreateSubmission_Request {
    const message = createBaseCreateSubmission_Request();
    message.homeworkId = object.homeworkId ?? "";
    message.publishedAt = object.publishedAt ?? undefined;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? SubmissionPayload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseCreateSubmission_Response(): CreateSubmission_Response {
  return { submission: undefined };
}

export const CreateSubmission_Response = {
  encode(message: CreateSubmission_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submission !== undefined) {
      Submission.encode(message.submission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubmission_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubmission_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.submission = Submission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateSubmission_Response>, I>>(base?: I): CreateSubmission_Response {
    return CreateSubmission_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSubmission_Response>, I>>(object: I): CreateSubmission_Response {
    const message = createBaseCreateSubmission_Response();
    message.submission = (object.submission !== undefined && object.submission !== null)
      ? Submission.fromPartial(object.submission)
      : undefined;
    return message;
  },
};

function createBaseGetSubmissions(): GetSubmissions {
  return {};
}

export const GetSubmissions = {
  encode(_: GetSubmissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubmissions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubmissions();
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

  create<I extends Exact<DeepPartial<GetSubmissions>, I>>(base?: I): GetSubmissions {
    return GetSubmissions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSubmissions>, I>>(_: I): GetSubmissions {
    const message = createBaseGetSubmissions();
    return message;
  },
};

function createBaseGetSubmissions_Response(): GetSubmissions_Response {
  return { page: undefined, submissions: [] };
}

export const GetSubmissions_Response = {
  encode(message: GetSubmissions_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.submissions) {
      Submission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubmissions_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubmissions_Response();
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

          message.submissions.push(Submission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetSubmissions_Response>, I>>(base?: I): GetSubmissions_Response {
    return GetSubmissions_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSubmissions_Response>, I>>(object: I): GetSubmissions_Response {
    const message = createBaseGetSubmissions_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.submissions = object.submissions?.map((e) => Submission.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSubmission(): Submission {
  return {
    id: "",
    homework: undefined,
    owner: undefined,
    publisher: undefined,
    team: undefined,
    publishedAt: undefined,
    payload: undefined,
  };
}

export const Submission = {
  encode(message: Submission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.homework !== undefined) {
      HomeworkSnippet.encode(message.homework, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner !== undefined) {
      UserSnippet.encode(message.owner, writer.uint32(26).fork()).ldelim();
    }
    if (message.publisher !== undefined) {
      UserSnippet.encode(message.publisher, writer.uint32(34).fork()).ldelim();
    }
    if (message.team !== undefined) {
      TeamSnippet.encode(message.team, writer.uint32(42).fork()).ldelim();
    }
    if (message.publishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.publishedAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      SubmissionPayload.encode(message.payload, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Submission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmission();
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

          message.homework = HomeworkSnippet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = UserSnippet.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publisher = UserSnippet.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.team = TeamSnippet.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.publishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = SubmissionPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Submission>, I>>(base?: I): Submission {
    return Submission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Submission>, I>>(object: I): Submission {
    const message = createBaseSubmission();
    message.id = object.id ?? "";
    message.homework = (object.homework !== undefined && object.homework !== null)
      ? HomeworkSnippet.fromPartial(object.homework)
      : undefined;
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? UserSnippet.fromPartial(object.owner)
      : undefined;
    message.publisher = (object.publisher !== undefined && object.publisher !== null)
      ? UserSnippet.fromPartial(object.publisher)
      : undefined;
    message.team = (object.team !== undefined && object.team !== null)
      ? TeamSnippet.fromPartial(object.team)
      : undefined;
    message.publishedAt = object.publishedAt ?? undefined;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? SubmissionPayload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseSubmissionPayload(): SubmissionPayload {
  return { textAnswer: "", attachmentUrls: [] };
}

export const SubmissionPayload = {
  encode(message: SubmissionPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textAnswer !== "") {
      writer.uint32(10).string(message.textAnswer);
    }
    for (const v of message.attachmentUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmissionPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmissionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.textAnswer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attachmentUrls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<SubmissionPayload>, I>>(base?: I): SubmissionPayload {
    return SubmissionPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubmissionPayload>, I>>(object: I): SubmissionPayload {
    const message = createBaseSubmissionPayload();
    message.textAnswer = object.textAnswer ?? "";
    message.attachmentUrls = object.attachmentUrls?.map((e) => e) || [];
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
