import {Form} from 'antd';
import {TeamNumberFormItem} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';
import formStyles from '@/components/TableWithFilter/Filter/form.module.css';

export function TeamsFilter(
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
                <TeamNumberFormItem/>
            </Form>
        </FilterWrapper>
    );
}
