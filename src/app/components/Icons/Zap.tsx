import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.833 1.667-7.422 8.906c-.29.349-.436.523-.438.67a.417.417 0 0 0 .155.331c.114.093.341.093.795.093H10l-.833 6.666 7.422-8.906c.29-.349.436-.523.438-.67a.417.417 0 0 0-.155-.331c-.114-.093-.341-.093-.795-.093H10l.833-6.666Z"
      stroke={props.color}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
