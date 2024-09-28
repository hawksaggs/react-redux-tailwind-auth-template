import { toast } from "react-toastify";
import React from "react";

export const handleFormError = (formErrors) => {
  const errorMessages = Object.values(formErrors).map((err) => err.message);
  toast.error(
    <div>
      <strong>Form Submission Failed:</strong>
      <ul className="mt-2 list-disc list-inside">
        {errorMessages.map((msg, index) => {
          return <li key={index}>{msg}</li>;
        })}
      </ul>
    </div>,
  );
};
