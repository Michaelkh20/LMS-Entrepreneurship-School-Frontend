import { Form } from 'antd';
import formStyles from './form.module.css';

export const BasicFilter = ({
  onChangeEvent,
  children,
  total = 0,
}: {
  onChangeEvent: any;
  children?: React.ReactNode;
  total?: number;
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
      >
        {children}
      </Form>
    </div>
  );
};
