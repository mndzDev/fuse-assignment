import * as React from "react"
import { SVGProps } from "react"

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.667 10 10 13.333m0 0L13.333 10M10 13.333V5.667c0-1.16 0-1.739-.459-2.387-.305-.432-1.182-.964-1.705-1.034-.788-.107-1.087.049-1.685.36a8.333 8.333 0 1 0 8.016.175"
      stroke="#344054"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DownloadIcon;
