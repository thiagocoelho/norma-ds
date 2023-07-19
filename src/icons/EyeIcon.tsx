import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function EyeIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={236.996}
      height={177.816}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1948"
          d="M10 88.908S49.454 10 118.5 10 227 88.908 227 88.908s-39.457 78.908-108.5 78.908S10 88.908 10 88.908z"
        />
        <path
          data-name="Caminho 1949"
          d="M148.089 88.907a29.59 29.59 0 11-29.591-29.59 29.59 29.59 0 0129.591 29.59z"
        />
      </g>
    </svg>
  );
}

EyeIcon.displayName = 'EyeIcon';
