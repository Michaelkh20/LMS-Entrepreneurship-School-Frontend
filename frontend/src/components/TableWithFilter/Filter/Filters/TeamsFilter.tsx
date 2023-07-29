import { Form } from 'antd';
import { TeamFormItem } from '@/components/Form/FormItems';
import { FilterWrapper } from '@/components/TableWithFilter/Filter/FilterWrapper';
import formStyles from '@/components/TableWithFilter/Filter/form.module.css';

export function TeamsFilter({ onChangeEvent }: any) {
  type formType = {
    teamNumber: number | string;
  };

  const [form] = Form.useForm<formType>();

  const handleChanges = (changedValues: any, allValues: any) => {
    console.log(changedValues, allValues);
  };

  return (
    <FilterWrapper total={10}>
      <Form
        layout={'inline'}
        size={'large'}
        form={form}
        onValuesChange={onChangeEvent}
        className={formStyles.form}
      >
        <TeamFormItem />
      </Form>
    </FilterWrapper>
  );
}
