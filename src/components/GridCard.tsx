import { forwardRef, type ReactNode } from "react";
import clsx from "clsx";

interface GridSectionProps {
  children: ReactNode;
  title?: ReactNode;
  className?: string;
}

export const GridCard = forwardRef<HTMLDivElement, GridSectionProps>(
  ({ title, children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-lg md:rounded-xl lg:rounded-2xl",
          "bg-gray-200/50 dark:bg-dark-surface backdrop-blur-sm",
          title
            ? "flex flex-col gap-2 xl:gap-4 p-3 md:p-4 lg:p-5"
            : "py-1 md:py-2 lg:py-3 px-3 md:px-4 lg:px-5",
          className
        )}
      >
        {title && (
          <h2
            className={clsx(
              "text-sm tracking-wider uppercase font-extralight md:text-base lg:text-lg",
              "text-gray-400 dark:text-gray-600"
            )}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    );
  }
);
