import { useField } from "formik";
import React from "react";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  as?: React.ElementType; // Optional prop
}

// Correctly declare the component using a const and type annotation
const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  placeholder,
  as = "input", // Default to 'input' if 'as' is not provided
  ...props
}) => {
  // Bind the field to Formik using the 'name' prop
  const [field, meta] = useField(name);

  
  // Function to render the appropriate input type based on 'as' prop
  const renderField = () => {
    switch (as) {
      case "textarea":
        return (
          <textarea
            {...field}
            {...props}
            placeholder={placeholder}
            className={`contact-inputs textarea ${meta.touched && meta.error && "border-red-600"}`} />
        );
      
      default:
        return (
          <input
            {...field}
            {...props}
            placeholder={placeholder}
            className={`contact-inputs ${meta.touched && meta.error && "border-red-600"}`}
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id}>
        {label}
      </label>
      {renderField()}
      {meta.touched && meta.error && (
        <div className="text-red-600">{meta.error}
        </div>
      )}
    </div>
  );
};
  

export default FormField;