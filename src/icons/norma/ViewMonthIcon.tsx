import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ViewMonthIcon({
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
        d="M0 3a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3zm15-1h2a1 1 0 011 1v1h-3zm-2 0h-2v2h2zM9 2H7v2h2zM5 2H3a1 1 0 00-1 1v1h3zM2 6v2h3V6zm0 4v1a1 1 0 001 1h2v-2zm5 2h2v-2H7zm4 0h2v-2h-2zm4 0h2a1 1 0 001-1v-1h-3zm3-4V6h-3v2zM9 8H7V6h2zm4 0h-2V6h2z"
      />
    </svg>
  );
}

ViewMonthIcon.displayName = 'ViewMonthIcon';
