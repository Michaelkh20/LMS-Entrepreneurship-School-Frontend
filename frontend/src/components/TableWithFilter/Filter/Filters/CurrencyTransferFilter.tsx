import {Form, FormProps, Input, Select} from "antd";
import formStyles from "../form.module.css";
import {
    NameFormItem,
    EmailFormItem,
    TeamFormItem,
    RoleFormItem,
    StatusFormItem, UserSelectionFormItem, DatePickerFormItem
} from "@/components/TableWithFilter/FormItems"
import {FilterWrapper} from "@/components/TableWithFilter/Filter/FilterWrapper";

export function CurrencyTransferFilter({onChangeEvent}: any) {

    type formType = {
        name: string;
        email: string;
        teamNumber: number | string;
        role?: "Learner" | "Tracker"
    }

    const [form] = Form.useForm<formType>()

    return (
        <FilterWrapper total={29}>
            <Form
                layout={"inline"}
                size={"large"}
                form={form}
                onValuesChange={onChangeEvent}
                className={formStyles.form}
            >
                <UserSelectionFormItem placeholder={"Отправитель"} name={"learner"}/>
                <UserSelectionFormItem placeholder={"Получатель"} name={"receiver"}/>
                <StatusFormItem/>
                <DatePickerFormItem placeholder={"Дата от"} name={"dateFrom"}/>
                <DatePickerFormItem placeholder={"Дата до"} name={"dateTo"}/>
            </Form>
        </FilterWrapper>
    )
}