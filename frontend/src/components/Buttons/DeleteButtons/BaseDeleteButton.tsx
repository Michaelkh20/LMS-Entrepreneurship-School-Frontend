import React from 'react';
import { Button, Popconfirm } from 'antd';

export default function BaseDeleteButton({
  title,
  description,
  isLoading,
  onConfirm,
}: {
  title: string;
  description: string;
  isLoading: boolean;
  onConfirm: (
    e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => void;
}) {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      okText="Да"
      cancelText="Нет"
    >
      <Button
        type="dashed"
        danger
        size="large"
        style={{
          width: '11rem',
          height: ' 3rem',
          fontSize: '1.2rem',
          fontWeight: '600',
          borderRadius: '0.75rem',
        }}
        loading={isLoading}
      >
        Удалить
      </Button>
    </Popconfirm>
  );
}
