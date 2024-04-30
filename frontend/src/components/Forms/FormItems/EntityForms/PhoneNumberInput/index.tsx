import React from 'react';
import { Input } from 'antd';
import { formatInput, isModifierKey, isNumericInput } from './helpers';

export default function PhoneNumber({
  value: controlledValue,
  onChange: onControlledChange,
  ...props
}: React.ComponentProps<typeof Input>) {
  const enforceFormat: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!isNumericInput(event) && !isModifierKey(event)) {
      event.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = e.target.value.replace(/\D/g, '').substring(0, 10);

    onControlledChange?.({
      ...e,
      target: { ...e.target, value: cleanedValue },
    });
  };

  return (
    <Input
      addonBefore="+7"
      onKeyDown={enforceFormat}
      {...props}
      value={formatInput(controlledValue as string)}
      onChange={handleChange}
    />
  );
}
