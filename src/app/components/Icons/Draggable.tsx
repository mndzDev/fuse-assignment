import * as React from "react"
import { SVGProps } from "react"

const DraggableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0-7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      fill="#667085"
    />
  </svg>
)

export default DraggableIcon
