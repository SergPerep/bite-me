import { ChangeEventHandler, useRef, useState } from "react";

type InputProps = {
  label?: string;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  hintStr?: string;
  type?: "text" | "number";
  defaultValue?: string;
};

const Input = ({
  label = "Label",
  prefix = "",
  suffix = "",
  placeholder = "Placeholder",
  hintStr = "",
  type = "text",
  defaultValue = "",
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);
  const inputEl = useRef<HTMLInputElement>(null);
  const handleClickField = () => inputEl.current?.focus();
  return (
    <div className="input-field">
      <label htmlFor="number-input">{label}</label>
      <div
        className={`field ${isFocused ? "focused" : ""} ${
          isError ? "error" : ""
        }`}
        onClick={handleClickField}
      >
        {prefix && <span className="prefix">{prefix}</span>}
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={value}
          ref={inputEl}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
      {hintStr && <div className={`hint ${isError && "error"}`}>{hintStr}</div>}
    </div>
  );
};

export default Input;
