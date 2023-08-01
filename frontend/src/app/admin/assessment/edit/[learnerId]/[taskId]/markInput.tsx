"use client"

import { Input } from 'antd';
import React from 'react';

interface IntegerInputProps {
  value: number;
  onChange: (value: number) => void;
}

const IntegerInput: React.FC<IntegerInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10); // Парсим введенное значение в число
    if (!isNaN(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <Input
      type="number"
      value={value.toString()}
      onChange={handleChange}
      addonBefore="Целое число"
      step={1}
      min={0} // Если нужно ограничить ввод только положительными числами, можно заменить на 1.
    />
  );
};

export default IntegerInput;
