import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ClapperBoardIcon({
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
        d="M19.17 0A3 3 0 0122 3v12a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zM9.476 2h6l-3.387 4h-6zM4.089 6l3.387-4H3a1 1 0 00-1 1v3zM2 8v7a1 1 0 001 1h16a1 1 0 001-1V8zm18-2V3a1 1 0 00-1-1h-1.524l-3.387 4z"
      />
    </svg>
  );
}

ClapperBoardIcon.displayName = 'ClapperBoardIcon';
