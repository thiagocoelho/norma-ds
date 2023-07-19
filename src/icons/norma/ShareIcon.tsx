import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ShareIcon({
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
      <path d="M15 6a3 3 0 10-2.977-2.629l-6.94 3.47a3 3 0 100 4.319l6.94 3.47A3 3 0 1015 12a2.99 2.99 0 00-2.083.841l-6.94-3.47a3.041 3.041 0 000-.741l6.94-3.47A2.99 2.99 0 0015 6z" />
    </svg>
  );
}

ShareIcon.displayName = 'ShareIcon';
