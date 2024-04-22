/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue } from "../../../../../google/protobuf/wrappers";
import { Page } from "../common/pageable";

export const protobufPackage = "ru.hse.lmsteam.proto.users";

export interface GetUser {
}

export interface GetUser_Request {
  id: string;
}

export interface GetUser_Response {
  user: User | undefined;
}

export interface GetUserBalance {
}

export interface GetUserBalance_Response {
  /** notation used: https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html#toString() */
  balance: string;
}

export interface CreateOrUpdateUser {
}

export interface CreateOrUpdateUser_Request {
  name: string;
  surname: string;
  patronymic: string | undefined;
  messengerContact: string | undefined;
  sex: UserSexNamespace_Sex;
  email: string;
  phoneNumber: string | undefined;
  role: UserRoleNamespace_Role;
}

export interface CreateOrUpdateUser_Response {
  user: User | undefined;
}

export interface DeleteUser {
}

export interface DeleteUser_Response {
  entitiesDeleted: number;
}

export interface GetUsers {
}

export interface GetUsers_Response {
  page: Page | undefined;
  users: User[];
}

export interface GetUserNameList {
}

export interface GetUserNameList_Response {
  items: UserSnippet[];
}

export interface User {
  id: string;
  name: string;
  surname: string;
  patronymic: string | undefined;
  messengerContact: string | undefined;
  sex: UserSexNamespace_Sex;
  email: string;
  phoneNumber:
    | string
    | undefined;
  /** notation used: https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html#toString() */
  balance: string;
  role: UserRoleNamespace_Role;
  memberOfTeams: TeamSnippet[];
}

export interface UserSnippet {
  id: string;
  name: string;
  surname: string;
  patronymic: string | undefined;
}

export interface UserSexNamespace {
}

export enum UserSexNamespace_Sex {
  NOT_INITIALISED = 0,
  MALE = 1,
  FEMALE = 2,
  UNRECOGNIZED = -1,
}

export interface UserRoleNamespace {
}

export enum UserRoleNamespace_Role {
  NOT_INITIALISED = 0,
  LEARNER = 1,
  TRACKER = 2,
  ADMIN = 3,
  UNRECOGNIZED = -1,
}

export interface TeamSnippet {
  id: string;
  number: number;
  projectTheme: string;
  description: string;
}

function createBaseGetUser(): GetUser {
  return {};
}

