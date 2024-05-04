'use client';

import React from 'react';
import { Flex, Form, Select } from 'antd';
import { useGetLessonsQuery } from '@/redux/services/api';

type Props =
  | {
      type: 'filter';
      label?: undefined;
    }
  | {
      type: 'form';
      label: string;
    };

export function LessonSelectionFormItem({ type, label }: Props) {
  const { data, isFetching } = useGetLessonsQuery({ page: 0, size: 999_999 });

  return (
    <Form.Item
      label={label}
      name="lessonId"
      rules={
        type === 'form'
          ? [{ required: true, message: 'Выберите урок' }]
          : undefined
      }
      // wrapperCol={type === 'form' ? { span: 8 } : undefined}
      style={type === 'filter' ? { minWidth: '240px' } : undefined}
    >
      <Select
        style={{ width: '100%' }}
        showSearch
        placeholder="Выберите урок"
        loading={isFetching}
        options={data?.lessons.map((lesson) => ({
          label: lesson.title,
          value: lesson.id,
          lessonNumber: lesson.lessonNumber,
          date: lesson.publishDate,
        }))}
        optionRender={(option) => (
          <Flex justify="space-between">
            <div>{`Урок №${option.data.lessonNumber}, ${option.label}`}</div>
            <div>{option.data.date.toLocaleDateString('ru-RU')}</div>
          </Flex>
        )}
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        allowClear={type === 'filter'}
      />
    </Form.Item>
  );
}
