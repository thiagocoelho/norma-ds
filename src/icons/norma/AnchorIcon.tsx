import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AnchorIcon({
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
        d="M9 3a3 3 0 01-2 2.829v8.045A4 4 0 0010 10h2a6 6 0 01-5 5.917V17a1 1 0 01-2 0v-1.083A6 6 0 010 10h2a4 4 0 003 3.874V5.829A3 3 0 119 3zM6 4a1 1 0 10-1-1 1 1 0 001 1z"
      />
    </svg>
  );
}

AnchorIcon.displayName = 'AnchorIcon';
