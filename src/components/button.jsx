const Button = ({ className, href, onClick, children }) => {
  //   const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
  //     px || "px-7"
  //   } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  //   const spanClasses = "relative z-10";

  //   const renderButton = () => (
  //     <button className={classes} onClick={onClick}>
  //       <span className={spanClasses}>{children}</span>
  //     </button>
  //   );

  //   const renderLink = () => (
  //     <a href={href} className={classes}>
  //       <span className={spanClasses}>{children}</span>
  //     </a>
  //   );

  const classes = `inline-block px-[2rem] py-[.6rem] font-medium rounded-[.6rem] cursor-pointer transition ease-in-out duration-300 text-sm hover:opacity-80 ${
    className || ""
  }`;

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  );

  return renderLink();
};

export default Button;
