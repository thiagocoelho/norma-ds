import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MoreVerticalIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3 4a1 1 0 10-1-1 1 1 0 001 1zm0 8a1 1 0 10-1-1 1 1 0 001 1zm0 8a1 1 0 10-1-1 1 1 0 001 1zM6 3a3 3 0 11-3-3 3 3 0 013 3zm0 8a3 3 0 11-3-3 3 3 0 013 3zM3 22a3 3 0 10-3-3 3 3 0 003 3z"
      />
    </svg>
  );
}

MoreVerticalIcon.displayName = 'MoreVerticalIcon';
