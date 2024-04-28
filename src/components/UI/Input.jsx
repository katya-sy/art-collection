import React, { useEffect, useState } from "react";

export const Input = ({ register, error, ...props }) => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input {...register} {...props} className={error ? "input-error" : ""} />
      {(error?.type === "required" && (
        <p className="error">Поле обязательно для заполнения</p>
      )) ||
        (error?.type === "minLength" && (
          <p className="error">{error.message}</p>
        )) ||
        (error?.type === "pattern" && (
          <p className="error">{error.message}</p>
        )) ||
        (error?.type === "validate" && (
          <p className="error">Пароли не совпадают!</p>
        ))}
    </div>
  );
};
