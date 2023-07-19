import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BrushIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10 8h3a1 1 0 011 1v6a3 3 0 01-3 3H3a3 3 0 01-3-3V9a1 1 0 011-1h3V3a3 3 0 016 0zM8 3a1 1 0 00-2 0v7H2v5a1 1 0 001 1h1v-3h2v3h2v-3h2v3h1a1 1 0 001-1v-5H8z"
      />
    </svg>
  );
}

BrushIcon.displayName = 'BrushIcon';
