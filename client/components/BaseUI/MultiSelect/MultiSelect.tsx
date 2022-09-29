import {
  ChangeEventHandler,
  MouseEventHandler,
  useState,
  useEffect,
  useRef
} from "react";
import DropList from "./DropList";
import SelectedList from "./SelectedList";

const MultiSelect = ({
  options = [],
  name = "multiselect",
  label = "Label",
  id,
  placeholder = "Placeholder"
}: {
  options: {
    title: string;
    value: string;
  }[];
  name: string;
  label: string;
  id: string;
  placeholder: string;
}) => {
  const [selectedValues, setSelectedValues] = useState(["fruit", "veg"]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputValueWidth = inputValue.length * 6 + 30;
  const fieldEl = useRef<HTMLDivElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const selectedOptions = options.filter((option) =>
    selectedValues.find((selectedValue) => selectedValue === option.value)
  );
  const unselectedOptions = options.filter(
    (option) =>
      !selectedValues.find((selectedValue) => selectedValue === option.value)
  );

  const isPlaceholderVisible = !isInputVisible && selectedOptions.length === 0;

  const handleClickUnselectedOption = (value: string) => {
    setSelectedValues([...selectedValues, value]);
  };
  const handleClickDeleteSelectedOption = (
    e: React.MouseEvent,
    value: string
  ) => {
    e.stopPropagation();
    const updatedSelectedValues = selectedValues.filter(
      (selectedValue) => selectedValue !== value
    );
    setSelectedValues(updatedSelectedValues);
  };
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };
  const handleClickField: MouseEventHandler = (e) => {
    setIsInputVisible(true);
    inputEl.current?.focus();
  };
  const handleFocusOutInput = () => {
    setInputValue("");
    setIsInputVisible(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (fieldEl.current && !fieldEl.current.contains(target))
        handleFocusOutInput();
    };
    if (isInputVisible) document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [fieldEl, isInputVisible]);
  return (
    <div className="multiselect-field">
      <label htmlFor={id}>{label}</label>
      <div
        className={`field ${isInputVisible ? "focused" : ""}`}
        ref={fieldEl}
        onClick={handleClickField}
      >
        <select multiple id={id} name={name} value={selectedValues} disabled>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>

        <div className="selected-options">
          {isPlaceholderVisible && (
            <div className="placeholder-wrapper">
              <span>{placeholder}</span>
            </div>
          )}
          <SelectedList
            options={selectedOptions}
            onOptionClick={handleClickDeleteSelectedOption}
          />
          {isInputVisible && (
            <div className="input-wrapper">
              <input
                onChange={handleInputChange}
                value={inputValue}
                autoFocus
                ref={inputEl}
                style={{ width: inputValueWidth + "px" }}
              />
            </div>
          )}
        </div>

        {isInputVisible && (
          <DropList
            options={unselectedOptions}
            inputStr={inputValue}
            onOptionClick={handleClickUnselectedOption}
          />
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
