import { ChangeEventHandler, useRef, useState } from "react";
type SelectPops = {
  options: {
    title: string;
    value: string;
  }[];
  isRequired?: boolean;
};

const Select = ({ options = [], isRequired = false }: SelectPops) => {
  const selectEl = useRef<HTMLSelectElement>(null);
  const [value, setValue] = useState(options[0].value);

  const handleChangeSelect: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setValue(e.target.value);
  const handleFieldClick = () => {
    if (selectEl.current) selectEl.current.focus();
  };
  return (
    <div className="select-field">
      <div className="field" onClick={handleFieldClick}>
        <select
          ref={selectEl}
          required={isRequired}
          value={value}
          onChange={handleChangeSelect}
          className={!value ? "placeholder-is-visible" : ""}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
        <div className="appendix">
          <div className="arrow-icon">
            <span className="material-symbols-outlined solid-icon">
              arrow_drop_down
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
