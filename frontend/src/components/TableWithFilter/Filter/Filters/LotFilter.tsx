import {Form, FormProps, Input, InputNumber, Select} from 'antd';
import formStyles from '../form.module.css';
import {
    LotNumberFormItem,
    LotTitleFormItem,
    UserSelectionFormItem,
} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';

export function LotFilter(
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
                <LotNumberFormItem/>
                <LotTitleFormItem/>
                <UserSelectionFormItem placeholder={'Исполнитель'} name={'learnerId'}/>
            </Form>
        </FilterWrapper>
    );
}
