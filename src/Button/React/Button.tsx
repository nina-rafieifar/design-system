import React from "react";
import style from "../Button.module.css";

export type IButtonProps = {
  /**
   * Pass additional class names
   */
  className?: string;
  /**
   * Disable the button
   */
  disabled?: boolean;

  buttonType?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component
 */
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, className, buttonType, ...otherProps }, ref) => {
    console.log(buttonType);
    return (
      <button
        id="button"
        ref={ref}
        type="button"
        {...otherProps}
        className={style.button}
      >
        {children}
      </button>
    );
  }
);
