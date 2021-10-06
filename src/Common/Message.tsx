import React, { forwardRef, SVGAttributes } from 'react'

export const Message = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...rest} ref={ref}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.731 1.9A2.82 2.82 0 00.9 4.719v11.012a2.827 2.827 0 002.831 2.828h2.201v3.55c0 .374.21.717.545.885h.001l.014.007h.001a.966.966 0 001.02-.101l5.889-4.34h6.867a2.83 2.83 0 002.83-2.829V4.719A2.82 2.82 0 0020.27 1.9H3.73zm-.853 2.819a.84.84 0 01.853-.838h16.542a.84.84 0 01.853.838v10.436h-.005v.576a.848.848 0 01-.852.847H13.08a.996.996 0 00-.582.193l-.002.001-4.585 3.38v-2.579a.992.992 0 00-.99-.995h-3.19a.848.848 0 01-.853-.847V4.719z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M7.19 7.316a.9.9 0 000 1.8h7.785a.9.9 0 000-1.8H7.19zm0 3.274a.9.9 0 000 1.8h9.62a.9.9 0 000-1.8H7.19z"
      />
    </svg>
  )
)
