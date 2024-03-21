import { dto } from '@dto';
import Role = dto.Role;

type Account = {
  id: string;
  name: string;
  surname: string;
  lastName: string;
  email: string;
  phone: string;
  messenger: string;
  role: Role;
  password: string;
};

export const accounts: Account[] = [
  {
    id: '79974e29-daa7-404d-9144-3b081bef4423',
    name: 'Екатерина',
    surname: 'Богданова',
    lastName: 'Тимофеевна',
    email: 'learner@gmail.com',
    phone: '+75974813531',
    messenger: '@safonovapelageja',
    role: Role.LEARNER,
    password: 'learner',
  },
  {
    id: 'e545e26a-19c4-4b92-9aa7-b7d9eede56b9',
    name: 'Платон',
    surname: 'Стрелков',
    lastName: 'Александрович',
    email: 'trofim_1972@yahoo.com',
    phone: '+7 503 354 7226',
    messenger: '@bkolobova',
    role: Role.LEARNER,
    password: '&9H2Bt)wT3',
  },
  {
    id: '2ff3a1fe-a155-4098-89d4-bedbf79123c1',
    name: 'Сигизмунд',
    surname: 'Колесников',
    lastName: 'Алексеев',
    email: 'leonid_2022@gmail.com',
    phone: '+7 593 552 5287',
    messenger: '@osip74',
    role: Role.LEARNER,
    password: '@HYxC))BC6',
  },
  {
    id: '129ada0b-0c3f-45d4-80b4-6dbabcb300a9',
    name: 'Будимир',
    surname: 'Самсонов',
    lastName: 'Владимирович',
    email: 'bvinogradova@ao.org',
    phone: '+7 (729) 159-18-86',
    messenger: '@taras_2024',
    role: Role.LEARNER,
    password: 'X$5RKptCG$',
  },
  {
    id: '3b0e016b-26b5-406f-84ec-4a52ba888d89',
    name: 'Иларион',
    surname: 'Носов',
    lastName: 'Викторович',
    email: 'belozerovpavel@yahoo.com',
    phone: '8 071 546 10 75',
    messenger: '@melnikovgerman',
    role: Role.LEARNER,
    password: '^w7+H(2mVH',
  },
  {
    id: '32a17501-3973-48bd-a5f3-fa948dc2b52a',
    name: 'Николая',
    surname: 'Дроздов',
    lastName: 'Тарасович',
    email: 'ivanovolimpi@yandex.ru',
    phone: '+77656876551',
    messenger: '@mvolkova',
    role: Role.LEARNER,
    password: '%n5m_)KwYs',
  },
  {
    id: 'c4ce5ffb-1899-4043-ab66-61e381f71a4d',
    name: 'Исай',
    surname: 'Семенов',
    lastName: 'Дмитриевич',
    email: 'ratibor1997@ao.net',
    phone: '8 (180) 344-54-47',
    messenger: '@ubeljakov',
    role: Role.LEARNER,
    password: 'ra@Kb7$s!2',
  },
  {
    id: '06c0cb95-1f81-4b3a-8ccb-84187920e716',
    name: 'Валерий',
    surname: 'Анисимов',
    lastName: 'Ммхайлович',
    email: 'valerija_80@yahoo.com',
    phone: '8 561 631 0486',
    messenger: '@vatslav_07',
    role: Role.LEARNER,
    password: 'dJr0dlHi!w',
  },
  {
    id: '90676f1d-39a9-44e4-9597-0f400add4f4f',
    name: 'Любовь',
    surname: 'Калашникова',
    lastName: 'Никитична',
    email: 'fedor45@rambler.ru',
    phone: '8 837 592 64 31',
    messenger: '@spartak1974',
    role: Role.TRACKER,
    password: '+pHuivP!j3',
  },
  {
    id: 'af38bb2f-cf65-4195-b21c-221e4e2395e1',
    name: 'Афанасий',
    surname: 'Тетерин',
    lastName: 'Гнрманович',
    email: 'shirjaevnikanor@sk.biz',
    phone: '8 (251) 111-15-95',
    messenger: '@qkulagin',
    role: Role.TRACKER,
    password: 'H4OgWVYm#o',
  },
];
