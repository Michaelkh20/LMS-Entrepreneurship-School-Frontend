// import {
//   useGetLessonsForSelectQuery,
//   useGetTeamsForSelectQuery,
// } from '@/redux/services/adminApi';
import { Form, Select } from 'antd';

export function LessonSelectionFormItem({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  // const { data, isFetching } = useGetLessonsForSelectQuery();
  // return (
  //   <Form.Item name={name}>
  //     <Select
  //       showSearch
  //       allowClear
  //       placeholder={placeholder}
  //       loading={isFetching}
  //       options={data?.map((lesson) => ({
  //         label: 'Тема №' + lesson.number,
  //         value: lesson.id,
  //       }))}
  //       optionFilterProp="label"
  //       filterOption={(input, option) =>
  //         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
  //       }
  //     />
  //   </Form.Item>
  // );
}
