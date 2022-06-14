import React from "react";

const ActionButton = ({ text, func, src }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={() => func()}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="110px" height="40px" viewBox="0 0 110 40" className="svgLine">
        <polyline points="99,1 99,39 1,39 1,1 99,1" />
        <polyline points="99,1 99,39 1,39 1,1 99,1" />
      </svg>
      {src && (
        <img
          src={src}
          alt=""
          style={{ marginRight: "10px", width: "15px", height: "15px" }}
        />
      )}

      {text}
    </button>
  );
};

export default ActionButton;
