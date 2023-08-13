import {Form, FormProps, Input, InputNumber, Select} from 'antd';
import formStyles from '../form.module.css';
import {
    ClaimStatusFormItem,
    UserSelectionFormItem,
    DatePickerFormItem, TaskSelectionFormItem,
} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';

export function ClaimDeadlineFilter(
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
                <TaskSelectionFormItem placeholder={"Задание"} name={"taskId"}/>
                <ClaimStatusFormItem/>
                <DatePickerFormItem placeholder={'Дата от'} name={'dateFrom'}/>
                <DatePickerFormItem placeholder={'Дата до'} name={'dateTo'}/>
            </Form>
        </FilterWrapper>
    );
}
