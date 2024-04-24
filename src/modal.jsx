import React from "react";
import "./modal.css";

const Modal = ({
  isOpen,
  setIsOpen,
  icon = "🎉",
  titleStyle = "title-style",
  mainTitle = "myTitle1",
  text = "myTitle2",
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
        <span className="material-symbols-outlined">check_circle</span>
        <div className={`title-style ${titleStyle}`} id="modal-title">
          <p>
            {mainTitle} {icon}
          </p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
