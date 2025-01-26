import cn from "classnames";

export const CircularBtn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `grid place-content-center w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] 
      shadow-[0px_-4px_0px_5px_#243041_inset,0px_-12px_0px_11px_#9D2DF5_inset]`,
        className
      )}
    >
      {children}
    </div>
  );
};
