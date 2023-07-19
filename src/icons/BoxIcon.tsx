import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function BoxIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={229.8}
      height={249.385}
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
          data-name="Caminho 1932"
          d="M219.205 169.942V78.533a22.8 22.8 0 00-11.589-19.767l-81.126-45.7a23.466 23.466 0 00-23.179 0l-81.126 45.7a22.8 22.8 0 00-11.59 19.767v91.409a22.8 22.8 0 0011.589 19.767l81.126 45.7a23.466 23.466 0 0023.179 0l81.126-45.7a22.8 22.8 0 0011.59-19.767z"
        />
        <path
          data-name="Caminho 1933"
          d="M13.591 67.192L114.9 123.223l101.31-56.031"
        />
        <path data-name="Caminho 1934" d="M114.9 239.385v-111.84" />
      </g>
    </svg>
  );
}

BoxIcon.displayName = 'BoxIcon';
