import { FieldValues, useForm } from "react-hook-form";
import Button from "../ui/Button";
import cn from "../../utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm md:max-w-3xl mx-auto border border-slate-200 rounded p-4 my-10 grid gap-4"
    >
      <div
        className={cn("w-full grid gap-4", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-sm mx-auto flex flex-col items-start gap-1">
          <label htmlFor="name">Name</label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors?.name && (
            <p className="text-xs text-rose-500">{errors?.name?.message}</p>
          )}
        </div>
        <div className="w-full max-w-sm mx-auto flex flex-col items-start gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="w-full"
            type="email"
            id="email"
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-xs text-rose-500">{errors?.email?.message}</p>
          )}
        </div>
        <div className="w-full max-w-sm mx-auto flex flex-col items-start gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="w-full"
            type="text"
            id="password"
            {...register("password")}
          />
          {errors?.password && (
            <p className="text-xs text-rose-500">{errors?.password?.message}</p>
          )}
        </div>
      </div>
      <Button type="submit" className="w-fit ml-auto">
        Submit
      </Button>
    </form>
  );
};

export default NormalForm;
