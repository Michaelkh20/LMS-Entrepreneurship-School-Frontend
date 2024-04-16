import { nanoid } from 'nanoid';

import { dto } from '../../../protobuffs/dto/index.js';
import Role = dto.Role;
import AccountCreateRequest = dto.AccountCreateRequest;
import AccountEditRequest = dto.AccountEditRequest;

export default class Account {
  constructor(
    public name: string,
    public surname: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public messenger: string,
    public role: Role,
    public password: string,
    public balance: number,
    public teamId: string | null = null,
    public id: string = nanoid()
  ) {}

  static fromAccountCreateRequest(dto: AccountCreateRequest) {
    return new Account(
      dto.name,
      dto.surname,
      dto.lastName,
      dto.email,
      dto.phone,
      dto.messenger,
      dto.role,
      dto.password,
      1000
    );
  }

  updateByAccountEditRequest(dto: AccountEditRequest) {
    this.name = dto.name;
    this.surname = dto.surname;
    this.lastName = dto.lastName;
    this.email = dto.email;
    this.phone = dto.phone;
    this.messenger = dto.messenger;
  }

  getFullName() {
    return [this.surname, this.name, this.lastName].filter(Boolean).join(' ');
  }

  addFullName() {
    return {
      ...this,
      fullName: this.getFullName(),
    };
  }

  getPartName() {
    return `${this.surname} ${this.name}`;
  }

  addPartName() {
    return {
      ...this,
      partName: this.getPartName(),
    };
  }
}

export type AccountInstanceType = InstanceType<typeof Account>;
