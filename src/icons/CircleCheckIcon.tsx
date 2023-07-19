import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function CircleCheckIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={254.978}
      height={251.122}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        data-name="Icon feather-check-circle"
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1935"
          d="M240.836 114.995v10.617A115.406 115.406 0 11172.4 20.132"
        />
        <path
          data-name="Caminho 1936"
          d="M240.836 33.288L125.43 148.81l-34.622-34.622"
        />
      </g>
    </svg>
  );
}

CircleCheckIcon.displayName = 'CircleCheckIcon';
