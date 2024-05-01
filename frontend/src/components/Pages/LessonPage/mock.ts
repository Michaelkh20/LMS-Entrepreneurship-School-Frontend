import { GetLesson_Response } from "@proto/lessons/lessons_api";

const lessonsData: GetLesson_Response = {
    lesson: {
      id: '',
      title:
        'Тема 1: Организационная часть. Генерация идей. Идеи для стартапа: откуда их брать? ',
      lessonNumber: 1,
      publishDate: new Date(),
      presentationUrls: ['s1', 's2', 's3'],
      videoUrls: [
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Tv5JyQ7W1OEuiEkU',
      ],
      homeworkIds: ['1', '2', '3'],
      testIds: ['4', '5'],
      description: `Об организации курса, формат работы
      Как зарождаются стартапы
      Методологии генерации идей
      Тренды как источники идей для стартапа
      Дизайн-мышление для бизнеса
      Игра на развитие креативного мышления
      Групповая работа с картой клиента (CJM) Метод Леонардо да Винчи, латерального мышления, глобализации, Андерсена, инверсии и параллельный миры для развития креативного мышления Тестирование для оценки знаний аудитории`,
    },
  };