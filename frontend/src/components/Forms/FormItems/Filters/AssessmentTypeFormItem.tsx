import { AssessmentType } from '@/types/common';
import { Form, Select } from 'antd';

export function AssessmentTypeFormItem() {
  return (
    <Form.Item name={'assessmentType'}>
      <Select allowClear placeholder={'Тип оценки'} style={{ minWidth: 100 }}>
        <Select.Option value={AssessmentType.TrackerGrade}>
          Оценка трекера
        </Select.Option>
        <Select.Option value={AssessmentType.FinalGrade}>
          Оц. в ведомость
        </Select.Option>
      </Select>
    </Form.Item>
  );
}
