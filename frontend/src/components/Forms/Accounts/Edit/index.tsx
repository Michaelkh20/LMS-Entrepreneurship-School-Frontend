'use client';

// import { Form, Input, Select, Button, Space, message } from 'antd';
// import { useForm } from 'antd/lib/form/Form';
// import {
//   useEditAccountMutation,
//   useGetAccountQuery,
// } from '@/redux/services/adminApi';
// import { useEffect, useState } from 'react';
// import PhoneNumber from '../../FormItems/EntityForms/PhoneNumber';
// import LoadingErrorWrapper from '@/components/LoadingErrorWrapper/LoadingErrorWrapper';
// import { useRouter } from 'next/navigation';

// import { dto } from '@dto';
// import Role = dto.Role;
// import AccountChangeErrorResponse = dto.AccountChangeErrorResponse;
// import { formValuesToRequest, fromResponseToFormValues } from './helpers';
// import { EditAccountFormType } from '@/types/forms';

// const { Option } = Select;

export default function EditAccountForm({ id }: { id: string }) {
  // const [form] = useForm<EditAccountFormType>();
  // const router = useRouter();

  // const [updateAccount, updateResult] = useEditAccountMutation();
  // const { data, isLoading, isError } = useGetAccountQuery(id);

  // const [validEmail, setValidEmail] = useState(true);
  // const [validPhone, setValidPhone] = useState(true);

  // useEffect(() => {
  //   if (updateResult.isError) {
  //     const errorDetails = updateResult.error; // Assuming error details are in result.error

  //     // Check if the response status is 409
  //     if ('status' in errorDetails && errorDetails.status === 409) {
  //       const data = errorDetails.data as AccountChangeErrorResponse;
  //       let fieldsError = [];

  //       // Based on the message you get, update the appropriate field's error
  //       if (data.email) {
  //         fieldsError.push({
  //           name: 'email',
  //           errors: ['Пользователь с таким email уже существует'],
  //         });
  //         setValidEmail(false);
  //         message.error('Пользователь с таким email уже существует', 5);
  //       }

  //       if (data.phone) {
  //         fieldsError.push({
  //           name: 'phone',
  //           errors: ['Пользователь с таким номером телефона уже существует'],
  //         });
  //         setValidPhone(false);
  //         message.error(
  //           'Пользователь с таким номером телефона уже существует',
  //           5
  //         );
  //       }

  //       form.setFields(fieldsError);
  //     } else {
  //       message.error('Что-то пошло не так', 5);
  //     }
  //   }

  //   if (updateResult.isLoading) {
  //     message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
  //   } else {
  //     message.destroy('Loading');
  //   }

  //   if (updateResult.isSuccess) {
  //     message.success('Аккаунт успешно изменён');
  //     router.push(`/admin/accounts/${id}`);
  //   }
  // }, [form, id, router, updateResult]);

  // const onFinish = (values: EditAccountFormType) => {
  //   const request = formValuesToRequest(values);
  //   updateAccount({ id, body: request });
  // };

  // const onValuesChange = (changedValues: any) => {
  //   if (changedValues.email) {
  //     setValidEmail(true);
  //   }
  //   if (changedValues.phone) {
  //     setValidPhone(true);
  //   }
  // };

  // return (
  //   <LoadingErrorWrapper isLoading={isLoading} isError={isError}>
  //     <Form<EditAccountFormType>
  //       form={form}
  //       onFinish={onFinish}
  //       onValuesChange={onValuesChange}
  //       layout="vertical"
  //       initialValues={data && fromResponseToFormValues(data)}
  //     >
  //       <Form.Item
  //         label="Имя"
  //         name="firstName"
  //         rules={[
  //           { required: true, message: 'Введите имя' },
  //           {
  //             min: 2,
  //             message: 'Имя должно иметь длину не менее 2 символов',
  //           },
  //           {
  //             whitespace: true,
  //             message: 'Имя не может состоять из одних пробелов',
  //           },
  //         ]}
  //         labelCol={{ span: 2 }}
  //         wrapperCol={{ span: 8 }}
  //         hasFeedback
  //       >
  //         <Input />
  //       </Form.Item>
  //       <Form.Item
  //         label="Фамилия"
  //         name="surName"
  //         rules={[
  //           { required: true, message: 'Введите фамилию' },
  //           {
  //             min: 2,
  //             message: 'Фамилия должна иметь длину не менее 2 символов',
  //           },
  //           {
  //             whitespace: true,
  //             message: 'Фамилия не может состоять из одних пробелов',
  //           },
  //         ]}
  //         labelCol={{ span: 6 }}
  //         wrapperCol={{ span: 8 }}
  //         hasFeedback
  //       >
  //         <Input />
  //       </Form.Item>
  //       <Form.Item
  //         label="Отчество"
  //         name="lastName"
  //         labelCol={{ span: 6 }}
  //         wrapperCol={{ span: 8 }}
  //         rules={[
  //           {
  //             whitespace: true,
  //             message: 'Отчество не может состоять из одних пробелов',
  //           },
  //         ]}
  //         hasFeedback
  //       >
  //         <Input />
  //       </Form.Item>
  //       <Form.Item
  //         label="Роль"
  //         name="role"
  //         rules={[{ required: true, message: 'Выберите роль' }]}
  //         labelCol={{ span: 6 }}
  //         wrapperCol={{ span: 4 }}
  //         hasFeedback
  //       >
  //         <Select>
  //           <Option value={Role.LEARNER}>Ученик</Option>
  //           <Option value={Role.TRACKER}>Трекер</Option>
  //         </Select>
  //       </Form.Item>
  //       <Form.Item
  //         label="Мессенджер"
  //         name="messenger"
  //         labelCol={{ span: 6 }}
  //         wrapperCol={{ span: 4 }}
  //         rules={[{ required: true, message: 'Введите мессенджер' }]}
  //         hasFeedback
  //       >
  //         <Input />
  //       </Form.Item>
  //       <Form.Item
  //         label="Телефон"
  //         name="phone"
  //         rules={[
  //           { required: true, message: 'Введите номер телефона' },
  //           {
  //             validator: (_, value) => {
  //               if (value.replace(/\D/g, '').length !== 10) {
  //                 // Check for 10 digits only
  //                 return Promise.reject('Неверный формат номера телефона');
  //               }
  //               return Promise.resolve();
  //             },
  //           },
  //         ]}
  //         labelCol={{ span: 6 }}
  //         wrapperCol={{ span: 6 }}
  //         required
  //         hasFeedback
  //       >
  //         <PhoneNumber />
  //       </Form.Item>
  //       <Form.Item
  //         label="Email"
  //         name="email"
  //         rules={[
  //           { required: true, message: 'Введите email' },
  //           { type: 'email', message: 'Неверный формат email' },
  //         ]}
  //         labelCol={{ span: 6 }}
  //         wrapperCol={{ span: 6 }}
  //         hasFeedback
  //       >
  //         <Input />
  //       </Form.Item>
  //       <Form.Item>
  //         <Space>
  //           <Button
  //             type="primary"
  //             htmlType="submit"
  //             style={{ marginTop: '1rem' }}
  //             disabled={!validEmail || !validPhone}
  //             loading={updateResult.isLoading}
  //           >
  //             Подтвердить изменения
  //           </Button>
  //         </Space>
  //       </Form.Item>
  //     </Form>
  //   </LoadingErrorWrapper>
  // );

  return null;
}
