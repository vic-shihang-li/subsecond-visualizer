import React from "react";

export const Square: React.FC<{ sizePx: number }> = ({ sizePx }) => {
  return (
    <div
      style={{
        width: `${sizePx}px`,
        height: `${sizePx}px`,
        backgroundColor: "blue",
      }}
    ></div>
  );
};
