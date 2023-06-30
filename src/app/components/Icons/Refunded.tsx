import * as React from "react"
import { SVGProps } from "react"

const RefundedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 3.5h5a3 3 0 0 1 0 6H2m0-6 2-2m-2 2 2 2"
      stroke={props.color || "#667085"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default RefundedIcon
