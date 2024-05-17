export default function dateToFormatString(date: string | undefined) {
  if (!date) {
    return '';
  }

  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  });
}


