import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function SearchIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={256.475}
      height={255.808}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g data-name="Grupo 2">
        <g
          data-name="Icon feather-search"
          fill="none"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={20}
        >
          <path
            data-name="Caminho 1652"
            d="M211.877 109.25c0 54.814-45.192 99.25-100.939 99.25S10 164.064 10 109.25 55.192 10 110.939 10s100.939 44.436 100.939 99.25z"
          />
          <path data-name="Caminho 1653" d="M242.333 241.666l-58.912-57.912" />
        </g>
      </g>
    </svg>
  );
}

SearchIcon.displayName = 'SearchIcon';
