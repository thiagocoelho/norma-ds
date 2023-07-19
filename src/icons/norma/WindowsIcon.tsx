import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function WindowsIcon({
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
      <path d="M0 2.549l7.2-.967v7.029l-7.189.054zm7.2 6.842v7.1l-7.19-.985v-6.12zm.918-7.935L18 0v8.533l-9.884.077zM18 9.505V18l-9.884-1.353V9.505z" />
    </svg>
  );
}

WindowsIcon.displayName = 'WindowsIcon';
