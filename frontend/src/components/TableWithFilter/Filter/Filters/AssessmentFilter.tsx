import {Form} from "antd";
import formStyles from "../form.module.css";
import {
    UserSelectionFormItem,
    DatePickerFormItem,
    TaskSelectionFormItem,
    AssessmentTypeFormItem
} from "@/components/Forms/FormItems/Filters";
import {FilterWrapper} from "@/components/TableWithFilter/Filter/FilterWrapper";
import {GetAssessmentsApiArg} from "@/types/requests"

export function AssessmentFilter(
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
                layout={"inline"}
                size={"large"}
                onValuesChange={onChangeEvent}
                className={formStyles.form}
            >
                <UserSelectionFormItem placeholder={"Студент"} name={"learnerId"}/>
                <TaskSelectionFormItem placeholder={"Задание"} name={"taskId"}/>
                <AssessmentTypeFormItem/>
                <DatePickerFormItem placeholder={"Дата от"} name={"dateFrom"}/>
                <DatePickerFormItem placeholder={"Дата до"} name={"dateTo"}/>
            </Form>
        </FilterWrapper>
    )
}