const DropList = ({
    options,
    inputStr,
    onOptionClick
  }: {
    options: { value: string; title: string }[];
    inputStr: string;
    onOptionClick: Function;
  }) => {
    const buildRegex = (str: string) => {
      if (str && typeof str === "string") return new RegExp(str, "gi");
      return new RegExp("", "gi");
    };
  
    const regex = buildRegex(inputStr);
    const filteredOptions = options.filter((option) => regex.test(option.title));
    const hasResults = filteredOptions.length !== 0;
  
    return (
      <>
        {hasResults && (
          <ul className="unselected-options">
            {filteredOptions.map((option) => (
              <li key={option.value} onClick={() => onOptionClick(option.value)}>
                {option.title}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };
  
  export default DropList;
  