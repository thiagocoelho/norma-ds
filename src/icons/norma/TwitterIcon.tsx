import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function TwitterIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M2 0a2 2 0 012 2v3h6a2 2 0 010 4H4v2a3 3 0 003 3h3a2 2 0 010 4H7a7 7 0 01-7-7V2a2 2 0 012-2z"
      />
    </svg>
  );
}

TwitterIcon.displayName = 'TwitterIcon';
