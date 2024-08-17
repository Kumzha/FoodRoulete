import React from "react";

const PopUp = ({ isOpen, content, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full h-3/4 no-scrollbar overflow-y-auto relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          &times;
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default PopUp;