import {Form, FormProps, Input, InputNumber, Select} from 'antd';
import formStyles from '../form.module.css';
import {
    ClaimStatusFormItem,
    UserSelectionFormItem,
    DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';

export function ClaimPlacingLotFilter(
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
                <Form.Item name={"lotNumber"}>
                    <InputNumber placeholder={"Номер"} />
                </Form.Item>
                <UserSelectionFormItem placeholder={'Исполнитель'} name={'learnerId'}/>
                <ClaimStatusFormItem/>
                <DatePickerFormItem placeholder={'Дата от'} name={'dateFrom'}/>
                <DatePickerFormItem placeholder={'Дата до'} name={'dateTo'}/>
            </Form>
        </FilterWrapper>
    );
}
