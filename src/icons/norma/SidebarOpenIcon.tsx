import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function SidebarOpenIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fillRule="evenodd" d="M0 0h18v16H0zm6 2h10v12H6z" />
    </svg>
  );
}

SidebarOpenIcon.displayName = 'SidebarOpenIcon';