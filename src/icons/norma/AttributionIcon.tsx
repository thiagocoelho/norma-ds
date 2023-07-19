import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AttributionIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M2 4a2 2 0 001.732-1H10a2 2 0 010 4H6a4 4 0 000 8h6.268a2 2 0 100-2H6a2 2 0 010-4h4a4 4 0 000-8H3.732A2 2 0 102 4z" />
    </svg>
  );
}

AttributionIcon.displayName = 'AttributionIcon';
