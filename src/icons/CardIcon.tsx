import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function CardIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={255.123}
      height={190.999}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        data-name="Icon feather-credit-card"
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <path
          data-name="Caminho 1937"
          d="M31.375 10h192.374a21.375 21.375 0 0121.375 21.375v128.249A21.375 21.375 0 01223.749 181H31.375A21.375 21.375 0 0110 159.624V31.375A21.375 21.375 0 0131.375 10z"
        />
        <path data-name="Caminho 1938" d="M10 74.125h235.123" />
      </g>
    </svg>
  );
}

CardIcon.displayName = 'CardIcon';
