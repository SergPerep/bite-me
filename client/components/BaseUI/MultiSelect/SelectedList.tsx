const SelectedList = ({
    options,
    onOptionClick
  }: {
    options: { value: string; title: string }[];
    onOptionClick: Function;
  }) => {
    return (
      <>
        {options.map((option) => (
          <div
            className="option"
            key={option.value}
            onClick={(e) => onOptionClick(e, option.value)}
          >
            {option.title}
          </div>
        ))}
      </>
    );
  };
  
  export default SelectedList;
  