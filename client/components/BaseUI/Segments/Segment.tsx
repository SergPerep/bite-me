import { MouseEventHandler, ReactNode } from "react";

const Segment = ({
  isSelected,
  onClick,
  value,
  name,
  id,
  children
}: {
  isSelected: boolean;
  onClick: MouseEventHandler;
  value: string;
  name: string;
  id: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`segment ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        checked={isSelected ? true : false}
        readOnly
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default Segment;