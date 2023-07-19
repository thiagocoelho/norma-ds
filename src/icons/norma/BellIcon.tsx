import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BellIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10 2v.29A7 7 0 0115 9v7h1v2H0v-2h1V9a7 7 0 015-6.71V2a2 2 0 014 0zM3 16h10V9A5 5 0 003 9zm7 4v-1H6v1a2 2 0 004 0z"
      />
    </svg>
  );
}

BellIcon.displayName = 'BellIcon';
