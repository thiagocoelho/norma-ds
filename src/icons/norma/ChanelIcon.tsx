import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ChanelIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.073 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4.608.173A9 9 0 000 2.636l2.13 2.13a5.988 5.988 0 015.706-1.571 9 9 0 000 11.611 5.989 5.989 0 01-5.7-1.571l-2.13 2.13a9 9 0 009.808 1.951q.373-.154.728-.34.355.186.728.34a9 9 0 009.808-1.951l-2.13-2.13a5.989 5.989 0 01-5.7 1.571 9 9 0 000-11.611 5.988 5.988 0 015.7 1.571l2.13-2.13A9 9 0 0011.27.685q-.373.154-.728.341-.355-.186-.728-.341A9 9 0 004.608.173zM10.536 4.7a5.988 5.988 0 000 8.59 5.988 5.988 0 000-8.59z"
      />
    </svg>
  );
}

ChanelIcon.displayName = 'ChanelIcon';
