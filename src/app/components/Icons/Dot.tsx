import * as React from "react"
import { SVGProps } from "react"

const DotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5} cy={5} r={4} fill={props.color || "#17B26A"} />
  </svg>
)

export default DotIcon;
