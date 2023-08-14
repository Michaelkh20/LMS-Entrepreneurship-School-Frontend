import {Form} from 'antd';
import formStyles from '../form.module.css';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';
import {TaskTypeFormItem} from "@/components/Forms/FormItems/Filters";
import {LessonTitleFormItem} from "@/components/Forms/FormItems/Filters/LessonTitleFormItem";

export function TasksFilter(
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
                <LessonTitleFormItem/>
                <TaskTypeFormItem/>

            </Form>
        </FilterWrapper>
    );
}
