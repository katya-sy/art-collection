import React from "react";

export const ProductSpecific = ({ specific }) => {
  return (
    <div className="flex-20 flex-col">
      {specific &&
        Object.keys(specific).map((key) => (
          <div className="grid-2" style={{ alignItems: "center" }} key={key}>
            <h4 className="c-grey">{key}</h4>
            <p className="">{specific[key]}</p>
          </div>
        ))}
    </div>
  );
};
