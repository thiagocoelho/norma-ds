import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function TrashIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={219.925}
      height={242.139}
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
        <path data-name="Caminho 1950" d="M10 54.428h199.925" />
        <path
          data-name="Caminho 1951"
          d="M187.714 54.428v155.5a22.214 22.214 0 01-22.214 22.214H54.428a22.214 22.214 0 01-22.214-22.217V54.428m33.321 0V32.214A22.214 22.214 0 0187.749 10h44.428a22.214 22.214 0 0122.214 22.214v22.214"
        />
        <path data-name="Caminho 1952" d="M87.749 109.963v66.642" />
        <path data-name="Caminho 1953" d="M132.176 109.963v66.642" />
      </g>
    </svg>
  );
}

TrashIcon.displayName = 'TrashIcon';
