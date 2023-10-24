import { forwardRef } from "react";

export const Spacer = forwardRef(({ className, text, ...props }, ref) => (
    <div ref={ref} className={`w-full h-[1px] border flex items-center justify-center ${className}`}><span className="bg-white p-2 text-gray-400">{text}</span></div>
))
