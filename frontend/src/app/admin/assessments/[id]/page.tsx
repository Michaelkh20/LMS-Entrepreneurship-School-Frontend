import React from 'react';

import styles from '../../main.module.css';
import { AssessmentTableWithFilter } from '@/components/TableWithFilterNew/Components/AssessmentTableWithFilter';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function AssessmentPage({ params: { id } }: { params: { id: number } }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Оценить ДЗ1</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <AssessmentTableWithFilter />
    </div>
  );
}




// import { Jura } from 'next/font/google';
// import styles from './page.module.css';
// import Link from 'next/link';
// import Prop from '@/components/EntityProps/Prop';
// // import { useGetAssessmentByIdQuery } from '@/redux/services/adminApi';
// import LoadingErrorWrapper from '@/components/LoadingErrorWrapper/LoadingErrorWrapper';
// import { AssessmentType, assessmentTypeTranslate } from '@/types/common';
// import dayjs from 'dayjs';
// import AccountDeleteBtn from '@/components/Buttons/DeleteButtons/AccountDeleteBtn/AccountDeleteBtn';
// import { AssessmentInfo } from '@/types/responses';

// const jura = Jura({
//   subsets: ['cyrillic'],
// });

// export default function Page({ params: { id } }: { params: { id: number } }) {
//   const { data, isLoading, isError, isSuccess } = {
//     data: {
//       id: 1,
//       learner: { id: 1, name: 'qwe' },
//       tracker: { id: 1, name: 'qwe' },
//       task: { id: 1, title: 'qwe' },
//       issueDate: '12123',
//       assessmentType: AssessmentType.FinalGrade,
//       assessment: 12,
//       comment: 'ABOBA',
//     },

//     isLoading: false,
//     isError: false,
//     isSuccess: true,
//   };
//   // useGetAssessmentByIdQuery(id);

//   return (
//     <LoadingErrorWrapper isLoading={isLoading} isError={isError}>
//       {isSuccess && (
//         <>
//           <h1 className={`${styles.title} ${jura.className}`}>ОЦЕНКА</h1>
//           {data.assessmentType === AssessmentType.FinalGrade && (
//             <div className={styles.redux_button_container}>
//               <Link
//                 href={`/admin/assessments/${id}/edit`}
//                 className={styles.buttonRedux}
//               >
//                 Редактировать
//               </Link>
//             </div>
//           )}
//           <div className={styles.grade_container}>
//             <p className={styles.grade}>Оценка: </p>
//             <p className={styles.grade_value} data-grade={data.assessment}>
//               data.assessment
//             </p>
//           </div>

//           <Prop.Container className={styles.grade_props}>
//             <Prop
//               label="Тип"
//               value={assessmentTypeTranslate(data.assessmentType)}
//             />
//             <Prop
//               label="Ученик"
//               value={{
//                 href: `/admin/accounts/${data.learner.id}`,
//                 content: data.learner.name,
//               }}
//             />
//             {data.assessmentType === AssessmentType.TrackerGrade && (
//               <Prop
//                 label="Трекер"
//                 value={{
//                   href: `/admin/accounts/${data.tracker.id}`,
//                   content: data.tracker.name,
//                 }}
//               />
//             )}
//             <Prop
//               label="Задание"
//               value={{
//                 href: `/admin/tasks/${data.task.id}`,
//                 content: data.task.title,
//               }}
//             />
//             <Prop label="Комментарий" value={data.comment} />
//             <Prop
//               label="Дата выставления"
//               value={dayjs(data.issueDate).format('DD.MM.YYYY')}
//             />
//           </Prop.Container>

//           {data.assessmentType === AssessmentType.FinalGrade && (
//             <div className={styles.deleteBtnContainer}>
//               {/* <AccountDeleteBtn id={id} /> */}
//             </div>
//           )}
//         </>
//       )}
//     </LoadingErrorWrapper>
//   );
// }
