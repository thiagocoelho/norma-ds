import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function TouchpadIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M19 18a3 3 0 003-3V3a3 3 0 00-3-3H3a3 3 0 00-3 3v12a3 3 0 003 3zM3 2h16a1 1 0 011 1v8H2V3a1 1 0 011-1zM2 13v2a1 1 0 001 1h7v-3zm10 3v-3h8v2a1 1 0 01-1 1z"
      />
    </svg>
  );
}

TouchpadIcon.displayName = 'TouchpadIcon';
