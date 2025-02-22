import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const sizeClasses = size === "lg" ? "px-4 py-2 text-lg" : "px-3 py-1 text-sm"
    const variantClasses =
      variant === "outline"
        ? "border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-100"
        : "bg-blue-500 text-white hover:bg-blue-600"

    return (
      <button
        className={`rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 ${sizeClasses} ${variantClasses} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

