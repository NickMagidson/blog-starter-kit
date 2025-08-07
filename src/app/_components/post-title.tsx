import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="heading-gradient text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-snug md:leading-snug mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
