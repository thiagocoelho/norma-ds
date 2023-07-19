import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function KeyIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 8"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3 0a3 3 0 00-3 3v2a3 3 0 006 0h6v2h2V5h1v2h2V3H6a3 3 0 00-3-3zm1 5V3a1 1 0 00-2 0v2a1 1 0 002 0z"
      />
    </svg>
  );
}

KeyIcon.displayName = 'KeyIcon';
