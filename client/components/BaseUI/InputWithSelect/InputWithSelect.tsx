import Input from "./_Input";
import Select from "./_Select";
const InputWithSelect = ({
  label = "Label",
  placeholder = "Placeholder",
  selectOptions = [],
  type = "text"
}: {
  label: string;
  placeholder: string;
  selectOptions: {
    value: string;
    title: string;
  }[];
  type: "text" | "number";
}) => {
  return (
    <div className="input-with-select-field">
      <label>{label}</label>
      <div className="field">
        <Input placeholder={placeholder} type={type} />
        <Select options={selectOptions} />
      </div>
    </div>
  );
};

export default InputWithSelect;
