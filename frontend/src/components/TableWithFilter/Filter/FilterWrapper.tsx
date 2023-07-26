import {Form, FormProps, Input, Select} from "antd";
import formStyles from "./form.module.css";


export function FilterWrapper({
                                  children,
                                  total
                              }: {
    children: React.ReactNode,
    total?: number
}) {
    return (
        <div className={formStyles.wrapper}>
            <div className={formStyles.header}>
                <h3>Фильтры</h3>
                <div className={formStyles.header_span}>
                    <span>Найдено:</span>
                    <span>{total}</span>
                </div>
            </div>
            {children}
        </div>
    )
}