import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function FemaleIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={147.407}
      height={249.333}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M35.481 201.111h76.444M73.7 137.407v101.926m0-101.926A63.7 63.7 0 1010 73.7a63.7 63.7 0 0063.7 63.707z"
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      />
    </svg>
  );
}

FemaleIcon.displayName = 'FemaleIcon';
