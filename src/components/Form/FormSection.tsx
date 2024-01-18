/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";

export const FormSection = ({ children }: { children: ReactNode }) => {
  const { double } = useContext<any>(FormElementContext);
  return (
    <div
      className={cn("w-full grid gap-4", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
