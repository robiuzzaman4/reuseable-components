import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
