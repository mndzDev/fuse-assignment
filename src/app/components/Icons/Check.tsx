import * as React from "react"
import { SVGProps } from "react"

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 3 4.5 8.5 2 6"
      stroke={props.color || "#17B26A"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CheckIcon
