"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedDemoButtonProps {
  text?: string;
  className?: string;
  variant?: "dark" | "light";
}

const AnimatedDemoButton = ({
  text = "Request a Demo",
  className,
  variant = "dark",
}: AnimatedDemoButtonProps) => {
  const isDark = variant === "dark";

  return (
    <Button
      className={cn(
        "relative text-sm font-semibold rounded-full h-13 p-1 ps-7 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-7 w-fit overflow-hidden cursor-pointer",
        isDark
          ? "bg-green-800 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 text-white"
          : "bg-white hover:bg-green-50 text-green-900",
        className
      )}
    >
      <span className="relative z-10 transition-all duration-500 text-base">
        {text}
      </span>
      <div
        className={cn(
          "absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
          isDark
            ? "bg-white text-green-900"
            : "bg-green-800 text-white"
        )}
      >
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export default AnimatedDemoButton;
