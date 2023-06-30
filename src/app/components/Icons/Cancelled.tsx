import * as React from "react"
import { SVGProps } from "react"

const CancelledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.5 3.5-5 5m0-5 5 5"
      stroke={props.color || "#F04438"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CancelledIcon
