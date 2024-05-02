import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Form, Input, Space } from 'antd';
import { FormListProps } from 'antd/es/form';
import styles from './ListFormItem.module.css';

type ListProps = {
  name: string;
  title: string;
  requiredMessage: string;
  addBtnText: string;
} & Omit<FormListProps, 'children'>;

export default function ListFormItem({
  name,
  addBtnText,
  requiredMessage,
  title,
  ...formListProps
}: ListProps) {
  return (
    <Form.List {...formListProps} name={name}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, ...restFieldProps }, index) => (
            <Form.Item
              {...restFieldProps}
              key={key}
              label={index === 0 ? title : ''}
              validateTrigger={['onChange', 'onBlur']}
              required={false}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: requiredMessage,
                },
              ]}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 8 }}
            >
              <InputWithDelete
                onDeleteClick={() => remove(restFieldProps.name)}
              />
            </Form.Item>
          ))}
          <Form.Item wrapperCol={{ span: 8 }}>
            <Button
              type="dashed"
              onClick={() => add()}
              icon={<PlusOutlined />}
              block
            >
              {addBtnText}
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
}

type InputwithDeleteProps = {
  onDeleteClick: () => void;
} & React.ComponentProps<typeof Input>;

function InputWithDelete({
  onDeleteClick,
  ...restProps
}: InputwithDeleteProps) {
  return (
    <Space.Compact block>
      <Input {...restProps} />
      <Button danger icon={<MinusCircleOutlined />} onClick={onDeleteClick} />
    </Space.Compact>
  );
}
