import { dto } from '@dto';

export default function roleToString(role: dto.Role | undefined | null) {
  switch (role) {
    case dto.Role.ADMIN:
      return 'Администратор';
    case dto.Role.LEARNER:
      return 'Ученик';
    case dto.Role.TRACKER:
      return 'Трекер';
    default:
      return '';
  }
}
