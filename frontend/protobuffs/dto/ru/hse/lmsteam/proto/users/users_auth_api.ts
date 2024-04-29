/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { StringValue } from "../../../../../google/protobuf/wrappers";
import { UserRoleNamespace_Role } from "./users_api";

export const protobufPackage = "ru.hse.lmsteam.proto.users.auth";

export interface AuthResponse {
  result?: { $case: "success"; success: Success } | { $case: "failure"; failure: Failure } | undefined;
}

export interface Login {
}

export interface Login_Response {
  response: AuthResponse | undefined;
}

export interface ChangePassword {
}

export interface ChangePassword_Request {
  login: string;
  oldPassword: string;
  newPassword: string;
}

export interface ChangePassword_Response {
  response: AuthResponse | undefined;
}

export interface SetPassword {
}

export interface SetPassword_Request {
  login: string;
  token: string;
  newPassword: string;
}

export interface SetPassword_Response {
  response: AuthResponse | undefined;
}

export interface Success {
  token: string;
  role: UserRoleNamespace_Role;
  userId: string;
  name: string;
  surname: string;
  patronymic: string | undefined;
}

export interface Failure {
  message: string;
}

function createBaseAuthResponse(): AuthResponse {
  return { result: undefined };
}

export const AuthResponse = {
  encode(message: AuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.result?.$case) {
      case "success":
        Success.encode(message.result.success, writer.uint32(10).fork()).ldelim();
        break;
      case "failure":
        Failure.encode(message.result.failure, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = { $case: "success", success: Success.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result = { $case: "failure", failure: Failure.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<AuthResponse>, I>>(base?: I): AuthResponse {
    return AuthResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthResponse>, I>>(object: I): AuthResponse {
    const message = createBaseAuthResponse();
    if (object.result?.$case === "success" && object.result?.success !== undefined && object.result?.success !== null) {
      message.result = { $case: "success", success: Success.fromPartial(object.result.success) };
    }
    if (object.result?.$case === "failure" && object.result?.failure !== undefined && object.result?.failure !== null) {
      message.result = { $case: "failure", failure: Failure.fromPartial(object.result.failure) };
    }
    return message;
  },
};

function createBaseLogin(): Login {
  return {};
}

export const Login = {
  encode(_: Login, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Login {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogin();
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

  create<I extends Exact<DeepPartial<Login>, I>>(base?: I): Login {
    return Login.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Login>, I>>(_: I): Login {
    const message = createBaseLogin();
    return message;
  },
};

function createBaseLogin_Response(): Login_Response {
  return { response: undefined };
}

export const Login_Response = {
  encode(message: Login_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      AuthResponse.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Login_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogin_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = AuthResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Login_Response>, I>>(base?: I): Login_Response {
    return Login_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Login_Response>, I>>(object: I): Login_Response {
    const message = createBaseLogin_Response();
    message.response = (object.response !== undefined && object.response !== null)
      ? AuthResponse.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseChangePassword(): ChangePassword {
  return {};
}

export const ChangePassword = {
  encode(_: ChangePassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangePassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangePassword();
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

  create<I extends Exact<DeepPartial<ChangePassword>, I>>(base?: I): ChangePassword {
    return ChangePassword.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangePassword>, I>>(_: I): ChangePassword {
    const message = createBaseChangePassword();
    return message;
  },
};

function createBaseChangePassword_Request(): ChangePassword_Request {
  return { login: "", oldPassword: "", newPassword: "" };
}

export const ChangePassword_Request = {
  encode(message: ChangePassword_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    if (message.oldPassword !== "") {
      writer.uint32(18).string(message.oldPassword);
    }
    if (message.newPassword !== "") {
      writer.uint32(26).string(message.newPassword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangePassword_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangePassword_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.login = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oldPassword = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newPassword = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<ChangePassword_Request>, I>>(base?: I): ChangePassword_Request {
    return ChangePassword_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangePassword_Request>, I>>(object: I): ChangePassword_Request {
    const message = createBaseChangePassword_Request();
    message.login = object.login ?? "";
    message.oldPassword = object.oldPassword ?? "";
    message.newPassword = object.newPassword ?? "";
    return message;
  },
};

function createBaseChangePassword_Response(): ChangePassword_Response {
  return { response: undefined };
}

export const ChangePassword_Response = {
  encode(message: ChangePassword_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      AuthResponse.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangePassword_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangePassword_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = AuthResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<ChangePassword_Response>, I>>(base?: I): ChangePassword_Response {
    return ChangePassword_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangePassword_Response>, I>>(object: I): ChangePassword_Response {
    const message = createBaseChangePassword_Response();
    message.response = (object.response !== undefined && object.response !== null)
      ? AuthResponse.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseSetPassword(): SetPassword {
  return {};
}

export const SetPassword = {
  encode(_: SetPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPassword();
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

  create<I extends Exact<DeepPartial<SetPassword>, I>>(base?: I): SetPassword {
    return SetPassword.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPassword>, I>>(_: I): SetPassword {
    const message = createBaseSetPassword();
    return message;
  },
};

function createBaseSetPassword_Request(): SetPassword_Request {
  return { login: "", token: "", newPassword: "" };
}

export const SetPassword_Request = {
  encode(message: SetPassword_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.newPassword !== "") {
      writer.uint32(26).string(message.newPassword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPassword_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPassword_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.login = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newPassword = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<SetPassword_Request>, I>>(base?: I): SetPassword_Request {
    return SetPassword_Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPassword_Request>, I>>(object: I): SetPassword_Request {
    const message = createBaseSetPassword_Request();
    message.login = object.login ?? "";
    message.token = object.token ?? "";
    message.newPassword = object.newPassword ?? "";
    return message;
  },
};

function createBaseSetPassword_Response(): SetPassword_Response {
  return { response: undefined };
}

export const SetPassword_Response = {
  encode(message: SetPassword_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      AuthResponse.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPassword_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPassword_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = AuthResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<SetPassword_Response>, I>>(base?: I): SetPassword_Response {
    return SetPassword_Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPassword_Response>, I>>(object: I): SetPassword_Response {
    const message = createBaseSetPassword_Response();
    message.response = (object.response !== undefined && object.response !== null)
      ? AuthResponse.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseSuccess(): Success {
  return { token: "", role: 0, userId: "", name: "", surname: "", patronymic: undefined };
}

export const Success = {
  encode(message: Success, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.surname !== "") {
      writer.uint32(42).string(message.surname);
    }
    if (message.patronymic !== undefined) {
      StringValue.encode({ value: message.patronymic! }, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Success {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.surname = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  create<I extends Exact<DeepPartial<Success>, I>>(base?: I): Success {
    return Success.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Success>, I>>(object: I): Success {
    const message = createBaseSuccess();
    message.token = object.token ?? "";
    message.role = object.role ?? 0;
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    message.surname = object.surname ?? "";
    message.patronymic = object.patronymic ?? undefined;
    return message;
  },
};

function createBaseFailure(): Failure {
  return { message: "" };
}

export const Failure = {
  encode(message: Failure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Failure {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create<I extends Exact<DeepPartial<Failure>, I>>(base?: I): Failure {
    return Failure.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Failure>, I>>(object: I): Failure {
    const message = createBaseFailure();
    message.message = object.message ?? "";
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
