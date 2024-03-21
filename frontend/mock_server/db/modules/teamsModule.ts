import { Low } from 'lowdb';
import type Team from '../entities/team';

import { dto } from '../../../protobuffs/dto/index.js';
import { WithTeam } from '../../types';

interface WithTeams {
  teams: Team[];
}

export class TeamsModule<T extends WithTeams> {
  constructor(private db: Low<T>) {}

  getTeams() {
    return this.db.data.teams;
  }

  getTeamById(id: string) {
    return this.db.data.teams.find((team) => team.id === id);
  }

  populateAccountWithTeam<T extends { teamId: string | null }>(
    account: T
  ): WithTeam<T> {
    const team = account.teamId
      ? this.getTeamById(account.teamId) || null
      : null;

    return {
      ...account,
      team,
    };
  }
}
