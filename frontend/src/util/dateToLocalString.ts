export function dateToLocalString(date: Date) {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  });
}
