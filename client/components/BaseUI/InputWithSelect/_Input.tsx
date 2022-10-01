
import { ChangeEventHandler, useRef, useState } from "react";

type InputProps = {
  placeholder?: string;
  hintStr?: string;
  type?: "text" | "number";
};

const Input = ({
  placeholder = "Placeholder",
  hintStr = "",
  type = "text"
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState("");
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);
  const inputEl = useRef<HTMLInputElement>(null);
  const handleClickField = () => inputEl.current?.focus();
  return (
    <div className="input-field">
      <div
        className={`field ${isFocused ? "focused" : ""} ${
          isError ? "error" : ""
        }`}
        onClick={handleClickField}
      >
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={value}
          ref={inputEl}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {hintStr && <div className={`hint ${isError && "error"}`}>{hintStr}</div>}
    </div>
  );
};

export default Input;
