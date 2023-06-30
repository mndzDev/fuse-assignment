import * as React from "react"
import { SVGProps } from "react"

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 3.333v9.334m0 0L12.667 8M8 12.667 3.333 8"
      stroke={props.color || "#475467"}
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowDownIcon;
