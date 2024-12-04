import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function Container({ children }: Props) {
  return (
    <div className="flex justify-center py-[10px] lg:py-[25px]">
      <div className="bg-slate-50 w-[calc(100vw-20px)] min-h-[calc(100vh-20px)] lg:w-[calc(100vw-50px)] lg:min-h-[calc(100vh-20px)] rounded-xl">
        {children}
      </div>
    </div>
  );
}
