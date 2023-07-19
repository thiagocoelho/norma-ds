import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function LayoutPinIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.929 20.065"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14.931 2.016h-2.165a3 3 0 00-5.67 0H4.931a3 3 0 00-3 3v2.2a3 3 0 000 5.608v2.2a3 3 0 003 3h2.154a3 3 0 005.692 0h2.154a3 3 0 003-3v-2.179a3 3 0 000-5.657V5.016a3 3 0 00-3-3zm-11 10.853v2.147a1 1 0 001 1h2.188a3 3 0 015.623 0h2.188a1 1 0 001-1v-2.17a3 3 0 010-5.66v-2.17a1 1 0 00-1-1h-2.176a3 3 0 01-5.647 0H4.931a1 1 0 00-1 1v2.147a3 3 0 010 5.706z"
      />
    </svg>
  );
}

LayoutPinIcon.displayName = 'LayoutPinIcon';
