import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ViewListIcon({
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
        d="M3 0a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V3a3 3 0 00-3-3zm2 2H3a1 1 0 00-1 1v1h3zm2 0v2h11V3a1 1 0 00-1-1zM5 6H2v2h3zm2 2V6h11v2zm-2 2H2v1a1 1 0 001 1h2zm2 2v-2h11v1a1 1 0 01-1 1z"
      />
    </svg>
  );
}

ViewListIcon.displayName = 'ViewListIcon';
