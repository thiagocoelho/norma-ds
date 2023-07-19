import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function TrashEmptyIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 19"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14 3V2a2 2 0 00-2-2H6a2 2 0 00-2 2v1H1a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V5h1a1 1 0 000-2zm-2-1H6v1h6zm2 3H4v11a1 1 0 001 1h8a1 1 0 001-1z"
      />
    </svg>
  );
}

TrashEmptyIcon.displayName = 'TrashEmptyIcon';
