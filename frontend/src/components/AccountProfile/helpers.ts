import { Role } from '@/types/common';

export function getRoleString(role: Role | undefined) {
  switch (role) {
    case Role.LEARNER:
      return 'Ученик';
    case Role.TRACKER:
      return 'Трекер';
    case Role.ADMIN:
      return 'Админ';
    default:
      return '';
  }
}
