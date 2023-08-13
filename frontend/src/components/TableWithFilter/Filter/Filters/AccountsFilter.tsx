import {Form, FormProps, Input, Select} from 'antd';
import formStyles from '../form.module.css';
import {
    NameFormItem,
    EmailFormItem,
    TeamNumberFormItem,
    RoleFormItem,
} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';

export function AccountsFilter(
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
                <NameFormItem/>
                <EmailFormItem/>
                <TeamNumberFormItem/>
                <RoleFormItem/>
            </Form>
        </FilterWrapper>
    );
}
