/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int32Value, StringValue } from "../../../../../google/protobuf/wrappers";
import { Page } from "../common/pageable";
import { TeamSnippet } from "../common/team_snippet";
import { User, UserSnippet } from "../users/users_api";

export const protobufPackage = "ru.hse.lmsteam.proto.teams";

export interface GetTeam {
}

export interface GetTeam_Response {
  team: Team | undefined;
}

export interface CreateOrUpdateTeam {
}

export interface CreateOrUpdateTeam_Request {
  number: number | undefined;
  projectTheme: string | undefined;
  description: string | undefined;
  userIds: string[];
}

export interface CreateOrUpdateTeam_Response {
  data?: { $case: "team"; team: Team } | { $case: "errors"; errors: ValidationErrors } | undefined;
}

export interface DeleteTeam {
}

export interface DeleteTeam_Response {
  entitiesDeleted: number;
}

export interface GetTeams {
}

export interface GetTeams_Response {
  page: Page | undefined;
  teams: TeamSnippet[];
}

export interface GetTeamMembers {
}

export interface GetTeamMembers_Response {
  users: User[];
}

export interface UpdateTeamMembers {
}

export interface UpdateTeamMembers_Request {
  userIds: string[];
}

export interface UpdateTeamMembers_Response {
  data?:
    | { $case: "success"; success: UpdateTeamMembers_Success }
    | { $case: "errors"; errors: ValidationErrors }
    | undefined;
}

export interface UpdateTeamMembers_Success {
}

export interface ValidationErrors {
  notFoundUserIds: string[];
  alreadyMembers: ValidationErrors_UserTeams[];
}

export interface ValidationErrors_UserTeams {
  user: UserSnippet | undefined;
  teams: TeamSnippet[];
}

export interface Team {
  id: string;
  number: number;
  projectTheme: string;
  description: string;
  students: User[];
  trackers: User[];
}

function createBaseGetTeam(): GetTeam {
  return {};
}

