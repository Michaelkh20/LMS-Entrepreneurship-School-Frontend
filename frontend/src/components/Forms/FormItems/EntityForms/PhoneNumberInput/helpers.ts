export function isNumericInput(event: React.KeyboardEvent<HTMLInputElement>) {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
}

export function isModifierKey(event: React.KeyboardEvent<HTMLInputElement>) {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
}

export function formatInput(input: string | undefined) {
  if (!input) {
    return '';
  }
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last1 = input.substring(6, 8);
  const last2 = input.substring(8, 10);

  if (input.length > 8) {
    return `(${areaCode}) ${middle} - ${last1} - ${last2}`;
  } else if (input.length > 6) {
    return `(${areaCode}) ${middle} - ${last1}`;
  } else if (input.length > 3) {
    return `(${areaCode}) ${middle}`;
  } else if (input.length > 0) {
    return `(${areaCode}`;
  }
  return input;
}
