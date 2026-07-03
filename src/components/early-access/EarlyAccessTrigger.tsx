"use client";

import { useEarlyAccess } from "./EarlyAccessProvider";

type EarlyAccessTriggerProps = {
  children: React.ReactNode;
  className?: string;
  trigger?: string;
  onClick?: () => void;
};

export function EarlyAccessTrigger({ children, className, trigger, onClick }: EarlyAccessTriggerProps) {
  const { openEarlyAccess } = useEarlyAccess();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openEarlyAccess(trigger);
      }}
    >
      {children}
    </button>
  );
}
