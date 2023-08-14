import {Form} from 'antd';
import formStyles from '../form.module.css';
import {
    LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';
import {FilterWrapper} from '@/components/TableWithFilter/Filter/FilterWrapper';
import {LessonTitleFormItem} from "@/components/Forms/FormItems/Filters/LessonTitleFormItem";

export function LessonsFilter(
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
                <LessonNumberFormItem/>
                <LessonTitleFormItem/>
            </Form>
        </FilterWrapper>
    );
}
