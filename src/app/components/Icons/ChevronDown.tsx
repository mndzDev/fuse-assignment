import * as React from "react"
import { SVGProps } from "react"

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5 7.5 5 5 5-5"
      stroke={props.color || "#667085"}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ChevronDown;
