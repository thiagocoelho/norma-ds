import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PathOutlineIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 0h10v4h4v10H4v-4H0zm2 2h6v2H4v4H2zm4 10h6V6h-2v4H6zm2-6H6v2h2z"
      />
    </svg>
  );
}

PathOutlineIcon.displayName = 'PathOutlineIcon';
