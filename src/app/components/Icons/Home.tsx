import * as React from "react"
import { SVGProps } from "react"

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.667 14.167h6.666M9.181 2.303 3.53 6.7c-.377.294-.566.441-.702.625-.12.163-.21.347-.265.542-.062.22-.062.46-.062.938v6.03c0 .933 0 1.4.182 1.756.16.314.414.569.728.728.357.182.823.182 1.757.182h9.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757V8.804c0-.478 0-.718-.062-.938a1.665 1.665 0 0 0-.265-.542c-.136-.184-.325-.33-.702-.625l-5.652-4.396c-.293-.227-.44-.341-.601-.385a.833.833 0 0 0-.436 0c-.161.044-.308.158-.6.385Z"
      stroke={props.color || '#667085'}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default HomeIcon;
