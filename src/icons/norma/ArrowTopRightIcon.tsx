import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowTopRightIcon({
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
      <path d="M5.05 0v2l4.558.011-9.6 9.584 1.413 1.416 9.63-9.61-.011 4.614h2l.019-8z" />
    </svg>
  );
}

ArrowTopRightIcon.displayName = 'ArrowTopRightIcon';
