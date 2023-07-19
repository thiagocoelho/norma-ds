import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function LockIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 21"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M15 9a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6a3 3 0 013-3V6a6 6 0 0112 0zM9 2a4 4 0 014 4v3H5V6a4 4 0 014-4zm6 9H3a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1z"
      />
    </svg>
  );
}

LockIcon.displayName = 'LockIcon';
