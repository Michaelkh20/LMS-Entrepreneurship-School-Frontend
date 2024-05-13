import { Form } from 'antd';
import formStyles from './form.module.css';

export const BasicFilter = ({
  onChangeEvent,
  children,
  total = 0,
  initialValues
}: {
  onChangeEvent: any;
  children?: React.ReactNode;
  total?: number;
  initialValues?: any
}) => {
  return (
    <div className={formStyles.wrapper}>
      <div className={formStyles.header}>
        <h3>Фильтры</h3>
        <div className={formStyles.header_span}>
          <span>Найдено:</span>
          <span>{total}</span>
        </div>
      </div>
      <Form
        layout={'inline'}
        size={'large'}
        onValuesChange={onChangeEvent}
        className={''}
        style={{ rowGap: 12 }}
        initialValues={initialValues}
      >
        {children}
      </Form>
    </div>
  );
};
