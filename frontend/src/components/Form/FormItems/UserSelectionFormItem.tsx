import {Form, Input} from "antd";

export function UserSelectionFormItem(
    {
        placeholder,
        name
    }: {
        placeholder: string,
        name: string
    }
) {
    return (
        <Form.Item
            name={name}>
            <Input type="text"
                   placeholder={placeholder}/>
        </Form.Item>
    )
}