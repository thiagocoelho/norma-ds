import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GlassIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 14"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10 5a5 5 0 01-4 4.9V12h2v2H2v-2h2V9.9A5 5 0 010 5V0h10zM8 2H2v3a3 3 0 006 0z"
      />
    </svg>
  );
}

GlassIcon.displayName = 'GlassIcon';