export const GetTeam = {
  encode(_: GetTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTeam();
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

  create<I extends Exact<DeepPartial<GetTeam>, I>>(base?: I): GetTeam {
    return GetTeam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTeam>, I>>(_: I): GetTeam {
    const message = createBaseGetTeam();
    return message;
  },
};

function createBaseGetTeam_Response(): GetTeam_Response {
  return { team: undefined };
}

export const GetTeam_Response = {
  encode(message: GetTeam_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== undefined) {
      Team.encode(message.team, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTeam_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTeam_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.team = Team.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetTeam_Response>, I>>(base?: I): GetTeam_Response {
    return GetTeam_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTeam_Response>, I>>(object: I): GetTeam_Response {
    const message = createBaseGetTeam_Response();
    message.team = (object.team !== undefined && object.team !== null) ? Team.fromPartial(object.team) : undefined;
    return message;
  },
};

function createBaseCreateOrUpdateTeam(): CreateOrUpdateTeam {
  return {};
}

export const CreateOrUpdateTeam = {
  encode(_: CreateOrUpdateTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateTeam();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateTeam>, I>>(base?: I): CreateOrUpdateTeam {
    return CreateOrUpdateTeam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateTeam>, I>>(_: I): CreateOrUpdateTeam {
    const message = createBaseCreateOrUpdateTeam();
    return message;
  },
};

function createBaseCreateOrUpdateTeam_Request(): CreateOrUpdateTeam_Request {
  return { number: undefined, projectTheme: undefined, description: undefined, userIds: [] };
}

export const CreateOrUpdateTeam_Request = {
  encode(message: CreateOrUpdateTeam_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== undefined) {
      Int32Value.encode({ value: message.number! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.projectTheme !== undefined) {
      StringValue.encode({ value: message.projectTheme! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== undefined) {
      StringValue.encode({ value: message.description! }, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.userIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateTeam_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateTeam_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.number = Int32Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectTheme = StringValue.decode(reader, reader.uint32()).value;
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

          message.userIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateTeam_Request>, I>>(base?: I): CreateOrUpdateTeam_Request {
    return CreateOrUpdateTeam_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateTeam_Request>, I>>(object: I): CreateOrUpdateTeam_Request {
    const message = createBaseCreateOrUpdateTeam_Request();
    message.number = object.number ?? undefined;
    message.projectTheme = object.projectTheme ?? undefined;
    message.description = object.description ?? undefined;
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateOrUpdateTeam_Response(): CreateOrUpdateTeam_Response {
  return { data: undefined };
}

export const CreateOrUpdateTeam_Response = {
  encode(message: CreateOrUpdateTeam_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.data?.$case) {
      case "team":
        Team.encode(message.data.team, writer.uint32(10).fork()).ldelim();
        break;
      case "errors":
        ValidationErrors.encode(message.data.errors, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateTeam_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateTeam_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = { $case: "team", team: Team.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = { $case: "errors", errors: ValidationErrors.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateTeam_Response>, I>>(base?: I): CreateOrUpdateTeam_Response {
    return CreateOrUpdateTeam_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateTeam_Response>, I>>(object: I): CreateOrUpdateTeam_Response {
    const message = createBaseCreateOrUpdateTeam_Response();
    if (object.data?.$case === "team" && object.data?.team !== undefined && object.data?.team !== null) {
      message.data = { $case: "team", team: Team.fromPartial(object.data.team) };
    }
    if (object.data?.$case === "errors" && object.data?.errors !== undefined && object.data?.errors !== null) {
      message.data = { $case: "errors", errors: ValidationErrors.fromPartial(object.data.errors) };
    }
    return message;
  },
};

function createBaseDeleteTeam(): DeleteTeam {
  return {};
}

export const DeleteTeam = {
  encode(_: DeleteTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTeam();
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

  create<I extends Exact<DeepPartial<DeleteTeam>, I>>(base?: I): DeleteTeam {
    return DeleteTeam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTeam>, I>>(_: I): DeleteTeam {
    const message = createBaseDeleteTeam();
    return message;
  },
};

function createBaseDeleteTeam_Response(): DeleteTeam_Response {
  return { entitiesDeleted: 0 };
}

export const DeleteTeam_Response = {
  encode(message: DeleteTeam_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entitiesDeleted !== 0) {
      writer.uint32(8).int64(message.entitiesDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTeam_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTeam_Response();
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

  create<I extends Exact<DeepPartial<DeleteTeam_Response>, I>>(base?: I): DeleteTeam_Response {
    return DeleteTeam_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteTeam_Response>, I>>(object: I): DeleteTeam_Response {
    const message = createBaseDeleteTeam_Response();
    message.entitiesDeleted = object.entitiesDeleted ?? 0;
    return message;
  },
};

function createBaseGetTeams(): GetTeams {
  return {};
}

export const GetTeams = {
  encode(_: GetTeams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTeams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTeams();
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

  create<I extends Exact<DeepPartial<GetTeams>, I>>(base?: I): GetTeams {
    return GetTeams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTeams>, I>>(_: I): GetTeams {
    const message = createBaseGetTeams();
    return message;
  },
};

function createBaseGetTeams_Response(): GetTeams_Response {
  return { page: undefined, teams: [] };
}

export const GetTeams_Response = {
  encode(message: GetTeams_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.teams) {
      TeamSnippet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTeams_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTeams_Response();
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

          message.teams.push(TeamSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetTeams_Response>, I>>(base?: I): GetTeams_Response {
    return GetTeams_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTeams_Response>, I>>(object: I): GetTeams_Response {
    const message = createBaseGetTeams_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.teams = object.teams?.map((e) => TeamSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetTeamMembers(): GetTeamMembers {
  return {};
}

export const GetTeamMembers = {
  encode(_: GetTeamMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTeamMembers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTeamMembers();
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

  create<I extends Exact<DeepPartial<GetTeamMembers>, I>>(base?: I): GetTeamMembers {
    return GetTeamMembers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTeamMembers>, I>>(_: I): GetTeamMembers {
    const message = createBaseGetTeamMembers();
    return message;
  },
};

function createBaseGetTeamMembers_Response(): GetTeamMembers_Response {
  return { users: [] };
}

export const GetTeamMembers_Response = {
  encode(message: GetTeamMembers_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTeamMembers_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTeamMembers_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetTeamMembers_Response>, I>>(base?: I): GetTeamMembers_Response {
    return GetTeamMembers_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTeamMembers_Response>, I>>(object: I): GetTeamMembers_Response {
    const message = createBaseGetTeamMembers_Response();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateTeamMembers(): UpdateTeamMembers {
  return {};
}

export const UpdateTeamMembers = {
  encode(_: UpdateTeamMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTeamMembers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTeamMembers();
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

  create<I extends Exact<DeepPartial<UpdateTeamMembers>, I>>(base?: I): UpdateTeamMembers {
    return UpdateTeamMembers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTeamMembers>, I>>(_: I): UpdateTeamMembers {
    const message = createBaseUpdateTeamMembers();
    return message;
  },
};

function createBaseUpdateTeamMembers_Request(): UpdateTeamMembers_Request {
  return { userIds: [] };
}

export const UpdateTeamMembers_Request = {
  encode(message: UpdateTeamMembers_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTeamMembers_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTeamMembers_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<UpdateTeamMembers_Request>, I>>(base?: I): UpdateTeamMembers_Request {
    return UpdateTeamMembers_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTeamMembers_Request>, I>>(object: I): UpdateTeamMembers_Request {
    const message = createBaseUpdateTeamMembers_Request();
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateTeamMembers_Response(): UpdateTeamMembers_Response {
  return { data: undefined };
}

export const UpdateTeamMembers_Response = {
  encode(message: UpdateTeamMembers_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.data?.$case) {
      case "success":
        UpdateTeamMembers_Success.encode(message.data.success, writer.uint32(10).fork()).ldelim();
        break;
      case "errors":
        ValidationErrors.encode(message.data.errors, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTeamMembers_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTeamMembers_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = { $case: "success", success: UpdateTeamMembers_Success.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = { $case: "errors", errors: ValidationErrors.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<UpdateTeamMembers_Response>, I>>(base?: I): UpdateTeamMembers_Response {
    return UpdateTeamMembers_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTeamMembers_Response>, I>>(object: I): UpdateTeamMembers_Response {
    const message = createBaseUpdateTeamMembers_Response();
    if (object.data?.$case === "success" && object.data?.success !== undefined && object.data?.success !== null) {
      message.data = { $case: "success", success: UpdateTeamMembers_Success.fromPartial(object.data.success) };
    }
    if (object.data?.$case === "errors" && object.data?.errors !== undefined && object.data?.errors !== null) {
      message.data = { $case: "errors", errors: ValidationErrors.fromPartial(object.data.errors) };
    }
    return message;
  },
};

function createBaseUpdateTeamMembers_Success(): UpdateTeamMembers_Success {
  return {};
}

export const UpdateTeamMembers_Success = {
  encode(_: UpdateTeamMembers_Success, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTeamMembers_Success {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTeamMembers_Success();
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

  create<I extends Exact<DeepPartial<UpdateTeamMembers_Success>, I>>(base?: I): UpdateTeamMembers_Success {
    return UpdateTeamMembers_Success.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTeamMembers_Success>, I>>(_: I): UpdateTeamMembers_Success {
    const message = createBaseUpdateTeamMembers_Success();
    return message;
  },
};

function createBaseValidationErrors(): ValidationErrors {
  return { notFoundUserIds: [], alreadyMembers: [] };
}

export const ValidationErrors = {
  encode(message: ValidationErrors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notFoundUserIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.alreadyMembers) {
      ValidationErrors_UserTeams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidationErrors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidationErrors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notFoundUserIds.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.alreadyMembers.push(ValidationErrors_UserTeams.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<ValidationErrors>, I>>(base?: I): ValidationErrors {
    return ValidationErrors.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidationErrors>, I>>(object: I): ValidationErrors {
    const message = createBaseValidationErrors();
    message.notFoundUserIds = object.notFoundUserIds?.map((e) => e) || [];
    message.alreadyMembers = object.alreadyMembers?.map((e) => ValidationErrors_UserTeams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidationErrors_UserTeams(): ValidationErrors_UserTeams {
  return { user: undefined, teams: [] };
}

export const ValidationErrors_UserTeams = {
  encode(message: ValidationErrors_UserTeams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserSnippet.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.teams) {
      TeamSnippet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidationErrors_UserTeams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidationErrors_UserTeams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = UserSnippet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.teams.push(TeamSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<ValidationErrors_UserTeams>, I>>(base?: I): ValidationErrors_UserTeams {
    return ValidationErrors_UserTeams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidationErrors_UserTeams>, I>>(object: I): ValidationErrors_UserTeams {
    const message = createBaseValidationErrors_UserTeams();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserSnippet.fromPartial(object.user)
      : undefined;
    message.teams = object.teams?.map((e) => TeamSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTeam(): Team {
  return { id: "", number: 0, projectTheme: "", description: "", students: [], trackers: [] };
}

export const Team = {
  encode(message: Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    for (const v of message.students) {
      User.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.trackers) {
      User.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTeam();
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
        case 6:
          if (tag !== 50) {
            break;
          }

          message.students.push(User.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.trackers.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Team>, I>>(base?: I): Team {
    return Team.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Team>, I>>(object: I): Team {
    const message = createBaseTeam();
    message.id = object.id ?? "";
    message.number = object.number ?? 0;
    message.projectTheme = object.projectTheme ?? "";
    message.description = object.description ?? "";
    message.students = object.students?.map((e) => User.fromPartial(e)) || [];
    message.trackers = object.trackers?.map((e) => User.fromPartial(e)) || [];
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
