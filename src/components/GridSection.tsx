import { type ReactNode } from "react";

interface GridSectionProps {
  children: ReactNode;
  className?: string;
}

export const GridSection = ({ children, className }: GridSectionProps) => {
  return <div className={className}>{children}</div>;
};
