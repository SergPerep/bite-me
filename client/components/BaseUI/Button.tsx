import { MouseEventHandler } from "react";

const Button = ({
  children = "Button",
  type = "",
  onClick,
}: {
  children: any;
  type?: "secondary" | "";
  onClick: MouseEventHandler;
}) => {
  let classes = "";
  switch (type) {
    case "secondary":
      classes = "secondary";
      break;
  }
  return (
    <button className={`button ${classes}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
