import React from "react";

type DropDownProps = {
  name: string;
  id: string;
  values: string[];
  styles?: React.CSSProperties;
  handleFocus: (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};
export default function DropDown({
  name,
  id,
  values,
  styles,
  handleFocus,
  handleBlur,
}: DropDownProps) {
  return (
    <select
      name={name}
      id={id}
      className="p-2 border border-transparent outline-none bg-white"
      style={styles}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {values?.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
