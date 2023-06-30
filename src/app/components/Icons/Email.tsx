import * as React from "react"
import { SVGProps } from "react"

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 12.961h2.42a.96.96 0 0 0 .384-.078.997.997 0 0 0 .326-.226l4.58-4.805a1.093 1.093 0 0 0 0-1.49l-2.42-2.539a1 1 0 0 0-.325-.23.96.96 0 0 0-1.095.23l-4.58 4.805a1.13 1.13 0 0 0-.29.745v2.54c0 .277.105.544.293.741a.977.977 0 0 0 .707.307Zm1-3.147 3.58-3.756 1 1.049L16 10.863h-1v-1.05Zm6 2.098c-.265 0-.52.11-.707.307a1.076 1.076 0 0 0-.293.742v7.345c0 .278-.105.545-.293.741a.977.977 0 0 1-.707.308H5a.977.977 0 0 1-.707-.308A1.076 1.076 0 0 1 4 20.306V10.223l5.88 6.18c.28.296.611.532.978.693a2.88 2.88 0 0 0 2.314 0c.367-.161.699-.397.978-.693.183-.197.286-.46.286-.735 0-.274-.103-.538-.286-.734a.999.999 0 0 0-.327-.234.96.96 0 0 0-1.103.234.976.976 0 0 1-.7.3.976.976 0 0 1-.7-.3l-5.91-6.19H10c.265 0 .52-.11.707-.308.188-.196.293-.463.293-.742 0-.278-.105-.545-.293-.741A.977.977 0 0 0 10 6.645H5a2.93 2.93 0 0 0-2.121.922A3.228 3.228 0 0 0 2 9.793v10.492c0 .834.316 1.635.879 2.225A2.93 2.93 0 0 0 5 23.432h14a2.93 2.93 0 0 0 2.121-.922c.563-.59.879-1.39.879-2.225V12.94c0-.278-.105-.545-.293-.742a.977.977 0 0 0-.707-.307v.021Z"
      fill="#7F56D9"
    />
  </svg>
)

export default EmailIcon