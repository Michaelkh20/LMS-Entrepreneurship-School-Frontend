import { dto } from '../../protobuffs/dto/index.js';
import Role = dto.Role;
import LotStatus = dto.LotStatus;
import Account from '../db/entities/account.js';
import { ExtractClassFields } from './util.js';
import Team from '../db/entities/team.js';

export type Profile = {
  fullName: string;
  role: Role;
  email: string;
  team: {
    id: string;
    number: number;
  };
  phone: string;
  messenger: string;
  balance: number;
};

export type WithLearnersAndTrackers<T> = T & {
  learners: Account[];
  trackers: Account[];
};

export type WithTeam<T> = T & {
  team: {
    id: string;
    number: number;
    theme: string | null;
  } | null;
};
