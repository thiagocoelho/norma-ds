import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GlassAltIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 0h14l-1.64 16.4A4 4 0 018.38 20H5.62a4 4 0 01-3.98-3.6zm2.51 5l-.3-3h9.58l-.3 3zm.2 2l.92 9.2A2 2 0 005.62 18h2.76a2 2 0 001.99-1.8l.92-9.2z"
      />
    </svg>
  );
}

GlassAltIcon.displayName = 'GlassAltIcon';
