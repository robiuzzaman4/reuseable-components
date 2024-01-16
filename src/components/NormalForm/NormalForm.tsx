/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto border border-slate-200 rounded p-4 my-10 grid gap-4"
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
        </div>
        <div className="w-full max-w-sm mx-auto flex flex-col items-start gap-1">
          <label htmlFor="name">Email</label>
          <input
            className="w-full"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="w-full max-w-sm mx-auto flex flex-col items-start gap-1">
          <label htmlFor="name">Password</label>
          <input
            className="w-full"
            type="text"
            id="password"
            {...register("password")}
          />
        </div>
      </div>
      <Button type="submit" className="w-fit ml-auto">
        Submit
      </Button>
    </form>
  );
};

export default NormalForm;
