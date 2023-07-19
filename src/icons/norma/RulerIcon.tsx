import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function RulerIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 13"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3 0a3 3 0 00-3 3v7a3 3 0 003 3h18a3 3 0 003-3V3a3 3 0 00-3-3zm6 2H7v5a1 1 0 01-2 0V2H3a1 1 0 00-1 1v7a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1h-2v3a1 1 0 01-2 0V2h-2v5a1 1 0 01-2 0V2h-2v3a1 1 0 01-2 0z"
      />
    </svg>
  );
}

RulerIcon.displayName = 'RulerIcon';