export const GetUser = {
  encode(_: GetUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUser();
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

  create<I extends Exact<DeepPartial<GetUser>, I>>(base?: I): GetUser {
    return GetUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUser>, I>>(_: I): GetUser {
    const message = createBaseGetUser();
    return message;
  },
};

function createBaseGetUser_Request(): GetUser_Request {
  return { id: "" };
}

export const GetUser_Request = {
  encode(message: GetUser_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUser_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUser_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetUser_Request>, I>>(base?: I): GetUser_Request {
    return GetUser_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUser_Request>, I>>(object: I): GetUser_Request {
    const message = createBaseGetUser_Request();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetUser_Response(): GetUser_Response {
  return { user: undefined };
}

export const GetUser_Response = {
  encode(message: GetUser_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUser_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUser_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetUser_Response>, I>>(base?: I): GetUser_Response {
    return GetUser_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUser_Response>, I>>(object: I): GetUser_Response {
    const message = createBaseGetUser_Response();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseGetUserBalance(): GetUserBalance {
  return {};
}

export const GetUserBalance = {
  encode(_: GetUserBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserBalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserBalance();
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

  create<I extends Exact<DeepPartial<GetUserBalance>, I>>(base?: I): GetUserBalance {
    return GetUserBalance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserBalance>, I>>(_: I): GetUserBalance {
    const message = createBaseGetUserBalance();
    return message;
  },
};

function createBaseGetUserBalance_Response(): GetUserBalance_Response {
  return { balance: "" };
}

export const GetUserBalance_Response = {
  encode(message: GetUserBalance_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserBalance_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserBalance_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetUserBalance_Response>, I>>(base?: I): GetUserBalance_Response {
    return GetUserBalance_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserBalance_Response>, I>>(object: I): GetUserBalance_Response {
    const message = createBaseGetUserBalance_Response();
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseCreateOrUpdateUser(): CreateOrUpdateUser {
  return {};
}

export const CreateOrUpdateUser = {
  encode(_: CreateOrUpdateUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateUser();
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

  create<I extends Exact<DeepPartial<CreateOrUpdateUser>, I>>(base?: I): CreateOrUpdateUser {
    return CreateOrUpdateUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateUser>, I>>(_: I): CreateOrUpdateUser {
    const message = createBaseCreateOrUpdateUser();
    return message;
  },
};

function createBaseCreateOrUpdateUser_Request(): CreateOrUpdateUser_Request {
  return {
    name: "",
    surname: "",
    patronymic: undefined,
    messengerContact: undefined,
    sex: 0,
    email: "",
    phoneNumber: undefined,
    role: 0,
  };
}

export const CreateOrUpdateUser_Request = {
  encode(message: CreateOrUpdateUser_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.surname !== "") {
      writer.uint32(26).string(message.surname);
    }
    if (message.patronymic !== undefined) {
      StringValue.encode({ value: message.patronymic! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.messengerContact !== undefined) {
      StringValue.encode({ value: message.messengerContact! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.sex !== 0) {
      writer.uint32(48).int32(message.sex);
    }
    if (message.email !== "") {
      writer.uint32(58).string(message.email);
    }
    if (message.phoneNumber !== undefined) {
      StringValue.encode({ value: message.phoneNumber! }, writer.uint32(66).fork()).ldelim();
    }
    if (message.role !== 0) {
      writer.uint32(72).int32(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateUser_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateUser_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.surname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.patronymic = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.messengerContact = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.sex = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.email = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.phoneNumber = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateUser_Request>, I>>(base?: I): CreateOrUpdateUser_Request {
    return CreateOrUpdateUser_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateUser_Request>, I>>(object: I): CreateOrUpdateUser_Request {
    const message = createBaseCreateOrUpdateUser_Request();
    message.name = object.name ?? "";
    message.surname = object.surname ?? "";
    message.patronymic = object.patronymic ?? undefined;
    message.messengerContact = object.messengerContact ?? undefined;
    message.sex = object.sex ?? 0;
    message.email = object.email ?? "";
    message.phoneNumber = object.phoneNumber ?? undefined;
    message.role = object.role ?? 0;
    return message;
  },
};

function createBaseCreateOrUpdateUser_Response(): CreateOrUpdateUser_Response {
  return { user: undefined };
}

export const CreateOrUpdateUser_Response = {
  encode(message: CreateOrUpdateUser_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrUpdateUser_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrUpdateUser_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<CreateOrUpdateUser_Response>, I>>(base?: I): CreateOrUpdateUser_Response {
    return CreateOrUpdateUser_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrUpdateUser_Response>, I>>(object: I): CreateOrUpdateUser_Response {
    const message = createBaseCreateOrUpdateUser_Response();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseDeleteUser(): DeleteUser {
  return {};
}

export const DeleteUser = {
  encode(_: DeleteUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUser();
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

  create<I extends Exact<DeepPartial<DeleteUser>, I>>(base?: I): DeleteUser {
    return DeleteUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUser>, I>>(_: I): DeleteUser {
    const message = createBaseDeleteUser();
    return message;
  },
};

function createBaseDeleteUser_Response(): DeleteUser_Response {
  return { entitiesDeleted: 0 };
}

export const DeleteUser_Response = {
  encode(message: DeleteUser_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entitiesDeleted !== 0) {
      writer.uint32(8).int64(message.entitiesDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUser_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUser_Response();
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

  create<I extends Exact<DeepPartial<DeleteUser_Response>, I>>(base?: I): DeleteUser_Response {
    return DeleteUser_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUser_Response>, I>>(object: I): DeleteUser_Response {
    const message = createBaseDeleteUser_Response();
    message.entitiesDeleted = object.entitiesDeleted ?? 0;
    return message;
  },
};

function createBaseGetUsers(): GetUsers {
  return {};
}

export const GetUsers = {
  encode(_: GetUsers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsers();
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

  create<I extends Exact<DeepPartial<GetUsers>, I>>(base?: I): GetUsers {
    return GetUsers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUsers>, I>>(_: I): GetUsers {
    const message = createBaseGetUsers();
    return message;
  },
};

function createBaseGetUsers_Response(): GetUsers_Response {
  return { page: undefined, users: [] };
}

export const GetUsers_Response = {
  encode(message: GetUsers_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== undefined) {
      Page.encode(message.page, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsers_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsers_Response();
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

  create<I extends Exact<DeepPartial<GetUsers_Response>, I>>(base?: I): GetUsers_Response {
    return GetUsers_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUsers_Response>, I>>(object: I): GetUsers_Response {
    const message = createBaseGetUsers_Response();
    message.page = (object.page !== undefined && object.page !== null) ? Page.fromPartial(object.page) : undefined;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUserNameList(): GetUserNameList {
  return {};
}

export const GetUserNameList = {
  encode(_: GetUserNameList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserNameList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserNameList();
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

  create<I extends Exact<DeepPartial<GetUserNameList>, I>>(base?: I): GetUserNameList {
    return GetUserNameList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserNameList>, I>>(_: I): GetUserNameList {
    const message = createBaseGetUserNameList();
    return message;
  },
};

function createBaseGetUserNameList_Response(): GetUserNameList_Response {
  return { items: [] };
}

export const GetUserNameList_Response = {
  encode(message: GetUserNameList_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      UserSnippet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserNameList_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserNameList_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(UserSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<GetUserNameList_Response>, I>>(base?: I): GetUserNameList_Response {
    return GetUserNameList_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserNameList_Response>, I>>(object: I): GetUserNameList_Response {
    const message = createBaseGetUserNameList_Response();
    message.items = object.items?.map((e) => UserSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUser(): User {
  return {
    id: "",
    name: "",
    surname: "",
    patronymic: undefined,
    messengerContact: undefined,
    sex: 0,
    email: "",
    phoneNumber: undefined,
    balance: "",
    role: 0,
    memberOfTeams: [],
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.surname !== "") {
      writer.uint32(26).string(message.surname);
    }
    if (message.patronymic !== undefined) {
      StringValue.encode({ value: message.patronymic! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.messengerContact !== undefined) {
      StringValue.encode({ value: message.messengerContact! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.sex !== 0) {
      writer.uint32(48).int32(message.sex);
    }
    if (message.email !== "") {
      writer.uint32(58).string(message.email);
    }
    if (message.phoneNumber !== undefined) {
      StringValue.encode({ value: message.phoneNumber! }, writer.uint32(66).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(74).string(message.balance);
    }
    if (message.role !== 0) {
      writer.uint32(80).int32(message.role);
    }
    for (const v of message.memberOfTeams) {
      TeamSnippet.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.surname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.patronymic = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.messengerContact = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.sex = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.email = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.phoneNumber = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.balance = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.memberOfTeams.push(TeamSnippet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.surname = object.surname ?? "";
    message.patronymic = object.patronymic ?? undefined;
    message.messengerContact = object.messengerContact ?? undefined;
    message.sex = object.sex ?? 0;
    message.email = object.email ?? "";
    message.phoneNumber = object.phoneNumber ?? undefined;
    message.balance = object.balance ?? "";
    message.role = object.role ?? 0;
    message.memberOfTeams = object.memberOfTeams?.map((e) => TeamSnippet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserSnippet(): UserSnippet {
  return { id: "", name: "", surname: "", patronymic: undefined };
}

export const UserSnippet = {
  encode(message: UserSnippet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.surname !== "") {
      writer.uint32(26).string(message.surname);
    }
    if (message.patronymic !== undefined) {
      StringValue.encode({ value: message.patronymic! }, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSnippet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSnippet();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.surname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.patronymic = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<UserSnippet>, I>>(base?: I): UserSnippet {
    return UserSnippet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSnippet>, I>>(object: I): UserSnippet {
    const message = createBaseUserSnippet();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.surname = object.surname ?? "";
    message.patronymic = object.patronymic ?? undefined;
    return message;
  },
};

function createBaseUserSexNamespace(): UserSexNamespace {
  return {};
}

export const UserSexNamespace = {
  encode(_: UserSexNamespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSexNamespace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSexNamespace();
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

  create<I extends Exact<DeepPartial<UserSexNamespace>, I>>(base?: I): UserSexNamespace {
    return UserSexNamespace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSexNamespace>, I>>(_: I): UserSexNamespace {
    const message = createBaseUserSexNamespace();
    return message;
  },
};

function createBaseUserRoleNamespace(): UserRoleNamespace {
  return {};
}

export const UserRoleNamespace = {
  encode(_: UserRoleNamespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRoleNamespace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRoleNamespace();
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

  create<I extends Exact<DeepPartial<UserRoleNamespace>, I>>(base?: I): UserRoleNamespace {
    return UserRoleNamespace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserRoleNamespace>, I>>(_: I): UserRoleNamespace {
    const message = createBaseUserRoleNamespace();
    return message;
  },
};

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
