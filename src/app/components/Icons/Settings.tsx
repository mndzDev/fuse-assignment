import * as React from "react"
import { SVGProps } from "react"

const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      stroke={props.color}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M15.606 12.273a1.25 1.25 0 0 0 .25 1.379l.046.045a1.516 1.516 0 1 1-2.144 2.144l-.046-.045a1.25 1.25 0 0 0-1.379-.25 1.25 1.25 0 0 0-.757 1.143v.13a1.516 1.516 0 0 1-3.03 0v-.069a1.25 1.25 0 0 0-.819-1.144 1.25 1.25 0 0 0-1.379.25l-.045.046a1.514 1.514 0 0 1-2.473-.492 1.515 1.515 0 0 1 .33-1.652l.045-.046a1.25 1.25 0 0 0 .25-1.379 1.25 1.25 0 0 0-1.144-.757h-.13a1.515 1.515 0 0 1 0-3.03h.069a1.25 1.25 0 0 0 1.144-.819 1.25 1.25 0 0 0-.25-1.378l-.046-.046a1.515 1.515 0 1 1 2.144-2.144l.046.046a1.25 1.25 0 0 0 1.379.25h.06a1.25 1.25 0 0 0 .758-1.144v-.13a1.515 1.515 0 0 1 3.03 0v.069a1.25 1.25 0 0 0 .758 1.144 1.25 1.25 0 0 0 1.379-.25l.045-.045a1.515 1.515 0 1 1 2.144 2.143l-.046.046a1.25 1.25 0 0 0-.25 1.379v.06a1.25 1.25 0 0 0 1.144.758h.13a1.515 1.515 0 1 1 0 3.03h-.069a1.25 1.25 0 0 0-1.144.758Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SettingsIcon;
