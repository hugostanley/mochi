import { forwardRef } from "react";

function variants(variant) {
    switch (variant) {
        case "primary":
            return "bg-lime-600 hover:bg-lime-700 text-white"
        case "secondary":
            return "bg-gray-400 hover:bg-gray-500 text-white shadow-sm"
    }
}

export const Button = forwardRef(({ className, variant, ...props }, ref) => (
    <button ref={ref} className={`w-full rounded-xl flex items-center justify-center p-3 font-bold transition-all ${className} ${variants(variant)}`} {...props} />
))
