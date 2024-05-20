import React from "react";
import "./modal.css";

const Modal = ({
  isOpen,
  setIsOpen,
  icon = "🎉",
  mainTitle = "myTitle1",
  text = "myTitle2",
  mainStyle = {},
  textStyle = {},
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-body">
        <button className="modal-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#2f9e44"
          className="material-symbols-outlined"
        >
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
        </svg>
        <div className="title-style" id="modal-title">
          <p style={mainStyle}>
            {mainTitle} {icon}
          </p>
          <p style={textStyle}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
