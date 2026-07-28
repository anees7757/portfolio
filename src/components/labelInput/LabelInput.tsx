"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, type, label, id, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={cn(
          "peer flex h-9 w-full py-2 border-b border-input bg-transparent px-0 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-brand disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        {...props}
      />
      <label
        htmlFor={id} // This links the label to the input
        className={`absolute cursor-text left-0 top-[10px] text-sm transition-all duration-300 ${
          isFocused || hasValue
            ? "text-brand text-xs -translate-y-6"
            : "text-muted-foreground text-base translate-y-0"
        }`}
      >
        {label}
      </label>
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";
export { FloatingLabelInput };
