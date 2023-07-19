import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function BagIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={254.074}
      height={230.667}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        data-name="Icon feather-briefcase"
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1939"
          d="M33.407 56.815h187.26a23.407 23.407 0 0123.407 23.407v117.037a23.407 23.407 0 01-23.407 23.407H33.407A23.407 23.407 0 0110 197.259V80.222a23.407 23.407 0 0123.407-23.407z"
        />
        <path
          data-name="Caminho 1940"
          d="M173.852 220.667V33.407A23.407 23.407 0 00150.444 10h-46.815a23.407 23.407 0 00-23.407 23.407v187.26"
        />
      </g>
    </svg>
  );
}

BagIcon.displayName = 'BagIcon';
