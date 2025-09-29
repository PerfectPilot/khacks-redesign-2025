import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "outline-primary"
  size?: "default" | "lg"
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const sizeClasses = size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-sm"

  // Colors to match previous usage:
  // Primary gradient: from #3557B0 to #d44d2e
  const base = "relative inline-flex items-center justify-center font-medium disabled:opacity-50 overflow-hidden focus:outline-none"

  // default -> gradient-outline (no fill) implemented via a helper class `gradient-outline`
  const defaultVariant = `text-white bg-transparent border-2 border-transparent gradient-outline`
  const outlineVariant = `text-white bg-transparent border border-gray-600`

  const variantClasses = variant === "outline" ? outlineVariant : defaultVariant

    return (
      <button
        className={`${base} rounded-2xl ${sizeClasses} ${variantClasses} ${className ?? ""}`}
        {...props}
        ref={ref}
      >
        <span className="btn-content">{children}</span>
        <span aria-hidden className="btn-shine" />

        {/* Local CSS for the shiny hover effect (scoped with styled-jsx) */}
        <style jsx>{`
          .btn-content {
            position: relative;
            z-index: 2;
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 1.5px;
          }

          .btn-shine {
            position: absolute;
            top: 7%;
            left: 0%;
            width: 0px;
            height: 86%;
            background: #fff;
            opacity: 0;
            transform: skewX(-20deg);
            z-index: 1;
            box-shadow: 0 0 50px 30px rgba(255,255,255,0.9);
            transition: none;
          }

          /* gradient border shown only on the border (transparent interior) */
          .gradient-outline {
            /* translucent dark interior so white text is visible */
            background: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)) padding-box,
              linear-gradient(90deg, #3557B0, #d44d2e) border-box;
            border: 2px solid transparent;
            -webkit-background-clip: padding-box, border-box;
            background-clip: padding-box, border-box;
            color: #fff;
          }

          button:hover {
            transform: translateZ(0) scale(1.02);
            transition: transform 180ms ease-out, box-shadow 200ms ease-out;
            box-shadow: 0 10px 30px rgba(53,87,176,0.15), 0 6px 18px rgba(212,77,46,0.08);
          }

          button:active {
            transform: scale(0.995);
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
            transition: box-shadow 120ms ease-in;
          }

          button:hover .btn-shine {
            animation: sh02 700ms linear;
          }

          @keyframes sh02 {
            0% {
              opacity: 0;
              left: 0%;
              width: 0px;
            }
            30% {
              opacity: 0.6;
              width: 30%;
            }
            60% {
              opacity: 0.4;
              width: 40%;
            }
            100% {
              opacity: 0;
              left: 100%;
              width: 60%;
            }
          }
        `}</style>
      </button>
    )
  },
)
Button.displayName = "Button"

