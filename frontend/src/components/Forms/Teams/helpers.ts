import { TeamUsersEditColumnsType } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import { ICreateUpdateTeamRequest } from '@/types/proto';

export default function formValuesToRequest(values: {
  description: string;
  projectTheme: string;
  number: number;
  students: TeamUsersEditColumnsType[];
  trackers: TeamUsersEditColumnsType[];
}): ICreateUpdateTeamRequest {
  const { students, trackers, description, projectTheme, number } = values;
  const studentsIds = students.map((student) => student.userId);
  const trackersIds = trackers.map((tracker) => tracker.userId);

  return {
    description: description,
    number: number,
    projectTheme: projectTheme,
    userIds: [...studentsIds, ...trackersIds],
  };
}
