import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  className?: string;
  background?: "white" | "gray" | "pattern";
}

export function Section({ 
  children, 
  container = true, 
  className, 
  background = "white",
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        background === "gray" && "bg-secondary",
        background === "pattern" && "bg-white industrial-grid",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
