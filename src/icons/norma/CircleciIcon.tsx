import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CircleciIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M12 0a12 12 0 1012 12A12 12 0 0012 0zM4.144 13.517a8 8 0 10-.006-3l2.591-.009a5.478 5.478 0 110 3zM9.522 12A2.478 2.478 0 1012 9.522 2.478 2.478 0 009.522 12z"
      />
    </svg>
  );
}

CircleciIcon.displayName = 'CircleciIcon';
