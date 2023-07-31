'use client';
import { Form, Input, Select, Button, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';

const { Option } = Select;

interface RegistrationFormProps {
  onSubmit: (values: any) => void;
}

interface EditFormProps {
  isRegistrationForm?: boolean;
}

export default function EditForm({ isRegistrationForm }: EditFormProps) {
  const [form] = useForm();

  const onSubmit = (values: any) => {
    // Handle form submission based on the form type
    if (isRegistrationForm) {
      // Logic for registration form
    } else {
      // Logic for edit form
    }
  };

  const onFinish = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      style={{ padding: '3rem' }}
    >
      <Form.Item
        label="Имя"
        name="firstName"
        rules={[{ required: true, message: 'Введите имя' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={[{ required: true, message: 'Введите фамилию' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Отчество"
        name="middleName"
        rules={[{ required: true, message: 'Введите отчество' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Роль"
        name="role"
        rules={[{ required: true, message: 'Выберите роль' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
      >
        <Select>
          <Option value="Студент">Студент</Option>
          <Option value="Трекер">Трекер</Option>
          <Option value="Админ">Админ</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Гендер"
        name="gender"
        rules={[{ required: true, message: 'Выберите гендер' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
      >
        <Select>
          <Option value="Мужчина">Мужчина</Option>
          <Option value="Женщина">Женщина</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Мессенджер"
        name="messenger"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
      >
        <Select>
          <Option value="Telegram">Telegramm</Option>
          <Option value="WhatsApp">WhatsApp</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Телефон"
        name="phone"
        rules={[{ required: true, message: 'Введите телефон' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 6 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Введите email', type: 'email' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 6 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
        wrapperCol={{ span: 6 }}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: '#198754', align: 'left' }}
          >
            {isRegistrationForm ? 'Создать аккаунт' : 'Подтвердить изменения'}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
