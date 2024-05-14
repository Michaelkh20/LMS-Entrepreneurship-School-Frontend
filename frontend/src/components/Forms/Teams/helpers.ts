import { TeamUsersEditColumnsType } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import { ICreateUpdateTeamRequest } from '@/types/proto';

export function getUserIds(
  students: TeamUsersEditColumnsType[],
  trackers: TeamUsersEditColumnsType[]
): string[] {
  const studentsIds = students.map((student) => student.userId);
  const trackersIds = trackers.map((tracker) => tracker.userId);
  return [...studentsIds, ...trackersIds];
}

export function formValuesToRequest(values: {
  description: string;
  projectTheme: string;
  number: number;
  students: TeamUsersEditColumnsType[];
  trackers: TeamUsersEditColumnsType[];
}): ICreateUpdateTeamRequest {
  const { students, trackers, description, projectTheme, number } = values;

  const userIds = getUserIds(students, trackers);

  return {
    description: description,
    number: number,
    projectTheme: projectTheme,
    userIds: userIds,
  };
}
