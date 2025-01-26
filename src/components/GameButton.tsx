export const GameButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`grid place-content-center hover:scale-105 transition-all duration-300 rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] 
       ${className}`}
    >
      {children}
    </button>
  );
};
