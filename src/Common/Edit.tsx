import React from 'react'

export const Edit = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', strokeWidth = 0.4, ...props }, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" {...props} ref={ref}>
      <path
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        d="M1.913 16.994a1.032 1.032 0 01-.706-.183c-.639-.64.361-3.587.854-4.362a.426.426 0 01.092-.134l9.119-9.155.088-.088.032-.035 1.573-1.575A1.56 1.56 0 0114.085 1a1.557 1.557 0 011.111.462l1.345 1.35a1.579 1.579 0 010 2.226l-1.536 1.544-.028.034-.61.613-8.635 8.662a.429.429 0 01-.114.083 9.675 9.675 0 01-3.705 1.02zm-.071-.838c.53.02 2.032-.325 2.873-.675L2.56 13.318c-.379.832-.744 2.32-.72 2.838h.002zm1.223-3.539l2.36 2.368 8.329-8.36.31-.31-2.359-2.369-8.64 8.671zm9.241-9.278l2.357 2.368 1.271-1.27a.724.724 0 000-1.018L14.59 2.066a.706.706 0 00-1.009 0l-1.274 1.273z"
      />
    </svg>
  )
)
