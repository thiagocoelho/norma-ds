import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ViewDayIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 3a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3zm11-1h6a1 1 0 011 1v3h-7zM9 2H3a1 1 0 00-1 1v3h7zM2 8v3a1 1 0 001 1h6V8zm9 4h6a1 1 0 001-1V8h-7z"
      />
    </svg>
  );
}

ViewDayIcon.displayName = 'ViewDayIcon';
