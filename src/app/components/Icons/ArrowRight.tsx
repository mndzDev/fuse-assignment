import * as React from "react"
import { SVGProps } from "react"

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
      stroke="#475467"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowRight
