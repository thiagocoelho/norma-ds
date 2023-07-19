import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ViewGridIcon({
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
        d="M3 0a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V3a3 3 0 00-3-3zm3 2H3a1 1 0 00-1 1v1h4zm2 0v2h4V2zm6 0v2h4V3a1 1 0 00-1-1zm-2 4H8v2h4zm2 2V6h4v2zm-2 2H8v2h4zm2 2v-2h4v1a1 1 0 01-1 1zm-8 0v-2H2v1a1 1 0 001 1zm0-4V6H2v2z"
      />
    </svg>
  );
}

ViewGridIcon.displayName = 'ViewGridIcon';
