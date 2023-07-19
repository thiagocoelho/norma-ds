import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function LockUnlockIcon({
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
        d="M16 6h-2a4 4 0 00-8 0v3h9a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6a3 3 0 013-3h1V6a6 6 0 0112 0zm-1 5H3a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1z"
      />
    </svg>
  );
}

LockUnlockIcon.displayName = 'LockUnlockIcon';
