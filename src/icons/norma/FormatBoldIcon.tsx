import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function FormatBoldIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 6.943"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        d="M5.946 2.226L4.275 3.652l2.172.324A3 3 0 019 6.943a3 3 0 00-3-3H1v-1h3A3 3 0 007 .028a2.991 2.991 0 01-1.054 2.198z"
      />
    </svg>
  );
}

FormatBoldIcon.displayName = 'FormatBoldIcon';
