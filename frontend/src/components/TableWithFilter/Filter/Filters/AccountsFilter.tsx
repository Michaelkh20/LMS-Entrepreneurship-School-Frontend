import {Form, FormProps, Input, Select} from "antd";
import formStyles from "../form.module.css";
import {NameFormItem, EmailFormItem, TeamFormItem, RoleFormItem} from "@/components/TableWithFilter/FormItems"
import {FilterWrapper} from "@/components/TableWithFilter/Filter/FilterWrapper";

export function AccountsFilter({onChangeEvent}: any) {

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
                <NameFormItem/>
                <EmailFormItem/>
                <TeamFormItem/>
                <RoleFormItem/>
            </Form>
        </FilterWrapper>
    )
}