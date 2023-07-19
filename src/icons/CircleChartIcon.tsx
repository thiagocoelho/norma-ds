import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function CircleChartIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={244.799}
      height={244.732}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        data-name="Icon feather-pie-chart"
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1660"
          d="M225.916 166.064A112.353 112.353 0 1177.499 19.332"
        />
        <path
          data-name="Caminho 1661"
          d="M234.799 122.434A112.434 112.434 0 00122.365 10v112.434z"
        />
      </g>
    </svg>
  );
}

CircleChartIcon.displayName = 'CircleChartIcon';
