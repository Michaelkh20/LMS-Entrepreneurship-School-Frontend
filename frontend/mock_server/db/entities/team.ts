import { nanoid } from 'nanoid';

import { dto } from '../../../protobuffs/dto/index.js';
import Role = dto.Role;
import TeamCreateRequest = dto.TeamCreateRequest;

export default class Team {
  constructor(
    public number: number,
    public theme: string | null = null,
    public id: string = nanoid()
  ) {}

  static fromTeamCreateRequest(dto: TeamCreateRequest) {
    return new Team(dto.number, dto.theme);
  }
}

export type TeamInstanceType = InstanceType<typeof Team>;
