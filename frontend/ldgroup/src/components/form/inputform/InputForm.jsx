import { Controller } from "react-hook-form";
import './InputForm.scss'

function InputForm({ name, control, type = "text", error = null, placeholder }) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`form ${error ? "invalid" : ""}`}
            {...field}
          />
        )}
      />
      {error && <p>{error}</p>}

    </div>
  );
}

export default InputForm;