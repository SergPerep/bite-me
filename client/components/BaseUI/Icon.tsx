import { MouseEventHandler } from "react";

const Icon = ({
  name,
  type = "line",
  onClick = () => {},
}: {
  name: string;
  type: "line" | "solid";
  onClick?: MouseEventHandler<HTMLSpanElement>;
}) => {
  return (
    <span
      className={`material-symbols-outlined icon ${type}-icon`}
      onClick={onClick}
    >
      {name}
    </span>
  );
};

export default Icon;
