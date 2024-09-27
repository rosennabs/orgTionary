import { useField } from "formik";
import React from "react";

function FormField({
  label,
  as,
  ...props
}: {
  label: string;
  as: string;
  [key: string]: any;
  }) {
  const [field, meta] = useField(props);

  const renderField = () => {
    switch (as) {
      case "textarea":
        return (
          <textarea
            {...field}
            {...props}
            className={`contact-inputs textarea ${meta.touched && meta.error && "border-red-600"}`} />
        );
      
      default:
        return (
          <input
            {...field}
            {...props}
            className={`contact-inputs  ${meta.touched && meta.error && "border-red-600"}`}
          />
        );
    }
  }

  return (
    <div className="contact-inputs">
      <label>
        {label}
      </label>
      {renderField()}
      {meta.touched && meta.error && (
        <div className="text-red-600">{meta.error}</div>
      )}
    </div>
  )
};

export default FormField;