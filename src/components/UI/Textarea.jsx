import React from "react";

export const Textarea = ({ register, ...props }) => {
  return (
    <div>
      <textarea {...register} {...props} />
    </div>
  );
};
