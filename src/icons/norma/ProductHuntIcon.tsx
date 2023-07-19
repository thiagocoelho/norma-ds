import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ProductHuntIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M9 16a7 7 0 117-7 7 7 0 01-7 7zM0 9a9 9 0 119 9 9 9 0 01-9-9zm6 4V5h4a3 3 0 010 6H8v2zm5-5a1 1 0 01-1 1H8V7h2a1 1 0 011 1z"
      />
    </svg>
  );
}

ProductHuntIcon.displayName = 'ProductHuntIcon';
