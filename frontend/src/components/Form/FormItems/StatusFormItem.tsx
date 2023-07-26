import {Form, Select} from "antd";
import {CLAIM_STATUS} from "@/components/TableWithFilter/entity";

export function StatusFormItem() {
    return (
        <Form.Item
            name={'role'}
        >
            <Select allowClear={true} placeholder={"Статус"} style={{minWidth: 125}}>
                <Select.Option value={CLAIM_STATUS.Waiting}>Ожидание</Select.Option>
                <Select.Option value={CLAIM_STATUS.Approved}>Одобрено</Select.Option>
                <Select.Option value={CLAIM_STATUS.Declined}>Отклонено</Select.Option>
            </Select>
        </Form.Item>
    )
}