import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function GridIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={215}
      height={215}
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
        <path data-name="Caminho 1664" d="M10 10h70.281v70.281H10z" />
        <path data-name="Caminho 1665" d="M134.719 10H205v70.281h-70.281z" />
        <path data-name="Caminho 1666" d="M134.719 134.719H205V205h-70.281z" />
        <path data-name="Caminho 1667" d="M10 134.719h70.281V205H10z" />
      </g>
    </svg>
  );
}

GridIcon.displayName = 'GridIcon';
