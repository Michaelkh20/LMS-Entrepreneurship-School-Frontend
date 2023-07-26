"use client"
import style from './form.module.css';
import React, { SetStateAction, useState } from 'react';
import {
    DatePicker,
    Form,
    Input,
    Select,
    Switch,
} from 'antd';

const { TextArea } = Input;

type SizeType = Parameters<typeof Form>[0]['size'];

const FormComponent: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [criteria, setCriteria] = useState('');
    const [deadline, setDeadline] = useState(null);
    const [theme, setTheme] = useState('');
    const [isTeam, setIsTeam] = useState(false);

    const handleFormSubmit = () => {
        // Обработка отправки формы
    };

    return (
        <div>
            {/*<Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
                size={'default' as SizeType}
                style={{ maxWidth: 600 }}
                onFinish={handleFormSubmit}
            >
                <Form.Item label="Название">
                    <Input placeholder="ДЗ1" value={name} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Описание">
                    <TextArea rows={4} placeholder="Опишите ДЗ" value={description} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setDescription(e.target.value)} />
                </Form.Item>
                <Form.Item label="Критерии">
                    <TextArea rows={4} placeholder="Опишите ДЗ" value={criteria} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCriteria(e.target.value)} />
                </Form.Item>
                <Form.Item label="Дедлайн">
                    <DatePicker value={deadline} onChange={(date: SetStateAction<null>) => setDeadline(date)} />
                </Form.Item>
                <Form.Item label="Тема">
                    <Select value={theme} onChange={(value: SetStateAction<string>) => setTheme(value)}>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Командное" valuePropName="checked">
                    <Switch checked={isTeam} onChange={(checked: boolean | ((prevState: boolean) => boolean)) => setIsTeam(checked)} />
                </Form.Item>
                <button className={style.button} type="submit">Подтвердить изменения</button>
            </Form>*/}
        </div>
    );
};

export default FormComponent;
