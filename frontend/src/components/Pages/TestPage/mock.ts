import { GetTest_Response } from "@proto/assignments/test_api";

const mockTestData: GetTest_Response = {
    test: {
      title: 'HW_1',
      description: `Об организации курса, формат работы
      Как зарождаются стартапы
      Методологии генерации идей
      Тренды как источники идей для стартапа
      Дизайн-мышление для бизнеса
      Игра на развитие креативного мышления
      Групповая работа с картой клиента (CJM)
      Метод Леонардо да Винчи, латерального мышления, глобализации, Андерсена, инверсии и параллельный миры для развития креативного мышления
      Тестирование для оценки знаний аудитории`,
      deadlineDate: new Date(),
      publishDate: new Date(),
      externalMaterialUrls: ['asd', 'asdf'],
      gradingCriteria: `За что может быть снижена оценка: 
      1. Несоответствие содержанию (Если пункт отсутствует полностью, то снимается полностью указанный в описании дз балл, если некорректное описание, то половина указанных баллов):
      1.1. нет название проекта, 
      1.2. отсутствует описание проекта, 
      1.3. нет описания целевой аудитории,
      1.4. отсутствует описание проблемы, которую решает проект,
      1.5. не упоминается технология, которая будет использоваться для реализации проекта
      2. Длительность видео больше одной минуты (за это снимается 1 балл);
      3. Несоблюдение дедлайна.
      Каждый просроченный день -1 балл;
      4. 1 балл за оформление и дизайн.
      
      Дедлайн: 23:59 18.10.22
      
      Пример: https://docs.google.com/spreadsheets/d/12WuZxIpM_5uEhsVDknwlCUMWtX1ONqsnnvwVHK9psaU/edit?usp=sharing`,
      id: 'qft',
      lesson: {
        id: 'asd',
        title: 'lesson_1',
        lessonNumber: 1,
        publishDate: new Date(),
      },
    },
  };