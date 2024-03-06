import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { TStyle } from "../../../entities/common";

export type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TStyle;
