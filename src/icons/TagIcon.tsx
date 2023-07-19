import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function TagIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={243.402}
      height={243.343}
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
          data-name="Caminho 1941"
          d="M226.625 142.958l-83.55 83.55a23.305 23.305 0 01-32.977 0L10 126.527V10h116.527l100.1 100.1a23.305 23.305 0 01-.002 32.858z"
        />
        <path data-name="Caminho 1942" d="M68.264 68.264h0" />
      </g>
    </svg>
  );
}

TagIcon.displayName = 'TagIcon';
