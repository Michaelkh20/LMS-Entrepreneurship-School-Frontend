import express from 'express';
import DB from '../../db';

import { dto } from '../../../protobuffs/dto/index.js';
import TeamModalResponse = dto.TeamModalResponse;
import TeamResponse = dto.TeamResponse;
import TeamCreateRequest = dto.TeamCreateRequest;
import TeamChangeErrorResponse = dto.TeamChangeErrorResponse;
import TeamCreateSuccessResponse = dto.TeamCreateSuccessResponse;

export default function injectTeamsEndpoints(
  app: ReturnType<typeof express>,
  db: DB
) {
  app.get('/team-modal-view/:id', (req, res) => {
    const id = req.params.id;

    const team = db.getTeam(id);

    if (!team) {
      res.status(404).send();
      return;
    }

    const teamModalResponse = TeamModalResponse.encode(team).finish();

    res.status(200).type('application/x-protobuf').send(teamModalResponse);
  });

  app.get('/admin/teams/:id', (req, res) => {
    const id = req.params.id;

    const team = db.getTeam(id);

    if (!team) {
      res.status(404).send();
      return;
    }

    const teamResponse = TeamResponse.encode(team).finish();

    res.status(200).type('application/x-protobuf').send(teamResponse);
  });

  app.post('/admin/teams', async (req, res) => {
    const newTeamDto = TeamCreateRequest.decode(req.body);

    const result = await db.createTeamFromDto(newTeamDto);

    if (result.error) {
      const errorResponse = TeamChangeErrorResponse.encode(
        result.error
      ).finish();

      res.status(409).type('application/x-protobuf').send(errorResponse);
      return;
    }

    const teamCreateResponse = TeamCreateSuccessResponse.encode(
      result.team
    ).finish();

    res.status(200).type('application/x-protobuf').send(teamCreateResponse);
  });
}
