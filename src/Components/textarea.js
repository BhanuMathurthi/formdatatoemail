import React from "react";

export default function TextAreaField({ label, name, value, handleChange }) {
  return (
    <>
      <label htmlFor={name} className="fw-bold mb-1">
        {label}
      </label>
      <textarea
        className="form-control mb-3"
        rows="3"
        name={name}
        value={value}
        onChange={handleChange}
      ></textarea>
    </>
  );
}
