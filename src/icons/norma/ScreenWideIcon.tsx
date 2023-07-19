import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ScreenWideIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 14"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M11 11H3a3 3 0 01-3-3V3a3 3 0 013-3h18a3 3 0 013 3v5a3 3 0 01-3 3h-8v1h2a1 1 0 010 2H9a1 1 0 010-2h2zM3 2h18a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"
      />
    </svg>
  );
}

ScreenWideIcon.displayName = 'ScreenWideIcon';
