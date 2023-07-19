import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BatteryEmptyIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 12"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M16 0H3a3 3 0 00-3 3v6a3 3 0 003 3h13a3 3 0 003-3 1 1 0 001-1V4a1 1 0 00-1-1 3 3 0 00-3-3zm0 2H3a1 1 0 00-1 1v6a1 1 0 001 1h13a1 1 0 001-1V3a1 1 0 00-1-1z"
      />
    </svg>
  );
}

BatteryEmptyIcon.displayName = 'BatteryEmptyIcon';
