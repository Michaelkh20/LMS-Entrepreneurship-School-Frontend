import {Form, Input} from "antd";

export function TeamFormItem() {
    return (
        <>
            <Form.Item
                name={'teamNumber'}
            >
                <Input type="text"
                       placeholder={"Номер команды"}/>
            </Form.Item>
        </>

    )
}