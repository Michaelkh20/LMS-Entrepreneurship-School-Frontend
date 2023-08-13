import {Form, FormProps, Input, InputNumber, Select} from 'antd';
import formStyles from '../form.module.css';
import {
    UserSelectionFormItem,
    DatePickerFormItem,
    TransactionTypeFormItem,
} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';

export function TransactionsFilter(
    {
        onChangeEvent,
        total = 0,
    }:
        {
            onChangeEvent: any,
            total?: number
        }
) {

    return (
        <FilterWrapper total={total}>
            <Form
                layout={'inline'}
                size={'large'}
                onValuesChange={onChangeEvent}
                className={formStyles.form}
            >
                <UserSelectionFormItem placeholder={'Студент'} name={'learnerId'}/>
                <TransactionTypeFormItem/>
                <DatePickerFormItem placeholder={'Дата от'} name={'dateFrom'}/>
                <DatePickerFormItem placeholder={'Дата до'} name={'dateTo'}/>
            </Form>
        </FilterWrapper>
    );
}
