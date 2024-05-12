/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Int32Value, StringValue } from "../../../../google/protobuf/wrappers";
import { CompetitionSnippet } from "./assignments/competition_api";
import { ExamSnippet } from "./assignments/exam_api";
import { HomeworkSnippet } from "./assignments/homework_api";
import { TestSnippet } from "./assignments/test_api";
import { Page } from "./common/pageable";
import { Submission } from "./submissions/submissions_api";
import { UserSnippet } from "./users/users_api";

export const protobufPackage = "ru.hse.lmsteam.proto.grades";

export interface UpdateGrade {
}

export interface UpdateGrade_Request {
  grade: number;
  comment: string | undefined;
}

export interface UpdateGrade_Response {
  grade: Grade | undefined;
}

export interface GetGrade {
}

export interface GetGrade_Response {
  grade: Grade | undefined;
}

export interface GetGrades {
}

export interface GetGrades_Response {
  page: Page | undefined;
  grades: Grade[];
}

export interface Grade {
  id: string;
  gradeOwner: UserSnippet | undefined;
  task?:
    | { $case: "homework"; homework: HomeworkSnippet }
    | { $case: "exam"; exam: ExamSnippet }
    | { $case: "competition"; competition: CompetitionSnippet }
    | { $case: "test"; test: TestSnippet }
    | undefined;
  /** this is optional, present only if task is a homework */
  submissionForGrading: Submission | undefined;
  adminGrade: number | undefined;
  adminComment: string | undefined;
  trackerGrades: TrackerGrade[];
}

export interface TrackerGrade {
  id: string;
  tracker: UserSnippet | undefined;
  grade: number | undefined;
  comment: string | undefined;
}

function createBaseUpdateGrade(): UpdateGrade {
  return {};
}

