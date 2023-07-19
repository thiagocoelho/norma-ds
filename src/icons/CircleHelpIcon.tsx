import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function CircleHelpIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={243.333}
      height={243.333}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="#202020"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1657"
          d="M233.333 121.667A111.667 111.667 0 11121.667 10a111.667 111.667 0 01111.666 111.667z"
        />
        <path
          data-name="Caminho 1658"
          d="M81.028 87.78a41.875 41.875 0 0181.377 13.958c0 27.917-41.875 41.875-41.875 41.875"
        />
        <path data-name="Caminho 1659" d="M121.667 177.5h0" />
      </g>
    </svg>
  );
}

CircleHelpIcon.displayName = 'CircleHelpIcon';
