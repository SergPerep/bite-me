import {
    ChangeEventHandler,
    MouseEventHandler,
    useState
  } from "react";
  
  type Option = {
    title: string;
    value: string;
  };
  
  const MultiSelect = ({
    options = [],
    name = "multiselect",
    label = "Label",
    id
  }: {
    options: Option[];
    name: string;
    label: string;
    id: string;
  }) => {
    const [selectedValues, setSelectedValues] = useState(["fruit", "veg"]);
    const [isInputVisible, setIsInputVisible] = useState(false);
    const handleClickUnselectedOption = (value: string) => {
      setSelectedValues([...selectedValues, value]);
    };
    const handleClickDeleteSelectedOption = (e: React.MouseEvent, value: string) => {
      e.stopPropagation();
      const updatedSelectedValues = selectedValues.filter(
        (selectedValue) => selectedValue !== value
      );
      setSelectedValues(updatedSelectedValues);
    };
  
    const [inputValue, setInputValue] = useState("");
    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setInputValue(e.target.value);
    };
    const selectedOptions = options.filter((option) =>
      selectedValues.find((selectedValue) => selectedValue === option.value)
    );
    const unselectedOptions = options.filter(
      (option) =>
        !selectedValues.find((selectedValue) => selectedValue === option.value)
    );
    const buildRegex = (str: string) => {
      if (str && typeof str === "string") return new RegExp(str, "gi");
      return new RegExp("", "gi");
    };
    const regex = buildRegex(inputValue);
    const handleClickField: MouseEventHandler = (e) => {
      // if (e.target === e.currentTarget)
      setIsInputVisible(true);
      console.log("Click on field!");
    };
    const handleFocusOutInput = () => {
      setInputValue("");
      setIsInputVisible(false);
    };
    return (
      <div className="multiselect-field">
        <label htmlFor={id}>{label}</label>
        <div className="field" onClick={handleClickField}>
          <select multiple id={id} name={name} value={selectedValues}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
          <div className="selected-options">
            {selectedOptions.map((option) => (
              <div
                className="option"
                key={option.value}
                onClick={(e) => handleClickDeleteSelectedOption(e, option.value)}
              >
                {option.title}
              </div>
            ))}
            {isInputVisible && (
              <div className="input-wrapper">
                <input
                  onChange={handleInputChange}
                  value={inputValue}
                  autoFocus
                  onBlur={handleFocusOutInput}
                />
              </div>
            )}
          </div>
          <ul className="unselected-options">
            {unselectedOptions
              // .filter((option) => regex.test(option.title))
              .map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleClickUnselectedOption(option.value)}
                >
                  {option.title}
                </li>
              ))}
          </ul>
          {/* {inputValue && (
            
          )} */}
        </div>
      </div>
    );
  };
  
  export default MultiSelect;  