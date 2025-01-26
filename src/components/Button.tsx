export const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  const btnClasses = {
    primary:
      "bg-blue shadow-[0px_-2px_0px_3px_#140E66_inset,0px_1px_0px_6px_#3C74FF_inset] hover:bg-blue/90",
    secondary:
      "bg-white shadow-[0px_-2px_0px_3px_#140E66_inset,0px_1px_0px_6px_#C642FB_inset] bg-gradient-to-b from-[#FE71FE] to-[#7199FF] hover:bg-white/90",
  };
  return (
    <button
      type={type}
      className={`py-3 px-16 rounded-[40px] heading-sm uppercase
        ${btnClasses[variant]}
     `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
