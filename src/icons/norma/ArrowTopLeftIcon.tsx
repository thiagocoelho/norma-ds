import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowTopLeftIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.051 13.01"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8 0v2l-4.558.011 9.6 9.584-1.413 1.416-9.63-9.61.011 4.614h-2l-.019-8z" />
    </svg>
  );
}

ArrowTopLeftIcon.displayName = 'ArrowTopLeftIcon';
