import { Grade } from '@/types/api';

export function getTitleFromTask(task: Grade['task']) {
  switch (task.$case) {
    case 'homework':
      return task.homework.title;
    case 'exam':
      return task.exam.title;
    case 'test':
      return task.test.title;
    case 'competition':
      return task.competition.title;
  }
}
