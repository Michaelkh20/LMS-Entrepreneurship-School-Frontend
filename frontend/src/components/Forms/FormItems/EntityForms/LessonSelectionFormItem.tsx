'use client';

import React from 'react';
import { Flex, Form, Select } from 'antd';
import { useGetLessonsQuery } from '@/redux/services/api';

export function LessonSelectionFormItem() {
  const { data, isFetching } = useGetLessonsQuery({ page: 0, size: 999_999 });

  return (
    <Form.Item
      label="Урок"
      name="lessonId"
      rules={[{ required: true, message: 'Выберите урок' }]}
      wrapperCol={{ span: 8 }}
    >
      <Select
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
      />
    </Form.Item>
  );
}
