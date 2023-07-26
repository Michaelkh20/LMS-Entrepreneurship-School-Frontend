import {Form, Input} from "antd";

export function NameFormItem() {
    return (
        <Form.Item
            name={'name'}>
            <Input type="text"
                   placeholder={"Имя"}/>
        </Form.Item>
    )
}