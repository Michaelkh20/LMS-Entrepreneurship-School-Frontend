import Team from '../db/entities/team';

const teamsMock = [
  {
    id: '1',
    number: 1,
    theme: 'Какая-то тема',
  },
  {
    id: '2',
    number: 2,
    theme: 'Другая тема',
  },
];

const teamsInit = teamsMock.map(
  (team) => new Team(team.number, team.theme, team.id)
);

export default teamsInit;
