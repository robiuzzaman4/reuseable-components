import { createContext } from "react";
import Container from "../ui/Container";
import { TForm } from "../../types";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <Container>
      <FormElementContext.Provider value={{ double }}>
        <div className="flex items-center gap-8 py-10">
          <form
            onSubmit={onSubmit}
            className="max-w-sm md:max-w-3xl mx-auto border border-slate-200 rounded p-4 my-10 grid gap-4"
          >
            {children}
          </form>
        </div>
      </FormElementContext.Provider>
    </Container>
  );
};
