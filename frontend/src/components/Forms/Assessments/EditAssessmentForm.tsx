// 'use client';
// import { Id, assessmentTypeTranslate } from '@/types/common';
// import { Form, Input, Button, message, InputNumber } from 'antd';
// import { useForm } from 'antd/lib/form/Form';
// import { AssessmentUpdateRequest } from '@/types/requests';
// import {
//   useGetAssessmentByIdQuery,
//   useUpdateAssessmentMutation,
// } from '@/redux/services/adminApi';
// import { useEffect } from 'react';
// import { AssessmentInfo } from '@/types/responses';
// import LoadingErrorStub from '@/components/LoadingErrorStub';
// import { useRouter } from 'next/navigation';
// import Prop from '@/components/EntityProps/Prop';
// import Link from 'next/link';

// export default function EditAssessmentForm({ id }: { id: Id }) {
//   const [form] = useForm();
//   const router = useRouter();

//   const [updateAssessment, updateResult] = useUpdateAssessmentMutation();
//   const { data, isLoading, isError, isSuccess } = useGetAssessmentByIdQuery(id);

//   useEffect(() => {
//     if (updateResult.isError) {
//       message.error('Что-то пошло не так', 5);
//     }

//     if (updateResult.isLoading) {
//       message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
//     } else {
//       message.destroy('Loading');
//     }

//     if (updateResult.isSuccess) {
//       message.success('Аккаунт успешно изменён');
//       router.push(`/admin/assessments/${id}`);
//     }
//   }, [id, router, updateResult]);

//   const onFinish = (values: any) => {
//     const request = formValuesToRequest(values, id);
//     console.log(values, request);
//     updateAssessment(request);
//   };

//   return (
//     <LoadingErrorStub isLoading={isLoading} isError={isError}>
//       {isSuccess ? (
//         <>
//           <Prop.Container>
//             <Prop
//               label="Тип"
//               value={assessmentTypeTranslate(data.assessmentType)}
//             />
//             <Prop
//               label="Ученик"
//               value={{
//                 href: `/admnin/accounts/${data.learner.id}`,
//                 content: data.learner.name,
//               }}
//             />
//             <Prop
//               label="Задание"
//               value={{
//                 href: `/admnin/tasks/${data.task.id}`,
//                 content: data.task.title,
//               }}
//             />
//           </Prop.Container>
//           <Form
//             form={form}
//             onFinish={onFinish}
//             layout="vertical"
//             style={{ padding: '2rem' }}
//             initialValues={fromResponseToFormValues(data)}
//           >
//             <Form.Item
//               label="Оценка"
//               name="assessment"
//               rules={[{ required: true, message: 'Выберите оценку' }]}
//             >
//               <InputNumber min={0} max={10} placeholder={'0-10'} />
//             </Form.Item>
//             <Form.Item
//               label="Комментарий"
//               name="comment"
//               wrapperCol={{ span: 8 }}
//             >
//               <Input.TextArea
//                 showCount
//                 maxLength={1024}
//                 placeholder="Напишите комментарий"
//                 style={{ height: '7rem' }}
//               />
//             </Form.Item>
//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ backgroundColor: '#198754', marginTop: '1rem' }}
//                 loading={updateResult.isLoading}
//               >
//                 Создать оценку
//               </Button>
//             </Form.Item>
//           </Form>
//         </>
//       ) : null}
//     </LoadingErrorStub>
//   );
// }

// function formValuesToRequest(values: any, id: Id): AssessmentUpdateRequest {
//   return {
//     id: id,
//     assessment: values.assessment,
//     comment: values.comment ?? '',
//   };
// }

// function fromResponseToFormValues(data: AssessmentInfo) {
//   return {
//     assessment: data.assessment,
//     comment: data.comment,
//   };
// }
