import * as React from "react"

const ArrowLeft = (props: any) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.833 10H4.167m0 0L10 15.833M4.167 10 10 4.167"
      stroke="#475467"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowLeft
