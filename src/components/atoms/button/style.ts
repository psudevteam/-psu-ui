import { clsx } from "clsx";
import { TStyle } from "../../../entities/common";

export const buttonStyle = ({ variant, variantType, size }: TStyle) =>
  clsx(
    "rounded-lg text-white hover:opacity-80 font-medium transition-all",
    "disabled:cursor-not-allowed disabled:hover:opacity-80 disabled:bg-grey-200",
    {
      "border-none": variantType === "solid",
      "border bg-transparent": variantType === "outline",
    },
    {
      "border-bg-primary text-primary":
        variant === "primary" && variantType === "outline",
      "border-bg-primary-2 text-primary-2":
        variant === "secondary" && variantType === "outline",
      "border-bg-success text-success":
        variant === "success" && variantType === "outline",
      "border-bg-error text-error":
        variant === "error" && variantType === "outline",
      "border-bg-warning text-warning":
        variant === "warning" && variantType === "outline",
      "border-bg-info text-info":
        variant === "info" && variantType === "outline",
    },
    {
      "bg-primary":
        (variant === "primary" || !variant) && variantType === "solid",
      "bg-primary-2": variant === "secondary" && variantType === "solid",
      "bg-success": variant === "success" && variantType === "solid",
      "bg-error": variant === "error" && variantType === "solid",
      "bg-warning": variant === "warning" && variantType === "solid",
      "bg-info": variant === "info" && variantType === "solid",
    },

    {
      "md:text-xs md:px-2 md:py-1": size === "sm" || !size,
      "md:text-md md:px-4 md:py-2": size === "md",
      "md:text-lg md:px-6 md:py-3": size === "lg",
    }
  );
