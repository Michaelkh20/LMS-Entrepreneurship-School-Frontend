import {Form, FormProps, Input, Select} from 'antd';
import formStyles from '../form.module.css';
import {
    UserSelectionFormItem,
    DatePickerFormItem,
    ClaimStatusFormItem,
} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';

export function ClaimTransferFilter(
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
                <UserSelectionFormItem placeholder={'Отправитель'} name={'learnerId'}/>
                <UserSelectionFormItem placeholder={'Получатель'} name={'receiverId'}/>
                <ClaimStatusFormItem/>
                <DatePickerFormItem placeholder={'Дата от'} name={'dateFrom'}/>
                <DatePickerFormItem placeholder={'Дата до'} name={'dateTo'}/>
            </Form>
        </FilterWrapper>
    );
}
