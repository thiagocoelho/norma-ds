import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ListIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M19 2H3a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1zM3 0a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V3a3 3 0 00-3-3zm2 5h2v2H5zm5 0a1 1 0 000 2h6a1 1 0 000-2zM7 9H5v2h2zm2 1a1 1 0 011-1h6a1 1 0 010 2h-6a1 1 0 01-1-1zm-2 3H5v2h2zm2 1a1 1 0 011-1h6a1 1 0 010 2h-6a1 1 0 01-1-1z"
      />
    </svg>
  );
}

ListIcon.displayName = 'ListIcon';
