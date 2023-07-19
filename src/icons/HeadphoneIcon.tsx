import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function HeadphoneIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={252.33}
      height={252.329}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        data-name="Icon feather-headphones"
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1930"
          d="M10 220.611v-84.245C10 66.576 62.009 10 126.165 10s116.164 56.576 116.164 126.366v84.244"
        />
        <path
          data-name="Caminho 1931"
          d="M242.329 227.852c0 8-11.557 14.479-25.814 14.479h-12.907c-14.257 0-25.814-6.483-25.814-14.479v-21.721c0-8 11.557-14.479 25.814-14.479h38.722zm-232.329 0c0 8 11.557 14.479 25.814 14.479h12.908c14.257 0 25.814-6.483 25.814-14.479v-21.721c0-8-11.558-14.479-25.814-14.479H10z"
        />
      </g>
    </svg>
  );
}

HeadphoneIcon.displayName = 'HeadphoneIcon';
