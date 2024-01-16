import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TVariant = "outline" | undefined;
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ children, variant, className, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "bg-slate-50 text-slate-900";
        default:
          return "bg-slate-900 text-slate-50";
      }
    };
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(
          "text-center text-sm font-medium px-4 py-1.5 rounded border-[1.5px] border-slate-900",
          getVariant(variant),
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
