import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CrownIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 11.938"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 .06l4.72 4.72L9.5 0l4.781 4.781L19 .061v8.877a3 3 0 01-3 3H3a3 3 0 01-3-3zm17 4.817v4.06a1 1 0 01-1 1H3a1 1 0 01-1-1v-4.06l2.72 2.72L9.5 2.816l4.781 4.781z"
      />
    </svg>
  );
}

CrownIcon.displayName = 'CrownIcon';