export const UpdateGrade = {
  encode(_: UpdateGrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGrade();
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

  create<I extends Exact<DeepPartial<UpdateGrade>, I>>(base?: I): UpdateGrade {
    return UpdateGrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGrade>, I>>(_: I): UpdateGrade {
    const message = createBaseUpdateGrade();
    return message;
  },
};

function createBaseUpdateGrade_Request(): UpdateGrade_Request {
  return { grade: 0, comment: undefined };
}

export const UpdateGrade_Request = {
  encode(message: UpdateGrade_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grade !== 0) {
      writer.uint32(8).int32(message.grade);
    }
    if (message.comment !== undefined) {
      StringValue.encode({ value: message.comment! }, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGrade_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGrade_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.grade = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.comment = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<UpdateGrade_Request>, I>>(base?: I): UpdateGrade_Request {
    return UpdateGrade_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGrade_Request>, I>>(object: I): UpdateGrade_Request {
    const message = createBaseUpdateGrade_Request();
    message.grade = object.grade ?? 0;
    message.comment = object.comment ?? undefined;
    return message;
  },
};

function createBaseUpdateGrade_Response(): UpdateGrade_Response {
  return { grade: undefined };
}

export const UpdateGrade_Response = {
  encode(message: UpdateGrade_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grade !== undefined) {
      Grade.encode(message.grade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGrade_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGrade_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.grade = Grade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<UpdateGrade_Response>, I>>(base?: I): UpdateGrade_Response {
    return UpdateGrade_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGrade_Response>, I>>(object: I): UpdateGrade_Response {
    const message = createBaseUpdateGrade_Response();
    message.grade = (object.grade !== undefined && object.grade !== null) ? Grade.fromPartial(object.grade) : undefined;
    return message;
  },
};

function createBaseGetGrade(): GetGrade {
  return {};
}

export const GetGrade = {
  encode(_: GetGrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGrade();
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

  create<I extends Exact<DeepPartial<GetGrade>, I>>(base?: I): GetGrade {
    return GetGrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGrade>, I>>(_: I): GetGrade {
    const message = createBaseGetGrade();
    return message;
  },
};

function createBaseGetGrade_Response(): GetGrade_Response {
  return { grade: undefined };
}

export const GetGrade_Response = {
  encode(message: GetGrade_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grade !== undefined) {
      Grade.encode(message.grade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGrade_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGrade_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.grade = Grade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetGrade_Response>, I>>(base?: I): GetGrade_Response {
    return GetGrade_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGrade_Response>, I>>(object: I): GetGrade_Response {
    const message = createBaseGetGrade_Response();
    message.grade = (object.grade !== undefined && object.grade !== null) ? Grade.fromPartial(object.grade) : undefined;
    return message;
  },
};

function createBaseGetGrades(): GetGrades {
  return {};
}

export const GetGrades = {
  encode(_: GetGrades, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGrades {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGrades();
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

  create<I extends Exact<DeepPartial<GetGrades>, I>>(base?: I): GetGrades {
    return GetGrades.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGrades>, I>>(_: I): GetGrades {
    const message = createBaseGetGrades();
    return message;
  },
};

function createBaseGetGrades_Response(): GetGrades_Response {
  return { page: undefined, grades: [] };
}

export const GetGrades_Response = {
  encode(message: GetGrades_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.grades) {
      Grade.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGrades_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGrades_Response();
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

          message.grades.push(Grade.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetGrades_Response>, I>>(base?: I): GetGrades_Response {
    return GetGrades_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGrades_Response>, I>>(object: I): GetGrades_Response {
    const message = createBaseGetGrades_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.grades = object.grades?.map((e) => Grade.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGrade(): Grade {
  return {
    id: "",
    gradeOwner: undefined,
    task: undefined,
    submissionForGrading: undefined,
    adminGrade: undefined,
    adminComment: undefined,
    trackerGrades: [],
  };
}

export const Grade = {
  encode(message: Grade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.gradeOwner !== undefined) {
      UserSnippet.encode(message.gradeOwner, writer.uint32(18).fork()).ldelim();
    }
    switch (message.task?.$case) {
      case "homework":
        HomeworkSnippet.encode(message.task.homework, writer.uint32(26).fork()).ldelim();
        break;
      case "exam":
        ExamSnippet.encode(message.task.exam, writer.uint32(34).fork()).ldelim();
        break;
      case "competition":
        CompetitionSnippet.encode(message.task.competition, writer.uint32(42).fork()).ldelim();
        break;
      case "test":
        TestSnippet.encode(message.task.test, writer.uint32(50).fork()).ldelim();
        break;
    }
    if (message.submissionForGrading !== undefined) {
      Submission.encode(message.submissionForGrading, writer.uint32(58).fork()).ldelim();
    }
    if (message.adminGrade !== undefined) {
      Int32Value.encode({ value: message.adminGrade! }, writer.uint32(66).fork()).ldelim();
    }
    if (message.adminComment !== undefined) {
      StringValue.encode({ value: message.adminComment! }, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.trackerGrades) {
      TrackerGrade.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrade();
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

          message.gradeOwner = UserSnippet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.task = { $case: "homework", homework: HomeworkSnippet.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.task = { $case: "exam", exam: ExamSnippet.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.task = { $case: "competition", competition: CompetitionSnippet.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.task = { $case: "test", test: TestSnippet.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.submissionForGrading = Submission.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.adminGrade = Int32Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.adminComment = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.trackerGrades.push(TrackerGrade.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Grade>, I>>(base?: I): Grade {
    return Grade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Grade>, I>>(object: I): Grade {
    const message = createBaseGrade();
    message.id = object.id ?? "";
    message.gradeOwner = (object.gradeOwner !== undefined && object.gradeOwner !== null)
      ? UserSnippet.fromPartial(object.gradeOwner)
      : undefined;
    if (object.task?.$case === "homework" && object.task?.homework !== undefined && object.task?.homework !== null) {
      message.task = { $case: "homework", homework: HomeworkSnippet.fromPartial(object.task.homework) };
    }
    if (object.task?.$case === "exam" && object.task?.exam !== undefined && object.task?.exam !== null) {
      message.task = { $case: "exam", exam: ExamSnippet.fromPartial(object.task.exam) };
    }
    if (
      object.task?.$case === "competition" &&
      object.task?.competition !== undefined &&
      object.task?.competition !== null
    ) {
      message.task = { $case: "competition", competition: CompetitionSnippet.fromPartial(object.task.competition) };
    }
    if (object.task?.$case === "test" && object.task?.test !== undefined && object.task?.test !== null) {
      message.task = { $case: "test", test: TestSnippet.fromPartial(object.task.test) };
    }
    message.submissionForGrading = (object.submissionForGrading !== undefined && object.submissionForGrading !== null)
      ? Submission.fromPartial(object.submissionForGrading)
      : undefined;
    message.adminGrade = object.adminGrade ?? undefined;
    message.adminComment = object.adminComment ?? undefined;
    message.trackerGrades = object.trackerGrades?.map((e) => TrackerGrade.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTrackerGrade(): TrackerGrade {
  return { id: "", tracker: undefined, grade: undefined, comment: undefined };
}

export const TrackerGrade = {
  encode(message: TrackerGrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tracker !== undefined) {
      UserSnippet.encode(message.tracker, writer.uint32(18).fork()).ldelim();
    }
    if (message.grade !== undefined) {
      Int32Value.encode({ value: message.grade! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.comment !== undefined) {
      StringValue.encode({ value: message.comment! }, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackerGrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackerGrade();
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

          message.tracker = UserSnippet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.grade = Int32Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.comment = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<TrackerGrade>, I>>(base?: I): TrackerGrade {
    return TrackerGrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrackerGrade>, I>>(object: I): TrackerGrade {
    const message = createBaseTrackerGrade();
    message.id = object.id ?? "";
    message.tracker = (object.tracker !== undefined && object.tracker !== null)
      ? UserSnippet.fromPartial(object.tracker)
      : undefined;
    message.grade = object.grade ?? undefined;
    message.comment = object.comment ?? undefined;
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
