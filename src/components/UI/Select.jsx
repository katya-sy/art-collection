import React, { Children } from "react";

export const Select = ({ register, error, children, ...props }) => {
  return (
    <select {...register} {...props}>
      {children}
    </select>
  );
};
