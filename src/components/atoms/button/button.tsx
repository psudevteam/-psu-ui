import { FC, ReactElement } from "react";
import { TButton } from "./type";
import { buttonStyle } from "./style";

export const Button: FC<TButton> = (props): ReactElement => {
  return (
    <button className={buttonStyle(props)} {...props}>
      {props.children}
    </button>
  );
};
