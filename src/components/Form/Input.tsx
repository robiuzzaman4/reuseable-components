/* eslint-disable @typescript-eslint/no-explicit-any */
export const Input = ({ label, register, errors, type }: any) => {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-start gap-1">
      <label htmlFor="name">{label}</label>
      <input className="w-full" type={type} id="name" {...register} />
      {errors?.name && (
        <p className="text-xs text-rose-500">{errors?.name?.message}</p>
      )}
    </div>
  );
};
