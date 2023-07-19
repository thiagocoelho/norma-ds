import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function StarkIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.634 17.436"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.172 15.025A8 8 0 019.107.077L8.67 3.2a4.844 4.844 0 00-2.988 9.051L11.828.975l2.634 1.435a8 8 0 01-4.934 14.948l.437-3.126a4.844 4.844 0 002.988-9.051L6.806 16.46z" />
    </svg>
  );
}

StarkIcon.displayName = 'StarkIcon';
