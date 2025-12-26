import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingInputProps {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <label
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none bg-card px-1",
          isFocused || value
            ? "-top-2.5 text-xs text-label"
            : "top-3.5 text-sm text-muted-foreground"
        )}
      >
        {label}
        {required && <span className="text-label">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? placeholder : ''}
        className={cn(
          "w-full px-4 py-3.5 rounded-lg border border-border bg-input-bg",
          "text-foreground text-sm",
          "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
          "transition-all duration-200"
        )}
      />
    </div>
  );
};

export default FloatingInput;
